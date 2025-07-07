import ImageCarousel from "../utilities/caro";
import ParallaxBanner from "../utilities/parallelx";
export default function Home() {
  const parallaxImage1 = 'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?q=80&w=2070&auto=format&fit=crop';
  const parallaxImage2 = 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop';
  const parallaxImage3 = 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop';
  const parallaxImage4 = 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop';

  return (
    
       <section className="p-0 ">
      
    
    
      <ImageCarousel/>

      <ParallaxBanner image={parallaxImage1}>
        <div className="h-[500px] flex items-center justify-center">
        <div className="text-center bg-black/50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-white">Section One</h2>
          </div>
          </div>
          </ParallaxBanner>
          
          <ParallaxBanner image={parallaxImage2}>
          <div className="h-[500px] flex items-center justify-center">
          <div className="text-center bg-black/50 p-8 rounded-lg">
          <h2 className="text-4xl font-bold text-white">Section Two</h2>
          </div>
          </div>
          </ParallaxBanner> 
     
          </section>

  );
}
