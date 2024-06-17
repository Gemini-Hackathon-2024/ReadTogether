import { FunctionComponent } from "react";

interface IContextMenu {
  x: number;
  y: number;
  close: () => void;
  value: (val: string) => void;
}

const ContextMenu: FunctionComponent<IContextMenu> = ({
  x,
  y,
  close,
  value,
}) => {
  console.log("ContextMenu");
  console.log(x, y);

  return (
    <div
      className="context-menu"
      style={{
        position: "absolute",
        top: y + 25,
        left: x + 25,
        zIndex: 10000,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "0",
        margin: "0",
      }}
      onClick={close}
    >
      <div className=" flex flex-row  bg-gray-900 dark:bg-gray-100">
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer"
          onClick={() => {
            console.log("Highlight - Red");
            value("red");
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="red" />
          </svg>
        </div>
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer"
          onClick={() => {
            console.log("Highlight - Blue");
            value("blue");
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="blue" />
          </svg>
        </div>
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer"
          onClick={() => {
            console.log("Highlight - Green");
            value("green");
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="green" />
          </svg>
        </div>
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer"
          onClick={() => {
            console.log("Highlight - Yellow");
            value("yellow");
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="yellow" />
          </svg>
        </div>
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer"
          onClick={() => {
            console.log("Highlight - Purple");
            value("yellow");
          }}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="purple" />
          </svg>
        </div>
      </div>
      <ul className="list-none">
        <li
          className="hover:bg-gray-200 p-2 cursor-pointer dark:text-black text-white"
          onClick={() => {
            console.log("Highlight - Red");
            value("Discussion");
          }}
        >
          Create a disscussion
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
