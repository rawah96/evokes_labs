import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ahmed from "./images/Ahmed.jpg"; // Adjust the path as needed
import kareem from "./images/kareem.png"; 
import photo15 from "./images/photo15.png"; 
import photo14 from "./images/photo14.png"; 
import photo12 from "./images/photo12.png"; 
import photo11 from "./images/photo11.png"; 
import photo10 from "./images/photo10.png"; 
import photo9 from "./images/photo9.png"; 
import photo8 from "./images/photo8.png"; 
import photo7 from "./images/photo7.png"; 
import photo6 from "./images/photo6.png"; 
import photo5 from "./images/photo5.png"; 
import photo4 from "./images/photo4.png"; 
import photo3 from "./images/photo3.png"; 
import photo2 from "./images/photo2.png"; 
import photo1 from "./images/photo1.png"; 
import photo0 from "./images/photo0.png"; 
import adidas from "./images/adidas.jpg"; 
import astro from "./images/astro.jpg"; 
import saudi from "./images/saudi.jpg"; 
import nike from "./images/nike.jpg"; 
import levelshoes from "./images/levelshoes.png"; 
import puma from "./images/puma.png"; 
import emailjs from "@emailjs/browser";
import logo from "./images/logo.png"; // Adjust the path as needed
import cham from "./images/cham.jpg"; // Adjust the path as needed
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const middleIndex = Math.floor(projects.length / 2);
    setActiveIndex(middleIndex);
  }, []);

  const projects = [
    {
      imageUrl: 'puma',
    },
    {
      imageUrl: 'final_compressed.mp4',
    },
    {
      imageUrl: 'bottle',
      
    },
  ];

  const cofounders = [
  {
    name: "Ahmed Alsenan",
    role: "CEO & Founder",
    photo: ahmed,
  },
  {
    name: "Abdulkareem alsenan",
    role: "Co-Founder",
    photo: kareem,
  },
];

  const images = [
    {
      src: photo0,
    },
    {
      src: photo1,
    },
    {
      src: photo2,
    },
    {
      src: photo3,
    },
    {
      src: photo4,
    },
    {
      src: photo5,
    },
    {
      src: photo6,
    },
    {
      src: photo7,
    },
    {
      src: photo8,
    },
    {
      src: photo9,
    },
    {
      src: photo10,
    },
    {
      src: photo11,
    },
    {
      src: photo12,
    },
    {
      src: photo14,
    },
    {
      src: photo15,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    "UX/UI", "Web Development", "3D Animation", "Motion Graphics",
    "Creative Design & Branding", "Content Creation", "Video/Photo Production",
    "PR & Events", "Influencer Marketing", "Media Buying"
  ];
  const brands = [
    { logo: levelshoes },
    { logo: puma },
    { logo: cham },
    { logo: nike },
    { logo: adidas },
    { logo: astro },
    { logo: saudi },
    // Add more brands as needed
  ];
  const [currIndex, setCurrIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(brands);
  const [showPDF, setShowPDF] = useState(false);
  useEffect(() => {
    // Clone the array to create infinite looping effect
    setCarouselItems([...brands, ...brands]);

    const interval = setInterval(() => {
      // Move the index forward and loop back to the start
      setCurrIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currIndex === brands.length) {
      // Reset to the first item when reaching the end of the duplicated array
      setTimeout(() => {
        setCurrIndex(0);
      }, 1000); // Allow time for the transition before resetting
    }
  }, [currIndex]);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05 }
  };
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_e0dhqpr",
        "template_df1nd38",
        formData,
        "zxIq4tNdT8LxkijR4"
      );
      setSuccess(true);
      setFormData({ name: "", message: "" });
    } catch (error) {
      setSuccess(false);
    }
    setIsSending(false);
  };
// Handle scrolling to section
const handleScrollToSection = (index) => {
  const sectionIds = ["hero", "about-us", "projects", "contact"];
  const targetId = sectionIds[index];
  const section = document.getElementById(targetId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  const handleCardClick = (clickedIndex) => {
    setActiveIndex(clickedIndex); // Directly set the activeIndex to clicked card's index
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div style={{ fontFamily: 'Agdasima, sans-serif', fontWeight: 700 }}>
<nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-transparent shadow-lg">
  <img
    src={logo}
    width={140}
    onClick={() => handleScrollToSection(0)}
    className="cursor-pointer"
  />

  {/* Hamburger Icon for small screens */}
  <div className="sm:hidden items-center">
    <button
      onClick={toggleMenu}
      className="p-2 rounded-full bg-black text-white focus:outline-none"
    >
      {isMenuOpen ? (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  </div>

  {/* Menu items for large screens */}
  <ul className="hidden sm:flex justify-end w-full items-center">
    <li className="cursor-pointer px-4 hover:opacity-50" onClick={() => handleScrollToSection(0)}>
      Home
    </li>
    <li className="cursor-pointer px-4 hover:opacity-50" onClick={() => handleScrollToSection(1)}>
      About
    </li>
    <li className="cursor-pointer px-4 hover:opacity-50" onClick={() => handleScrollToSection(2)}>
      Projects
    </li>
    <li
      className="cursor-pointer hover:opacity-50 border-2 border-black rounded p-2 px-4"
      onClick={() => handleScrollToSection(3)}
    >
      Contact
    </li>
  </ul>

  {/* Hamburger Menu for small screens */}
  <div
    className={`sm:hidden fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <ul className="flex flex-col items-center">
      <li className="cursor-pointer py-4 text-xl hover:opacity-50" onClick={() => { handleScrollToSection(0); closeMenu(); }}>
        Home
      </li>
      <li className="cursor-pointer py-4 text-xl hover:opacity-50" onClick={() => { handleScrollToSection(1); closeMenu(); }}>
        About
      </li>
      <li className="cursor-pointer py-4 text-xl hover:opacity-50" onClick={() => { handleScrollToSection(2); closeMenu(); }}>
        Projects
      </li>
      <li className="cursor-pointer py-4 text-xl hover:opacity-50 border-2 border-black rounded p-2 px-4" onClick={() => { handleScrollToSection(3); closeMenu(); }}>
        Contact
      </li>
    </ul>
  </div>
</nav>


    <div className="font-sans bg-white text-black px-8" id="hero">
      {/* Hero Section with Letter-by-Letter Typing Effect */}
      <section className="relative lg:h-[80vh] flex items-center justify-center sm: h-[65vh] rounded-3xl">
  {/* Background Spline Viewer */}
  
    <div className="absolute top-0 left-0 w-full hidden lg:block bg-white shadow-lg rounded-3xl">
    <spline-viewer
      url="https://prod.spline.design/SWRErhsgaq7JwJ8t/scene.splinecode"
    ></spline-viewer>
  </div>
  <div className="absolute top-0 left-0 w-full lg:hidden mt-32">
    <spline-viewer
      url="https://prod.spline.design/tHrd9NOIxW3b3J0q/scene.splinecode"
    ></spline-viewer>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full flex sm:justify-start md:justify-end">
  <div className="flex mx-2">
  <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Button to Open PDF */}
      <motion.button
  onClick={() => setShowPDF(true)}
  className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 px-6 py-3 text-lg font-semibold tracking-widest text-black border-2 border-black bg-white rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-500 transition-all duration-300"
  // whileHover={{ scale: 1.1 }}
  // whileTap={{ scale: 0.95 }}
>
  Learn More
</motion.button>


      {/* PDF Modal */}
      {showPDF && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4"
          onClick={() => setShowPDF(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white rounded-xl shadow-xl p-4 w-full max-w-4xl h-[80vh] sm:h-[90vh] flex flex-col sm:max-w-full sm:h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>

            {/* PDF Embed (Works on All Screens Now) */}
            <div className="w-full h-full">
              <iframe
                src="/evokeslabpdf.pdf"
                className="w-full h-full border-0 rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  </div>
</div>

  <style jsx>{`
    .spline-viewer {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 1024px) {
      .spline-viewer {
        transform: scale(0.85); /* Decreased scaling for tablets */
      }
    }

    @media (max-width: 768px) {
      .spline-viewer {
        transform: scale(0.7); /* More reduction for small tablets */
      }
    }

    @media (max-width: 480px) {
      .spline-viewer {
        transform: scale(0.55); /* Further reduction for mobile */
      }
    }
  `}</style>
</section>
        <div className="md:mt-32" id="about-us">
          <div className="flex justify-center">
              <motion.section
                id="about-us"
                className="text-center w-full" // Fixed width for paragraphs
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 
                style={{ fontFamily: 'Agdasima, sans-serif', fontWeight: 700 }}
                className="text-6xl sm:text-6xl md:block font-bold text-gray-800">Our Bench Mark Is Excellence</h3>
                <div className="w-full flex justify-center">
                  <p className="mt-4 text-gray-600 w-[500px]">With over ten years of experience in online and offline advertising, our team carries their passion with pride, delivering exceptional results and innovative solutions</p>
                </div>
              </motion.section>
          </div>
        </div>
        <section className="relative py-8 px-6 md:px-12 text-center" >
          <motion.h2
            className="tracking-wide text-4xl md:text-5xl font-bold relative z-10 text-black font-agdasima text-4xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Services
          </motion.h2>

          <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 md:px-16 font-agdasima text-4xl">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow-md flex items-center justify-center text-lg font-medium cursor-pointer hover:bg-[#222] transition-all duration-300"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </section>

      {/* Carousel Items */}
      <div id="projects">
          <motion.h2
            className="tracking-wide text-4xl md:text-5xl font-bold relative z-10 text-black text-center font-agdasima text-4xl mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Projects
          </motion.h2>
      {/* Carousel Items */}
      <div className="flex flex-wrap w-full justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`m-2 relative rounded-5xl cursor-pointer w-96 h-96 md:w-1/4 rounded-xl bg-black  transition-all duration-500 transform `}
            onClick={() => handleCardClick(index)}
            style={{ transition: "transform 0.5s ease-out rounded-3xl" }}
          >
            {project.imageUrl == 'final_compressed.mp4' ?
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover rounded-lg">
              <source src={`${process.env.PUBLIC_URL}/final_compressed.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video> :
            project.imageUrl == 'bottle' ?
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover rounded-lg">
              <source src={`${process.env.PUBLIC_URL}/bottle.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video> : 
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover rounded-lg">
              <source src={`${process.env.PUBLIC_URL}/puma.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            }
          </div>
        ))}
      </div>
      <div className="py-8 flex items-center justify-center px-4">
      <div className="relative w-full max-w-xl">
        {/* Image Section */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        />

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between items-center">
          <button
            onClick={prevImage}
            className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>

{/* clients */}
<div>
      <motion.h2
        className="tracking-wide text-4xl md:text-5xl font-bold relative z-10 text-black text-center font-agdasima"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        Clients
      </motion.h2>
      <div className="relative overflow-hidden">
        <div
          className="flex animate-scroll"
          style={{ display: 'flex' }}
        >
          {/* Render the items twice to create the infinite loop effect */}
          {carouselItems.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 mx-4 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
          {carouselItems.map((brand, index) => (
            <div
              key={index + carouselItems.length}
              className="flex-shrink-0 w-40 mx-4 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
    < motion.h2
        className="tracking-wide my-8 text-4xl md:text-5xl font-bold relative z-10 text-black text-center font-agdasima text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Our Team
      </motion.h2>
      <div className="flex flex-wrap justify-center">
  {/* Cofounder Images with Name and Description */}
  {cofounders.map((cofounder, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center mx-2"
    >
      <motion.img
        src={cofounder.photo}
        alt={cofounder.name}
        className="w-64 md:h-96 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{cofounder.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{cofounder.role}</p>
      <p className="text-gray-700">{cofounder.timeline}</p>
    </motion.div>
  ))}
</div>
    </div>
    <section id="contact" className="my-8 text-black flex items-center justify-center px-6 font-agdasima">
      <div className="max-w-2xl w-full p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-white outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-white outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-300 transition-all"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {success !== null && (
            <p className={`text-center mt-4 ${success ? "text-green-400" : "text-red-400"}`}>
              {success ? "Thank you, we received your message!" : "Failed to send message. Try again."}
            </p>
          )}
        </form>
      </div>
    </section>
    </div>
    </div>
    <footer className="border-t-2 border-gray-700 text-black py-8">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <p className=" font-medium mb-4">&copy; 2025 <span className="font-semibold">Evokes Lab</span>. All Rights Reserved.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          {/* Instagram */}
          <a href="https://www.instagram.com/evokeslab" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
            <div className="bg-pink-600 p-3 rounded-full shadow-lg transform hover:scale-110">
              <FaInstagram className="text-white w-4 h-4" />
            </div>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/+966556551247" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110">
            <div className="bg-green-500 p-3 rounded-full shadow-lg transform hover:scale-110">
              <FaWhatsapp className="text-white w-4 h-4" />
            </div>
          </a>
          {/* Email */}
          <a href="mailto:Ahmed@evokeslab.com" className="transition-all duration-300 hover:scale-110">
            <div className="bg-yellow-500 p-3 rounded-full shadow-lg transform hover:scale-110">
              <FaEnvelope className="text-white w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Optional Text */}
        <p className="text-sm mt-6 text-gray-400">Designed with ❤️ by <span className="font-semibold text-black">Rawah</span></p>
      </div>
    </footer>
    </div>
  );
};

export default App;
