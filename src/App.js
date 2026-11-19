import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider, useRouter } from "./context/RouterContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import ContactPage from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import { FiArrowUp } from "react-icons/fi";
import "./App.css";

function AppContent() {
  const { currentPath } = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route resolver
  const renderCurrentPage = () => {
    const path = currentPath.toLowerCase();

    if (path === "/about") {
      return <About />;
    }
    if (path === "/process") {
      return <Process />;
    }
    if (path === "/contact") {
      return <ContactPage />;
    }
    if (path === "/get-started") {
      return <GetStarted />;
    }

    // Default to Home (handles "/", "/services", etc.)
    return <Home />;
  };

  return (
    <div className="App">
      {/* Background Ambient Glows */}
      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>
      <div className="ambient-glow ambient-glow-3"></div>

      {/* Main Global Navigation */}
      <Navbar />

      {/* Dynamic Active Page */}
      <main className="main-content" key={currentPath}>
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <FiArrowUp />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
