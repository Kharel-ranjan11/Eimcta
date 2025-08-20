// src/components/ParallaxBanner.jsx
import { Parallax } from "react-parallax";

const ParallaxBanner = ({ image, title, children }) => {
  return (
    <div className="relative w-full">
      <Parallax
        bgImage={image}
        bgImageAlt="Parallax Background"
        strength={200}  // More subtle parallax effect
        bgImageStyle={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        className="!h-auto"  // Important: Override default height
        bgClassName="brightness-50"
        contentClassName="flex items-center justify-center min-h-[70vh] px-4 py-10"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            {children}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;