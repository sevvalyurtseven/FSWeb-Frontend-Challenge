import "./App.css";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="dark:bg-[#252128] bg-white">
      <div className="flex flex-col pt-6 sm:px-20 px-2 h-full xl:w-[1200px] md:m-auto">
        <Main />
      </div>
    </div>
  );
}

export default App;
