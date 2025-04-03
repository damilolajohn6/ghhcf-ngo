"use client";
import ImageGallery from "@/components/ImageGallery";
import JoinMovement from "@/components/JoinMovement";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const DonatePage = () => {
  const [amount, setAmount] = useState<number | string>(50);
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );

  const handleDonate = () => {
    alert(`Thank you for donating $${amount} (${donationType})!`);
    // integrate PayPal/Stripe payment processing
  };

  return (
    <div className="">
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
                  Donate/ <br /> <span className="text-pink-500">Home</span>
                </h1>
            
              </div>
            </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Support Our Cause
          </h1>
          <p className="text-gray-600 mb-6">
            Your donation helps us continue our mission of supporting those in
            need.
          </p>

          {/* Donation Type Selection */}
          <div className="flex justify-center mb-4">
            <Button
              className={`px-4 py-2 mx-2 rounded-md font-semibold ${
                donationType === "one-time"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setDonationType("one-time")}
            >
              One-time
            </Button>
            <Button
              className={`px-4 py-2 mx-2 rounded-md font-semibold ${
                donationType === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setDonationType("monthly")}
            >
              Monthly
            </Button>
          </div>

          {/* Donation Amount */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[10, 25, 50, 100].map((amt) => (
              <button
                key={amt}
                className={`px-6 py-3 rounded-md font-semibold ${
                  amount === amt
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setAmount(amt)}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md mb-4 text-center"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* Donate Button */}
          <button
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition"
            onClick={handleDonate}
          >
            Donate Now
          </button>

          <p className="text-gray-500 text-sm mt-4">
            100% of your donation goes to helping those in need.
          </p>
        </div>
      </div>
      <ImageGallery />
      <JoinMovement />
    </div>
  );
};

export default DonatePage;
