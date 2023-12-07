import line from "../Assets/Line11.svg";
import girlPhoto from "../Assets/girlImage.png";
import github from "../Assets/brand/github.svg";
import Linkedin from "../Assets/brand/LinkedIn.svg";
import { useSelector } from "react-redux";

export default function About() {
  const AboutData = useSelector((store) => store.aboutData);
  return (
    <div>
      <div>
      <img className="flex flex-wrap md:w-[476px] w-full md:float-right  md:rounded-md overflow-hidden" src={girlPhoto}></img>

      <div className="flex justify-center md:justify-start md:items-center gap-2 pb-6">
        <img src={line} className="hidden md:inline-block"></img>
        <p className="text-[#B7AAFF] font-medium text-xl ">{AboutData.name} </p>
      </div>
      <h2 className="dark:text-[#AEBCCF] md:font-bold md:text-7xl text-xl font-bold md:pb-6">
        {AboutData.header}
      </h2>
      <p className="dark:text-white font-normal text-lg text-[#6B7280] md:w-[553px] pb-6">
       {AboutData.about}
      </p>
      <div className="flex md:gap-2 items-center justify-evenly md:justify-start">
        <button className="bg-[#3730A3] text-[#FFFFFF] dark:bg-[#E1E1FF] dark:text-[#3730A3] md:inline-block text-lg font-medium md:py-3 md:px-8  rounded-md w-[131px] h-12">
          Hire Me
        </button>
        <button className="border-solid border border-[#E1E1FF] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] text-lg font-medium md:py-4 py-2 px-2 md:pl-4 md:px-8 rounded-md md:w-[131px] h-12">
          <img src={github}></img>
          GitHub
        </button>
        <button className="border-solid border border-[#E1E1FF] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] text-lg font-medium md:py-4 py-2 px-2 md:pl-4 md:px-8 rounded-md md:w-[131px] h-12">
          <img src={Linkedin}></img>
          Linkedin
        </button>
      </div>
    </div>
    </div>
  );
}
