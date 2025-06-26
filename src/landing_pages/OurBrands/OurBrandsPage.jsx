import React from "react";
import OurBrandSection from "./BrandSection";
import Hero from "./Hero";

const sections = [
  {
    title: "PLYWOOD",
    image: "/media/images/OurBrands-1.webp",
    reverse: false,
    items: [
      {
        name: "GREEN PANEL",
        description:
          "Greenpanel is India’s largest manufacturer of wood panels having manufacturing plants in Uttarakhand and Andhra Pradesh make top-quality Medium Density Fibreboard (MDF), Plywood, Veneers, Wooden Floors and Doors.",
      },
      {
        name: "CENTURY PLYWOOD",
        description:
          "We are Century ply dealers in lucknow, CenturyPly has been the front-runner in applying innovation at plywood work.",
      },
      {
        name: "CRAFTCAVE",
        description:
          "North-East India’s biggest home showroom offering a wide range of home and office furniture.",
      },
    ],
  },
  {
    title: "HARDWARE",
    image: "/media/images/OurBrands-2.webp",
    reverse: true,
    items: [
      {
        name: "ENOX",
        description:
          "We are the best hardware shops in Lucknow and One of the fastest growing hardware brand in India has been able to make a mark with its impressive product range and a wide spread reach across the country",
      },
      {
        name: "HETTICH GROUP",
        description: "The Hettich Group is one of the world’s leading manufacturers of furniture fittings.",
      },
      {
        name: "SALICE GERMAN BASED HARDWARE",
        description:
          "Salice is one of the most prestigious brands among the small, medium-sized and large companies in the furniture industry",
      },
    ],
  },
  {
    title: "Laminate",
    image: "/media/images/OurBrands-3.webp",
    reverse: false,
    items: [
      {
        name: "DORBY",
        description:
          "They are inspired to imagine more and create better,",
      },
      {
        name: "ROYAL CROWN",
        description: "With an experience of 45 years in the manufacturing of interior grade decorative products, ROYAL CROWN is proud to present its range of high pressure decorative laminated sheets .",
      },
    ],
  }, {
    title: "Veneers",
    image: "/media/images/OurBrands-4.webp",
    reverse: true,
    items: [
      {
        name: "DUNEXT",
        description:
          "Express your excessive love for the nature with natural veneers with dunext .",
      },
      {
        name: "GREEN PANEL",
        description: "Greenpanel is India’s largest manufacturer of wood panels having manufacturing plants in Uttarakhand and Andhra Pradesh make top-quality Medium Density Fibreboard (MDF), Plywood, Veneers, Wooden Floors and Doors.",
      },
    ],
  },
   {
    title: "Locks",
    image: "/media/images/OurBrands-5.webp",
    reverse: false,
    items: [
      {
        name: "EUROPA LOCKS",
        description:
          "EUROPA” Brand; of Innovative world class High Security PADLOCKS, DOOR, SHUTTER & FURNITURE LOCKS for the Building Industry.",
      },
    ],
  },
 {
  title: "DECORATIVE HANDLES / TOWER BOLTS",
  image: "/media/images/OurBrands-6.webp",
  reverse: true,
  items: [
    {
      description:
        "Decorative knobs and pulls are the perfect vintage accessory to brighten the look of your drawers, doors and cabinets.",
    },
  ],
  handles: ["BECKER", "COLORS", "CURZONE", "ASTRO"], // ✅ clean array of strings
}
, {
    title: "DECORATIVE",
    image: "/media/images/OurBrands-7.webp",
    reverse: false,
    items: [
      {
        name: "GRANEX",
        description:
          "Granex is an industry leader in custom stone solutions for residential, commercial, hospitality, restaurant, and specialty projects.",
      },
      {
        name: "GRANIUM",
        description: "Granium is the leading supplier of high quality Acrylic Solid Surface and Acrylic High Gloss Laminates in India.",
      },
      {
        name: "MERINO",
        description: "Merino is a versatile manufacturer and marketer of Interiors Solutions with a wide array of products for homes, offices, commercial and public areas.",
      },
    ],
  },
];

const OurBrandsPage = () => {
  return (
    <>
      <Hero title="Our Brands"
        backgroundImage="media/images/unsplash9.avif" />
      {sections.map((section, index) => (
        <OurBrandSection
          key={index}
          title={section.title.toUpperCase()}
          image={section.image}
          reverse={section.reverse}
          items={section.items}
          handles={section.handles}
        />
      ))}
    </>
  );
};

export default OurBrandsPage;
