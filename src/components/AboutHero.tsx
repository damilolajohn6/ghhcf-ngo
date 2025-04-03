import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/news.jpg"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative text-white md:p-10 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-pink-500">Us</span>
        </h1>
        <p className="mt-4 text-lg max-w-lg  md:text-xl leading-relaxed">
          We are dedicated to nurturing the less fortunate, the needy, and the
          youth—empowering them for a brighter future.
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
