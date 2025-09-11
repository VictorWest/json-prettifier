import MultilineTextFields from "./MultilineTextFields";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-10 space-y-10 bg-[#212121]">
      <div>
        <header className="text-stone-200 text-start w-full flex justify-between">
          <div className="md:text-4xl font-bold">JSON PRETTIFIER <span className="text-xs text-stone-500">lightweight</span></div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xs">Connect with Victor</p>
            <div className="flex gap-2 items-center *:hover:opacity-90">
              <Link href="http://linkedin.com/in/victor-wariboko-west-27787b233"><FaLinkedin /></Link>
              <Link href="https://github.com/VictorWest"><FaGithub /></Link>
              <Link href="https://x.com/officialv_west"><FaTwitter /></Link>
              <Link href="mailto:victorwaribokowest@gmail.com"><MdEmail /></Link>
            </div>            
          </div>
        </header>
        <div className="w-25 h-1 bg-white"></div>        
      </div>
      <MultilineTextFields />
    </div>
  );
}
