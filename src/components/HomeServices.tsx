import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const HomeService = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Mission Section */}
          <div className="bg-black flex flex-col md:flex-row w-full">
            <div className="w-full md:w-2/3 text-white p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 md:mt-4 text-xs md:text-sm">
                Our mission is to extend goodwill by providing food, essentials,
                and support to struggling communities locally and globally.
                Through Goodwill Distribution, we supply necessities to families
                in crisis, battered women, and disaster victims. Our Feeding
                Program fights hunger with meal distributions and donor
                partnerships. Social Enhancement empowers at-risk youth and
                recovering individuals through vocational training,
                entrepreneurship, and farm initiatives. By demonstrating
                God&apos;s love through action, we bring hope, dignity, and
                stability to those in need.
              </p>
              <Button className="bg-transparent border border-white w-24 mt-4 md:mt-7 text-xs md:text-sm">
                Learn More
              </Button>
            </div>
            <div className="relative w-full md:w-1/3 h-[200px] md:h-[400px]">
              <Image
                src="/mission2.jpg"
                alt="Mission Image"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Mission Image */}
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src="/mission.jpg"
              alt="Objective Image"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 md:gap-0">
          {/* Objectives Section */}
          <div className="w-full bg-gray-400 py-5 md:py-7 px-4 md:px-3">
            <div className="text-black p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl text-white font-bold">
                Our Objectives
              </h2>
              <p className="mt-3 md:mt-5 text-xs md:text-base text-white">
                Building a donation network – Partnering with local and global
                retailers, wholesalers, and food processors to collect essential
                supplies.
              </p>
              <p className="mt-3 md:mt-5 text-xs md:text-base text-white">
                Empowering youth – Creating programs in farming,
                entrepreneurship, and vocational training to help at-risk youth
                and individuals recovering from substance abuse gain skills for
                a better future.
              </p>
              <p className="mt-3 md:mt-5 text-xs md:text-base text-white">
                Providing food and essentials – Collecting over three million
                pounds of food and necessities in our first year and increasing
                this by 20% each year to reach even more people.
              </p>
              <p className="mt-3 md:mt-5 text-xs md:text-base text-white">
                Helping vulnerable groups – Distributing aid to needy families,
                survivors of domestic violence, and those affected by natural
                disasters.
              </p>
              <p className="mt-3 md:mt-5 text-xs md:text-base text-white">
                Securing funding – Raising $200,000 in start-up funding from
                grants, charities, and government programs, plus an additional
                $100,000 for logistics.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button className="bg-transparent border border-white w-24 mt-4 md:mt-7 text-xs md:text-sm">
                  Support Us
                </Button>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-pink-500 text-white p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold">How Can You Help?</h2>
            <p className="mt-2 text-xs md:text-base">
              Join Global Helping Hands Charity Foundation, Inc.
            </p>
            <Link href="#">
              <Button className="bg-transparent border border-white w-24 mt-4 md:mt-7 text-xs md:text-sm">
                Act Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
