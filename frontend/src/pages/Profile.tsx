import { useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          position: "absolute",
          width: "100%",
        }}
      >
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "gray",
              color: "white",
              padding: "10px",
            }}
          >
            Revealed Div
          </motion.div>
        )}
        <motion.button
          onClick={handleOpen}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "gray",
            color: "white",
            padding: "10px",

            marginBottom: "10px",
            display: "flex",
            position: "absolute",
            right: "0",
          }}
        >
          {open ? "Close" : "Open"}
        </motion.button>
      </div>
    </>
  );
}
