import { ChevronLeft, ChevronRight } from "lucide-react";
import { GiSofa } from "react-icons/gi";
import { useState, useEffect } from "react";

const products = [
  { name: "Luxury Bed Set", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80" },
  { name: "Luxury Sofa Set", image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80" },
  { name: "Luxury Dining Table", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80" },
  { name: "Elegant Candle Set", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80" },
  { name: "Modern Wardrobe", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80" },
  { name: "Luxury Office Desk", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80" },
  { name: "Stylish Bookshelf", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80" },
  { name: "Modern TV Unit", image: "https://plus.unsplash.com/premium_photo-1664298303037-42568df86daa?w=500&auto=format&fit=crop&q=60" },
  { name: "Elegant Armchair", image: "https://images.unsplash.com/photo-1588726506783-3da6cd3dbb30?w=500&auto=format&fit=crop&q=60" },
  { name: "Designer Lamp", image: "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?w=500&auto=format&fit=crop&q=60" },
  { name: "Contemporary Rug", image: "https://images.unsplash.com/photo-1463620910506-d0458143143e?w=500&auto=format&fit=crop&q=60" },
  { name: "Luxury Curtains", image: "https://images.unsplash.com/photo-1560184897-1ee3713708ee?w=500&auto=format&fit=crop&q=60" },
  { name: "Designer Clock", image: "https://images.unsplash.com/photo-1679165806491-56e5f18d60a6?w=500&auto=format&fit=crop&q=60" },
  { name: "Artistic Vase", image: "https://images.unsplash.com/photo-1722356541579-c5c6b0a42789?w=500&auto=format&fit=crop&q=60" },
  { name: "Elegant Mirror", image: "https://images.unsplash.com/photo-1526412039843-32a68b91c560?w=500&auto=format&fit=crop&q=60" },
  { name: "Luxury Bedside Table", image: "https://images.unsplash.com/photo-1589591830600-7ba977995a5b?w=500&auto=format&fit=crop&q=60" },
];

export default function TrendingProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(8);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % products.length);
  };

  const handlePrevious = () => {
    setStartIndex((prev) => (prev - itemsPerPage + products.length) % products.length);
  };

  const visibleProducts = [
    ...products,
    ...products,
  ].slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-5 bg-gray-100 relative">
      {/* Color Bar */}
      <div
        style={{
          backgroundColor: "#D3D3D3",
          width: "100%",
          maxWidth: "1450px",
          height: "64px",
          marginTop: "60px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          borderRadius: "10px",
        }}
      >
        <div className="flex items-center gap-4">
          <GiSofa style={{ fontSize: "32px", color: "#000" }} />
          <h2 className="text-xl font-bold text-black">Trending Products</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={handlePrevious} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200">
            <ChevronLeft />
          </button>
          <button onClick={handleNext} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mt-10">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${itemsPerPage === 8 ? "lg:grid-cols-4" : ""} gap-6`}>
          {visibleProducts.map((product, index) => (
            <div key={index} className="relative group bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                  Enquire Now
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
