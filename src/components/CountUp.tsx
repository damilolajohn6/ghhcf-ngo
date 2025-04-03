"use client"
import CountUp from "react-countup";

const StatsCountUp = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
          Learn About Us
        </h2>
        <p className="mt-4 text-gray-700">
          We envision a compassionate community where God&apos;s love is demonstrated
          through action, ensuring that individuals facing challenges or
          hardships receive the support they need. Guided by faith, we strive to
          be a source of hope, providing essential resources, encouragement, and
          care to those in need.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            <CountUp end={5} duration={2} />
          </h3>
          <p className="text-gray-700">Initiatives</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            <CountUp end={20} duration={2} />
          </h3>
          <p className="text-gray-700">Volunteers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            <CountUp end={20} duration={2} />
          </h3>
          <p className="text-gray-700">Volunteers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-pink-600">
            <CountUp end={75} duration={2} />%
          </h3>
          <p className="text-gray-700">Of people are living in hardship</p>
        </div>
      </div>
    </section>
  );
};

export default StatsCountUp;
