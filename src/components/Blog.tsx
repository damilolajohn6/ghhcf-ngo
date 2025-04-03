import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Providing Clean Water to Communities",
    description:
      "Learn how our NGO is bringing clean and safe drinking water to underprivileged communities worldwide.",
    image: "/gallery1.jpg",
    link: "/blog/clean-water",
  },
  {
    id: 2,
    title: "Empowering Women Through Education",
    description:
      "Discover our initiatives to provide education and skill-building opportunities for women in rural areas.",
    image: "/gallery1.jpg",
    link: "/blog/women-empowerment",
  },
  {
    id: 3,
    title: "Feeding the Hungry: Our Food Drive Impact",
    description:
      "See how our food donation programs are helping families facing hunger and food insecurity.",
    image: "/gallery1.jpg",
    link: "/blog/food-drive",
  },
  {
    id: 4,
    title: "Disaster Relief: Rapid Response & Aid",
    description:
      "Read about our efforts to provide immediate relief to communities affected by natural disasters.",
    image: "/gallery1.jpg",
    link: "/blog/disaster-relief",
  },
  {
    id: 5,
    title: "Medical Outreach Programs",
    description:
      "Our team of healthcare professionals provides free medical services to underserved communities.",
    image: "/gallery1.jpg",
    link: "/blog/medical-outreach",
  },
  {
    id: 6,
    title: "Supporting Orphaned Children",
    description:
      "Discover how we are ensuring better futures for orphaned children through education and care.",
    image: "/gallery1.jpg",
    link: "/blog/orphan-support",
  },
];

const Blog = () => {
  return (
    <div className="w-full py-8 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-[#361D59] mb-6">
        Related Blog Posts
      </h2>
      <p className=" max-w-2xl text-gray-700 mb-10">
        Our approach involves not only education but also moral development,
        career mentorship, and self-care, ensuring that these individuals grow
        into well-rounded, empowered individuals who can lead and inspire change
        in their communities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#361D59]">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
              <Link
                href={blog.link}
                className="text-blue-600 font-medium mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
