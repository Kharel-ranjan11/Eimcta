import { useState, useEffect } from 'react';
import {
  FiUser, FiBriefcase, FiMail, FiPhone, FiMapPin, FiMessageSquare,
  FiCheck, FiX, FiChevronDown, FiChevronUp, FiHome, FiGlobe, FiAlertCircle
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

  const categories = [
    {
      id: 'construction',
      name: "CONSTRUCTION",
      icon: <FaBuilding className="text-amber-600" size={16} />,
      description: "Construction companies, contractors, and building firms that need quality, safety, and environmental standards for their projects.",
      standards: [
        { id: 'con-9001', code: 'ISO 9001', description: 'Quality management system for construction processes and project delivery' },
        { id: 'con-14001', code: 'ISO 14001', description: 'Environmental management for sustainable construction practices' },
        { id: 'con-45001', code: 'ISO 45001', description: 'Occupational health and safety for construction sites and workers' }
      ]
    },
    {
      id: 'factory',
      name: "FACTORY / MANUFACTURER",
      icon: <FaIndustry className="text-amber-600" size={16} />,
      description: "Manufacturing plants, production facilities, and industrial operations requiring standardization of processes and safety.",
      standards: [
        { id: 'fac-9001', code: 'ISO 9001', description: 'Quality management for manufacturing consistency and product reliability' },
        { id: 'fac-14001', code: 'ISO 14001', description: 'Environmental standards for reducing manufacturing waste and pollution' },
        { id: 'fac-45001', code: 'ISO 45001', description: 'Worker safety standards for factory environments and machinery operation' }
      ]
    },
    {
      id: 'ingo',
      name: "INGO/NGO",
      icon: <FaHandsHelping className="text-amber-600" size={16} />,
      description: "International and local non-governmental organizations needing accountability and quality standards for their operations.",
      standards: [
        { id: 'ing-9001', code: 'ISO 9001', description: 'Quality management for humanitarian operations and service delivery' },
        { id: 'ing-26000', code: 'ISO 26000', description: 'Social responsibility guidelines for ethical NGO operations' },
        { id: 'ing-sa8000', code: 'SA 8000', description: 'Social accountability for fair treatment of workers and communities' }
      ]
    }
  ];

  const benefits = [
    { title: "रिसोर्स हरुको सहि उपयोग हुन्छ।",  },
    { title: "गुणस्तर निर्धारणका सम्पुर्ण लिखित नीति तथा विभागिय दस्ताबेजहरु तयार हुन्छन।" },
    { title: "कामकारबाहीको लेखा परिछ्यण तथा उचित बाड्फाड।", },
    { title: "समाग्री, समय तथा साधनको अनावश्यक उपायोग तथा दुरुपयोग हुनबाट बचाउछ।", },
    { title: "सेवा तथा निर्मित सामग्रीहरुको गुणस्तर एबम बिस्वस्नियता बड्‌छ।", },
    { title: "प्रतिस्पर्धात्मक बजारमा आफ्नो संस्थाको मूल्याकंनमा अभिवृद्धी हुन्छ।", },
    { title: "टेन्डर/प्रतिस्पर्धामा अब्बल हुदै।" },
    { title: "दिर्गकालमा व्यापार सम्ममा पनि वृद्धि हुन्छ।",}
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
      }, 3000);
    }
  };

  const renderInfoPanel = () => {
    if (!activeInfo) {
      return (
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 h-full flex flex-col items-center justify-center text-center">
          <FiBriefcase className="text-amber-400 mb-4" size={40} />
          <h4 className="text-lg font-medium text-amber-800 mb-2">Select a Category or Standard</h4>
          <p className="text-amber-600">Click on any category or standard to see detailed information here</p>
        </div>
      );
    }

    if (activeInfo.categoryName) {
      const standard = activeInfo;
      const category = categories.find(c => c.name === standard.categoryName);
      return (
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 h-full">
          <div className="flex items-center mb-4">
            <span className="text-amber-600 mr-3">{category.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-amber-900">{standard.code}</h3>
              <p className="text-sm text-amber-600">{category.name} Standard</p>
            </div>
          </div>
          <p className="text-amber-700 mb-4">{standard.description}</p>
          <div className="mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">Category Description:</h4>
            <p className="text-sm text-amber-600">{category.description}</p>
          </div>
        </div>
      );
    } else {
      const category = activeInfo;
      return (
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 h-full">
          <div className="flex items-center mb-4">
            <span className="text-amber-600 mr-3">{category.icon}</span>
            <h3 className="text-xl font-bold text-amber-900">{category.name}</h3>
          </div>
          <p className="text-amber-700 mb-4">{category.description}</p>
          <h4 className="font-semibold text-amber-800 mb-2">Available Standards:</h4>
          <ul className="space-y-2">
            {category.standards.map(std => (
              <li key={std.id} className="text-sm text-amber-600">
                <span className="font-medium">{std.code}:</span> {std.description}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
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
                  { name: 'name', label: 'Name', icon: <FiUser />, type: 'text' },
                  { name: 'organization', label: 'Organization', icon: <FiBriefcase />, type: 'text' },
                  { name: 'email', label: 'Email', icon: <FiMail />, type: 'email' },
                  { name: 'phone', label: 'Phone', icon: <FiPhone />, type: 'tel' },
                  { name: 'city', label: 'City', icon: <FiHome />, type: 'text' },
                  { name: 'district', label: 'District', icon: <FiMapPin />, type: 'text' },
                  { name: 'province', label: 'Province', icon: <FiMapPin />, type: 'text' },
                  { name: 'country', label: 'Country', icon: <FiGlobe />, type: 'text' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-amber-900 font-medium mb-2 pl-1">{field.label}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-amber-500">{field.icon}</span>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border ${formErrors[field.name] ? 'border-red-300' : 'border-amber-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
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
                <label className="block text-amber-900 font-medium mb-2">Select Categories</label>
                <div
                  className={`w-full px-3 py-2 border ${formErrors.categories ? 'border-red-300' : 'border-amber-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer flex justify-between items-center`}
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <div className="flex flex-wrap gap-1">
                    {selectedCategories.length > 0 ? (
                      selectedCategories.map(cat => (
                        <span
                          key={cat}
                          className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm flex items-center hover:bg-amber-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveInfo(categories.find(c => c.name === cat));
                          }}
                        >
                          {categories.find(c => c.name === cat)?.icon}
                          <span className="ml-1">{cat}</span>
                          <button
                            type="button"
                            onClick={(e) => removeCategory(cat, e)}
                            className="ml-1 text-amber-600 hover:text-amber-800"
                          >
                            <FiX size={14} />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="text-amber-500">Select one or more categories</span>
                    )}
                  </div>
                  {isCategoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {formErrors.categories && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <FiAlertCircle className="mr-1" /> {formErrors.categories}
                  </p>
                )}

                {isCategoryOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-amber-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {categories.map(category => (
                      <div
                        key={category.id}
                        className={`px-4 py-2 hover:bg-amber-50 cursor-pointer flex items-center ${selectedCategories.includes(category.name) ? 'bg-amber-100' : ''}`}
                        onClick={() => {
                          toggleCategory(category.name);
                          setIsCategoryOpen(false);
                        }}
                      >
                        <span className="mr-3">{category.icon}</span>
                        <span>{category.name}</span>
                        {selectedCategories.includes(category.name) && (
                          <span className="ml-auto text-amber-600">
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
                  <label className="block text-amber-900 font-medium mb-2">Select Standards</label>
                  <div
                    className={`w-full px-3 py-2 border ${formErrors.standards ? 'border-red-300' : 'border-amber-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer flex justify-between items-center`}
                    onClick={() => setIsStandardOpen(!isStandardOpen)}
                  >
                    <div className="flex flex-wrap gap-1">
                      {selectedStandards.length > 0 ? (
                        selectedStandards.map(std => (
                          <span
                            key={std.id}
                            className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm hover:bg-amber-200"
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
                              className="ml-1 text-amber-600 hover:text-amber-800"
                            >
                              <FiX size={14} />
                            </button>
                          </span>
                        ))
                      ) : (
                        <span className="text-amber-500">Select one or more standards</span>
                      )}
                    </div>
                    {isStandardOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  {formErrors.standards && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <FiAlertCircle className="mr-1" /> {formErrors.standards}
                    </p>
                  )}

                  {isStandardOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-amber-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {availableStandards.map(standard => {
                        const standardCategories = categories
                          .filter(cat =>
                            selectedCategories.includes(cat.name) &&
                            cat.standards.some(s => s.id === standard.id)
                          ).map(cat => cat.name);

                        return (
                          <div
                            key={standard.id}
                            className={`px-4 py-2 hover:bg-amber-50 cursor-pointer ${selectedStandards.some(s => s.id === standard.id) ? 'bg-amber-100' : ''}`}
                            onClick={() => {
                              toggleStandard(standard);
                              setIsStandardOpen(false);
                            }}
                          >
                            <div className="font-medium flex items-center">
                              {standard.code}
                              <span className="ml-2 text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded">
                                ({standardCategories.join(', ')})
                              </span>
                            </div>
                            <div className="text-sm text-amber-600">{standard.description}</div>
                            {selectedStandards.some(s => s.id === standard.id) && (
                              <div className="text-right text-amber-600">
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
                <label className="block text-amber-900 font-medium mb-2 pl-1 flex items-center">
                  <FiMessageSquare className="mr-2" /> Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us more about your certification needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center"
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
            <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
              <FiBriefcase className="mr-2" /> Certification Information
            </h3>

            {renderInfoPanel()}

            {selectedStandards.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center">
                  <FiCheck className="mr-2" /> Your Selected Standards
                </h3>
                <div className="space-y-3">
                  {selectedStandards.map(s => (
                    <div
                      key={s.id}
                      className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex justify-between items-center cursor-pointer hover:bg-amber-100"
                      onClick={() => setActiveInfo(s)}
                    >
                      <div className="flex items-center">
                        <span className="text-amber-600 mr-2">{s.categoryIcon}</span>
                        <span className="font-medium text-amber-800">{s.code}</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeStandard(s.id);
                        }}
                        className="text-amber-500 hover:text-amber-700 ml-2 p-1 hover:bg-amber-200 rounded-full"
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
      {/* benefit  */}
      {/* Benefits Section */}
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-4">
        <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-6 text-center">
          साथै ISO प्रमाणिकरणबाट तल उल्लेखित फाइदाहरु हुन्छन् ।
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-amber-50 p-2 rounded-lg border flex items-start
               border-amber-200 hover:shadow-md transition-shadow h-full"
            >
              <span className="text-lg text-amber-800 mr-2">{index + 1}.</span>
              <h3 className="text-lg font-medium text-amber-800">
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