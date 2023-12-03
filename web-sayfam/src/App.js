import './App.css';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="flex flex-col pt-6 px-20 dark:bg-[#252128] h-full">
      <About/>
      <Skills />
      <Profile />
    
    </div>
  );
}

export default App;
