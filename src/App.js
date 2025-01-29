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
  const services = [
    "UX/UI", "Web Development", "3D Animation", "Motion Graphics",
    "Creative Design & Branding", "Content Creation", "Video/Photo Production",
    "PR & Events", "Influencer Marketing", "Media Buying"
  ];
  const brands = [
    { name: "Brand 1", logo: levelshoes },
    { name: "Brand 2", logo: puma },
    { name: "Brand 3", logo: cham },
    // Add more brands as needed
  ];
  const [currIndex, setCurrIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(brands);

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
  // 
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } }
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
  <div className="relative z-10 mt-36 w-full flex sm:justify-start md:justify-end">
  <div className="mt-8 flex space-x-4 mx-2">
    <motion.button
      className="px-2 md:px-6 py-3 text-lg font-semibold tracking-widest text-black border-2 border-black bg-white rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-500 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleScrollToSection(1)}
    >
      Learn More
    </motion.button>
    <motion.button
      className="px-2 md:px-6 py-3 text-lg font-semibold text-white tracking-widest bg-black border-2 border-black rounded-xl shadow-lg hover:bg-white hover:text-black transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => { handleScrollToSection(3); closeMenu(); }}
    >
      Reach out!
    </motion.button>
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
        <div className=" mt-16" id="about-us">
          <div className="flex justify-center">
              <motion.section
                id="about-us"
                className="text-center w-full" // Fixed width for paragraphs
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="text-sm sm:text-6xl md:block font-bold text-gray-800">Our Bench Mark Is Excellence</h3>
                <div className="w-full flex justify-center">
                  <p className="mt-4 text-gray-600 w-[500px]">With over ten years of experience in online and offline advertising, our team carries their passion with pride, delivering exceptional results and innovative solutions</p>
                </div>
              </motion.section>
          </div>
        </div>
        {/* here # 1 */}
        <section className="relative text-[#E0E0E0] py-20 px-6 rounded-xl">
      {/* Elegant Background Animation */}
      <div className="absolute inset-0  opacity-40 rounded-xl" />

      <motion.h2
        className="text-6xl font-extrabold text-center text-black tracking-wider relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Our Services
      </motion.h2>

      {/* Service Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#181818] p-6 rounded-2xl shadow-xl flex items-center justify-center text-center text-xl font-semibold cursor-pointer border border-[#333] hover:bg-[#222] transition-all duration-300"
          >
            {service}
          </motion.div>
        ))}
      </div>
    </section>
        {/*  */}
      

      {/* Carousel Items */}
      <div id="projects">
          <motion.h2
            className="text-6xl font-extrabold text-center text-black tracking-wider relative z-10 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Projects
          </motion.h2>
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
    <div>
      <motion.h2
        className="text-6xl font-extrabold text-center text-black tracking-wider relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        Clients
      </motion.h2>
      <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(currIndex / brands.length) * 100}%)`,
        }}
      >
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
      </div>
    </div>
    </div>
    <div>
    < motion.h2
        className="text-6xl font-extrabold text-center text-black tracking-wider relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Meet the Heads
      </motion.h2>
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
    <section id="contact" className="mt-16 md:mt-36 text-black flex items-center justify-center px-6">
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
