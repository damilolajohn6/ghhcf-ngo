import React from "react";
import Image from "next/image";

const ContactHero = () => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/news.jpg"
          alt="Our Profile Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-white md:p-10 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact/ <br /> <span className="text-pink-500">Home</span>
        </h1>
    
      </div>
    </div>
  );
};

export default ContactHero;
