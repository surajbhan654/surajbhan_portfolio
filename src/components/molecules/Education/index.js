import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Degree */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Master of Computer Application(MCA)
              </h3>
              <p className="text-sm text-neutral font-semibold">2021 - 2024</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I am currently a final year MCA Student of Maulana Azad National Institute of Technology Bhopal <b>CGPA - 8.35 </b>
            </p>
          </div>
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Bachelor of Science(BSc(cs)) 
              </h3>
              <p className="text-sm text-neutral font-semibold">2019</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I have cleared the Bachelor of Science(BSc) with Computer Science(CS) stream with the
              highest result <b>Percentage - 65.05 </b> 
            </p>
          </div>

          {/* 12th */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">Intermediate [12th JAC-Board]</h3>
              <p className="text-sm text-neutral font-semibold">2016</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I have passed the Intermediate (12th) with the
            highest result <b>Percentage - 66.8 </b>
            </p>
          </div>

           {/* 10th */}
           <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
              Matriculation [10th JAC-Board]
              </h3>
              <p className="text-sm text-neutral font-semibold">2014</p>
            </div>
            <p className="text-sm text-neutral text-justify">
            I have passed the 10th(Matriculation) with the
            highest result <b>Percentage - 70 </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
