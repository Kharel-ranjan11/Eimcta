import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHardHat,
  FaGlasses,
  FaHeadSideMask,
  FaShoePrints,
  FaUserShield,
  FaDeaf,
  FaHands,
  FaFlask,
  FaVest,
  FaMask,
  FaIndustry,
  FaHospital,
  FaBolt,
  FaTshirt,
  FaMountain,
  FaBuilding,
  FaHammer,
  FaOilCan,
  FaExclamationTriangle,
  FaFireExtinguisher,
  FaRadiation,
  FaBiohazard,
  FaProcedures,
  FaBan,
  FaTrafficLight,
  FaFirstAid,
  FaRecycle
} from "react-icons/fa";

// Animation wrapper component
const AnimateOnScroll = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

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
  {
    id: 1,
    icon: <FaExclamationTriangle className="text-white w-12 h-12" />,
    title: "Danger Signs",
    description: "Indicates immediate danger that will cause death or serious injury if not avoided.",
    iso: "ISO 7010 W001",
    examples: ["High voltage", "Radiation area", "Toxic material"],
    gradient: "bg-gradient-to-br from-red-600 to-red-800",
    sectors: ["Construction", "Manufacturing", "Energy"]
  },
  {
    id: 2,
    icon: <FaBan className="text-white w-12 h-12" />,
    title: "Prohibition Signs",
    description: "Indicates behavior or actions that are not permitted in the area.",
    iso: "ISO 7010 P001",
    examples: ["No smoking", "No entry", "No mobile phones"],
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
    sectors: ["Healthcare", "Food Processing", "Chemical"]
  },
  {
    id: 3,
    icon: <FaTrafficLight className="text-white w-12 h-12" />,
    title: "Mandatory Signs",
    description: "Indicates actions that must be carried out to comply with safety regulations.",
    iso: "ISO 7010 M001",
    examples: ["Wear PPE", "Wash hands", "Safety harness required"],
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    sectors: ["Construction", "Laboratories", "Manufacturing"]
  },
  {
    id: 4,
    icon: <FaFirstAid className="text-white w-12 h-12" />,
    title: "Emergency Signs",
    description: "Indicates location of safety equipment or emergency exits.",
    iso: "ISO 7010 E001",
    examples: ["First aid kit", "Emergency exit", "Eyewash station"],
    gradient: "bg-gradient-to-br from-green-600 to-green-800",
    sectors: ["All industries"]
  },
  {
    id: 5,
    icon: <FaFireExtinguisher className="text-white w-12 h-12" />,
    title: "Fire Safety Signs",
    description: "Indicates location of fire fighting equipment and fire alarm activation points.",
    iso: "ISO 7010 F001",
    examples: ["Fire extinguisher", "Fire hose", "Fire alarm call point"],
    gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    sectors: ["All industries"]
  },
  {
    id: 6,
    icon: <FaRadiation className="text-white w-12 h-12" />,
    title: "Warning Signs",
    description: "Indicates potentially hazardous situations that may cause minor or moderate injury.",
    iso: "ISO 7010 W001",
    examples: ["Slippery surface", "Hot surface", "Forklift traffic"],
    gradient: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    sectors: ["Warehousing", "Manufacturing", "Healthcare"]
  },
  {
    id: 7,
    icon: <FaBiohazard className="text-white w-12 h-12" />,
    title: "Biological Hazard Signs",
    description: "Indicates presence of biological substances that pose a threat to health.",
    iso: "ISO 7010 W021",
    examples: ["Biohazard area", "Contaminated waste", "Infectious materials"],
    gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
    sectors: ["Healthcare", "Laboratories", "Waste Management"]
  },
  {
    id: 8,
    icon: <FaProcedures className="text-white w-12 h-12" />,
    title: "Safe Condition Signs",
    description: "Indicates safe conditions or locations of safety-related facilities.",
    iso: "ISO 7010 E002",
    examples: ["Assembly point", "Safe route", "Emergency shower"],
    gradient: "bg-gradient-to-br from-green-500 to-green-700",
    sectors: ["All industries"]
  },
  {
    id: 9,
    icon: <FaRecycle className="text-white w-12 h-12" />,
    title: "Environmental Signs",
    description: "Provides information about environmental protection and waste management.",
    iso: "ISO 7010 E003",
    examples: ["Recycling station", "Waste segregation", "Water conservation"],
    gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    sectors: ["All industries"]
  }
];

const ppeCategories = [
  {
    id: 1,
    icon: <FaHardHat className="text-white w-12 h-12" />,
    title: "Head Protection",
    description: "Industrial helmets compliant with ANSI Z89.1/CSA Z94.1 standards for impact and electrical hazards.",
    standards: "EN 397, ANSI Z89.1",
    types: ["Hard Hats", "Bump Caps", "Welding Helmets", "Electrical Helmets"],
    gradient: "bg-gradient-to-br from-amber-600 to-amber-800",
    industries: ["Construction", "Mining", "Utilities", "Manufacturing"]
  },
  {
    id: 2,
    icon: <FaGlasses className="text-white w-12 h-12" />,
    title: "Eye Protection",
    description: "Safety glasses and goggles meeting ANSI Z87.1 for impact, chemical splash, and optical radiation protection.",
    standards: "ANSI Z87.1, EN 166",
    types: ["Safety Glasses", "Goggles", "Face Shields", "Welding Shields"],
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    industries: ["Laboratories", "Healthcare", "Woodworking", "Chemical"]
  },
  {
    id: 3,
    icon: <FaHeadSideMask className="text-white w-12 h-12" />,
    title: "Respiratory Protection",
    description: "NIOSH-approved respirators for particulate matter, gases, vapors, and oxygen-deficient environments.",
    standards: "NIOSH 42 CFR 84, EN 149",
    types: ["N95 Masks", "Half-face Respirators", "Full-face Respirators", "SCBA"],
    gradient: "bg-gradient-to-br from-gray-600 to-gray-800",
    industries: ["Healthcare", "Construction", "Mining", "Pharmaceutical"]
  },
  {
    id: 4,
    icon: <FaShoePrints className="text-white w-12 h-12" />,
    title: "Foot Protection",
    description: "Steel-toe boots and slip-resistant footwear for protection against crush injuries and slips.",
    standards: "ASTM F2413, EN ISO 20345",
    types: ["Steel Toe Boots", "Metatarsal Guards", "Slip-Resistant Shoes"],
    gradient: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    industries: ["Construction", "Warehousing", "Manufacturing"]
  },
  {
    id: 5,
    icon: <FaUserShield className="text-white w-12 h-12" />,
    title: "Leg Protection",
    description: "Protective clothing including chaps and leg guards against cuts, abrasions, and chemicals.",
    standards: "EN 381, ANSI/ISEA 107",
    types: ["Leg Guards", "Chemical Pants", "Kevlar Chaps"],
    gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    industries: ["Forestry", "Chemical", "Construction"]
  },
  {
    id: 6,
    icon: <FaDeaf className="text-white w-12 h-12" />,
    title: "Hearing Protection",
    description: "Earplugs and earmuffs rated for occupational noise exposure per NRR requirements.",
    standards: "ANSI S3.19, EN 352",
    types: ["Earplugs", "Earmuffs", "Electronic Hearing Protectors"],
    gradient: "bg-gradient-to-br from-pink-600 to-pink-800",
    industries: ["Aviation", "Construction", "Metalwork"]
  },
  {
    id: 7,
    icon: <FaHands className="text-white w-12 h-12" />,
    title: "Hand Protection",
    description: "Gloves designed for protection against cuts, heat, chemicals, and electrical hazards.",
    standards: "EN 388, EN 374, ASTM D120",
    types: ["Cut-Resistant Gloves", "Chemical Gloves", "Heat-Resistant Gloves"],
    gradient: "bg-gradient-to-br from-red-600 to-red-800",
    industries: ["Glass Handling", "Chemical", "Welding"]
  },
  {
    id: 8,
    icon: <FaFlask className="text-white w-12 h-12" />,
    title: "Chemical Protection",
    description: "Specialized suits and gloves for handling hazardous materials and chemicals safely.",
    standards: "EN 943, NFPA 1991",
    types: ["Chemical Suits", "Respirators", "Splash Goggles"],
    gradient: "bg-gradient-to-br from-green-600 to-green-800",
    industries: ["Pharmaceutical", "Laboratory", "Chemical"]
  },
  {
    id: 9,
    icon: <FaVest className="text-white w-12 h-12" />,
    title: "Body Protection",
    description: "Vests, jackets, and full-body suits to protect from visibility hazards and extreme conditions.",
    standards: "ANSI/ISEA 107, EN ISO 20471",
    types: ["Hi-Vis Vests", "Insulated Jackets", "Fire-Retardant Suits"],
    gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    industries: ["Traffic Control", "Utilities", "Emergency Services"]
  },
  {
    id: 10,
    icon: <FaMask className="text-white w-12 h-12" />,
    title: "Face Protection",
    description: "Face shields and masks to prevent exposure to splashes, flying debris, and biological hazards.",
    standards: "EN 166, ANSI Z87.1",
    types: ["Face Shields", "Surgical Masks", "Welding Helmets"],
    gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
    industries: ["Healthcare", "Metalwork", "Laboratory"]
  }
];

export default function SafetySignPPE() {
  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 bg-gray-50">
      {/* SEO-Optimized Header */}
      <AnimateOnScroll>
        <header className="text-center space-y-6 mb-16">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Workplace Safety Solutions
            </span>{" "}
            Signs & PPE Equipment
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive safety solutions including ISO-compliant signage and certified personal protective equipment (PPE)
            for hazard prevention across all industries.
          </p>
        </header>
      </AnimateOnScroll>

      {/* Industries Section */}
      <AnimateOnScroll delay={0.2}>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Trusted by Industries Worldwide
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {industrySectors.map((sector, i) => (
              <motion.span
                key={i}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sector.icon}
                <span className="ml-2 font-medium">{sector.name}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </AnimateOnScroll>

      {/* Safety Signs Section */}
      <AnimateOnScroll delay={0.3}>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            ISO-Compliant Safety Signs
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {signCategories.map(({ id, icon, title, description, iso, examples, gradient, sectors }, index) => (
              <motion.article
                key={id}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
                whileHover="hover"
                variants={cardHover}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${gradient} h-32 flex items-center justify-center relative`}>
                  {icon}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Standard</h4>
                      <p className="text-sm text-gray-700">{iso}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Common Examples</h4>
                      <ul className="mt-1 space-y-1">
                        {examples.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Sectors</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {sectors.slice(0, 3).map((sector, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* PPE Equipment Section */}
      <AnimateOnScroll delay={0.4}>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
            Certified PPE Equipment
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ppeCategories.map(({ id, icon, title, description, standards, types, gradient, industries }, index) => (
              <motion.article
                key={id}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
                whileHover="hover"
                variants={cardHover}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${gradient} h-32 flex items-center justify-center relative`}>
                  {icon}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Standards</h4>
                      <p className="text-sm text-gray-700">{standards}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Types</h4>
                      <ul className="mt-1 space-y-1">
                        {types.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Industries</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {industries.slice(0, 3).map((industry, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Integrated CTA Section */}
     
    </section>
  );
}