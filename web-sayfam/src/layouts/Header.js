import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex items-center md:justify-between py-10">
      <div className=" md:inline-block w-12 md:w-[63.68px] md:h-[62px] font-semibold text-2xl md:p-3 p-2 text-center bg-[#EEEBFF] text-[#7B61FF] border-none rounded-full dark:text-[#8F88FF] dark:bg-[#4731D3]" >
        A
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
