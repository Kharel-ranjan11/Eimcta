import { Award, ShieldCheck, Utensils, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutCard = () => {
  const services = [
    {
      id: 1,
      icon: <Award className="text-2xl text-amber-600" />,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      path: "service/iso/9001",
      description: "ISO 9001 Certification: Elevating Your Business with Quality Management",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      icon: <ShieldCheck className="text-2xl text-amber-600" />,
      title: "ISO 45001:2018",
      subtitle: "Occupational Health, Safety & Environment",
      path: "service/iso/45001",
      description: "ISO 45001 Certification | Safety Management System: ISO 45001 - 2018",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      icon: <Utensils className="text-2xl text-amber-600" />,
      title: "ISO 22000 & HACCP",
      subtitle: "Food Safety Standard",
      path: "service/iso/2200",
      description: "ISO 22000 Certification | Food Safety Management System: ISO 22000 & HACCP",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      icon: <GraduationCap className="text-2xl text-amber-600" />,
      title: "ISO 21001:2018",
      subtitle: "Educational Organization Management System",
      path: "service/iso/2100",
      description: "ISO 21001:2018 Educational Organization Management System",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Variants for the container to orchestrate animations of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  // Variants for each card animation
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8 font-['Arial_Narrow'] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-amber-900 mb-4 relative inline-block">
            ISO Consultancy Services
            <motion.div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-yellow-400 rounded-lg"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              style={{ transformOrigin: 'center' }}
            />
          </h1>
          <p className="text-xl text-amber-800 font-normal max-w-3xl mx-auto mt-6">
            We are one of the leading global providers of accredited ISO certification. We offer a broad portfolio of services within management system ISO certification and related services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-full"
            >
              <a href={service.path} className="h-full block" onClick={(e) => e.preventDefault()}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-yellow-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">{service.title}</h3>
                    <h4 className="text-lg font-medium text-amber-800 mb-3">{service.subtitle}</h4>
                    <p className="text-gray-700 bg-amber-100/50 p-3 rounded-lg flex-grow">{service.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCard;

