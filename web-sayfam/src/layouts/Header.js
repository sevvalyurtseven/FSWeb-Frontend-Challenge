import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between py-10">
      <div className="w-[63.68px] h-[62px] font-semibold text-2xl p-3 text-center bg-[#4731D3] border-none rounded-full dark:text-[#8F88FF]">
        A
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
