import React, { useState } from 'react'
import img1 from "../../assets/women/women.png";
import img2 from "../../assets/women/women2.jpg";
import img3 from "../../assets/women/women3.jpg";
import img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "women Ethnic",
    category: "ethnic",
    rating: 5.0,
    color: "white",
    price: 120,
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "women Western",
    category: "western",
    rating: 4.0,
    color: "red",
    price: 80,
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "women Goggles",
    category: "accessories",
    rating: 4.5,
    color: "brown",
    price: 45,
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "women Ethnic",
    category: "ethnic",
    rating: 4.7,
    color: "yellow",
    price: 150,
    aosDelay: "600",
  },
  {
    id: 5,
    img: img1,
    title: "women Western",
    category: "western",
    rating: 4.8,
    color: "black",
    price: 95,
    aosDelay: "800",
  }
];

const categories = ["All", "ethnic", "western", "accessories"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? ProductsData 
    : ProductsData.filter(product => product.category === activeCategory);

  return (
    <div className="mt-14 mb-12">

      <div className="container text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Top Selling Products for you
        </p>

        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>

        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ipsa vitae.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-primary hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {filteredProducts.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="space-y-3"
          >
            <img
              src={data.img}
              alt="Cover image"
              className="h-[220px] w-[150px] object-cover rounded-md"
            />

            <div>
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.color}</p>
              <p className="text-sm font-bold text-primary">${data.price}</p>

              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
          View All button
        </button>
      </div>

    </div>
  )
}

export default Products