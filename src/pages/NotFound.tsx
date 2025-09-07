import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden p-4 sm:p-6">
      {/* Floating Sakura Petals */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-60 bg-pink-300"
          style={{
            width: Math.random() * 12 + 8 + "px", // petals random size
            height: Math.random() * 12 + 8 + "px",
          }}
          initial={{ y: -20, x: Math.random() * window.innerWidth }}
          animate={{ y: "100vh", x: `+=${Math.random() * 100 - 50}` }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="text-center p-6 md:p-8 bg-white/80 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10">
        {/* Cute anime mascot */}
        <img
          src="https://i.pinimg.com/originals/d9/e6/e0/d9e6e0126e9cf8ca543a1ca26c9b176c.gif"
          alt="Chibi Mascot"
          className="mx-auto mb-4 w-20 sm:w-28 md:w-32"
        />

        {/* 404 Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-500 drop-shadow-md mb-2">
          404
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-1">
          Oops! Page not found
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 italic">
          (ページが見つかりません)
        </p>

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-md transition-all duration-300"
        >
          🏠 Take me home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
