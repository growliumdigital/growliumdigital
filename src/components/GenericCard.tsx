
"use client";

interface Items {
  icon?: React.ReactNode;
  heading: string;
  description: string;
}

interface CardItemProps {
  title?: string;
  items: Items[];
  className?:string;
}
export default function GenericCard({ title, items, className}: CardItemProps) {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
         {title}
        </h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto my-10"></div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-2 cursor-pointer ${className}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-blue-500 rounded-lg py-6 px-8
                          hover:shadow-lg hover:scale-105 
                         transition-all duration-300 ease-in-out animate-slide-up
                         group"
            >
              {/* Icon Container */}
              <div
                className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto
                              group-hover:bg-blue-600 transition-colors duration-300"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-center text-xl mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {item.heading}
              </h3>

              {/* Description */}
              <p className=" text-xs text-gray-600 text-center md:text-base group-hover:text-gray-800 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
