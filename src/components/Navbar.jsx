import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["About", "Skills", "Projects", "Contact"];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-bold text-cyan-400">&lt;MAM /&gt;</h1>
                    <p className="text-xs text-slate-400">
                        Machine Learning Enthusiast
                    </p>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-slate-200 font-medium">
                    {links.map((link) => (
                        <li
                            key={link}
                            className="cursor-pointer hover:text-cyan-400 transition duration-300"
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-5">
                    <a
                        href="https://github.com/Venum9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl hover:text-cyan-400 transition" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mumeenat-muhammed-awwal-87a759306"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl text-cyan-400 hover:scale-110 transition" />
                    </a>

                    <button
                        className="px-5 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition shadow-lg"
                    >
                        Resume
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                    {links.map((link) => (
                        <div
                            key={link}
                            className="px-6 py-5 text-slate-200 hover:bg-slate-800"
                        >
                            {link}
                        </div>
                    ))}
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;