import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { GrContact } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <GrContact className="w-full md:max-w-[480px]" size={50} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            12345 ABC Station <br /> 123, Abc, Abc
          </p>
          <p className="text-gray-500">
            Tel: (123) 456-7890 <br /> Email: contact@ec01.com
          </p>
          <p className="font-semibold text-xl text-gray-600">Careers at EC01</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
