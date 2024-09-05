import { useSelector } from "react-redux";
import data from "../data.json";

const DisplayScreen = () => {
  const index = useSelector((state: any) => {
    return state.index;
  });

  const value = data[index];
  return (
    <main className="w-[40%] h-[95%]">
      <div className="justify-between items-center flex-col border rounded-md">
        <div className="flex justify-start items-center p-4 gap-3 border-b-2">
          <div className="bg-purple-800 text-white text-[15px] flex items-center justify-center rounded-full px-5">
            Question-
            {index + 1}
          </div>
        </div>

        <div className="bg-gray-500 rounded-md p-1 w-[170px] flex items-center justify-center font-semibold mt-8 ml-4">
          Instruction/Question
        </div>

        <div className="w-[500px] h-[600px] bg-gray-600 ml-4 mt-8 border rounded-md flex-col items-center justify-center p-2">
          <div className="text-[25px] font-semibold text-white">QUESTION:</div>
          <div className="text-[17px] text-white">{value.question}</div>
          <div className="text-[17px] mt-5 text-white">Example:</div>
          <div className="bg-gray-950 w-[470px] h-[150px] border rounded-md text-white p-2">
            {value.example.map((el: any, id: number) => (
              <p key={id}>{el}</p>
            ))}
          </div>

          <div className="">
            <div className="flex gap-3">
              {value.tag.map((el: any) => (
                <p className="bg-gray-950 p-1 text-white text-[15px] w-[100px] mt-5 rounded-md flex items-center justify-center border">
                  {el}
                </p>
              ))}
            </div>
          </div>

          <div className="font-semibold text-[25px] text-white mt-4">
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
    </main>
  );
};

export default DisplayScreen;
