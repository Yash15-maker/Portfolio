import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <p className="text-slate-400">All rights reserved.</p>
        <p className="text-slate-400">{"@" + "" + year}</p>
      </div>
    </footer>
  );
};

export default Footer;
