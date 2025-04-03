import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="relative bg-purple-900 text-white py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Envision a community
          <br /> That is <span className="text-pink-500">free from</span>
          <br /> <span className="text-pink-500">Hunger and Crime</span>
        </h1>
        <p className="mt-4 text-lg">
          We are focusing on Nurturing the Less Fortunate,
          <br /> The Needy, and The Youth
        </p>
        <button className="mt-6 bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition">
          Get Involved
        </button>
      </div>
      <div className="relative w-full max-w-lg mt-8 md:mt-0">
        <Image
          src="/hero.png"
          alt="Community Support"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HomeHero;
