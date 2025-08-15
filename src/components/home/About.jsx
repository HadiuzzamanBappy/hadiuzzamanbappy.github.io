import React, { useContext } from 'react'; // 1. Import useContext
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
// THE FIX: Import ThemeToggle using curly braces for a named import.
import { ThemeToggle } from '../common/ThemeToggle';
import { CursorContext } from '../../context/CursorContext'; // 2. Import the CursorContext

// This function calls the Calendly API, which should be loaded from public/index.html
const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/hbappy79/contact-me' });
  } else {
    console.error('Calendly script not loaded.');
  }
};

const BappyNameSvg = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "tween",
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <span className="inline-block mx-1">
      <motion.svg
        width="71" height="20" viewBox="0 0 71 20"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <g className="lines">
          {/* SVG path data */}
          <motion.path variants={draw} d="M70.8113 3.25977L64.2113 19.3798H62.3313L64.4913 14.0998L60.0713 3.25977H62.0913L65.5313 12.1398L68.9313 3.25977H70.8113Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <motion.path variants={draw} d="M47.6755 5.27959C48.0355 4.65292 48.5688 4.13292 49.2755 3.71959C49.9955 3.29292 50.8288 3.07959 51.7755 3.07959C52.7488 3.07959 53.6288 3.31292 54.4155 3.77959C55.2155 4.24626 55.8421 4.90626 56.2955 5.75959C56.7488 6.59959 56.9755 7.57959 56.9755 8.69959C56.9755 9.80626 56.7488 10.7929 56.2955 11.6596C55.8421 12.5263 55.2155 13.1996 54.4155 13.6796C53.6288 14.1596 52.7488 14.3996 51.7755 14.3996C50.8421 14.3996 50.0155 14.1929 49.2955 13.7796C48.5888 13.3529 48.0488 12.8263 47.6755 12.1996V19.4196H45.8555V3.25959H47.6755V5.27959ZM55.1155 8.69959C55.1155 7.87292 54.9488 7.15292 54.6155 6.53959C54.2821 5.92626 53.8288 5.45959 53.2555 5.13959C52.6955 4.81959 52.0755 4.65959 51.3955 4.65959C50.7288 4.65959 50.1088 4.82626 49.5355 5.15959C48.9755 5.47959 48.5221 5.95292 48.1755 6.57959C47.8421 7.19292 47.6755 7.90626 47.6755 8.71959C47.6755 9.54626 47.8421 10.2729 48.1755 10.8996C48.5221 11.5129 48.9755 11.9863 49.5355 12.3196C50.1088 12.6396 50.7288 12.7996 51.3955 12.7996C52.0755 12.7996 52.6955 12.6396 53.2555 12.3196C53.8288 11.9863 54.2821 11.5129 54.6155 10.8996C54.9488 10.2729 55.1155 9.53959 55.1155 8.69959Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <motion.path variants={draw} d="M32.1599 5.27959C32.5199 4.65292 33.0532 4.13292 33.7599 3.71959C34.4799 3.29292 35.3132 3.07959 36.2599 3.07959C37.2332 3.07959 38.1132 3.31292 38.8999 3.77959C39.6999 4.24626 40.3265 4.90626 40.7798 5.75959C41.2332 6.59959 41.4599 7.57959 41.4599 8.69959C41.4599 9.80626 41.2332 10.7929 40.7798 11.6596C40.3265 12.5263 39.6999 13.1996 38.8999 13.6796C38.1132 14.1596 37.2332 14.3996 36.2599 14.3996C35.3265 14.3996 34.4998 14.1929 33.7798 13.7796C33.0732 13.3529 32.5332 12.8263 32.1599 12.1996V19.4196H30.3398V3.25959H32.1599V5.27959ZM39.5999 8.69959C39.5999 7.87292 39.4332 7.15292 39.0999 6.53959C38.7665 5.92626 38.3132 5.45959 37.7399 5.13959C37.1799 4.81959 36.5599 4.65959 35.8799 4.65959C35.2132 4.65959 34.5932 4.82626 34.0199 5.15959C33.4599 5.47959 33.0065 5.95292 32.6599 6.57959C32.3265 7.19292 32.1599 7.90626 32.1599 8.71959C32.1599 9.54626 32.3265 10.2729 32.6599 10.8996C33.0065 11.5129 33.4599 11.9863 34.0199 12.3196C34.5932 12.6396 35.2132 12.7996 35.8799 12.7996C36.5599 12.7996 37.1799 12.6396 37.7399 12.3196C38.3132 11.9863 38.7665 11.5129 39.0999 10.8996C39.4332 10.2729 39.5999 9.53959 39.5999 8.69959Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <motion.path variants={draw} d="M14.1445 8.69959C14.1445 7.57959 14.3712 6.59959 14.8245 5.75959C15.2779 4.90626 15.8979 4.24626 16.6845 3.77959C17.4845 3.31292 18.3712 3.07959 19.3445 3.07959C20.3045 3.07959 21.1379 3.28626 21.8445 3.69959C22.5512 4.11292 23.0779 4.63292 23.4245 5.25959V3.25959H25.2645V14.2196H23.4245V12.1796C23.0645 12.8196 22.5245 13.3529 21.8045 13.7796C21.0979 14.1929 20.2712 14.3996 19.3245 14.3996C18.3512 14.3996 17.4712 14.1596 16.6845 13.6796C15.8979 13.1996 15.2779 12.5263 14.8245 11.6596C14.3712 10.7929 14.1445 9.80626 14.1445 8.69959ZM23.4245 8.71959C23.4245 7.89292 23.2579 7.17292 22.9245 6.55959C22.5912 5.94626 22.1379 5.47959 21.5645 5.15959C21.0045 4.82626 20.3845 4.65959 19.7045 4.65959C19.0245 4.65959 18.4045 4.81959 17.8445 5.13959C17.2845 5.45959 16.8379 5.92626 16.5045 6.53959C16.1712 7.15292 16.0045 7.87292 16.0045 8.69959C16.0045 9.53959 16.1712 10.2729 16.5045 10.8996C16.8379 11.5129 17.2845 11.9863 17.8445 12.3196C18.4045 12.6396 19.0245 12.7996 19.7045 12.7996C20.3845 12.7996 21.0045 12.6396 21.5645 12.3196C22.1379 11.9863 22.5912 11.5129 22.9245 10.8996C23.2579 10.2729 23.4245 9.54626 23.4245 8.71959Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <motion.path variants={draw} d="M7.5386 7.03979C8.04527 7.11979 8.50526 7.32645 8.91859 7.65979C9.34526 7.99312 9.67859 8.40645 9.91859 8.89979C10.1719 9.39312 10.2986 9.91979 10.2986 10.4798C10.2986 11.1865 10.1186 11.8265 9.75861 12.3998C9.39861 12.9598 8.87194 13.4065 8.1786 13.7398C7.4986 14.0598 6.69194 14.2198 5.75861 14.2198H0.558594V0.279785H5.55859C6.50526 0.279785 7.31194 0.439785 7.97861 0.759785C8.64527 1.06645 9.14527 1.48645 9.47861 2.01978C9.81194 2.55312 9.97861 3.15312 9.97861 3.81979C9.97861 4.64645 9.75193 5.33312 9.2986 5.87979C8.8586 6.41312 8.27194 6.79979 7.5386 7.03979ZM2.3786 6.29979H5.4386C6.29193 6.29979 6.95193 6.09979 7.41859 5.69979C7.88526 5.29979 8.11861 4.74645 8.11861 4.03979C8.11861 3.33312 7.88526 2.77979 7.41859 2.37979C6.95193 1.97979 6.27861 1.77979 5.39861 1.77979H2.3786V6.29979ZM5.5986 12.7198C6.50527 12.7198 7.21193 12.5065 7.7186 12.0798C8.22526 11.6531 8.47861 11.0598 8.47861 10.2998C8.47861 9.52645 8.21194 8.91979 7.6786 8.47979C7.14527 8.02645 6.43194 7.79979 5.5386 7.79979H2.3786V12.7198H5.5986Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </g>
      </motion.svg>
    </span>
  );
};

const About = () => {
  // 3. Get the function to change the cursor's variant
  const { setCursorVariant } = useContext(CursorContext);

  // 4. Create the event handlers
  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');
  return (
    <div
      className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col h-full w-full"
      // 5. Apply handlers to the main container for a better UX
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-full text-sm">
          <span className="mr-2 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
          Available
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <span className="mr-2">Resume</span>
          <a // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="/Resume.pdf" download className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <FiDownload />
          </a>
        </div>
      </div>

      <p className="flex-grow leading-relaxed text-justify text-gray-700 dark:text-gray-300">
        Hi, I'm <BappyNameSvg /> — a passionate designer with a knack for front-end development across web and mobile platforms. I specialize in creating intuitive, user-friendly designs that don’t just look great but truly connect with people. Let’s team up to craft something amazing together!
      </p>

      <div className="flex justify-between items-center mt-4">
        {/* The ThemeToggle button on the bottom-left */}
        <ThemeToggle />

        {/* The contact icons on the bottom-right */}
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
          <a href="mailto:hbappy79@gmail.com" className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <FiMail />
          </a>
          <a href="https://wa.me/1521318670" target="_blank" // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <FaWhatsapp />
          </a>
          <button onClick={openCalendly}
          // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
             className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-slate-700 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            <FiPhone />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;