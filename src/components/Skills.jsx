import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
    const categories = [
        { title: "Languages", items: skills.languages },
        { title: "Frontend", items: skills.frontend },
        { title: "AI / ML", items: skills.ai },
        { title: "Tools", items: skills.tools },
    ];

    return (
        <section className="bg-slate-950 py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-cyan-400 uppercase tracking-widest text-sm">
                        My Tech Stack
                    </p>

                    <h2 className="text-5xl font-bold text-white mt-3">
                        Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {categories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-white transition duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;