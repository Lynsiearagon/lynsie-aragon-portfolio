import Link from "next/link";

function Footer() {
  return (
    <div className="w-full border p-8 text-center ">
      <div className="grid">
        <h3 className="font-bold">Contact</h3>
        <p>Email: Lynsie.aragon@gmail.com</p>
        <div className="flex flex-row justify-center gap-4">
          <Link href={"https://www.linkedin.com/in/lynsie-aragon-dev/"}>
            LinkedIn
          </Link>
          <Link href={"https://wellfound.com/u/lynsie-aragon"}>Wellfound</Link>
        </div>
      </div>
      Created and Maintained by Lynsie Aragon
    </div>
  );
}

export default Footer;
