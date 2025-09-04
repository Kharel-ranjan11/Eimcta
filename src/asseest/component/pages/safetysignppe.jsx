import React from "react";

// --- CUSTOM STYLE FOR 3D HOVER EFFECTS ---
const CustomStyles = () => (
    <style>{`
        .perspective-parent {
            perspective: 1000px;
        }
        .card-hover-effect {
            transition: transform 0.3s ease-out;
            transform-style: preserve-3d;
        }
        .card-hover-effect:hover {
            transform: translateY(-8px) rotateX(2deg) rotateY(-1deg) scale(1.03);
        }
    `}</style>
);


// --- HELPER & ANIMATION COMPONENTS ---

/**
 * A flexible component to animate children when they scroll into view.
 * Uses the Intersection Observer API and configurable Tailwind CSS classes.
 */
const AnimateOnScroll = ({ children, delay = 0, initial = "opacity-0 translate-y-10", className = "" }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Delay is in seconds, convert to ms for setTimeout
                    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
                    observer.unobserve(entry.target); // Clean up observer
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : initial
            }`}
        >
            {children}
        </div>
    );
};

/**
 * A dedicated component for section headers that includes an animated underline.
 */
const SectionHeader = ({ title }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef) };
    }, []);

    return (
        <div ref={ref} className="text-center mb-12">
            <h2 className={`relative inline-block text-3xl font-bold text-amber-900 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {title}
                <span 
                    className={`absolute bottom-[-0.5rem] left-1/2 -translate-x-1/2 h-1 bg-amber-400 origin-center transition-transform duration-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} 
                    style={{ transitionDelay: '300ms', width: '25%' }} 
                />
            </h2>
        </div>
    );
};


/**
 * A placeholder for a video player component.
 */
const VideoPlayer = () => (
  <AnimateOnScroll delay={0.2} initial="opacity-0 scale-95">
    <div className="mt-20 text-center">
      <SectionHeader title="Learn More About Workplace Safety" />
      <div className="relative aspect-video max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-gray-900 border-4 border-amber-200">
        <img 
          src="https://placehold.co/1280x720/0a0a0a/f59e0b?text=Safety+Training+Video" 
          alt="Safety Training Video Placeholder" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <button
            aria-label="Play Video"
            className="w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w.org/2000/svg" className="w-10 h-10 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.555 15.055a.75.75 0 01.09-1.055l8.5-6.5a.75.75 0 011.056.91l-8.5 6.5a.75.75 0 01-1.146.145z" clipRule="evenodd" transform="translate(1, -0.5)" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// --- SVG ICON COMPONENTS ---
const Icon = ({ path, className, viewBox = "0 0 512 512" }) => (
    <svg className={className} viewBox={viewBox} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d={path} /></svg>
);
const FaHardHat = ({ className }) => <Icon className={className} path="M480.1 239.4c-3.3-6.5-9.8-10.4-16.9-10.4H352V160c0-44.2-35.8-80-80-80h-32c-44.2 0-80 35.8-80 80v64H48.8c-7.1 0-13.6 3.9-16.9 10.4-3.3 6.5-3.3 14.3 0 20.8l32 64c3.3 6.5 9.8 10.4 16.9 10.4H96v64c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-64h128v64c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-64h15.2c7.1 0 13.6-3.9 16.9-10.4l32-64c3.3-6.5 3.3-14.3-.1-20.8zM240 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64H240v-64z" />;
const FaGlasses = ({ className }) => <Icon className={className} path="M505.1 128.4c-2-22-22.1-38.4-44.1-38.4H448V72c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24v18.1H51c-22 0-42.1 16.4-44.1 38.4L0 208v16c0 13.3 10.7 24 24 24h21.1C51 270.5 64.3 288 80.3 288H176c1.1 0 2.1-.1 3.2-.2c18.5-2.2 32.8-18.6 32.8-37.8V224h80v26c0 19.2 14.3 35.6 32.8 37.8c1.1.1 2.2.2 3.2.2h95.7c16 0 29.3-17.5 35.1-40H488c13.3 0 24-10.7 24-24v-16l-6.9-79.6zM128 200c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm256 0c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z" />;
const FaHeadSideMask = ({ className }) => <Icon className={className} path="M368 32h-16c-6.6 0-12 5.4-12 12v35.1c-2.3-1-4.7-2-7.1-2.9C320.1 72.2 308.5 64 296 64h-80c-12.5 0-24.1 8.2-29.8 20.2c-2.4.9-4.8 1.9-7.1 2.9V44c0-6.6-5.4-12-12-12h-16c-6.6 0-12 5.4-12 12v41.8C98 87.2 64 120.3 64 160v128c0 35.5 22 66.5 53.3 78.8 7.3 2.8 15.1 4.3 23.1 4.9C142.1 373.3 144 374 144 376v20c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-20c0-2 .2-2.7 1.8-4.3 8.1-.6 15.8-2.1 23.1-4.9C426 354.5 448 323.5 448 288V160c0-39.7-34-72.8-73.8-76.2V44c0-6.6-5.4-12-12-12zm-32 368c0 2.2-1.8 4-4 4H180c-2.2 0-4-1.8-4-4v-12h160v12zm68.3-125.2C402.2 309.2 384 340 384 372v4h-16c-6.6 0-12 5.4-12 12v12h-24v-28c0-13.3-10.7-24-24-24H164c-13.3 0-24 10.7-24 24v28H116v-12c0-6.6-5.4-12-12-12h-16v-4c0-32 18.2-62.8 46.7-77.2C136.1 294 135 291 135 288v-32h242v32c0 3-1.1 6-2.7 8.8zM416 288v-16h-48v16c0 17.7-14.3 32-32 32h-64v-32h-32v32H176c-17.7 0-32-14.3-32-32v-16H96v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v128c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />;
const FaShoePrints = ({ className }) => <Icon className={className} viewBox="0 0 640 512" path="M576 384h-48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zM112 384H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zM320 0C219.8 0 160 64 160 160v16c0 6.6-5.4 12-12 12H12c-6.6 0-12 5.4-12 12v112c0 6.6 5.4 12 12 12h136c6.6 0 12 5.4 12 12v16c0 96 59.8 160 160 160s160-64 160-160v-16c0-6.6 5.4-12 12-12h136c6.6 0 12-5.4 12-12V200c0-6.6-5.4-12-12-12H500c-6.6 0-12-5.4-12-12v-16C480 64 420.2 0 320 0z" />;
const FaUserShield = ({ className }) => <Icon className={className} path="M256 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 0 256 0zm0 288c-61.9 0-112 50.1-112 112v48c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-48c0-61.9-50.1-112-112-112z" />;
const FaDeaf = ({ className }) => <Icon className={className} path="M256 128c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32zm96-96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-192 0c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM48 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm416 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32z" />;
const FaHands = ({ className }) => <Icon className={className} path="M256 224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM128 448h256V256c0-70.7-57.3-128-128-128S128 185.3 128 256v192zM448 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z" />;
const FaFlask = ({ className }) => <Icon className={className} path="M224 0C159.8 0 112 35.5 96 80H32c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h224c53 0 96-43 96-96V112c0-17.7-14.3-32-32-32h-64c-16-44.5-63.8-80-128-80zm0 32c44.2 0 80 28.7 80 64H144c0-35.3 35.8-64 80-64zm160 416H96c-17.7 0-32-14.3-32-32V144h320v272c0 17.7-14.3 32-32 32z" />;
const FaVest = ({ className }) => <Icon className={className} path="M192 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM320 320c0 53-43 96-96 96s-96-43-96-96H32v128c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V320H320zM480 64H32C14.3 64 0 78.3 0 96v192c0 17.7 14.3 32 32 32h80c53 0 96-43 96-96h64c0 53 43 96 96 96h80c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />;
const FaMask = ({ className }) => <Icon className={className} path="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-96 224h192c6.6 0 12 5.4 12 12v64c0 6.6-5.4 12-12 12H160c-6.6 0-12-5.4-12-12v-64c0-6.6 5.4-12 12-12zM96 128c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v32h-32v-32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96v-32z" />;
const FaIndustry = ({ className }) => <Icon className={className} path="M475.1 346.3l-50.5-50.5c-5.8-5.8-13.5-9.1-21.6-9.1H384V16c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v112H224V16c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v272H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-64c0-21.4-8.7-41.2-22.9-55.7zM160 48h32v80h-32V48zm96 0h32v80h-32V48z" />;
const FaHospital = ({ className }) => <Icon className={className} path="M480 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM224 384h-64v-64h64v64zm0-128h-64v-64h64v64zm128 128h-64v-64h64v64zm0-128h-64v-64h64v64z" />;
const FaBolt = ({ className }) => <Icon className={className} path="M312 0H168c-4.4 0-8.6.9-12.5 2.5L32 80c-17.8 7.2-24.3 29.7-14.9 46.5l96 176c9.4 16.8 31.9 23.3 48.6 14.9l124.8-62.4c4.4-2.2 8.8-4.4 13.1-6.6 17.8-7.2 24.3-29.7 14.9-46.5l-96-176C291.5 6.5 273.2 0 256 0zM192 320h128L192 512h128l-64-192H96l96 192z" />;
const FaTshirt = ({ className }) => <Icon className={className} path="M256 0C182.5 0 128 54.5 128 128h256c0-73.5-54.5-128-128-128zM448 160H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z" />;
const FaMountain = ({ className }) => <Icon className={className} path="M129.5 234.5l-62-101.4C58.8 119.3 48 104.5 48 88c0-22.1 17.9-40 40-40h336c22.1 0 40 17.9 40 40 0 16.5-10.8 31.3-19.5 45.1l-62 101.4c-9 14.8-24.8 23.5-41.4 23.5H170.9c-16.6 0-32.4-8.7-41.4-23.5zM224 352l-96-96h192l-96 96z" />;
const FaBuilding = ({ className }) => <Icon className={className} path="M128 448V192h128v256h-128zM320 448V192h128v256h-128zM64 64h384v64H64V64zM448 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />;
const FaHammer = ({ className }) => <Icon className={className} path="M487.1 209.1L450.3 62c-8.2-32.7-41.2-51.4-73.9-43.2L128 92.4 12.9 207.5c-17 17-17 44.6 0 61.6l103.1 103.1c17 17 44.6 17 61.6 0l115.1-115.1 126.4 31.6c32.7 8.2 65.7-10.5 73.9-43.2l37.8-147.2c3.4-13.2-3-27.1-13.8-34.4z" />;
const FaOilCan = ({ className }) => <Icon className={className} path="M32 32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h16v320h256V128h16c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm256 384H64V160h224v256zm64-320h-32v-32h32v32zm-64-64h-32V64h32v32zm-64-32h-32V32h32v32zm-64 0H96V32h32v32zM480 256h-64v-64h64c17.7 0 32 14.3 32 32v32h-32z" />;
const FaExclamationTriangle = ({ className }) => <Icon className={className} path="M256 32L0 480h512L256 32zm-32 256h64v128h-64V288zm32-160c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />;
const FaFireExtinguisher = ({ className }) => <Icon className={className} path="M160 0C107.2 0 64 43.2 64 96v256h96V96c0-52.8-43.2-96-96-96zM320 160h-64v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32zM384 256H128v192h256V256z" />;
const FaRadiation = ({ className }) => <Icon className={className} path="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-106.1 0-192-85.9-192-192s85.9-192 192-192 192 85.9 192 192-85.9 192-192 192zM128 256c0-70.7 57.3-128 128-128v256c-70.7 0-128-57.3-128-128z" />;
const FaBiohazard = ({ className }) => <Icon className={className} path="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-64 128h128v64H192v-64zm0 128h128v64H192v-64zm64 192c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />;
const FaProcedures = ({ className }) => <Icon className={className} path="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm113.9 333.9L224 224v-80h32v67.9l113.9 113.9-22 22.1z" />;
const FaBan = ({ className }) => <Icon className={className} path="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-96-256h192v64H160v-64z" />;
const FaTrafficLight = ({ className }) => <Icon className={className} path="M192 0C86 0 0 86 0 192s86 192 192 192 192-86 192-192S298 0 192 0zm-64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm0-96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />;
const FaFirstAid = ({ className }) => <Icon className={className} path="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm224 128h-64v-64h64v64zm128 0h-64v-64h64v64zm-128 128h-64v-64h64v64z" />;
const FaRecycle = ({ className }) => <Icon className={className} path="M480 256H352V128c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v128H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z" />;


// --- DATA CONFIGURATION ---
const industrySectors = [
  { icon: <FaIndustry className="w-6 h-6" />, name: "Manufacturing" },
  { icon: <FaHospital className="w-6 h-6" />, name: "Healthcare" },
  { icon: <FaBolt className="w-6 h-6" />, name: "Energy" },
  { icon: <FaTshirt className="w-6 h-6" />, name: "Textile" },
  { icon: <FaMountain className="w-6 h-6" />, name: "Mining" },
  { icon: <FaBuilding className="w-6 h-6" />, name: "Corporate Offices" },
  { icon: <FaHammer className="w-6 h-6" />, name: "Construction" },
  { icon: <FaOilCan className="w-6 h-6" />, name: "Oil & Gas" },
];

const signCategories = [
  { id: 1, icon: <FaExclamationTriangle className="w-12 h-12" />, title: "Danger Signs", description: "Indicates immediate danger that will cause death or serious injury if not avoided.", iso: "ISO 7010 W001", examples: ["High voltage", "Radiation area", "Toxic material"], gradient: "bg-gradient-to-br from-red-600 to-red-800", sectors: ["Construction", "Manufacturing", "Energy"] },
  { id: 2, icon: <FaBan className="w-12 h-12" />, title: "Prohibition Signs", description: "Indicates behavior or actions that are not permitted in the area.", iso: "ISO 7010 P001", examples: ["No smoking", "No entry", "No mobile phones"], gradient: "bg-gradient-to-br from-red-500 to-red-700", sectors: ["Healthcare", "Food Processing", "Chemical"] },
  { id: 3, icon: <FaTrafficLight className="w-12 h-12" />, title: "Mandatory Signs", description: "Indicates actions that must be carried out to comply with safety regulations.", iso: "ISO 7010 M001", examples: ["Wear PPE", "Wash hands", "Safety harness required"], gradient: "bg-gradient-to-br from-blue-600 to-blue-800", sectors: ["Construction", "Laboratories", "Manufacturing"] },
  { id: 4, icon: <FaFirstAid className="w-12 h-12" />, title: "Emergency Signs", description: "Indicates location of safety equipment or emergency exits.", iso: "ISO 7010 E001", examples: ["First aid kit", "Emergency exit", "Eyewash station"], gradient: "bg-gradient-to-br from-green-600 to-green-800", sectors: ["All industries"] },
  { id: 5, icon: <FaFireExtinguisher className="w-12 h-12" />, title: "Fire Safety Signs", description: "Indicates location of fire fighting equipment and fire alarm activation points.", iso: "ISO 7010 F001", examples: ["Fire extinguisher", "Fire hose", "Fire alarm call point"], gradient: "bg-gradient-to-br from-orange-600 to-orange-800", sectors: ["All industries"] },
  { id: 6, icon: <FaRadiation className="w-12 h-12" />, title: "Warning Signs", description: "Indicates potentially hazardous situations that may cause minor or moderate injury.", iso: "ISO 7010 W001", examples: ["Slippery surface", "Hot surface", "Forklift traffic"], gradient: "bg-gradient-to-br from-yellow-500 to-yellow-700", sectors: ["Warehousing", "Manufacturing", "Healthcare"] },
  { id: 7, icon: <FaBiohazard className="w-12 h-12" />, title: "Biological Hazard Signs", description: "Indicates presence of biological substances that pose a threat to health.", iso: "ISO 7010 W021", examples: ["Biohazard area", "Contaminated waste", "Infectious materials"], gradient: "bg-gradient-to-br from-purple-600 to-purple-800", sectors: ["Healthcare", "Laboratories", "Waste Management"] },
  { id: 8, icon: <FaProcedures className="w-12 h-12" />, title: "Safe Condition Signs", description: "Indicates safe conditions or locations of safety-related facilities.", iso: "ISO 7010 E002", examples: ["Assembly point", "Safe route", "Emergency shower"], gradient: "bg-gradient-to-br from-green-500 to-green-700", sectors: ["All industries"] },
  { id: 9, icon: <FaRecycle className="w-12 h-12" />, title: "Environmental Signs", description: "Provides information about environmental protection and waste management.", iso: "ISO 7010 E003", examples: ["Recycling station", "Waste segregation", "Water conservation"], gradient: "bg-gradient-to-br from-teal-600 to-teal-800", sectors: ["All industries"] }
];

const ppeCategories = [
  { id: 1, icon: <FaHardHat className="w-12 h-12" />, title: "Head Protection", description: "Industrial helmets compliant with ANSI Z89.1/CSA Z94.1 standards for impact and electrical hazards.", standards: "EN 397, ANSI Z89.1", types: ["Hard Hats", "Bump Caps", "Welding Helmets"], gradient: "bg-gradient-to-br from-amber-500 to-amber-700", industries: ["Construction", "Mining", "Utilities"] },
  { id: 2, icon: <FaGlasses className="w-12 h-12" />, title: "Eye Protection", description: "Safety glasses and goggles meeting ANSI Z87.1 for impact, chemical splash, and optical radiation protection.", standards: "ANSI Z87.1, EN 166", types: ["Safety Glasses", "Goggles", "Face Shields"], gradient: "bg-gradient-to-br from-blue-600 to-blue-800", industries: ["Laboratories", "Healthcare", "Woodworking"] },
  { id: 3, icon: <FaHeadSideMask className="w-12 h-12" />, title: "Respiratory Protection", description: "NIOSH-approved respirators for particulate matter, gases, vapors, and oxygen-deficient environments.", standards: "NIOSH 42 CFR 84, EN 149", types: ["N95 Masks", "Half-face Respirators", "SCBA"], gradient: "bg-gradient-to-br from-gray-600 to-gray-800", industries: ["Healthcare", "Construction", "Mining"] },
  { id: 4, icon: <FaShoePrints className="w-12 h-12" />, title: "Foot Protection", description: "Steel-toe boots and slip-resistant footwear for protection against crush injuries and slips.", standards: "ASTM F2413, EN ISO 20345", types: ["Steel Toe Boots", "Metatarsal Guards", "Slip-Resistant Shoes"], gradient: "bg-gradient-to-br from-slate-600 to-slate-800", industries: ["Construction", "Warehousing", "Manufacturing"] },
  { id: 5, icon: <FaUserShield className="w-12 h-12" />, title: "Leg Protection", description: "Protective clothing including chaps and leg guards against cuts, abrasions, and chemicals.", standards: "EN 381, ANSI/ISEA 107", types: ["Leg Guards", "Chemical Pants", "Kevlar Chaps"], gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800", industries: ["Forestry", "Chemical", "Construction"] },
  { id: 6, icon: <FaDeaf className="w-12 h-12" />, title: "Hearing Protection", description: "Earplugs and earmuffs rated for occupational noise exposure per NRR requirements.", standards: "ANSI S3.19, EN 352", types: ["Earplugs", "Earmuffs", "Electronic Hearing Protectors"], gradient: "bg-gradient-to-br from-pink-600 to-pink-800", industries: ["Aviation", "Construction", "Metalwork"] },
  { id: 7, icon: <FaHands className="w-12 h-12" />, title: "Hand Protection", description: "Gloves designed for protection against cuts, heat, chemicals, and electrical hazards.", standards: "EN 388, EN 374, ASTM D120", types: ["Cut-Resistant Gloves", "Chemical Gloves", "Heat-Resistant Gloves"], gradient: "bg-gradient-to-br from-red-600 to-red-800", industries: ["Glass Handling", "Chemical", "Welding"] },
  { id: 8, icon: <FaFlask className="w-12 h-12" />, title: "Chemical Protection", description: "Specialized suits and gloves for handling hazardous materials and chemicals safely.", standards: "EN 943, NFPA 1991", types: ["Chemical Suits", "Respirators", "Splash Goggles"], gradient: "bg-gradient-to-br from-green-600 to-green-800", industries: ["Pharmaceutical", "Laboratory", "Chemical"] },
  { id: 9, icon: <FaVest className="w-12 h-12" />, title: "Body Protection", description: "Vests, jackets, and full-body suits to protect from visibility hazards and extreme conditions.", standards: "ANSI/ISEA 107, EN ISO 20471", types: ["Hi-Vis Vests", "Insulated Jackets", "Fire-Retardant Suits"], gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800", industries: ["Traffic Control", "Utilities", "Emergency Services"] },
  { id: 10, icon: <FaMask className="w-12 h-12" />, title: "Face Protection", description: "Face shields and masks to prevent exposure to splashes, flying debris, and biological hazards.", standards: "EN 166, ANSI Z87.1", types: ["Face Shields", "Surgical Masks", "Welding Helmets"], gradient: "bg-gradient-to-br from-purple-600 to-purple-800", industries: ["Healthcare", "Metalwork", "Laboratory"] }
];


// --- MAIN COMPONENT ---
export default function App() {
  return (
    <>
      <CustomStyles />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-amber-100 font-sans overflow-x-hidden">
        
        {/* Header Section */}
        <header className="text-center space-y-6 mb-16">
            <AnimateOnScroll initial="opacity-0 scale-95">
                <div className="flex justify-center mb-6">
                    <img
                        src="https://placehold.co/400x100/fefce8/a16207?text=Safety+First+Inc.&font=inter"
                        alt="Safety First Inc. Logo"
                        className="rounded-lg"
                    />
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll initial="opacity-0 translate-x-20" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 tracking-tight">
                    Workplace Safety Solutions
                </h1>
            </AnimateOnScroll>
            <AnimateOnScroll initial="opacity-0 -translate-x-20" delay={0.2}>
                <p className="text-lg text-amber-800 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive safety solutions including ISO-compliant signage and certified personal protective equipment (PPE) for hazard prevention across all industries.
                </p>
            </AnimateOnScroll>
        </header>

        {/* Industries Section */}
        <AnimateOnScroll delay={0.2} initial="opacity-0 translate-y-[30px]">
            <div className="text-center mb-16">
                <SectionHeader title="Trusted by Industries Worldwide" />
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {industrySectors.map((sector, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-amber-200 text-amber-900 hover:bg-amber-50 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                        <span className="p-2 rounded-full bg-amber-100 text-amber-600 mr-3">
                        {sector.icon}
                        </span>
                        <span className="font-medium">{sector.name}</span>
                    </div>
                    ))}
                </div>
            </div>
        </AnimateOnScroll>

        {/* Safety Signs Section */}
        <div className="mb-20">
            <SectionHeader title="ISO-Compliant Safety Signs" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-parent">
                {signCategories.map((card, i) => (
                <AnimateOnScroll key={card.id} initial="opacity-0 translate-y-16" delay={0.1 * (i % 3)}>
                    <article className="rounded-xl overflow-hidden bg-white border border-amber-200 shadow-lg flex flex-col h-full card-hover-effect">
                        <div className={`${card.gradient} h-36 flex items-center justify-center relative p-4 text-white`}>
                            <span className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">{card.icon}</span>
                        </div>
                        <div className="p-6 space-y-4 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-amber-900">{card.title}</h3>
                            <p className="text-amber-800 leading-relaxed flex-grow">{card.description}</p>
                            <div className="space-y-3 pt-3 border-t border-amber-100">
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Standard</h4>
                                    <p className="text-sm text-amber-900 font-mono bg-amber-50 px-2 py-0.5 rounded inline-block mt-1">{card.iso}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Common Examples</h4>
                                    <ul className="mt-1 space-y-1">
                                        {card.examples.slice(0, 3).map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-amber-500 mr-2 font-bold text-lg">•</span>
                                            <span className="text-amber-900">{item}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Key Sectors</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {card.sectors.slice(0, 3).map((sector, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">{sector}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </AnimateOnScroll>
                ))}
            </div>
        </div>
        
        {/* PPE Equipment Section */}
        <div className="mb-10">
            <SectionHeader title="Certified PPE Equipment" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-parent">
                {ppeCategories.map((card, i) => (
                <AnimateOnScroll key={card.id} initial="opacity-0 translate-y-16" delay={0.1 * (i % 3)}>
                    <article className="rounded-xl overflow-hidden bg-white border border-amber-200 shadow-lg flex flex-col h-full card-hover-effect">
                        <div className={`${card.gradient} h-36 flex items-center justify-center relative p-4 text-white`}>
                            <span className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">{card.icon}</span>
                        </div>
                        <div className="p-6 space-y-4 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-amber-900">{card.title}</h3>
                            <p className="text-amber-800 leading-relaxed flex-grow">{card.description}</p>
                            <div className="space-y-3 pt-3 border-t border-amber-100">
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Standards</h4>
                                    <p className="text-sm text-amber-900 font-mono bg-amber-50 px-2 py-0.5 rounded inline-block mt-1">{card.standards}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Types</h4>
                                    <ul className="mt-1 space-y-1">
                                        {card.types.slice(0, 3).map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-amber-500 mr-2 font-bold text-lg">•</span>
                                            <span className="text-amber-900">{item}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Key Industries</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {card.industries.slice(0, 3).map((industry, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">{industry}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </AnimateOnScroll>
                ))}
            </div>
        </div>
        
        {/* Video Player Placeholder */}
        <VideoPlayer />

      </section>
    </>
  );
}

