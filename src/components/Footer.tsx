import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-purple-900 text-white py-12 px-12">
      <div className="absolute inset-0">
        <Image
          src="/footer.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Logo and About */}
        <div className="max-w-md">
          <div className="flex items-center space-x-2">
            <div className="bg-pink-700 h-6 w-12" />
            <h2 className="text-3xl font-bold">GHHCF</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Global Helping Hands Charity Foundation, Inc. (GHHCF), a 501(c)(3)
            organization, serves communities both locally and globally. GHHCF is
            dedicated to helping individuals affected by calamities such as
            earthquakes, storms, and war victims, thereby addressing issues such
            as homelessness, hunger, and substance abuse within said
            communities.
          </p>
          <p className="mt-4 text-xs">
            Copyright &copy; 2025. GHHCF All rights reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <span className="text-green-400">📞</span>
              <span>678-310-9575</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">✉️</span>
              <span>info2ghhcf.org</span>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>General Assistance</li>
            <li>Mentoring</li>
            <li>Counseling</li>
            <li>Coach</li>
            <li>Shelter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
