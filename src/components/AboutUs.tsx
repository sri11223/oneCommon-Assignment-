import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover the epitome of luxury living with our exclusive furniture collection. Each piece is meticulously crafted to bring sophistication and elegance to your home.
        </motion.p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Column 1: Inspired Living and Easy Shopping */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <h3 className="text-5xl font-bold mb-2">Inspired Living</h3>
              <p className="text-gray-600 text-2xl">
                Discover furniture that combines modern elegance with everyday comfort, crafted to make your home a reflection of your unique style.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <h3 className="text-5xl font-bold mb-2">Easy Shopping</h3>
              <p className="text-gray-600 text-2xl">
                From quick browsing to fast delivery and easy assembly, we simplify every step of finding and enjoying your perfect furniture.
              </p>
            </motion.div>
          </motion.div>

          {/* Column 2: Exceptional Savings and Sustainable Options */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <h3 className="text-5xl font-bold mb-2">Exceptional Savings</h3>
              <p className="text-gray-600 text-2xl">
                By bridging the gap between you and trusted furniture makers, we bring you stunning pieces at prices that fit your budget.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <h3 className="text-5xl font-bold mb-2">Sustainable Options</h3>
              <p className="text-gray-600 text-2xl">
                Choose from sustainable furniture options crafted with the planet in mind—because style should never come at the cost of the environment.
              </p>
            </motion.div>
          </motion.div>

          {/* Images Column */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
          >
            {["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg"
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
