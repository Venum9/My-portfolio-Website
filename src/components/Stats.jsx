import { motion } from "framer-motion";

const stats = [
    {
        number: "10+",
        title: "Projects",
    },
    {
        number: "3+",
        title: "Programs",
    },
    {
        number: "8+",
        title: "Technologies",
    },
    {
        number: "2029",
        title: "Expected Graduation",
    },
];

function Stats() {
    return (
        <section className="bg-slate-950 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition-all duration-500"
                        >
                            <h2 className="text-4xl font-bold text-cyan-400">
                                {item.number}
                            </h2>

                            <p className="text-slate-400 mt-3">
                                {item.title}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;