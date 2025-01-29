import React, { useState, useEffect, useRef } from 'react';
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
import emailjs from "@emailjs/browser";
import logo from "./images/logo.png"; // Adjust the path as needed
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const App = () => {
  const paragraphsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const middleIndex = Math.floor(projects.length / 2);
    setActiveIndex(middleIndex);
  }, []);
  const [paragraphs, setParagraphs] = useState([
    { 
      title: 'Creative Marketing Agency', 
      text: `We're a creative marketing agency that pushes boundaries to elevate brands. With data-driven strategies, bold visuals, and engaging content, we craft memorable experiences that connect and convert. Let’s turn your vision into a powerful story.`,
      readMore: false 
    },
    { 
      title: 'Our Bench Mark Is Excellence', 
      text: 'With over ten years of experience in online and offline advertising, our team carries their passion with pride, delivering exceptional results and innovative solutions', 
      readMore: false 
    },
    { 
      title: 'Comprehensive Solutions', 
      text: 'At our Saudi-based agency, we specialize in website design and development, 3D animations, and powerful marketing strategies. Our diverse range of services is thoughtfully packaged to deliver the highest quality and exceptional value, ensuring your brand stands out in today’s digital landscape. Let’s create something extraordinary together!', 
      readMore: false 
    }
  ]);

  const projects = [
    {
      title: 'PUMA',
      description: 'Description for project.',
      imageUrl: 'puma',
    },
    {
      title: '3D Animations',
      description: 'Description for project.',
      imageUrl: 'final_compressed.mp4',
    },
    {
      title: 'bottle',
      description: 'Description for project.',
      imageUrl: 'bottle',
      
    },
  ];

  const cofounders = [
  {
    name: "Ahmed Alsenan",
    role: "CEO & Founder",
    photo: ahmed,
    timeline: "Founded the agency in 2025 with a vision to create innovative web experiences. -- complete timeline"
  },
  {
    name: "Abdulkareem alsenan",
    role: "Co-Founder",
    photo: kareem,
    timeline: "Add timeline."
  },
];

  const images = [
    {
      src: photo0,
      title: "title",
      description: "description",
    },
    {
      src: photo1,
      title: "title",
      description: "description",
    },
    {
      src: photo2,
      title: "title",
      description: "description",
    },
    {
      src: photo3,
      title: "title",
      description: "description",
    },
    {
      src: photo4,
      title: "title",
      description: "description",
    },
    {
      src: photo5,
      title: "title",
      description: "description",
    },
    {
      src: photo6,
      title: "title",
      description: "description",
    },
    {
      src: photo7,
      title: "title",
      description: "description",
    },
    {
      src: photo8,
      title: "title",
      description: "description",
    },
    {
      src: photo9,
      title: "title",
      description: "description",
    },
    {
      src: photo10,
      title: "title",
      description: "description",
    },
    {
      src: photo11,
      title: "title",
      description: "description",
    },
    {
      src: photo12,
      title: "title",
      description: "description",
    },
    {
      src: photo14,
      title: "title",
      description: "description",
    },
    {
      src: photo15,
      title: "title",
      description: "description",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const toggleReadMore = (index) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index].readMore = !updatedParagraphs[index].readMore;
    setParagraphs(updatedParagraphs);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
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


    <div className="font-sans bg-white text-black px-8 mt-32" id="hero">
      {/* Hero Section with Letter-by-Letter Typing Effect */}
      <section className="relative lg:h-[80vh] flex items-center justify-center bg-white shadow-lg rounded-3xl sm: h-[65vh]">
  {/* Background Spline Viewer */}
    <div className="absolute top-0 left-0 w-full hidden lg:block">
    <spline-viewer
      url="https://prod.spline.design/XcoapkWpIZBq4Cqb/scene.splinecode"
    ></spline-viewer>
  </div>
  <div className="absolute top-0 left-0 w-full lg:hidden mt-32">
    <spline-viewer
      url="https://prod.spline.design/jRNtC8JRqZSfE6O3/scene.splinecode"
    ></spline-viewer>
  </div>

  {/* Content */}
  <div className="relative text-center z-10 mt-36">
    <div className="mt-8 flex justify-center space-x-4">
      <motion.button
        className="px-2 md:px-6 py-3 text-lg font-semibold  text-lg tracking-widest text-black border-2 border-black bg-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500 transition-all duration-300"
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
      <motion.button
        className="px-2 md:px-6 py-3 text-lg font-semibold text-white  text-lg tracking-widest bg-black border-2 border-black rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Reach out!
      </motion.button>
    </div>
  </div>

  {/* Scroll Down Button */}
  <div className="absolute bottom-4 left-5 z-10">
    <motion.button
      className="w-16 h-16 bg-white border-2 border-black rounded-full shadow-lg flex items-center justify-center text-black text-2xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
    >
      ↓
    </motion.button>
  </div>

  {/* Styles */}
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
{/* Paragraphs Section - Same Row */}
        <div className=" mt-16" id="about-us">
          <div className="text-center">
            <motion.h2 className="text-3xl text-lg tracking-widest">About Us</motion.h2>
          </div>
          <div className="mt-8 flex justify-center">
            {paragraphs.map((para, index) => (
              <motion.section
                key={index}
                id={`about-us-${index}`} key={index}
                ref={(el) => (paragraphsRef.current[index] = el)}
                className="text-center w-full" // Fixed width for paragraphs
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* "text-2xl sm:text-3xl font-bold text-gray-800" */}
                <h3 className="text-sm line-clamp-2 sm:text-3xl md:block font-bold text-gray-800">{para.title}</h3>
                <p className={`mt-4 text-gray-600 ${para.readMore ? 'block' : 'line-clamp-3'}`}>{para.text}</p>
                {/* Read More Button */}
                <button onClick={() => toggleReadMore(index)} className="text-gray-600 mt-4">
                  {
                    para.text.length > 170 ?
                    (para.readMore ? 'Show Less' : 'Read More' ) : null}
                </button>
              </motion.section>
            ))}
          </div>
        </div>
<div >
      <h2 className="text-center text-white text-4xl font-bold">Meet the Co-Founders</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cofounders.map((cofounder, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <motion.img
              src={cofounder.photo}
              alt={cofounder.name}
              className="w-36 h-48 md:w-64 md:h-96 object-cover rounded-full m-4"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{cofounder.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{cofounder.role}</p>
              <p className="text-gray-700">{cofounder.timeline}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      {/* Carousel Items */}
      <div className="py-20 mt-8 md:mt-48" id="projects">
          <div className="text-center mb-8">
            <motion.h2 className="text-3xl text-lg tracking-widest">Projects</motion.h2>
          </div>
      {/* Carousel Items */}
      <div className="flex space-x-4 overflow-hidden w-full justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-80 rounded-5xl cursor-pointer sm:w-96 md:w-1/3 lg:w-1/4 h-36 md:h-96 rounded-xl bg-black backdrop-blur-lg transition-all duration-500 transform ${
              index === activeIndex
                ? "scale-100 z-10 " // Active card centered and larger
                : "scale-90 blur-md" // Neighbors blurred
            }`}
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
            <div className="absolute bottom-4 left-4 text-white space-y-2">
            <h3 className="text-sm md:text-lg font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <button onClick={() => alert('should redirect to the respective page')}>Learn More</button>
          </div>
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

        {/* Overlay for Title and Description */}
        <div className="absolute bottom-4 left-6 right-6 bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">
            {images[currentIndex].title}
          </h3>
          <p className="text-gray-600">{images[currentIndex].description}</p>
        </div>

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
    <section id="contact" className="mt-16 md:mt-36 text-black flex items-center justify-center px-6 bg-[#003CA6]">
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
