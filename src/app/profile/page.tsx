import JoinMovement from '@/components/JoinMovement'
import ProfileHero from '@/components/ProfileHero'
import Image from 'next/image';
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <ProfileHero />
      <div className="flex flex-col items-center justify-center py-8 px-12 my-6 mx-auto">
        <h1 className="text-pink-500 font-semibold text-6xl">Who We Are</h1>
        <p className="my-4 text-lg   md:text-xl leading-relaxed">
          We are a faith-driven organization committed to demonstrating God’s
          love by creating a compassionate community where individuals facing
          challenges receive the support they need. Our mission is to uplift
          struggling families, at-risk youth, and disaster victims by providing
          food, essential supplies, and empowerment programs that restore
          dignity and hope. Through our Goodwill Distribution and Feeding
          Programs, we partner with local and global donors to collect and
          distribute food, clothing, and necessities to those in crisis. Our
          Social Enhancement & Youth Empowerment initiatives offer farming,
          entrepreneurship, and vocational training to help individuals gain the
          skills they need for a better future.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-8 px-12 my-6 mx-auto">
        <h1 className="text-pink-500 font-semibold text-6xl">Meet Our Team</h1>
        <p className="my-4 text-lg font-bold  md:text-xl leading-relaxed">
          From the board room to the trenches, we take pride in the crop of
          people who are aligned with our mission. Along with our collaborators
          and changemakers, they give their all to deliver best-in class
          services to our clients and communities served.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Team Member 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src="/chairman.jpg"
            alt="Team Member 1"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-4xl font-bold mt-4 text-gray-800">
            Mr. Ahmed Jelani
          </h3>
          <p className="text-gray-600 py-2 font-semibold">Chairman</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src="/ceo.jpg"
            alt="Team Member 2"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-4xl font-bold mt-4 text-gray-800">
            Frank Barlay
          </h3>
          <p className="text-gray-600 font-semibold">CEO</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 px-12 my-6 mx-auto">
        <h1 className="text-pink-500 py-2 font-bold text-6xl">
          Board Of Advisor
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Team Member 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src="/chairman.jpg"
            alt="Team Member 1"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-4xl font-bold mt-4 text-gray-800">
            Bishop Dr. Percival <br /> Mulbah,
          </h3>
          <p className="text-gray-600 py-2 font-semibold">Communications Director</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <Image
            src="/coo.jpg"
            alt="Team Member 2"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-4xl font-bold my-4 text-gray-800">
            Mrs. Pauline <br /> Barlay
          </h3>
          <p className="text-gray-600 py-2 font-semibold">General Manager</p>
        </div>
      </div>
      <JoinMovement />
    </div>
  );
}

export default ProfilePage
