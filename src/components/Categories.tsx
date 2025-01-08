import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const categories = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80' },
  { name: 'Storage', image: 'https://plus.unsplash.com/premium_photo-1733514691461-f5a7efbe316b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmFnZSUyMGluJTIwYSUyMGhvdXNlfGVufDB8fDB8fHww' },
  { name: 'Study Room', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80' },
  { name: 'Garden', image: 'https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyZGVufGVufDB8fDB8fHww' },
  { name: 'Bathroom', image: 'https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D' },
  { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Balcony', image: 'https://images.unsplash.com/photo-1667992403195-d2241a40ca2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsY29ueXxlbnwwfHwwfHx8MA%3D%3D' },
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      let newPosition = direction === 'left'
        ? currentScroll + scrollAmount  // Move right on left arrow click
        : currentScroll - scrollAmount; // Move left on right arrow click

      // Looping functionality (if scrolled past the max or min, it wraps around)
      if (newPosition < 0) newPosition = maxScroll;
      if (newPosition > maxScroll) newPosition = 0;

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth', // Smooth transition
      });
    }
  };

  return (
    <section className="py-5 bg-gray-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Product Categories</h2>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 sm:left-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all transform duration-300 ease-in-out z-10 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Categories Container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex-none w-full sm:w-64 transform hover:scale-105 transition-transform snap-center animate-fade-in-category"
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 sm:right-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all transform duration-300 ease-in-out z-10 focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .snap-center {
            scroll-snap-align: center;
          }
        }

        @keyframes fadeInCategory {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInCategory 1s ease-in-out;
        }

        .animate-fade-in-category {
          animation: fadeInCategory 1.2s ease-in-out;
        }
      `}</style>
    </section>
  );
}
