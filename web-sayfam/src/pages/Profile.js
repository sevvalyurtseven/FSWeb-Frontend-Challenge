import { useSelector } from "react-redux";
import line from "../Assets/cizgi.svg";
import {ProfileData} from "../mocks/ProfileData"

export default function Profile() {
  const ProfileData = useSelector((store) => store.profileData);
  return (
    <div className="md:my-4">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] text[#1F2937] font-semibold md:text-5xl text-4xl py-6">
        Profile
      </h2>
      <div className="md:flex md:justify-between">
        <div className="flex">
          <div className="md:w-3/4">
            <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
              Profile
            </h6>
            <div className="flex flex-col md:grid grid-rows-4 md:gap-3 md:grid-flow-col">
              <div className="dark:text-white text-lg font-semibold">Doğum tarihi </div>
              <div className="dark:text-white text-lg font-semibold ">İkamet Şehri </div>
              <div className="dark:text-white text-lg font-semibold">Eğitim Durumu</div>
              <div className="dark:text-white text-lg font-semibold">Tercih Ettiği Rol</div>
              
              
              <div className="dark:text-white text-lg font-normal">
                {ProfileData.birthDate} </div>
                <div className="dark:text-white text-lg font-normal">
                {ProfileData.city} </div>
                <div className="dark:text-white text-lg font-normal">
                {ProfileData.education} </div>
                <div className="dark:text-white text-lg font-normal">
                {ProfileData.role} </div>
              
               
              
            </div>
          </div>
        </div>
        <div className="w-[576.9px] md:mt-0 mt-5 ">
          <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            About Me
          </h6>
          <p className="flex gap-3 font-normal text-xl text-[#6B7280] dark:text-white mb-2 w-[500px]">
            {ProfileData.about[0]}
          </p>

          <p className="flex gap-3 font-normal text-xl text-[#6B7280] dark:text-white mb-2 w-[500px] mt-10">
           {ProfileData.about[1]}
          </p>
        </div>
      </div>
    </div>
  );
}