import Link from "next/link";

function NavBar() {
  return (
    <ul className="hidden sm:flex sm:flex-col py-4 gap-12 justify-center items-center h-full w-1/3 bg-blue-600 sticky top-0">
      <Link href={"/about"}>About</Link>
      <Link href={"experience"}>Experience</Link>
      <Link href={"bowling"}>Bowling</Link>
      <Link href={"contact"}>Contact</Link>
    </ul>
  );
}

export default NavBar;
