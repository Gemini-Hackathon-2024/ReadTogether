import NotesCards from "./ui/NotesCard";
const Notes = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold ">Notes</h1>
      <div className="space-y-4 mt-4">
        <NotesCards color="#0096FF" text="This is a note" />
        <NotesCards color="#EE4B2B" text="This is a note" />
        <NotesCards color="#AFE1AF" text="This is a note" />
      </div>
    </div>
  );
};

export default Notes;
