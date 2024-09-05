import CodeScreen from "./page/CodeScreen";
import DisplayScreen from "./page/displayScreen";

const App = () => {
  return (
    <main className="flex justify-center w-full h-[145vh] rounded-md items-center gap-5">
      <DisplayScreen />
      <CodeScreen />
    </main>
  );
};

export default App;
