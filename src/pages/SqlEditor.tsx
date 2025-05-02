import { usePGlite } from "@electric-sql/pglite-react";
import { Repl } from "@electric-sql/pglite-repl";

export const SqlEditor = () => {
  const pg = usePGlite();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <h1 className="my-[30px] text-[40px] font-medium tracking-widest">
        SQL Editor
      </h1>
      <div className="w-[80vw] h-[70vh] rounded-lg overflow-hidden">
        <Repl pg={pg} />
      </div>
    </div>
  );
};
