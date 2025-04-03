import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="w-full py-10 px-12">
      <h2 className="text-2xl font-bold text-[#361D59] mb-6">Our Recent Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 1 */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/gallery1.jpg"
            alt="Gallery Image 1"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/gallery2.jpg"
            alt="Gallery Image 2"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 (Full-width on Desktop) */}
        <div className="relative w-full h-[500px] md:col-span-2 overflow-hidden rounded-lg">
          <Image
            src="/gallery3.jpg"
            alt="Gallery Image 3"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
