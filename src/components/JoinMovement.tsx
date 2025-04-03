import React from "react";
import { Button } from "./ui/button";

const JoinMovement = () => {
  return (
    <div className="bg-[#BF1F7780] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-5 left-10 w-12 h-12 bg-white/20 rotate-45"></div>
      <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-white/20 rotate-45"></div>
      <div className="absolute top-10 right-20 w-14 h-14 bg-white/20 rotate-45"></div>
      <div className="absolute bottom-5 right-40 w-12 h-12 bg-white/20 rotate-45"></div>

      {/* Left Section - Call to Action */}
      <div className="mb-8 md:mb-0">
        <h2 className="text-4xl font-bold">Join The Movement</h2>
        <p className="text-lg">
          Join Global Helping Hands Charity Foundation, Inc.
        </p>
        <Button className="mt-4 px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-pink-700 transition">
          Act Now
        </Button>
      </div>

      {/* Right Section - Newsletter Signup */}
      <div className="w-full md:w-[500px]">
        <h3 className="text-xl font-semibold mb-3">
          Subscribe to our Newsletter
        </h3>
        <div className="flex bg-white rounded-md items-center justify-center overflow-hidden">
          <input
            type="email"
            placeholder="Enter your Email"
            className="flex-grow p-3 text-black outline-none"
          />
          <Button className="bg-pink-700 text-white px-6 py-3 justify-center items-center font-semibold hover:bg-pink-600 transition">
            Sign-Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
