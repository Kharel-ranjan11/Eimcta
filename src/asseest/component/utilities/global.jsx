import { FaAward, FaShieldAlt, FaUtensils, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutCard = () => {
  const services = [
    {
      id: 1,
      icon: <FaAward className="text-4xl text-[#5a2a2a]" />,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      path: "service/iso/9001",
      description: "ISO 9001 Certification: Elevating Your Business with Quality Management",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl text-[#5a2a2a]" />,
      title: "ISO 45001:2018",
      subtitle: "Occupational Health, Safety & Environment",
      path: "service/iso/45001",
      description: "ISO 45001 Certification | Safety Management System: ISO 45001 - 2018",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      icon: <FaUtensils className="text-4xl text-[#5a2a2a]" />,
      title: "ISO 22000 & HACCP",
      subtitle: "Food Safety Standard",
      path: "service/iso/2200",
      description: "ISO 22000 Certification | Food Safety Management System: ISO 22000 & HACCP",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      icon: <FaGraduationCap className="text-4xl text-[#5a2a2a]" />,
      title: "ISO 21001:2018",
      subtitle: "Educational Organization Management System",
      path: "service/iso/2100",
      description: "ISO 21001:2018 Educational Organization Management System",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#5a2a2a] mb-4">ISO Consultancy Services</h1>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            We are one of the leading global providers of accredited ISO certification. We offer a broad portfolio of services within management system ISO certification and related services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link to={service.path}>
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="ml-3 text-xl font-semibold text-[#5a2a2a]">{service.title}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-[#5f7eb5] mb-2">{service.subtitle}</h4>
                  <p className="text-[#333333]">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#5a2a2a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a2323] transition-colors duration-300">
            Contact Us for Certification
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;