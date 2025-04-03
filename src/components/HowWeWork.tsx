import React from "react";

const HowWeWork = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          How we work
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Our work is rooted in our core capabilities, which are organized into
          four key service areas. Through these focus areas, we ensure that
          individuals and families in need receive the right support at the
          right time.
        </p>

        <div className="space-y-6">
          {/* Food & Essentials Distribution */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-sm"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Food & Essentials Distribution
              </h3>
              <p className="mt-2 text-gray-600">
                Build a strong donation network with retailers, wholesalers, and
                food processors to ensure a steady supply of goods.
              </p>
            </div>
          </div>

          {/* Feeding Program */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <div className="w-6 h-6 border-2 border-green-500 rounded-sm bg-green-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Feeding Program
              </h3>
              <p className="mt-2 text-gray-600">
                Partner with local and global donors to increase food collection
                and implement sustainable meal distribution systems.
              </p>
            </div>
          </div>

          {/* Social Enhancement & Youth Empowerment */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <div className="w-6 h-6 border-2 border-green-500 rounded-sm bg-green-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Social Enhancement & Youth Empowerment
              </h3>
              <p className="mt-2 text-gray-600">
                Establish hands-on training programs and mentorship
                opportunities to equip participants with valuable skills for
                employment and business.
              </p>
            </div>
          </div>

          {/* Financial Sustainability & Expansion */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <div className="w-6 h-6 border-2 border-green-500 rounded-sm bg-green-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Financial Sustainability & Expansion
              </h3>
              <p className="mt-2 text-gray-600">
                Develop strong fundraising campaigns, donor engagement plans,
                and strategic financial management to support our mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
