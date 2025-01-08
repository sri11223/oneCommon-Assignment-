import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Segments() {
  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-4">
        {/* Custom Bar with Heading */}
        <motion.div
          style={{
            backgroundColor: "#D3D3D3",
            width: "100%",
            maxWidth: "1450px",
            height: "64px",
            marginTop: "60px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: "10",
            borderRadius: "10px",
            paddingLeft: "16px",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TbTriangleSquareCircleFilled style={{ fontSize: "32px" }} />

          <h2
            style={{
              color: "#030303",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Segments
          </h2>
        </motion.div>

        {/* Segments Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"
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
          {[
            { title: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
            { title: "Institutional", img: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80" },
            { title: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
          ].map((segment, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={segment.img}
                alt={segment.title}
                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-4">{segment.title}</h3>
                <button className="bg-black text-white px-6 py-2 rounded-md w-fit hover:bg-gray-700 transition-all duration-300">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .text-center {
            text-align: center;
          }
          .w-full {
            width: 100%;
          }
          .h-80 {
            height: 250px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .h-80 {
            height: 300px;
          }
        }

        @media (min-width: 769px) {
          .h-80 {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
