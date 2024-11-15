import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          height={50}
          width={50}
          alt="Profile-logo"
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
