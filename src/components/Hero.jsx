import { motion } from "framer-motion";
import profile from "../assets/images/profile.jpg";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
    FaEnvelope,
} from "react-icons/fa6";

function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 text-white flex items-center pt-28">
            <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-lg mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight">
                        MUHAMMED-
                        <br />
                        AWWAL
                        <br />
                        MUMEENAT
                    </h1>

                    <div className="mt-6 space-y-2">
                        <p className="text-2xl font-semibold text-cyan-400">
                            Machine Learning Enthusiast
                        </p>

                        <p className="text-xl text-slate-300">
                            AI Engineer
                        </p>

                        <p className="text-xl text-slate-300">
                            Software Engineer
                        </p>
                    </div>

                    <p className="mt-8 text-slate-400 max-w-xl leading-8">
                        Building intelligent solutions that bridge Machine Learning,
                        Artificial Intelligence and modern Software Engineering to solve
                        real-world problems.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold transition">
                            View Projects
                        </button>

                        <button className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition">
                            Download CV
                        </button>
                    </div>

                    <div className="flex gap-5 mt-10 text-2xl">
                        <a href="https://github.com/Venum9" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://www.linkedin.com/in/mumeenat-muhammed-awwal-87a759306" target="_blank" rel="noreferrer"><FaLinkedin /></a>

                        <a href="https://web.facebook.com/profile.php?id=100077919194740" target="_blank" rel="noreferrer"><FaFacebook /></a>

                        <a href="https://x.com/venum_09" target="_blank" rel="noreferrer"><FaXTwitter /></a>

                        <a href="mailto:muhammedmumeenat@gmail.com"><FaEnvelope /></a>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

                        <img
                            src={profile}
                            alt="Mumeenat"
                            className="relative w-[400px] h-[400px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
                        />

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;