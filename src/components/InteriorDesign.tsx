import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  "https://plus.unsplash.com/premium_photo-1661877360520-f70603f7c0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW50ZXJpb3IlMjBEZXNpZ25pbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnNoaW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
];

export default function InteriorDesign() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Interior Designing</h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Kitchen Interior - Let us help you design your kitchen. Leave the worry of mixing and matching furniture behind. Set up your space confidently by purchasing the complete look for a seamless experience.
        </p>
        <button className="block mx-auto bg-black text-white px-6 py-2 rounded-md mb-8 hover:bg-gray-800 transition-all">
          Know More
        </button>

        <div className="relative flex items-center justify-center overflow-hidden h-[300px] md:h-[400px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-[300px] md:h-[400px] flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="w-4/5 md:w-3/5 h-4/5 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
