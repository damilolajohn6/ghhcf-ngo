import React from "react";

const AboutSection = () => {
  return (
    <div className="px-6 md:px-20 py-16 text-gray-900">
      {/* Our Work Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <h2 className="text-4xl font-bold text-pink-700 md:w-1/4">
          Our <br /> Work
        </h2>
        <p className="md:w-3/4 text-lg leading-relaxed">
          Global Helping Hands Charity Foundation, Inc. (GHHCF), a 501(c)3
          organization, serves communities both locally and globally. GHHCF is
          dedicated to helping individuals affected by calamities such as
          earthquakes, storms, and war victims, thereby addressing issues such
          as homelessness, hunger, and substance abuse within said communities.
          <br />
          <br />
          Our objective is to support the needy and those who are challenged,
          both locally and worldwide, by providing the needed essentials and
          resources. Subsequently, through a network of service agencies and
          programs, we offer food boxes, toiletries, shelter, clothing,
          household items, and other necessities. Moreover, we focus on creating
          opportunities for self-sufficiency for &quot;at risk&quot; individuals.
          <br />
          <br />
          GHHCF primarily targets families and victims of different catastrophes
          by collaborating with local warehouse facilities to store donated
          items from retailers and wholesalers for distribution locally and
          worldwide.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <h2 className="text-4xl font-bold text-purple-800 md:w-1/4">
          Our <br /> Mission
        </h2>
        <p className="md:w-3/4 text-lg leading-relaxed">
          Our mission is to extend goodwill by providing food, essentials, and
          support to struggling communities locally and globally. Through
          Goodwill Distribution, we supply necessities to families in crisis,
          battered women, and disaster victims. Our Feeding Program fights
          hunger with meal distributions and donor partnerships. Social
          Enhancement empowers at-risk youth and recovering individuals through
          vocational training, entrepreneurship, and farm initiatives. By
          demonstrating God&apos;s love through action, we bring hope, dignity, and
          stability to those in need.
        </p>
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        <h2 className="text-4xl font-bold text-green-600 md:w-1/4">
          Our <br /> Vision
        </h2>
        <p className="md:w-3/4 text-lg leading-relaxed">
          To demonstrate God&apos;s love by creating a community where individuals in
          need will be provided for during challenges or hardships.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
