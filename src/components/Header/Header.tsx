import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="bg-green-100">
      <div className="text-[#d34723] font-bold text-5xl text-center p-8 border border-b-[#d34723] border-b-solid border-transparent border-b-4">
        Lynsie Aragon
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
