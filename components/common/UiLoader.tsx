import { motion } from "framer-motion";

export default function UiLoader() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            {/* Background glow effect */}
            <div className="pointer-events-none fixed top-1/2 mb-20 ml-32 left-1/2 -translate-x-1/2 translate-y-1/2 w-52 h-28 bg-fuchsia-500/30 blur-[120px]"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-80 h-80 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full shadow-xl border border-gray-700 flex items-center justify-center"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0"
                >
                    {[...Array(12)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-2 h-2 bg-purple-400 rounded-full"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `rotate(${
                                    index * 30
                                }deg) translateY(-36px)`,
                            }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.1,
                            }}
                        />
                    ))}
                </motion.div>

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg
                        className="w-40 h-40"
                        viewBox="0 0 128 128"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="64"
                            cy="64"
                            r="64"
                            fill="url(#solana-gradient)"
                        />
                        <path
                            d="M44.5 36L64 28L83.5 36L103 44V84L83.5 92L64 100L44.5 92L25 84V44L44.5 36Z"
                            fill="white"
                        />
                        <defs>
                            <linearGradient
                                id="solana-gradient"
                                x1="0"
                                y1="0"
                                x2="128"
                                y2="128"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9945FF" />
                                <stop offset="1" stopColor="#14F195" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <div
                        className="w-full h-full rounded-full border-4 border-transparent border-t-purple-400 border-r-green-300"
                        style={{ borderRadius: "100%" }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
