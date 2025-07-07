// src/components/ParallaxBanner.jsx
import { Parallax } from "react-parallax";

const ParallaxBanner = ({ image, title, children }) => {
  return (
    <div>

    
    <Parallax
      bgImage={image}
      bgImageAlt="Parallax Background"
      strength={600}
      blur={{ min: -10, max: 10 }}
      className="my-0"
      bgClassName="brightness-50"
      contentClassName="flex items-center justify-center min-h-[400px] px-4 py-10"
    >
      <div className="relative w-full h-full">
        <div className=" inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10">{children}</div>
      </div>
    </Parallax>   
    </div>
  );
};

export default ParallaxBanner;
