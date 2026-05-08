import React from 'react'
import { FiShoppingBag } from "react-icons/fi"
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { IoCall } from "react-icons/io5"

const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Contact",
    link: "/contact"
  },
  {
    title: "Blog",
    link: "/blog"
  }
]

const Footer = () => {
  return (
    <div className="text-white bg-[#212529] dark:bg-gray-800">
      <div className="container">

        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-8 pt-5">

          {/* Logo + Description */}
          <div className="py-6 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size={30} />
              ShopMe
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente, dignissimos et, totam neque nemo soluta autem explicabo, expedita ad maiores facere reprehenderit nulla perspiciatis.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>

              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>

              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social + Contact */}
          <div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <p>Indore, Madhya Pradesh</p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <IoCall />
                <p>+92 03062933633</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer