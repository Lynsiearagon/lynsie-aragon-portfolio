import NavBar from "./NavBar";

function Header() {
  return (
    <div className="px-12 py-8 flex flex-row justify-between items-top ">
      <div>
        <h1 className="font-bold text-5xl flex flex-col">Lynsie Aragon</h1>
        <p className="text-lg py-4">Software Engineer</p>
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
