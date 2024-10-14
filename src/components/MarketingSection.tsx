import React, { useState, useEffect } from 'react';

const ImageBackground = ({ imageUrl, className = "", fitMode = "cover", width = "488px" }) => {
  return (
    <div
      className={`
        relative z-0 h-[420px] max-h-full flex-shrink-0 text-center
        ${className}
      `}
      style={{ width: width }}
    >
      <img
        src={imageUrl}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-${fitMode} object-center z-[-1]`}
      />
    </div>
  );
};

const ImageSlider = ({ images, fitMode = "cover", width = "488px" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative" style={{ width: width }}>
      <ImageBackground 
        imageUrl={images[currentIndex]}
        className="flex-shrink-0 transition-opacity duration-500"
        fitMode={fitMode}
        width="100%"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function MarketingSection({
  className = "",
}: MarketingSectionProps) {
  const sliderImages = [
    "/assets/1.png",
    "/assets/2.png"
  ];

  return (
    <div
      className={`relative z-0 flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch px-4 sm:px-8 lg:px-[59px] pb-12 pt-9 text-center text-white max-w-[618px] ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover object-center"
          src="/assets/bg-derecha.png"
          alt="Background"
          loading="lazy"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Image Slider */}
        <div className="z-[2] flex items-center justify-center pl-[3.3px] mb-8 w-full">
          <ImageSlider images={sliderImages} fitMode="contain" width="100%" />
        </div>

        {/* Title */}
        <div className="z-[3] flex flex-col justify-center self-stretch pt-3.5 max-w-[500px]">
          <h2 className="text-center text-4xl font-extrabold leading-[1.1] tracking-[0px]">
            Get better with money
          </h2>
        </div>

        {/* Description */}
        <div className="z-[4] flex items-center justify-center self-stretch text-sm font-medium leading-normal max-w-[500px]">
          <p className="text-center">
            TrustWise helps you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a{' '}
            <span className="font-extrabold text-yellow-400">$20 </span>
            bonus when you receive qualifying direct deposits
          </p>
        </div>
      </div>
    </div>
  );
}

interface MarketingSectionProps {
  className?: string;
}