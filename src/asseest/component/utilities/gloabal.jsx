import { useState, useMemo, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Mail, Phone, Home, Globe, MessageSquare, Check, X, ChevronDown, ChevronUp, AlertCircle, Navigation, Plus, Building, Factory, HeartHandshake, Stethoscope, Utensils, GraduationCap, PiggyBank, Bell, Truck, Package, Server } from 'lucide-react';
import useEmailAPI from "../utilities/SocialMedia/AllApi";
import ConfettiEffect from "../utilities/confeetie.jsx";

// Data constants
const CATEGORIES = [
    { id: 'construction', name: "CONSTRUCTION", icon: <Building className="text-yellow-400" size={20} />, description: "Construction companies, contractors, and building firms.", standards: [{ id: 'con-9001', code: 'ISO 9001:2015', description: 'Quality management system for construction' }, { id: 'con-14001', code: 'ISO 14001:2015', description: 'Environmental management for construction' }, { id: 'con-45001', code: 'ISO 45001:2018', description: 'Occupational health and safety for sites' }] },
    { id: 'factory', name: "FACTORY / MANUFACTURER", icon: <Factory className="text-yellow-400" size={20} />, description: "Manufacturing plants and production facilities.", standards: [{ id: 'fac-9001', code: 'ISO 9001:2015', description: 'Manufacturing quality standards' }, { id: 'fac-14001', code: 'ISO 14001:2015', description: 'Sustainable manufacturing practices' }, { id: 'fac-45001', code: 'ISO 45001:2018', description: 'Factory worker safety standards' }] },
    { id: 'ingo', name: "INGO/NGO", icon: <HeartHandshake className="text-yellow-400" size={20} />, description: "International and local non-governmental organizations.", standards: [{ id: 'ing-9001', code: 'ISO 9001:2015', description: 'Quality in humanitarian operations' }, { id: 'ing-26000', code: 'ISO 26000:2010', description: 'Guidance on social responsibility' }, { id: 'ing-sa8000', code: 'SA 8000:2014', description: 'Fair treatment of workers standards' }] },
    { id: 'healthcare', name: "HOSPITAL / CLINIC / LAB", icon: <Stethoscope className="text-yellow-400" size={20} />, description: "Healthcare providers, medical laboratories, and clinics.", standards: [{ id: 'med-13485', code: 'ISO 13485:2016', description: 'Quality management for medical devices' }, { id: 'med-15189', code: 'ISO 15189:2012', description: 'Medical laboratory quality standards' }] },
    { id: 'hospitality', name: "HOTEL / FOOD INDUSTRY", icon: <Utensils className="text-yellow-400" size={20} />, description: "Hotels, restaurants, and food service businesses.", standards: [{ id: 'hot-22000', code: 'ISO 22000:2018', description: 'Food safety management system' }, { id: 'hot-haccp', code: 'HACCP', description: 'Critical control points for food safety' }] },
    { id: 'finance', name: "BANK / FINANCE / INSURANCE", icon: <PiggyBank className="text-yellow-400" size={20} />, description: "Financial institutions requiring data security.", standards: [{ id: 'fin-9001', code: 'ISO 9001:2015', description: 'Financial service quality standards' }, { id: 'fin-27001', code: 'ISO 27001:2022', description: 'Data protection and security management' }] },
    { id: 'education', name: "SCHOOL/COLLEGE EDU", icon: <GraduationCap className="text-yellow-400" size={20} />, description: "Educational institutions for academic quality.", standards: [{ id: 'edu-21001', code: 'ISO 21001:2018', description: 'Quality management in education' }] },
    { id: 'service', name: "SERVICE INDUSTRIES", icon: <Bell className="text-yellow-400" size={20} />, description: "Service providers requiring quality delivery.", standards: [{ id: 'ser-9001', code: 'ISO 9001:2015', description: 'Service quality standards' }, { id: 'ser-45001', code: 'ISO 45001:2018', description: 'Service worker safety management' }] },
    { id: 'transport', name: "TRANSPORT / LOGISTIC", icon: <Truck className="text-yellow-400" size={20} />, description: "Transportation and logistics companies.", standards: [{ id: 'log-9001', code: 'ISO 9001:2015', description: 'Logistics quality standards' }, { id: 'log-28000', code: 'ISO 28000:2007', description: 'Security in logistics operations' }] },
    { id: 'warehousing', name: "EXIM/WAREHOUSING", icon: <Package className="text-yellow-400" size={20} />, description: "Warehousing and import/export businesses.", standards: [{ id: 'war-9001', code: 'ISO 9001:2015', description: 'Warehousing quality standards' }, { id: 'war-45001', code: 'ISO 45001:2018', description: 'Warehouse worker safety procedures' }] },
    { id: 'technology', name: "INFO TECHNOLOGY", icon: <Server className="text-yellow-400" size={20} />, description: "IT companies and service providers.", standards: [{ id: 'it-9001', code: 'ISO 9001:2015', description: 'IT service quality standards' }, { id: 'it-27000', code: 'ISO 27000:2018', description: 'IT security best practices' }] },
];

const BENEFITS_BILINGUAL = [
    { np: "रिसोर्स हरुको सहि उपयोग हुन्छ।", en: "Optimal utilization of resources occurs." },
    { np: "गुणस्तर निर्धारणका सम्पुर्ण लिखित नीति तथा विभागिय दस्ताबेजहरु तयार हुन्छन।", en: "All written policies and departmental documents for quality determination are prepared." },
    { np: "कामकारबाहीको लेखा परिछ्यण तथा उचित बाड्फाड।", en: "Audit and proper adjustment of work execution." },
    { np: "समाग्री, समय तथा साधनको अनावश्यक उपायोग तथा दुरुपयोग हुनबाट बचाउछ।", en: "Prevents unnecessary use and misuse of materials, time, and resources." },
    { np: "सेवा तथा निर्मित सामग्रीहरुको गुणस्तर एबम बिस्वस्नियता बड्‌छ।", en: "Increases the quality and reliability of services and manufactured goods." },
    { np: "प्रतिस्पर्धात्मक बजारमा आफ्नो संस्थाको मूल्याकंनमा अभिवृद्धी हुन्छ।", en: "Enhances the valuation of your organization in the competitive market." },
    { np: "टेन्डर/प्रतिस्पर्धामा अब्बल हुदै।", en: "Excelling in tenders/competitions." },
    { np: "दिर्गकालमा व्यापार सम्ममा पनि वृद्धि हुन्छ।", en: "In the long term, business credibility also increases." }
];

const FORM_FIELDS = [
    { name: 'name', label: 'Name', icon: <User size={20} />, placeholder: 'Your Name....' },
    { name: 'organization', label: 'Organization', icon: <Briefcase size={20} />, placeholder: 'Your Company....' },
    { name: 'email', label: 'Email', icon: <Mail size={20} />, type: 'email', placeholder: 'Your E-mail....' },
    { name: 'phone', label: 'Phone', icon: <Phone size={20} />, type: 'tel', placeholder: 'Your Phone....' },
    { name: 'address', label: 'Address', icon: <Home size={20} />, placeholder: 'Your Full Address....' },
    { name: 'country', label: 'Country', icon: <Globe size={20} />, placeholder: 'Your Country....' },
];

// Reusable Components
const FormInput = ({ name, label, icon, error, required = true, ...props }) => (
    <div className="relative">
        <label className="block text-amber-900 font-bold mb-2 pl-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
            <span className="absolute left-3 top-3 text-amber-700">{icon}</span>
            <input
                name={name}
                className={`w-full pl-10 pr-4 py-2 border ${error ? 'border-red-300' : 'border-amber-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                required={required}
                {...props}
            />
        </div>
        {error && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle size={16} /> {error}</p>}
    </div>
);

const InfoPanel = ({ activeInfo }) => {
    if (!activeInfo) {
        return (
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 h-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 rounded-full p-3 mb-4">
                    <Briefcase className="text-yellow-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-amber-900 mb-2">Select an Item</h4>
                <p className="text-amber-800">Click a category or standard for details.</p>
            </div>
        );
    }

    const { name, code, icon, description, standards, categoryName, categoryDescription } = activeInfo;
    const isStandard = !!categoryName;
    const title = isStandard ? code : name;
    const subTitle = isStandard ? `${categoryName} Standard` : null;
    const mainDescription = description;
    const relatedInfoTitle = isStandard ? "Category Description:" : "Available Standards:";
    const relatedInfoContent = isStandard ? categoryDescription : (
        <ul className="space-y-2">
            {standards?.map(std => (
                <li key={std.id} className="text-sm text-amber-800"><span className="font-bold">{std.code}:</span> {std.description}</li>
            ))}
        </ul>
    );

    return (
        <motion.div
            className="bg-amber-50 p-6 rounded-xl border border-amber-200 h-full hover:shadow-md transition-shadow"
            whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
            style={{ originX: 0.5, originY: 0.5 }}
        >
            <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                    <span className="text-yellow-400">{icon}</span>
                </div>
                <div>
                    <motion.h3
                        className="text-xl font-bold text-amber-900 relative"
                        initial="initial"
                        whileInView="animate"
                        variants={headerVariant}
                        viewport={{ once: true }}
                    >
                        {title}
                        <motion.div
                            className="absolute w-12 h-1 bg-yellow-400 left-0 bottom-2 rounded-lg"
                            variants={underlineVariant}
                            whileInView="animate"
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.h3>
                    {subTitle && <p className="text-sm text-amber-800 mt-3">{subTitle}</p>}
                </div>
            </div>
            <p className="text-amber-800 mb-4">{mainDescription}</p>
            {relatedInfoContent && (
                <div className="mt-4">
                    <h4 className="font-bold text-amber-900 mb-2">{relatedInfoTitle}</h4>
                    {relatedInfoContent}
                </div>
            )}
        </motion.div>
    );
};

// Animation Variants
const slideInRight = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const slideInLeft = {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const headerVariant = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
};

const underlineVariant = {
    initial: { width: "0%" },
    animate: { width: "35%" },
    transition: { duration: 0.8, delay: 0.3 }
};

const paragraphVariant = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 }
};

const containerStagger = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
};

const cardHover = {
    y: -8,
    rotateX: 2,
    rotateY: -1,
    transition: { duration: 0.3, ease: "easeOut" }
};

const ISOCertificationForm = () => {
    const [formData, setFormData] = useState({ name: '', organization: '', email: '', phone: '', address: '', country: '', message: '' });
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [customCategories, setCustomCategories] = useState([]);
    const [showCustomCategoryInput, setShowCustomCategoryInput] = useState(false);
    const [customCategoryInput, setCustomCategoryInput] = useState('');

    const [selectedStandards, setSelectedStandards] = useState([]);
    const [customStandards, setCustomStandards] = useState([]);
    const [showCustomStandardInput, setShowCustomStandardInput] = useState(false);
    const [customStandardInput, setCustomStandardInput] = useState('');

    const [formErrors, setFormErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [activeInfo, setActiveInfo] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const { sendEmail } = useEmailAPI();

    const allCategories = useMemo(() => [...CATEGORIES, ...customCategories], [customCategories]);

    const availableStandards = useMemo(() => {
        return selectedCategories.flatMap(catName => {
            const category = allCategories.find(c => c.name === catName);
            return category ? category.standards.map(s => ({
                ...s,
                categoryName: category.name,
                icon: category.icon,
                categoryDescription: category.description
            })) : [];
        });
    }, [selectedCategories, allCategories]);

    const allAvailableStandardsForSelection = useMemo(() => {
        const combined = [...availableStandards, ...customStandards];
        return combined.filter((standard, index, self) =>
            index === self.findIndex((s) => s.id === standard.id)
        );
    }, [availableStandards, customStandards]);

    const resetForm = useCallback(() => {
        setFormData({ name: '', organization: '', email: '', phone: '', address: '', country: '', message: '' });
        setSelectedCategories([]);
        setCustomCategories([]);
        setSelectedStandards([]);
        setCustomStandards([]);
        setFormErrors({});
        setSuccessMessage('');
        setActiveInfo(null);
    }, []);

    const handleGeolocate = () => {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");
            return;
        }
        setIsLocating(true);
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        };

        const successCallback = async (position) => {
            const { latitude: lat, longitude: lon } = position.coords;
            try {
                const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                const data = await res.json();
                const admin = data.localityInfo?.administrative;
                const country = admin?.[0]?.name || data.countryName;
                const address = data.locality;
                setFormData(prev => ({
                    ...prev,
                    address: address || prev.address,
                    country: country || prev.country,
                }));
            } catch (err) {
                console.error("Failed to fetch address:", err);
            } finally {
                setIsLocating(false);
            }
        };

        const errorCallback = (error) => {
            console.error("Geolocation error occurred.");
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.error("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("An unknown error occurred.");
                    break;
            }
            console.error("Full error object:", error);
            setIsLocating(false);
        };

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    };

    const handleAddCustomCategory = () => {
        const name = customCategoryInput.trim().toUpperCase();
        if (name && !allCategories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
            const newCategory = {
                id: `custom-${Date.now()}`,
                name,
                icon: <Briefcase className="text-yellow-400" size={20} />,
                description: "A custom category added by the user.",
                standards: []
            };
            setCustomCategories(prev => [...prev, newCategory]);
            setSelectedCategories(prev => [...prev, name]);
            setCustomCategoryInput('');
            setShowCustomCategoryInput(false);
        }
    };

    const handleAddCustomStandard = () => {
        const code = customStandardInput.trim().toUpperCase();
        if (code && !selectedStandards.some(s => s.code.toLowerCase() === code.toLowerCase())) {
            const newStandard = {
                id: `custom-std-${Date.now()}`,
                code,
                description: "A custom standard added by the user.",
                categoryName: "Custom",
                icon: <Briefcase className="text-yellow-400" size={20} />,
                categoryDescription: "This standard was manually added."
            };
            setCustomStandards(prev => [...prev, newStandard]);
            setSelectedStandards(prev => [...prev, newStandard]);
            setCustomStandardInput('');
            setShowCustomStandardInput(false);
        }
    };

    const validateForm = () => {
        const errors = {};
        
        // Validate name
        if (!formData.name.trim()) {
          errors.name = 'Name is required';
        }
        
        // Validate organization
        if (!formData.organization.trim()) {
          errors.organization = 'Organization is required';
        }
        
        // Validate email
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
        
        // Validate phone
        if (!formData.phone) {
          errors.phone = 'Phone number is required';
        } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
          errors.phone = 'Please enter a valid phone number';
        }
        
        // Validate address
        if (!formData.address.trim()) {
          errors.address = 'Address is required';
        }
        
        // Validate country
        if (!formData.country.trim()) {
          errors.country = 'Country is required';
        }
        
        // Validate categories
        if (selectedCategories.length === 0) {
          errors.categories = 'At least one category must be selected';
        }
        
        // Validate standards
        if (selectedStandards.length === 0) {
          errors.standards = 'At least one standard must be selected';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCategoryToggle = (categoryName) => {
        const isSelected = selectedCategories.includes(categoryName);
        if (isSelected) {
            setSelectedCategories(prev => prev.filter(c => c !== categoryName));
            setCustomCategories(prev => prev.filter(c => c.name !== categoryName));
            const categoryObj = allCategories.find(c => c.name === categoryName);
            if (categoryObj && categoryObj.standards.length > 0) {
                const standardsToRemove = new Set(categoryObj.standards.map(s => s.id));
                setSelectedStandards(prev => prev.filter(s => !standardsToRemove.has(s.id)));
            }
        } else {
            setSelectedCategories(prev => [...prev, categoryName]);
        }
    };

    const handleStandardToggle = (standard) => {
        const isSelected = selectedStandards.some(s => s.id === standard.id);
        if (isSelected) {
            setSelectedStandards(prev => prev.filter(s => s.id !== standard.id));
            if (standard.id.startsWith('custom-std')) {
                setCustomStandards(prev => prev.filter(s => s.id !== standard.id));
            }
        } else {
            setSelectedStandards(prev => [...prev, standard]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSending(true);
        
        // Prepare data for email
        const submissionData = {
            ...formData,
            selectedCategories: selectedCategories.join(', '),
            selectedStandards: selectedStandards.map(s => `${s.code} (${s.categoryName || 'Custom'})`).join(', '),
            serviceCategory: selectedCategories.join(', '),
            serviceCode: selectedStandards.map(s => s.code).join(', ')
        };
        
        try {
            const result = await sendEmail(submissionData);
            
            if (result.status === 200) {
                const successMsg = result.message || 'Application submitted successfully!';
                setSuccessMessage(successMsg);
                setSubmitSuccess(true);
                setTimeout(() => {
                    setSubmitSuccess(false);
                    setSuccessMessage('');
                    resetForm();
                }, 5000);
            } else {
                const errorMsg = result.error?.text || result.error?.code || result.error?.message || 
                                 result.message ;
                setFormErrors(prev => ({ ...prev, submit: errorMsg }));
            }
        } catch (error) {
            const errorMsg = error.message || "An unexpected error occurred";
            setFormErrors(prev => ({ ...prev, submit: errorMsg }));
        } finally {
            setIsSending(false);
        }
    };

    const renderSidePanelContent = () => (
        <>
            <motion.h3
                className="text-xl font-bold text-amber-900 mb-4 flex items-center relative"
                initial="initial"
                whileInView="animate"
                variants={headerVariant}
                viewport={{ once: true }}
            >
                <div className="bg-yellow-100 rounded-full p-2 mr-2">
                    <Briefcase className="text-yellow-400" size={20} />
                </div>
                Certification Information
                <motion.div className="absolute w-12 h-1 bg-yellow-400 left-0 bottom-2 rounded-lg" variants={underlineVariant} whileInView="animate" viewport={{ once: true }}></motion.div>
            </motion.h3>
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                style={{ originX: 0.5, originY: 0.5 }}
            >
                <InfoPanel activeInfo={activeInfo} />
            </motion.div>
            {selectedStandards.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-bold text-amber-900 mb-3">Your Selected Standards</h3>
                    <motion.div className="space-y-3" initial="hidden" animate="visible" variants={containerStagger}>
                        {selectedStandards.map(s => (
                            <motion.div
                                key={s.id}
                                className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex justify-between items-center cursor-pointer hover:bg-amber-100 hover:shadow-md transition-all"
                                onClick={() => setActiveInfo(s)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-yellow-100 rounded-full p-1 mr-2">
                                        <span className="text-yellow-400">{s.icon}</span>
                                    </div>
                                    <span className="font-bold text-amber-900">{s.code}</span>
                                </div>
                                <button type="button" onClick={(e) => { e.stopPropagation(); handleStandardToggle(s); }} className="text-amber-700 hover:text-amber-900"><X size={16} /></button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}
        </>
    );

    return (
        <motion.div
            className="min-h-screen bg-gray-50  py-12 px-4 sm:px-6 lg:px-8 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    className="lg:col-span-2 bg-amber-50 rounded-2xl shadow-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                    style={{ originX: 0.5, originY: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <motion.h2
                            className="text-2xl font-bold text-amber-900 flex items-center relative"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="bg-yellow-100 rounded-full p-2 mr-3">
                                <User className="text-yellow-400" size={24} />
                            </div>
                            Application Details
                            <motion.div className="absolute w-12 h-1 bg-yellow-400 left-[50%] -bottom-2 rounded-lg" variants={underlineVariant} whileInView="animate" viewport={{ once: true }}></motion.div>
                        </motion.h2>
                        <motion.button
                            type="button"
                            onClick={handleGeolocate}
                            disabled={isLocating}
                            className="flex items-center px-3 py-2 text-sm bg-amber-50 text-amber-900 rounded-lg border border-amber-200 hover:bg-amber-100 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-wait"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <div className="bg-yellow-100 rounded-full p-1 mr-2">
                                <Navigation className={`text-yellow-400 ${isLocating ? 'animate-spin' : ''}`} size={16} />
                            </div>
                            {isLocating ? 'Locating...' : 'Use My Current Location'}
                        </motion.button>
                    </div>
                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg relative">
                            <ConfettiEffect />
                            {successMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {FORM_FIELDS.map(field => <FormInput key={field.name} {...field} value={formData[field.name]} onChange={handleChange} error={formErrors[field.name]} />)}
                        </div>
                        <div className="relative">
                            <Dropdown
                                label="Select Categories"
                                items={allCategories}
                                selectedItems={selectedCategories}
                                onToggle={handleCategoryToggle}
                                displayKey="name"
                                onItemClick={setActiveInfo}
                                error={formErrors.categories}
                                onAdd={() => setShowCustomCategoryInput(true)}
                            />
                            {showCustomCategoryInput && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-amber-200 rounded-lg shadow-lg p-3">
                                    <div className="flex">
                                        <input type="text" value={customCategoryInput} onChange={(e) => setCustomCategoryInput(e.target.value)} className="flex-1 px-3 py-2 border border-amber-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter custom category" autoFocus />
                                        <button type="button" onClick={handleAddCustomCategory} className="px-3 py-2 bg-amber-600 text-white rounded-r-lg hover:bg-amber-700">Add</button>
                                    </div>
                                    <button type="button" onClick={() => setShowCustomCategoryInput(false)} className="mt-2 text-sm text-amber-700 hover:text-amber-900">Cancel</button>
                                </div>
                            )}
                        </div>
                        {selectedCategories.length > 0 && (
                            <div className="relative">
                                <Dropdown
                                    label="Select Standards"
                                    items={allAvailableStandardsForSelection}
                                    selectedItems={selectedStandards.map(s => s.code)}
                                    onToggle={handleStandardToggle}
                                    displayKey="code"
                                    itemRenderer={(item) => (
                                        <>
                                            <div className="font-bold">{item.code} <span className="ml-2 text-xs text-amber-800 bg-amber-50 px-2 py-1 rounded">({item.categoryName})</span></div>
                                            <div className="text-sm text-amber-800">{item.description}</div>
                                        </>
                                    )}
                                    onItemClick={setActiveInfo}
                                    error={formErrors.standards}
                                    onAdd={() => setShowCustomStandardInput(true)}
                                />
                                {showCustomStandardInput && (
                                    <div className="absolute z-20 w-full mt-1 bg-white border border-amber-200 rounded-lg shadow-lg p-3">
                                        <div className="flex">
                                            <input type="text" value={customStandardInput} onChange={(e) => setCustomStandardInput(e.target.value)} className="flex-1 px-3 py-2 border border-amber-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter custom standard" autoFocus />
                                            <button type="button" onClick={handleAddCustomStandard} className="px-3 py-2 bg-amber-600 text-white rounded-r-lg hover:bg-amber-700">Add</button>
                                        </div>
                                        <button type="button" onClick={() => setShowCustomStandardInput(false)} className="mt-2 text-sm text-amber-700 hover:text-amber-900">Cancel</button>
                                    </div>
                                )}
                            </div>
                        )}
                        <motion.div className="mb-6" variants={paragraphVariant} initial="initial" animate="animate">
                            <label className="block text-amber-900 font-bold mb-2 pl-1">
                                <div className="bg-yellow-100 rounded-full p-1 inline-flex mr-2">
                                    <MessageSquare className="text-yellow-400" size={16} />
                                </div>
                                Additional Information
                            </label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:shadow-md transition-shadow" placeholder="Tell us more..."></textarea>
                        </motion.div>
                        {formErrors.submit && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{formErrors.submit}</div>}
                        <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center font-bold hover:from-amber-700 hover:to-amber-900" disabled={isSending}>
                            {isSending ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Check size={20} /> <span className="ml-2">Submit Application</span>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="hidden lg:block sticky top-6 h-fit"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                    style={{ originX: 0.5, originY: 0.5 }}
                >
                    {renderSidePanelContent()}
                </motion.div>
            </div>
            <motion.div
                className="lg:hidden mt-8 bg-amber-50 rounded-2xl shadow-xl p-6 border border-amber-200"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                style={{ originX: 0.5, originY: 0.5 }}
            >
                {renderSidePanelContent()}
            </motion.div>
            <motion.div
                className="mt-8 bg-amber-50 rounded-2xl shadow-xl p-6 max-w-6xl mx-auto border border-amber-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                style={{ originX: 0.5, originY: 0.5 }}
            >
                <motion.h2
                    className="text-xl md:text-2xl font-bold text-amber-900 mb-6 text-center relative"
                    initial="initial"
                    whileInView="animate"
                    variants={headerVariant}
                    viewport={{ once: true }}
                >
                    साथै ISO प्रमाणिकरणबाट तल उल्लेखित फाइदाहरु हुन्छन् ।
                    <motion.div className="absolute w-16 h-1 bg-yellow-400 left-1/2 -translate-x-1/2 -bottom-2 rounded-lg" variants={underlineVariant} whileInView="animate" viewport={{ once: true }}></motion.div>
                </motion.h2>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
                    { BENEFITS_BILINGUAL.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition-shadow flex items-start"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ y: -8, rotateX: 2, rotateY: -1, transition: { duration: 0.3, ease: "easeOut" } }}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                <span className="font-bold text-yellow-400">{index + 1}</span>
                            </div>
                            <motion.div initial="initial" whileInView="animate" variants={paragraphVariant} viewport={{ once: true }}>
                                <motion.h3 className="text-lg font-bold text-amber-900" variants={paragraphVariant}>{benefit.np}</motion.h3>
                                <motion.p className="text-sm text-amber-800" variants={paragraphVariant}>{benefit.en}</motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Dropdown = ({ label, items, selectedItems, onToggle, displayKey, itemRenderer, onItemClick, error, onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getDisplayItem = (key) => {
        const foundItem = items.find(item => item[displayKey] === (typeof key === 'object' ? key[displayKey] : key));
        if (foundItem) return foundItem;
        if (typeof key === 'string') {
             return { [displayKey]: key, name: key, icon: <Briefcase className="text-yellow-400" size={20} /> };
        }
        return { ...key, icon: <Briefcase className="text-yellow-400" size={20} /> };
    };

    return (
        <motion.div className="mb-6" variants={paragraphVariant} initial="initial" animate="animate">
            <div className="flex justify-between items-center mb-2">
                <label className="block text-amber-900 font-bold">{label}</label>
                {onAdd && (
                    <button type="button" onClick={(e) => { e.stopPropagation(); onAdd(); setIsOpen(false); }} className="flex items-center text-sm text-amber-700 hover:text-amber-900">
                        <div className="bg-yellow-100 rounded-full p-1 mr-1">
                            <Plus size={16} className="text-yellow-400" />
                        </div>
                        Add More
                    </button>
                )}
            </div>
            <div className="relative">
                <div
                    className={`w-full p-2 border ${error ? 'border-red-300' : 'border-amber-200'} rounded-lg cursor-pointer flex justify-between items-center hover:shadow-md transition-shadow min-h-[42px]`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex flex-wrap gap-1">
                        {selectedItems.length > 0 ? (
                            selectedItems.map((key, index) => {
                                const item = getDisplayItem(key);
                                return (
                                    <span key={item.id || index} className="bg-amber-50 text-amber-900 px-2 py-1 rounded-md text-sm flex items-center hover:bg-amber-100" onClick={(e) => { e.stopPropagation(); onItemClick(item); }}>
                                        <div className="bg-yellow-100 rounded-full p-1 mr-1 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <span className="ml-1 font-semibold">{item[displayKey]}</span>
                                        <button type="button" onClick={(e) => { e.stopPropagation(); onToggle(displayKey === 'name' ? item.name : item); }} className="ml-2 text-amber-700 hover:text-amber-900"><X size={14} /></button>
                                    </span>
                                );
                            })
                        ) : <span className="text-amber-700 pl-2">Select one or more...</span>}
                    </div>
                    {isOpen ? <ChevronUp className="text-amber-700" size={20} /> : <ChevronDown className="text-amber-700" size={20} />}
                </div>
                {error && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle size={16} /> {error}</p>}
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-amber-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className={`px-4 py-2 hover:bg-amber-50 cursor-pointer ${selectedItems.includes(item[displayKey]) ? 'bg-amber-50' : ''}`}
                                onClick={() => { onToggle(displayKey === 'name' ? item.name : item); setIsOpen(false); }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>{itemRenderer ? itemRenderer(item) : <div className="flex items-center"><div className="bg-yellow-100 rounded-full p-1 mr-3">{item.icon}</div><span>{item.name}</span></div>}</div>
                                    {selectedItems.some(sel => (typeof sel === 'object' ? sel.id === item.id : sel === item[displayKey])) && <Check className="text-amber-700" size={20} />}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
export default ISOCertificationForm;