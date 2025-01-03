"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Document, Page, pdfjs } from "react-pdf";
import { IoEyeOutline } from "react-icons/io5";
import { SiGoogledrive } from "react-icons/si";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "/node_modules/pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Yash Mishra",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {`Code is like humor. When you have to explain it, it’s bad. `}
            <br />
            {`Keep it Simple.`}
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              // href="/#"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onClick={handleOpen}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 rounded-full  -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
      <ResumeModal open={openModal} handleClose={handleClose} />
    </section>
  );
};

export default HeroSection;

const ResumeModal = ({ open, handleClose }) => {
  const [showPdf, setShowPdf] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const driveUrl =
    "https://drive.google.com/file/d/1GKyhjFKY7_OuXAtnORIygnEJDJiTBKYv/view?usp=drive_link";

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const handlePdfClosed = () => {
    setShowPdf(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        open ? "visible" : "invisible"
      }`}
    >
      <div className="bg-white rounded-lg relative shadow-lg p-6 z-50 md:w-[50%] w-full max-h-[90vh] overflow-auto mx-4 border border-gray-300">
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          {/**<button
            className="group relative flex items-center justify-center px-8 py-3 text-lg font-semibold text-black transition-all duration-300 ease-in-out rounded-lg hover:bg-primary-500 hover:text-white overflow-hidden shadow-md"
            onClick={() => setShowPdf(true)}
          >
            <span className="absolute inset-0 w-0 bg-primary-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              <IoEyeOutline size={20} />
              View Resume
            </span>
          </button>**/}

          <button
            className="group relative flex items-center justify-center px-8 py-3 text-lg font-semibold text-black transition-all duration-300 ease-in-out rounded-lg hover:bg-primary-500 hover:text-white overflow-hidden shadow-md"
            onClick={() => window.open(driveUrl, "_blank")}
          >
            <span className="absolute inset-0 w-0 bg-primary-500 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2">
              <SiGoogledrive size={20} />
              Through Drive
            </span>
          </button>
        </div>
        <div className="text-center">
          <Link href="Yash_Mishra.pdf" target="_blank" download>
            <button className="py-2 px-2 md:px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg">
              Download Resume
            </button>
          </Link>
        </div>

        <button
          onClick={showPdf ? handlePdfClosed : handleClose}
          className="absolute top-0 right-0 text-red-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
      </div>
      <div
        className="fixed inset-0 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
    </div>
  );
};

// {!showPdf ? (
//   <>
//     <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
//       <button
//         className="group relative flex items-center justify-center px-8 py-3 text-lg font-semibold text-black transition-all duration-300 ease-in-out rounded-lg hover:bg-primary-500 hover:text-white overflow-hidden shadow-md"
//         onClick={() => setShowPdf(true)}
//       >
//         <span className="absolute inset-0 w-0 bg-primary-500 transition-all duration-300 ease-out group-hover:w-full"></span>
//         <span className="relative flex items-center gap-2">
//           <IoEyeOutline size={20} />
//           View Resume
//         </span>
//       </button>

//       <button
//         className="group relative flex items-center justify-center px-8 py-3 text-lg font-semibold text-black transition-all duration-300 ease-in-out rounded-lg hover:bg-primary-500 hover:text-white overflow-hidden shadow-md"
//         onClick={() => window.open(driveUrl, "_blank")}
//       >
//         <span className="absolute inset-0 w-0 bg-primary-500 transition-all duration-300 ease-out group-hover:w-full"></span>
//         <span className="relative flex items-center gap-2">
//           <SiGoogledrive size={20} />
//           Through Drive
//         </span>
//       </button>
//     </div>
//     <div className="text-center">
//       <Link href="Yash_Mishra.pdf" target="_blank" download>
//         <button className="py-2 px-2 md:px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg">
//           Download Resume
//         </button>
//       </Link>
//     </div>
//   </>
// ) : (
//   <div className="flex flex-col items-center text-black">
//     <Document
//       file="Yash_Mishra.pdf"
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       <Page
//         pageNumber={pageNumber}
//         renderTextLayer={false}
//         renderAnnotationLayer={false}
//       />
//     </Document>
//     <div className="flex gap-4 items-center mt-4">
//       <button
//         disabled={pageNumber <= 1}
//         onClick={() => setPageNumber((prev) => prev - 1)}
//         className="px-4 py-2 bg-primary-500 text-white rounded disabled:opacity-50"
//       >
//         Previous
//       </button>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button
//         disabled={pageNumber >= numPages}
//         onClick={() => setPageNumber((prev) => prev + 1)}
//         className="px-4 py-2 bg-primary-500 text-white rounded disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//     <button
//       onClick={() => setShowPdf(false)}
//       className="mt-4 text-primary-500 hover:underline"
//     >
//       Back to options
//     </button>
//   </div>
// )}
