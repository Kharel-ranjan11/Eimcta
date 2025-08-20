import { useState, useEffect } from 'react';
import {
  FiUser, FiBriefcase, FiMail, FiPhone, FiMapPin, FiMessageSquare,
  FiCheck, FiX, FiChevronDown, FiChevronUp, FiHome, FiGlobe, FiAlertCircle, FiPlus
} from 'react-icons/fi';
import {
  FaBuilding, FaIndustry, FaHandsHelping, FaHospital, FaUtensils, FaUniversity,
  FaPiggyBank, FaConciergeBell, FaTruck, FaWarehouse, FaServer
} from 'react-icons/fa';

const ISOCertificationForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableStandards, setAvailableStandards] = useState([]);
  const [selectedStandards, setSelectedStandards] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStandardOpen, setIsStandardOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);
  const [customCategoryInput, setCustomCategoryInput] = useState('');
  const [showCustomCategoryInput, setShowCustomCategoryInput] = useState(false);
  const [customStandardInput, setCustomStandardInput] = useState('');
  const [showCustomStandardInput, setShowCustomStandardInput] = useState(false);

  const categories = [
    {
      id: 'construction',
      name: "CONSTRUCTION",
      icon: <FaBuilding className="text-[#6B4F4F]" size={20} />,
      description: "Construction companies, contractors, and building firms that need quality, safety, and environmental standards for their projects.",
      standards: [
        { id: 'con-9001', code: 'ISO 9001:2015', description: 'Quality management system for construction processes and project delivery' },
        { id: 'con-14001', code: 'ISO 14001:2015', description: 'Environmental management for sustainable construction practices' },
        { id: 'con-45001', code: 'ISO 45001:2018', description: 'Occupational health and safety for construction sites and workers' }
      ]
    },
    {
      id: 'factory',
      name: "FACTORY / MANUFACTURER",
      icon: <FaIndustry className="text-[#6B4F4F]" size={20} />,
      description: "Manufacturing plants and production facilities requiring operational efficiency, product quality, and workplace safety standards.",
      standards: [
        { id: 'fac-9001', code: 'ISO 9001:2015', description: 'Manufacturing quality standards for consistent product quality' },
        { id: 'fac-14001', code: 'ISO 14001:2015', description: 'Sustainable manufacturing practices and waste reduction' },
        { id: 'fac-45001', code: 'ISO 45001:2018', description: 'Factory worker safety standards and hazard prevention' }
      ]
    },
    {
      id: 'ingo',
      name: "INGO/NGO",
      icon: <FaHandsHelping className="text-[#6B4F4F]" size={20} />,
      description: "International and local non-governmental organizations needing standards for humanitarian operations and social responsibility.",
      standards: [
        { id: 'ing-9001', code: 'ISO 9001:2015', description: 'Quality in humanitarian operations and program delivery' },
        { id: 'ing-26000', code: 'ISO 26000:2010', description: 'Guidance on social responsibility and ethical practices' },
        { id: 'ing-sa8000', code: 'SA 8000:2014', description: 'Fair treatment of workers and community engagement standards' }
      ]
    },
    {
      id: 'healthcare',
      name: "HOSPITAL / CLINIC / LAB",
      icon: <FaHospital className="text-[#6B4F4F]" size={20} />,
      description: "Healthcare providers, medical laboratories, and clinics requiring standards for patient safety and medical equipment quality.",
      standards: [
        { id: 'med-13485', code: 'ISO 13485:2016', description: 'Quality management for medical devices and diagnostics' },
        { id: 'med-15189', code: 'ISO 15189:2012', description: 'Medical laboratory quality and competence standards' }
      ]
    },
    {
      id: 'hospitality',
      name: "HOTEL / FOOD INDUSTRY",
      icon: <FaUtensils className="text-[#6B4F4F]" size={20} />,
      description: "Hotels, restaurants, and food service businesses needing food safety and quality service standards.",
      standards: [
        { id: 'hot-22000', code: 'ISO 22000:2018', description: 'Food safety management system for entire supply chain' },
        { id: 'hot-haccp', code: 'HACCP', description: 'Critical control points for food safety and hygiene' },
        { id: 'hot-chip', code: 'CHIP', description: 'Safe handling of chemicals in food preparation areas' }
      ]
    },
    {
      id: 'finance',
      name: "BANK / FINANCE / INSURANCE",
      icon: <FaPiggyBank className="text-[#6B4F4F]" size={20} />,
      description: "Financial institutions requiring standards for service quality, data security, and customer protection.",
      standards: [
        { id: 'fin-9001', code: 'ISO 9001:2015', description: 'Financial service quality standards and customer satisfaction' },
        { id: 'fin-27001', code: 'ISO 27001:2022', description: 'Data protection and information security management' },
        { id: 'fin-sa8000', code: 'SA 8000:2014', description: 'Social accountability in financial services and operations' }
      ]
    },
    {
      id: 'education',
      name: "SCHOOL/COLLEGE EDU",
      icon: <FaUniversity className="text-[#6B4F4F]" size={20} />,
      description: "Educational institutions needing standards for academic quality and institutional management.",
      standards: [
        { id: 'edu-21001', code: 'ISO 21001:2018', description: 'Quality management in education and administrative processes' }
      ]
    },
    {
      id: 'service',
      name: "SERVICE INDUSTRIES",
      icon: <FaConciergeBell className="text-[#6B4F4F]" size={20} />,
      description: "Various service providers requiring standards for quality service delivery and worker safety.",
      standards: [
        { id: 'ser-9001', code: 'ISO 9001:2015', description: 'Service quality standards and customer satisfaction metrics' },
        { id: 'ser-45001', code: 'ISO 45001:2018', description: 'Service worker safety and occupational health management' }
      ]
    },
    {
      id: 'transport',
      name: "TRANSPORT / LOGISTIC",
      icon: <FaTruck className="text-[#6B4F4F]" size={20} />,
      description: "Transportation and logistics companies needing standards for operational safety and supply chain security.",
      standards: [
        { id: 'log-9001', code: 'ISO 9001:2015', description: 'Logistics quality standards for efficient operations' },
        { id: 'log-28000', code: 'ISO 28000:2007', description: 'Security in logistics operations and supply chain protection' },
        { id: 'log-39001', code: 'ISO 39001:2012', description: 'Transportation safety management for vehicles and personnel' }
      ]
    },
    {
      id: 'warehousing',
      name: "EXIM/WAREHOUSING",
      icon: <FaWarehouse className="text-[#6B4F4F]" size={20} />,
      description: "Warehousing and import/export businesses requiring standards for inventory management and worker safety.",
      standards: [
        { id: 'war-9001', code: 'ISO 9001:2015', description: 'Warehousing quality standards for inventory accuracy' },
        { id: 'war-45001', code: 'ISO 45001:2018', description: 'Warehouse worker safety and material handling procedures' }
      ]
    },
    {
      id: 'technology',
      name: "INFO TECHNOLOGY",
      icon: <FaServer className="text-[#6B4F4F]" size={20} />,
      description: "IT companies and service providers needing standards for quality service delivery and data security.",
      standards: [
        { id: 'it-9001', code: 'ISO 9001:2015', description: 'IT service quality standards and customer satisfaction' },
        { id: 'it-27000', code: 'ISO 27000:2018', description: 'IT security best practices and information protection' }
      ]
    }
  ];

  const benefits = [
    { title: "रिसोर्स हरुको सहि उपयोग हुन्छ।" },
    { title: "गुणस्तर निर्धारणका सम्पुर्ण लिखित नीति तथा विभागिय दस्ताबेजहरु तयार हुन्छन।" },
    { title: "कामकारबाहीको लेखा परिछ्यण तथा उचित बाड्फाड।" },
    { title: "समाग्री, समय तथा साधनको अनावश्यक उपायोग तथा दुरुपयोग हुनबाट बचाउछ।" },
    { title: "सेवा तथा निर्मित सामग्रीहरुको गुणस्तर एबम बिस्वस्नियता बड्‌छ।" },
    { title: "प्रतिस्पर्धात्मक बजारमा आफ्नो संस्थाको मूल्याकंनमा अभिवृद्धी हुन्छ।" },
    { title: "टेन्डर/प्रतिस्पर्धामा अब्बल हुदै।" },
    { title: "दिर्गकालमा व्यापार सम्ममा पनि वृद्धि हुन्छ।" }
  ];

  const [formData, setFormData] = useState({
    name: '', organization: '', email: '', phone: '',
    city: '', district: '', province: '', country: '', message: ''
  });

  useEffect(() => {
    const standards = [];
    selectedCategories.forEach(catName => {
      const category = categories.find(c => c.name === catName);
      if (category) {
        standards.push(...category.standards.map(s => ({
          ...s,
          categoryName: category.name,
          categoryIcon: category.icon,
          categoryDescription: category.description
        })));
      }
    });
    setAvailableStandards(standards);
  }, [selectedCategories]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.organization) errors.organization = 'Organization is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.district) errors.district = 'District is required';
    if (!formData.province) errors.province = 'Province is required';
    if (!formData.country) errors.country = 'Country is required';
    if (selectedStandards.length === 0) errors.standards = 'At least one standard must be selected';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
      const categoryObj = categories.find(c => c.name === category);
      if (categoryObj) {
        setSelectedStandards(selectedStandards.filter(s =>
          !categoryObj.standards.some(std => std.id === s.id)
        ));
      }
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setActiveInfo(selectedCategories.length > 0 ?
      categories.find(c => c.name === selectedCategories[0]) : null);
  };

  const toggleStandard = (standard) => {
    if (selectedStandards.some(s => s.id === standard.id)) {
      setSelectedStandards(selectedStandards.filter(s => s.id !== standard.id));
    } else {
      setSelectedStandards([...selectedStandards, standard]);
    }
    setActiveInfo(standard);
  };

  const removeStandard = (id) => {
    setSelectedStandards(selectedStandards.filter(s => s.id !== id));
  };

  const removeCategory = (categoryName, e) => {
    e.stopPropagation();
    setSelectedCategories(selectedCategories.filter(c => c !== categoryName));
    setSelectedStandards(selectedStandards.filter(s =>
      s.categoryName !== categoryName
    ));
    if (activeInfo && activeInfo.name === categoryName) {
      setActiveInfo(selectedCategories.length > 1 ?
        categories.find(c => c.name === selectedCategories[0]) : null);
    }
  };

  const addCustomCategory = () => {
    if (customCategoryInput.trim()) {
      setSelectedCategories([...selectedCategories, customCategoryInput]);
      setCustomCategoryInput('');
      setShowCustomCategoryInput(false);
      setActiveInfo({
        id: `custom-${Date.now()}`,
        name: customCategoryInput,
        icon: <FiBriefcase className="text-[#6B4F4F]" size={20} />,
        description: "Custom added category",
        standards: []
      });
    }
  };

  const addCustomStandard = () => {
    if (customStandardInput.trim()) {
      const newStandard = {
        id: `custom-std-${Date.now()}`,
        code: customStandardInput,
        description: "Custom added standard",
        categoryName: "Custom",
        categoryIcon: <FiBriefcase className="text-[#6B4F4F]" size={20} />,
        categoryDescription: "Custom added standard"
      };
      setSelectedStandards([...selectedStandards, newStandard]);
      setCustomStandardInput('');
      setShowCustomStandardInput(false);
      setActiveInfo(newStandard);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (validateForm()) {
      console.log('Form submitted:', { ...formData, standards: selectedStandards });
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          name: '', organization: '', email: '', phone: '',
          city: '', district: '', province: '', country: '', message: ''
        });
        setSelectedCategories([]);
        setSelectedStandards([]);
        setSubmitSuccess(false);
        setActiveInfo(null);
        setCustomCategoryInput('');
        setShowCustomCategoryInput(false);
        setCustomStandardInput('');
        setShowCustomStandardInput(false);
      }, 3000);
    }
  };

  const renderInfoPanel = () => {
    if (!activeInfo) {
      return (
        <div className="bg-[#FFF3E4] p-6 rounded-xl border border-[#EED6C4] h-full flex flex-col items-center justify-center text-center">
          <FiBriefcase className="text-[#6B4F4F] mb-4" size={40} />
          <h4 className="text-lg font-bold text-[#483434] mb-2">Select a Category or Standard</h4>
          <p className="text-[#6B4F4F]">Click on any category or standard to see detailed information here</p>
        </div>
      );
    }

    if (activeInfo.categoryName) {
      const standard = activeInfo;
      const category = categories.find(c => c.name === standard.categoryName) || {
        name: standard.categoryName,
        icon: standard.categoryIcon,
        description: standard.categoryDescription
      };
      return (
        <div className="bg-[#FFF3E4] p-6 rounded-xl border border-[#EED6C4] h-full">
          <div className="flex items-center mb-4">
            <span className="text-[#6B4F4F] mr-3">{category.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-[#483434]">{standard.code}</h3>
              <p className="text-sm text-[#6B4F4F]">{category.name} Standard</p>
            </div>
          </div>
          <p className="text-[#6B4F4F] mb-4">{standard.description}</p>
          <div className="mt-4">
            <h4 className="font-bold text-[#483434] mb-2">Category Description:</h4>
            <p className="text-sm text-[#6B4F4F]">{category.description}</p>
          </div>
        </div>
      );
    } else {
      const category = activeInfo;
      return (
        <div className="bg-[#FFF3E4] p-6 rounded-xl border border-[#EED6C4] h-full">
          <div className="flex items-center mb-4">
            <span className="text-[#6B4F4F] mr-3">{category.icon}</span>
            <h3 className="text-xl font-bold text-[#483434]">{category.name}</h3>
          </div>
          <p className="text-[#6B4F4F] mb-4">{category.description}</p>
          {category.standards && category.standards.length > 0 && (
            <>
              <h4 className="font-bold text-[#483434] mb-2">Available Standards:</h4>
              <ul className="space-y-2">
                {category.standards.map(std => (
                  <li key={std.id} className="text-sm text-[#6B4F4F]">
                    <span className="font-bold">{std.code}:</span> {std.description}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF3E4] py-12 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-[#483434] mb-6 flex items-center">
              <FiUser className="mr-3" /> Application Details
            </h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Application submitted successfully! We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { name: 'name', label: 'Name', icon: <FiUser />, type: 'text', placeholder: 'Your Name....' },
                  { name: 'organization', label: 'Organization', icon: <FiBriefcase />, type: 'text', placeholder: 'Your Company | Organization Name.....' },
                  { name: 'email', label: 'Email', icon: <FiMail />, type: 'email', placeholder: 'Your E-mail....' },
                  { name: 'phone', label: 'Phone', icon: <FiPhone />, type: 'tel', placeholder: 'Your Phone Number....' },
                  { name: 'city', label: 'City', icon: <FiHome />, type: 'text', placeholder: 'Your City Name....' },
                  { name: 'district', label: 'District', icon: <FiMapPin />, type: 'text', placeholder: 'Your District Name.....' },
                  { name: 'province', label: 'Province', icon: <FiMapPin />, type: 'text', placeholder: 'Your Province Name.......' },
                  { name: 'country', label: 'Country', icon: <FiGlobe />, type: 'text', placeholder: 'Your Country........' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-[#483434] font-bold mb-2 pl-1">{field.label}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#6B4F4F]">{field.icon}</span>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border ${formErrors[field.name] ? 'border-red-300' : 'border-[#EED6C4]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]`}
                        placeholder={field.placeholder}
                        required
                      />
                    </div>
                    {formErrors[field.name] && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <FiAlertCircle className="mr-1" /> {formErrors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-6 relative">
                <label className="block text-[#483434] font-bold mb-2">Select Categories</label>
                <div
                  className={`w-full px-3 py-2 border ${formErrors.categories ? 'border-red-300' : 'border-[#EED6C4]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F] cursor-pointer flex justify-between items-center`}
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <div className="flex flex-wrap gap-1">
                    {selectedCategories.length > 0 ? (
                      selectedCategories.map(cat => (
                        <span
                          key={cat}
                          className="bg-[#FFF3E4] text-[#483434] px-2 py-1 rounded-md text-sm flex items-center hover:bg-[#EED6C4]"
                          onClick={(e) => {
                            e.stopPropagation();
                            const category = categories.find(c => c.name === cat) || {
                              id: `custom-${cat}`,
                              name: cat,
                              icon: <FiBriefcase className="text-[#6B4F4F]" size={20} />,
                              description: "Custom added category"
                            };
                            setActiveInfo(category);
                          }}
                        >
                          {categories.find(c => c.name === cat)?.icon || <FiBriefcase className="text-[#6B4F4F]" size={16} />}
                          <span className="ml-1">{cat}</span>
                          <button
                            type="button"
                            onClick={(e) => removeCategory(cat, e)}
                            className="ml-1 text-[#6B4F4F] hover:text-[#483434]"
                          >
                            <FiX size={14} />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-[#6B4F4F]">Select one or more categories</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCustomCategoryInput(true);
                        setIsCategoryOpen(false);
                      }}
                      className="text-[#6B4F4F] hover:text-[#483434] ml-2 p-1 hover:bg-[#FFF3E4] rounded-full"
                    >
                      <FiPlus size={16} />
                    </button>
                    {isCategoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
                {formErrors.categories && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {formErrors.categories}
                  </p>
                )}

                {showCustomCategoryInput && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg p-3">
                    <div className="flex">
                      <input
                        type="text"
                        value={customCategoryInput}
                        onChange={(e) => setCustomCategoryInput(e.target.value)}
                        className="flex-1 px-3 py-2 border border-[#EED6C4] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]"
                        placeholder="Enter custom category"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={addCustomCategory}
                        className="px-3 py-2 bg-[#6B4F4F] text-white rounded-r-lg hover:bg-[#483434]"
                      >
                        Add
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCustomCategoryInput(false)}
                      className="mt-2 text-sm text-[#6B4F4F] hover:text-[#483434]"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {isCategoryOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {categories.map(category => (
                      <div
                        key={category.id}
                        className={`px-4 py-2 hover:bg-[#FFF3E4] cursor-pointer flex items-center ${selectedCategories.includes(category.name) ? 'bg-[#FFF3E4]' : ''}`}
                        onClick={() => {
                          toggleCategory(category.name);
                          setIsCategoryOpen(false);
                        }}
                      >
                        <span className="mr-3">{category.icon}</span>
                        <span>{category.name}</span>
                        {selectedCategories.includes(category.name) && (
                          <span className="ml-auto text-[#6B4F4F]">
                            <FiCheck />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {selectedCategories.length > 0 && (
                <div className="mb-6 relative">
                  <label className="block text-[#483434] font-bold mb-2">Select Standards</label>
                  <div
                    className={`w-full px-3 py-2 border ${formErrors.standards ? 'border-red-300' : 'border-[#EED6C4]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F] cursor-pointer flex justify-between items-center`}
                    onClick={() => setIsStandardOpen(!isStandardOpen)}
                  >
                    <div className="flex flex-wrap gap-1">
                      {selectedStandards.length > 0 ? (
                        selectedStandards.map(std => (
                          <span
                            key={std.id}
                            className="bg-[#FFF3E4] text-[#483434] px-2 py-1 rounded-md text-sm hover:bg-[#EED6C4]"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveInfo(std);
                            }}
                          >
                            {std.code}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeStandard(std.id);
                              }}
                              className="ml-1 text-[#6B4F4F] hover:text-[#483434]"
                            >
                              <FiX size={14} />
                            </button>
                          </span>
                        ))
                      ) : (
                        <span className="text-[#6B4F4F]">Select one or more standards</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowCustomStandardInput(true);
                          setIsStandardOpen(false);
                        }}
                        className="text-[#6B4F4F] hover:text-[#483434] ml-2 p-1 hover:bg-[#FFF3E4] rounded-full"
                      >
                        <FiPlus size={16} />
                      </button>
                      {isStandardOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </div>
                  {formErrors.standards && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <FiAlertCircle className="mr-1" /> {formErrors.standards}
                    </p>
                  )}

                  {showCustomStandardInput && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg p-3">
                      <div className="flex">
                        <input
                          type="text"
                          value={customStandardInput}
                          onChange={(e) => setCustomStandardInput(e.target.value)}
                          className="flex-1 px-3 py-2 border border-[#EED6C4] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]"
                          placeholder="Enter custom standard"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={addCustomStandard}
                          className="px-3 py-2 bg-[#6B4F4F] text-white rounded-r-lg hover:bg-[#483434]"
                        >
                          Add
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowCustomStandardInput(false)}
                        className="mt-2 text-sm text-[#6B4F4F] hover:text-[#483434]"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {isStandardOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {availableStandards.map(standard => {
                        const standardCategories = categories
                          .filter(cat =>
                            selectedCategories.includes(cat.name) &&
                            cat.standards.some(s => s.id === standard.id)
                          ).map(cat => cat.name);

                        return (
                          <div
                            key={standard.id}
                            className={`px-4 py-2 hover:bg-[#FFF3E4] cursor-pointer ${selectedStandards.some(s => s.id === standard.id) ? 'bg-[#FFF3E4]' : ''}`}
                            onClick={() => {
                              toggleStandard(standard);
                              setIsStandardOpen(false);
                            }}
                          >
                            <div className="font-bold flex items-center">
                              {standard.code}
                              <span className="ml-2 text-xs text-[#6B4F4F] bg-[#FFF3E4] px-2 py-1 rounded">
                                ({standardCategories.join(', ')})
                              </span>
                            </div>
                            <div className="text-sm text-[#6B4F4F]">{standard.description}</div>
                            {selectedStandards.some(s => s.id === standard.id) && (
                              <div className="text-right text-[#6B4F4F]">
                                <FiCheck />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-[#483434] font-bold mb-2 pl-1 flex items-center">
                  <FiMessageSquare className="mr-2" /> Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-[#EED6C4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]"
                  placeholder="Tell us more about your certification needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#6B4F4F] to-[#483434] hover:from-[#483434] hover:to-[#6B4F4F] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center font-bold"
              >
                <FiCheck className="mr-2" />
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Right Side Info Panel */}
        <div className="hidden lg:block">
          <div className="sticky top-6">
            <h3 className="text-xl font-bold text-[#483434] mb-4 flex items-center">
              <FiBriefcase className="mr-2" /> Certification Information
            </h3>

            {renderInfoPanel()}

            {selectedStandards.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-[#483434] mb-3 flex items-center">
                  <FiCheck className="mr-2" /> Your Selected Standards
                </h3>
                <div className="space-y-3">
                  {selectedStandards.map(s => (
                    <div
                      key={s.id}
                      className="bg-[#FFF3E4] p-3 rounded-lg border border-[#EED6C4] flex justify-between items-center cursor-pointer hover:bg-[#EED6C4]"
                      onClick={() => setActiveInfo(s)}
                    >
                      <div className="flex items-center">
                        <span className="text-[#6B4F4F] mr-2">{s.categoryIcon}</span>
                        <span className="font-bold text-[#483434]">{s.code}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeStandard(s.id);
                        }}
                        className="text-[#6B4F4F] hover:text-[#483434] ml-2 p-1 hover:bg-[#FFF3E4] rounded-full"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Info Panel */}
      <div className="lg:hidden mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-[#483434] mb-4 flex items-center">
            <FiBriefcase className="mr-2" /> Certification Information
          </h3>
          {renderInfoPanel()}

          {selectedStandards.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-[#483434] mb-3 flex items-center">
                <FiCheck className="mr-2" /> Your Selected Standards
              </h3>
              <div className="space-y-3">
                {selectedStandards.map(s => (
                  <div
                    key={s.id}
                    className="bg-[#FFF3E4] p-3 rounded-lg border border-[#EED6C4] flex justify-between items-center cursor-pointer hover:bg-[#EED6C4]"
                    onClick={() => setActiveInfo(s)}
                  >
                    <div className="flex items-center">
                      <span className="text-[#6B4F4F] mr-2">{s.categoryIcon}</span>
                      <span className="font-bold text-[#483434]">{s.code}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeStandard(s.id);
                      }}
                      className="text-[#6B4F4F] hover:text-[#483434] ml-2 p-1 hover:bg-[#FFF3E4] rounded-full"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#483434] mb-6 text-center">
          साथै ISO प्रमाणिकरणबाट तल उल्लेखित फाइदाहरु हुन्छन् ।
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#FFF3E4] p-4 rounded-lg border border-[#EED6C4] hover:shadow-md transition-shadow h-full"
            >
              <h3 className="text-lg font-bold text-[#483434] flex items-start">
                <span className="mr-2">{index + 1}.</span>
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ISOCertificationForm;