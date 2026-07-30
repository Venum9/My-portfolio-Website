import { motion } from "framer-motion";
import {
    FaUserGraduate,
    FaLaptopCode,
    FaBrain,
    FaRocket,
} from "react-icons/fa";

const cards = [
    {
        icon: <FaUserGraduate size={28} />,
        title: "Who I Am",
        text: "I am a Computer Science student passionate about creating impactful technology through Machine Learning, Artificial Intelligence, and Software Engineering.",
    },
    {
        icon: <FaLaptopCode size={28} />,
        title: "What I Do",
        text: "I develop responsive web applications, build intelligent solutions, and enjoy transforming ideas into real products.",
    },
    {
        icon: <FaBrain size={28} />,
        title: "Currently Learning",
        text: "I'm continuously improving my knowledge in Machine Learning, Deep Learning, React, Python, and modern software engineering practices.",
    },
    {
        icon: <FaRocket size={28} />,
        title: "My Mission",
        text: "To build innovative AI-powered solutions that solve meaningful real-world problems while continuously growing as an engineer.",
    },
];

function About() {
    return (
        <section className="bg-slate-950 py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center">
                        <p className="text-cyan-400 tracking-widest uppercase text-sm">
                            Get To Know Me
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
                            About Me
                        </h2>

                        <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>
                    </div>
                    <p className="text-slate-400 text-center max-w-4xl mx-auto mt-8 leading-9 text-lg">
                        I'm <span className="text-cyan-400 font-semibold">Muhammed-Awwal Mumeenat</span>,
                        a Computer Science student passionate about building intelligent solutions
                        through <span className="text-white">Machine Learning</span>,
                        <span className="text-white"> Artificial Intelligence</span>, and
                        <span className="text-white"> Software Engineering</span>.
                        I enjoy turning ideas into practical applications while continuously
                        learning, collaborating, and growing as a developer.
                    </p>                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mt-20">

                    {cards.map((card, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .15 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                            className="group bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition duration-500">
                                {card.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                {card.title}
                            </h3>

                            <p className="text-slate-400 leading-8">
                                {card.text}
                            </p>

                        </motion.div>


                    )
                    )}
                    <div className="mt-20 text-center">

                        <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">
                            MY PHILOSOPHY
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mt-5 max-w-3xl mx-auto leading-relaxed">
                            "Technology becomes meaningful when it solves real problems and improves lives."
                        </h3>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;