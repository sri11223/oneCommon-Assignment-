import { motion } from 'framer-motion';
import { Package, Palette, CheckCircle, Scissors } from 'lucide-react';

const features = [
  {
    icon: <Package className="w-12 h-12" />,
    title: '500+ Collections',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.'
  },
  {
    icon: <Scissors className="w-12 h-12" />,
    title: '300+ Fabrics',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.'
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: 'Top-notch Quality',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.'
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: 'Colour and Length customization',
    description: 'Our journey begins with a comprehensive understanding of your unique style and space requirements.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Vibrer Stands Out?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
