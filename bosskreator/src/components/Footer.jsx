import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const menuItems = [
  {
    title: "Navigation",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Product", href: "/product" }
    ]
  },
  {
    title: "Services",
    links: [
      { text: "Design", href: "/services/design" },
      { text: "Development", href: "/services/development" },
      { text: "Brand Strategy", href: "/services/brand-strategy" },
    ]
  },
  {
    title: "Project",
    links: [
      { text: "Mobile Dev", href: "/projects/mobile-dev" },
      { text: "Website Dev", href: "/projects/web-dev" },
      { text: "Landing Page", href: "/projects/landing-page" },
    ]
  }
];


const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] relative">
      <span className="absolute w-[500px] h-[500px] bg-[#171717] -top-40 -left-40" style={{ borderRadius: "38%", transform: "rotate(30deg)" }}></span>
      <div className="w-[80%] pt-9 pb-4 mx-auto text-white flex flex-wrap flex-row justify-around -z-10">
        <div className="w-full md:w-[60%] text-center lg:text-left lg:w-[40%] z-0">
          <div className="relative h-[50px] w-[211px] mx-auto lg:-ml-4">
            <Image src="https://ik.imagekit.io/m1akscp5q/Boss%20Kreator%20logo.png?updatedAt=1709446059844" alt="logo" quality={100} fill sizes="(100vw, 100vh)" style={{ objectFit: 'cover' }} />
          </div>
          <p className="text-sm py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo temporibus magnam ducimus quas cumque sequi delectus molestias, quod repudiandae.</p>
          <div className="flex gap-4 text-xl justify-center mb-6 lg:mb-0 lg:justify-start">
            <Link href={"/"}><FaFacebook /></Link>
            <Link href={"/"}><FaInstagram /></Link>
            <Link href={"/"}><FaLinkedin /></Link>
          </div>
        </div>
        <div className="flex gap-x-20 flex-wrap gap-3 md:justify-between md:w-[90%] lg:w-auto z-10">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold pb-4">{section.title}</h3>
              {section.links.map((link, idx) => (
                <Link key={idx} href={link.href} className="text-sm block text-nowrap pb-4 hover:underline">{link.text}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="w-[90%] mx-auto z-10 relative" />
      <p className="text-center text-sm py-4">Copyright © 2022 - All right reserved</p>
      <span className="absolute hidden md:block w-[550px] h-[550px] md:-right-96 md:-bottom-96 bg-[#171717] lg:-right-20 lg:top-36 " style={{ borderRadius: "38%", transform: "rotate(20deg)" }}></span>
    </div>
  )
};

export default Footer;
