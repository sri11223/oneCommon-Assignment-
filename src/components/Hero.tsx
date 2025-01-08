export default function Hero() {
  return (
    <div className="relative flex items-start justify-center bg-gray-70">
      {/* Container */}
      <div className="relative w-full max-w-9xl h-[60vh] mt-3 mx-4 md:mx-12 md:h-[70vh] bg-gray-50 shadow-lg rounded-lg overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-20">
          <h1 className="text-7xl md:text-5xl font-bold text-white mb-4 leading-tight animate-fade-in">
            Create
            <br />
            <span className="text-gray-300">Comfort</span>
          </h1>
          <p className="text-4xl md:text-2xl text-gray-300 mb-6 animate-fade-in-delay">
            Make your home look elegant
          </p>
          <button className="bg-white text-xl text-black px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition duration-300 animate-fade-in-delay">
            Find more
          </button>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-fade-out {
          animation: fadeOut 1s ease-in-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-in-out;
        }

        .animate-fade-out-delay {
          animation: fadeOut 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
