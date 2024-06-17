import React from "react";
import { button } from "@material-tailwind/react";

const NotesCard = ({ color, text }: { color: string; text: string }) => {
  const handleShow = () => {
    console.log("Show");
  };
  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <div
      className={`bg-${color}-100 dark:bg-${color}-900 p-4 rounded-md`}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <p className="text-black dark:text-black">
        "The more that you read, the more things you will know. The more that
        you learn, the more places you'll go."
      </p>
      <div className="flex justify-end space-x-2 mt-2 text-black">
        <button>Show</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default NotesCard;
