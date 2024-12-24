import React from "react";

const companies = [
  { name: "Sunrise", image: "/sunrise.png" },
  { name: "Alfan", image: "/alfanlogomn.png" },
  { name: "HSTC", image: "/hstc.png" },
  { name: "Test", image: "/sunrise.png" },
  { name: "TECH@1", image: "/LOGO14.png" },
  { name: "Test 1", image: "/hstc.png" },
  { name: "#TESTING COMP", image: "/Travel_21.png" },
  { name: "New Test Company", image: "/s.png" },
  { name: "Modal Testing", image: "/eagle.png" },
  { name: "New Company", image: "/download.png" },
  { name: "Demo", image: "/download2.png" },
  { name: "New Test", image: "/download (1).png" },
  { name: "Test New", image: "/2380510.png" },
];

const CompanyCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map((company, index) => (
        <div
          key={index}
          className="relative bg-white p-7 rounded-lg flex items-center justify-center group overflow-hidden shadow-md"
        >
          <img
            src={company.image}
            alt={`${company.name} logo`}
            className="object-cover w-32 h-32"
          />
          <div className="absolute bottom-[-8px] left-0 w-full h-0 bg-indigo-800 bg-opacity-80 flex items-center justify-center text-white text-lg font-semibold group-hover:h-[10vh] transition-all duration-300">
            {company.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCards;
