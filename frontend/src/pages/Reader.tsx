import { ReactReader } from "react-reader";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Discussions from "../components/Discussions";
import { type Rendition } from "epubjs";
import type { CSSProperties } from "react";
import Notes from "../components/Notes";
import { useAppSelector } from "../state/hooks";
import useLocalStorageState from "use-local-storage-state";

interface IReactReaderStyle {
  container: CSSProperties;
  readerArea: CSSProperties;
  containerExpanded: CSSProperties;
  titleArea: CSSProperties;
  reader: CSSProperties;
  swipeWrapper: CSSProperties;
  prev: CSSProperties;
  next: CSSProperties;
  arrow: CSSProperties;
  arrowHover: CSSProperties;
  tocBackground: CSSProperties;
  toc: CSSProperties;
  tocArea: CSSProperties;
  tocAreaButton: CSSProperties;
  tocButton: CSSProperties;
  tocButtonExpanded: CSSProperties;
  tocButtonBar: CSSProperties;
  tocButtonBarTop: CSSProperties;
  loadingView: CSSProperties;
  tocButtonBottom: CSSProperties;
}
function updateTheme(rendition: Rendition, theme: string) {
  const themes = rendition.themes;
  switch (theme) {
    case "dark": {
      themes.override("color", "#fff");
      themes.override("background", "#000");
      break;
    }
    case "light": {
      themes.override("color", "#000");
      themes.override("background", "#fff");
      break;
    }
  }
}
const Reader = () => {
  const [location, setLocation] = useLocalStorageState<string | number>(
    "persist-location",
    {
      defaultValue: 0,
    }
  );
  const [open, setOpen] = useState(0);
  const rendition = useRef<Rendition | undefined>(undefined);
  const handleOpen = (value: number) => {
    if (open == value) {
      setOpen(0);
    } else {
      setOpen(value);
    }
  };

  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    if (rendition.current) {
      updateTheme(rendition.current, theme);
    }
  }, [theme]);
  return (
    <div className="h-screen pt-24 pb-2 pl-2 pr-2 ">
      <div className="flex h-full md:flex-row flex-col-reverse">
        <div className="flex-1 bg-pink-500 h-full relative">
          <ReactReader
            url="https://react-reader.metabits.no/files/alice.epub"
            location={location}
            locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            title={"Alice in wonderland"}
            readerStyles={
              theme === "light" ? lightReaderTheme : darkReaderTheme
            }
            getRendition={(_rendition) => {
              updateTheme(_rendition, theme);
              rendition.current = _rendition;
            }}
          />
          {open == 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: "gray",
                color: "white",
                padding: "10px",
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: 1,
                height: "100%",
              }}
              className="h-full bg-gray-500 w-full md:w-1/2"
            >
              <Discussions />
            </motion.div>
          )}
          {open == 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: "gray",
                color: "white",
                padding: "10px",
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: 1,
                height: "100%",
              }}
              className="h-full bg-gray-500 w-full md:w-1/2"
            >
              <Notes />
            </motion.div>
          )}
          {open == 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: "gray",
                color: "white",
                padding: "10px",
                position: "absolute",
                top: "0",
                right: "0",
                zIndex: 1,
                height: "100%",
              }}
              className="h-full bg-gray-500 w-full md:w-1/2"
            >
              <Discussions />
            </motion.div>
          )}
        </div>
        <div className="flex flex-row md:flex-col md:justify-start justify-between">
          <div className="bg-teal-500 h-12 justify-center items-center flex w-full">
            <motion.button
              onClick={() => handleOpen(1)}
              whileTap={{ scale: 0.9 }}
              style={{
                color: "white",
                display: "flex",
              }}
            >
              {open == 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
          <div className="bg-yellow-500 h-12 md:w-12 justify-center items-center flex w-full">
            <motion.button
              onClick={() => handleOpen(2)}
              whileTap={{ scale: 0.9 }}
              style={{
                color: "white",
                display: "flex",
              }}
            >
              {open == 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              )}
            </motion.button>
          </div>
          <div className="bg-blue-500 h-12 md:w-12 justify-center items-center flex w-full">
            <motion.button
              onClick={() => handleOpen(3)}
              whileTap={{ scale: 0.9 }}
              style={{
                color: "white",
                display: "flex",
              }}
            >
              {open == 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
          <div className="bg-indigo-600 h-12 md:w-12 justify-center items-center flex w-full">
            <motion.button
              onClick={() => handleOpen(4)}
              whileTap={{ scale: 0.9 }}
              style={{
                color: "white",
                display: "flex",
              }}
            >
              {open == 4 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;

const ReactReaderStyle: IReactReaderStyle = {
  container: {
    overflow: "hidden",
    position: "relative",
    height: "100%",
  },
  readerArea: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    transition: "all .3s ease",
  },
  containerExpanded: {
    transform: "translateX(256px)",
  },
  titleArea: {
    position: "absolute",
    top: 20,
    left: 50,
    right: 50,
    textAlign: "center",
    color: "#999",
  },
  reader: {
    position: "absolute",
    top: 50,
    left: 50,
    bottom: 20,
    right: 50,
  },
  swipeWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 200,
  },
  prev: {
    left: 1,
  },
  next: {
    right: 1,
  },
  arrow: {
    outline: "none",
    border: "none",
    background: "none",
    position: "absolute",
    top: "50%",
    marginTop: -32,
    fontSize: 64,
    padding: "0 10px",
    color: "#E2E2E2",
    fontFamily: "arial, sans-serif",
    cursor: "pointer",
    userSelect: "none",
    appearance: "none",
    fontWeight: "normal",
  },
  arrowHover: {
    color: "#777",
  },
  toc: {},
  tocBackground: {
    position: "absolute",
    left: 256,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  tocArea: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    width: 256,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    background: "#f2f2f2",
    padding: "10px 0",
  },
  tocAreaButton: {
    userSelect: "none",
    appearance: "none",
    background: "none",
    border: "none",
    display: "block",
    fontFamily: "sans-serif",
    width: "100%",
    fontSize: ".9em",
    textAlign: "left",
    padding: ".9em 1em",
    borderBottom: "1px solid #ddd",
    color: "#aaa",
    boxSizing: "border-box",
    outline: "none",
    cursor: "pointer",
  },
  tocButton: {
    background: "none",
    border: "none",
    width: 32,
    height: 32,
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 2,
    outline: "none",
    cursor: "pointer",
  },
  tocButtonExpanded: {
    background: "#f2f2f2",
  },
  tocButtonBar: {
    position: "absolute",
    width: "60%",
    background: "#ccc",
    height: 2,
    left: "50%",
    margin: "-1px -30%",
    top: "50%",
    transition: "all .5s ease",
  },
  tocButtonBarTop: {
    top: "35%",
  },
  tocButtonBottom: {
    top: "66%",
  },
  loadingView: {
    position: "absolute",
    top: "50%",
    left: "10%",
    right: "10%",
    color: "#ccc",
    textAlign: "center",
    marginTop: "-.5em",
  },
};

const lightReaderTheme: IReactReaderStyle = {
  ...ReactReaderStyle,
  readerArea: {
    ...ReactReaderStyle.readerArea,
    transition: undefined,
  },
};
const darkReaderTheme: IReactReaderStyle = {
  ...ReactReaderStyle,
  arrow: {
    ...ReactReaderStyle.arrow,
    color: "white",
  },
  arrowHover: {
    ...ReactReaderStyle.arrowHover,
    color: "#ccc",
  },
  readerArea: {
    ...ReactReaderStyle.readerArea,
    backgroundColor: "#000",
    transition: undefined,
  },
  titleArea: {
    ...ReactReaderStyle.titleArea,
    color: "#ccc",
  },
  tocArea: {
    ...ReactReaderStyle.tocArea,
    background: "#111",
  },
  tocButtonExpanded: {
    ...ReactReaderStyle.tocButtonExpanded,
    background: "#222",
  },
  tocButtonBar: {
    ...ReactReaderStyle.tocButtonBar,
    background: "#fff",
  },
  tocButton: {
    ...ReactReaderStyle.tocButton,
    color: "white",
  },
};
