import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { setIndex } from "./redux/redux";
import data from "./data.json";

const App = () => {
  const [state, setState] = useState("");
  const editorRef = useRef(null);
  const index = useSelector((state: any) => {
    return state.index;
  });
  // const dispatch = useDispatch();

  const handleEditorChange: any = (value: never) => {
    // console.log("Value changed:", value);
    setState(value!);
  };
  const value = data[0];

  console.log(value);

  return (
    <main className="flex justify-center w-full h-[145vh] rounded-md items-center gap-5">
      <div className="w-[40%] h-[95%] justify-between items-center flex-col border rounded-md">
        <div className="flex justify-start items-center p-4 gap-3 border-b-2">
          <div className="bg-purple-400 text-white text-[15px] flex items-center justify-center rounded-full px-5">
            Level-1
          </div>
          <div className="bg-purple-600 text-white text-[15px] flex items-center justify-center rounded-full px-5">
            Stage-1
          </div>
          <div className="bg-purple-800 text-white text-[15px] flex items-center justify-center rounded-full px-5">
            Question-1
          </div>
        </div>

        <div className="bg-gray-500 rounded-md p-1 w-[170px] flex items-center justify-center font-semibold mt-8 ml-4">
          Instruction/Question
        </div>

        <div className="w-[500px] h-[500px] bg-gray-600 ml-4 mt-8 border rounded-md flex-col items-center justify-center p-2">
          <div className="text-[25px] font-semibold text-white">QUESTION:</div>
          <div className="text-[17px] text-white">{value.question}</div>
          <div className="text-[17px] mt-5 text-white">Example:</div>
          <div className="bg-gray-950 w-[470px] h-[150px] border rounded-md text-white">
            {value.example.map((el) => (
              <p>{el}</p>
            ))}
          </div>

          <div className="font-semibold text-[25px] text-white">
            INSTRUCTION:
          </div>

          <div className="text-white">{value.instruction}</div>

          <div className="underline font-semibold text-white text-[20px] mt-8">
            Use case:
          </div>

          <div className="text-white mt-3">{value.useCase}</div>
        </div>

        <div className="font-bold ml-4 mt-10">Get Tutorials</div>
      </div>

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
          <div className="w-[150px] mt-8 border rounded-md bg-red-400 p-4 flex items-center justify-center font-semibold text-[15px]">
            RUN SOLUTION
          </div>

          <div className="bg-gray-950 w-[650px] h-[200px] border rounded-md text-white">
            {value.answer}
          </div>

          <div className="flex justify-end items-end">
            <div className="flex justify-center w-[150px] border rounded-md bg-red-400 p-2 items-center font-bold text-[20px]">
              Done
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
