import Editor from "@monaco-editor/react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../redux/redux";
import data from "../data.json";

const CodeScreen = () => {
  const [state, setState] = useState("");
  const editorRef = useRef(null);

  const index = useSelector((state: any) => {
    return state.index;
  });

  const handleEditorChange: any = (value: never) => {
    // console.log("Value changed:", value);
    setState(value!);
  };
  const value = data[index];

  const dispatch = useDispatch();
  const clicked = () => {
    dispatch(setIndex(index + 1));
  };

  return (
    <div className="w-[50%] h-[95%] justify-between items-center flex-col p-4 border rounded-md ">
      <div className="px-5 py-2 w-[170px] border rounded-md flex items-center justify-between">
        <div className=" font-semibold">Javascript</div>
        <div className="text-gray-500">v18.0.1</div>
      </div>
      <div className="mt-5">
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          defaultValue={value.DefaultCode}
          theme="vs-dark"
          onMount={handleEditorChange}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-[120px] mt-8 border rounded-md bg-red-600 p-2 flex items-center justify-center font-semibold text-[13px] text-white">
          RUN SOLUTION
        </div>

        <div className="bg-gray-950 w-[650px] h-[200px] border rounded-md text-white p-2 border">
          {value.answer}
        </div>

        <div className="flex justify-end items-end">
          <button
            onClick={clicked}
            className="flex justify-center w-[120px] border rounded-md bg-red-600 p-2 items-center font-semibold text-[13px] text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeScreen;
