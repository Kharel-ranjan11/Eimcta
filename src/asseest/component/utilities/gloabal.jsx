import { useState, useEffect, useMemo, useCallback } from 'react';

// SVG Icon Components
const FiUser = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const FiBriefcase = ({size = 20, className = ""}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const FiMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const FiPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const FiMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const FiMessageSquare = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const FiCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const FiX = ({size=16}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const FiChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
const FiChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>;
const FiHome = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const FiGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const FiAlertCircle = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const FiNavigation = ({className=""}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>;
const FiPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const FaBuilding = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M448 32H361.9C354.9 12.58 335.5 0 313.9 0H197.1c-21.58 0-40.95 12.58-47.94 32H64C46.33 32 32 46.33 32 64v384c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V64C480 46.33 465.7 32 448 32zM160 160c0-17.67 14.33-32 32-32h128c17.67 0 32 14.33 32 32v192c0 17.67-14.33 32-32 32H192c-17.67 0-32-14.33-32-32V160zM128 416H96v-32h32V416zM128 352H96v-32h32V352zM128 288H96v-32h32V288zM128 224H96v-32h32V224zM128 160H96v-32h32V160zM416 416h-32v-32h32V416zM416 352h-32v-32h32V352zM416 288h-32v-32h32V288zM416 224h-32v-32h32V224zM416 160h-32v-32h32V160z"/></svg>;
const FaIndustry = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={size} height={size} className={className} fill="currentColor"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 4.75l15.42-15.42a16 16 0 0 1 22.62 22.62L285.25 182A95.31 95.31 0 0 0 288 160z"/></svg>;
const FaHandsHelping = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={size} height={size} className={className} fill="currentColor"><path d="M533.34 224.5A138.63 138.63 0 0 0 512 192H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192c12.38 0 24-6.5 30.66-16.5a138.63 138.63 0 0 0 21.34-31.5zm-142 0a16 16 0 0 0-16-16H192c-12.38 0-24 6.5-30.66 16.5a138.63 138.63 0 0 0-21.34 31.5A138.63 138.63 0 0 0 106.66 288.5a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM320 128H192a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm192 128a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>;
const FaHospital = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M448 32H64C46.33 32 32 46.33 32 64v384c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V64C480 46.33 465.7 32 448 32zm-64 256h-64v64c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-64h-64c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h64v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64h64c8.84 0 16 7.16 16 16v64c0 8.84-7.16 16-16 16z"/></svg>;
const FaUtensils = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 208-208 208zm-96-208c0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48-48-21.49-48-48zm144 0c0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48-48-21.49-48-48z"/></svg>;
const FaUniversity = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M496 128v16c0 8.84-7.16 16-16 16H32c-8.84 0-16-7.16-16-16v-16C16 57.31 73.31 0 144 0h224c70.69 0 128 57.31 128 128zM32 480h448c8.84 0 16-7.16 16-16V192H16v272c0 8.84 7.16 16 16 16zM128 256h32v128h-32V256zm112 0h32v128h-32V256zm112 0h32v128h-32V256z"/></svg>;
const FaPiggyBank = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={size} height={size} className={className} fill="currentColor"><path d="M560 160H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-32 128H48c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-64 128H112c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM560 32H16C7.16 32 0 39.16 0 48v416c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16z"/></svg>;
const FaConciergeBell = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-48 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160H160c-8.84 0-16-7.16-16-16s7.16-16 16-16h224c8.84 0 16 7.16 16 16s-7.16 16-16 16z"/></svg>;
const FaTruck = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={size} height={size} className={className} fill="currentColor"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>;
const FaWarehouse = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={size} height={size} className={className} fill="currentColor"><path d="M560 288h-80v-64c0-17.67-14.33-32-32-32H128c-17.67 0-32 14.33-32 32v64H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h544c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM560 32H16C7.16 32 0 39.16 0 48v160h576V48c0-8.84-7.16-16-16-16zM128 416h320v32c0 8.84-7.16 16-16 16H144c-8.84 0-16-7.16-16-16v-32z"/></svg>;
const FaServer = ({className="", size=20}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size} className={className} fill="currentColor"><path d="M512 160H0V48C0 30.33 14.33 16 32 16h448c17.67 0 32 14.33 32 32v112zm0 32v128H0V192h512zm0 160v112c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32V352h512zM128 256c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0 160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-320c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/></svg>;

// Data constants
const CATEGORIES = [
    { id: 'construction', name: "CONSTRUCTION", icon: <FaBuilding className="text-[#6B4F4F]" size={20} />, description: "Construction companies, contractors, and building firms.", standards: [{ id: 'con-9001', code: 'ISO 9001:2015', description: 'Quality management system for construction' }, { id: 'con-14001', code: 'ISO 14001:2015', description: 'Environmental management for construction' }, { id: 'con-45001', code: 'ISO 45001:2018', description: 'Occupational health and safety for sites' }] },
    { id: 'factory', name: "FACTORY / MANUFACTURER", icon: <FaIndustry className="text-[#6B4F4F]" size={20} />, description: "Manufacturing plants and production facilities.", standards: [{ id: 'fac-9001', code: 'ISO 9001:2015', description: 'Manufacturing quality standards' }, { id: 'fac-14001', code: 'ISO 14001:2015', description: 'Sustainable manufacturing practices' }, { id: 'fac-45001', code: 'ISO 45001:2018', description: 'Factory worker safety standards' }] },
    { id: 'ingo', name: "INGO/NGO", icon: <FaHandsHelping className="text-[#6B4F4F]" size={20} />, description: "International and local non-governmental organizations.", standards: [{ id: 'ing-9001', code: 'ISO 9001:2015', description: 'Quality in humanitarian operations' }, { id: 'ing-26000', code: 'ISO 26000:2010', description: 'Guidance on social responsibility' }, { id: 'ing-sa8000', code: 'SA 8000:2014', description: 'Fair treatment of workers standards' }] },
    { id: 'healthcare', name: "HOSPITAL / CLINIC / LAB", icon: <FaHospital className="text-[#6B4F4F]" size={20} />, description: "Healthcare providers, medical laboratories, and clinics.", standards: [{ id: 'med-13485', code: 'ISO 13485:2016', description: 'Quality management for medical devices' }, { id: 'med-15189', code: 'ISO 15189:2012', description: 'Medical laboratory quality standards' }] },
    { id: 'hospitality', name: "HOTEL / FOOD INDUSTRY", icon: <FaUtensils className="text-[#6B4F4F]" size={20} />, description: "Hotels, restaurants, and food service businesses.", standards: [{ id: 'hot-22000', code: 'ISO 22000:2018', description: 'Food safety management system' }, { id: 'hot-haccp', code: 'HACCP', description: 'Critical control points for food safety' }] },
    { id: 'finance', name: "BANK / FINANCE / INSURANCE", icon: <FaPiggyBank className="text-[#6B4F4F]" size={20} />, description: "Financial institutions requiring data security.", standards: [{ id: 'fin-9001', code: 'ISO 9001:2015', description: 'Financial service quality standards' }, { id: 'fin-27001', code: 'ISO 27001:2022', description: 'Data protection and security management' }] },
    { id: 'education', name: "SCHOOL/COLLEGE EDU", icon: <FaUniversity className="text-[#6B4F4F]" size={20} />, description: "Educational institutions for academic quality.", standards: [{ id: 'edu-21001', code: 'ISO 21001:2018', description: 'Quality management in education' }] },
    { id: 'service', name: "SERVICE INDUSTRIES", icon: <FaConciergeBell className="text-[#6B4F4F]" size={20} />, description: "Service providers requiring quality delivery.", standards: [{ id: 'ser-9001', code: 'ISO 9001:2015', description: 'Service quality standards' }, { id: 'ser-45001', code: 'ISO 45001:2018', description: 'Service worker safety management' }] },
    { id: 'transport', name: "TRANSPORT / LOGISTIC", icon: <FaTruck className="text-[#6B4F4F]" size={20} />, description: "Transportation and logistics companies.", standards: [{ id: 'log-9001', code: 'ISO 9001:2015', description: 'Logistics quality standards' }, { id: 'log-28000', code: 'ISO 28000:2007', description: 'Security in logistics operations' }] },
    { id: 'warehousing', name: "EXIM/WAREHOUSING", icon: <FaWarehouse className="text-[#6B4F4F]" size={20} />, description: "Warehousing and import/export businesses.", standards: [{ id: 'war-9001', code: 'ISO 9001:2015', description: 'Warehousing quality standards' }, { id: 'war-45001', code: 'ISO 45001:2018', description: 'Warehouse worker safety procedures' }] },
    { id: 'technology', name: "INFO TECHNOLOGY", icon: <FaServer className="text-[#6B4F4F]" size={20} />, description: "IT companies and service providers.", standards: [{ id: 'it-9001', code: 'ISO 9001:2015', description: 'IT service quality standards' }, { id: 'it-27000', code: 'ISO 27000:2018', description: 'IT security best practices' }] },
];

const BENEFITS = [
    "रिसोर्स हरुको सहि उपयोग हुन्छ।", "गुणस्तर निर्धारणका सम्पुर्ण लिखित नीति तथा विभागिय दस्ताबेजहरु तयार हुन्छन।",
    "कामकारबाहीको लेखा परिछ्यण तथा उचित बाड्फाड।", "समाग्री, समय तथा साधनको अनावश्यक उपायोग तथा दुरुपयोग हुनबाट बचाउछ।",
    "सेवा तथा निर्मित सामग्रीहरुको गुणस्तर एबम बिस्वस्नियता बड्‌छ।", "प्रतिस्पर्धात्मक बजारमा आफ्नो संस्थाको मूल्याकंनमा अभिवृद्धी हुन्छ।",
    "टेन्डर/प्रतिस्पर्धामा अब्बल हुदै।", "दिर्गकालमा व्यापार सम्ममा पनि वृद्धि हुन्छ।"
];

const FORM_FIELDS = [
  { name: 'name', label: 'Name', icon: <FiUser />, placeholder: 'Your Name....' },
  { name: 'organization', label: 'Organization', icon: <FiBriefcase />, placeholder: 'Your Company....' },
  { name: 'email', label: 'Email', icon: <FiMail />, type: 'email', placeholder: 'Your E-mail....' },
  { name: 'phone', label: 'Phone', icon: <FiPhone />, type: 'tel', placeholder: 'Your Phone....' },
  { name: 'address', label: 'Address/Street', icon: <FiHome />, placeholder: 'Your Street Address....' },
  { name: 'city', label: 'City', icon: <FiHome />, placeholder: 'Your City....' },
  { name: 'district', label: 'District', icon: <FiMapPin />, placeholder: 'Your District....' },
  { name: 'province', label: 'Province', icon: <FiMapPin />, placeholder: 'Your Province....' },
  { name: 'country', label: 'Country', icon: <FiGlobe />, placeholder: 'Your Country....' },
];

// Reusable Components
const FormInput = ({ name, label, icon, error, ...props }) => (
    <div className="relative">
        <label className="block text-[#483434] font-bold mb-2 pl-1">{label}</label>
        <div className="relative">
            <span className="absolute left-3 top-3 text-[#6B4F4F]">{icon}</span>
            <input
                name={name}
                className={`w-full pl-10 pr-4 py-2 border ${error ? 'border-red-300' : 'border-[#EED6C4]'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]`}
                required
                {...props}
            />
        </div>
        {error && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle /> {error}</p>}
    </div>
);

const InfoPanel = ({ activeInfo }) => {
    if (!activeInfo) {
        return (
            <div className="bg-[#FFF3E4] p-6 rounded-xl border border-[#EED6C4] h-full flex flex-col items-center justify-center text-center">
                <FiBriefcase className="text-[#6B4F4F] mb-4" size={40} />
                <h4 className="text-lg font-bold text-[#483434] mb-2">Select an Item</h4>
                <p className="text-[#6B4F4F]">Click a category or standard for details.</p>
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
                <li key={std.id} className="text-sm text-[#6B4F4F]"><span className="font-bold">{std.code}:</span> {std.description}</li>
            ))}
        </ul>
    );

    return (
        <div className="bg-[#FFF3E4] p-6 rounded-xl border border-[#EED6C4] h-full">
            <div className="flex items-center mb-4">
                <span className="text-[#6B4F4F] mr-3">{icon}</span>
                <div>
                    <h3 className="text-xl font-bold text-[#483434]">{title}</h3>
                    {subTitle && <p className="text-sm text-[#6B4F4F]">{subTitle}</p>}
                </div>
            </div>
            <p className="text-[#6B4F4F] mb-4">{mainDescription}</p>
            {relatedInfoContent && (
                <div className="mt-4">
                    <h4 className="font-bold text-[#483434] mb-2">{relatedInfoTitle}</h4>
                    {relatedInfoContent}
                </div>
            )}
        </div>
    );
};

// Main App Component
const ISOCertificationForm = () => {
    const [formData, setFormData] = useState({ name: '', organization: '', email: '', phone: '', address: '', city: '', district: '', province: '', country: '', message: '' });
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
    const [activeInfo, setActiveInfo] = useState(null);
    const [isLocating, setIsLocating] = useState(false);

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
        // De-duplicate standards in case a custom one matches a pre-defined one
        return combined.filter((standard, index, self) =>
            index === self.findIndex((s) => s.id === standard.id)
        );
    }, [availableStandards, customStandards]);

    // Resets the entire form to its initial state
    const resetForm = useCallback(() => {
        setFormData({ name: '', organization: '', email: '', phone: '', address: '', city: '', district: '', province: '', country: '', message: '' });
        setSelectedCategories([]);
        setCustomCategories([]);
        setSelectedStandards([]);
        setCustomStandards([]);
        setActiveInfo(null);
    }, []);

    // Fetches user's location and populates address fields
    const handleGeolocate = () => {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");
            return;
        }
        setIsLocating(true);
        const options = {
            enableHighAccuracy: true,
            timeout: 10000, // 10 seconds
            maximumAge: 0,
        };

        const successCallback = async (position) => {
            const { latitude: lat, longitude: lon } = position.coords;
            try {
                const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                const data = await res.json();
                
                const admin = data.localityInfo?.administrative;

                const country = admin?.[0]?.name || data.countryName;
                const province = admin?.[1]?.name || data.principalSubdivision;
                const district = admin?.[2]?.name;
                const city = admin?.[3]?.name || data.city;
                const address = data.locality; // This often contains the neighborhood or street-level info

                setFormData(prev => ({
                    ...prev,
                    address: address || prev.address,
                    city: city || prev.city,
                    district: district || prev.district,
                    province: province || prev.province,
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
            switch(error.code) {
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
    
    // Adds a new custom category to the list
    const handleAddCustomCategory = () => {
        const name = customCategoryInput.trim().toUpperCase();
        if (name && !allCategories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
            const newCategory = {
                id: `custom-${Date.now()}`,
                name,
                icon: <FiBriefcase className="text-[#6B4F4F]" size={20} />,
                description: "A custom category added by the user.",
                standards: []
            };
            setCustomCategories(prev => [...prev, newCategory]);
            setSelectedCategories(prev => [...prev, name]);
            setCustomCategoryInput('');
            setShowCustomCategoryInput(false);
        }
    };

    // Adds a new custom standard to the list
    const handleAddCustomStandard = () => {
        const code = customStandardInput.trim().toUpperCase();
        if (code && !selectedStandards.some(s => s.code.toLowerCase() === code.toLowerCase())) {
            const newStandard = {
                id: `custom-std-${Date.now()}`,
                code,
                description: "A custom standard added by the user.",
                categoryName: "Custom",
                icon: <FiBriefcase className="text-[#6B4F4F]" size={20} />,
                categoryDescription: "This standard was manually added."
            };
            setCustomStandards(prev => [...prev, newStandard]);
            setSelectedStandards(prev => [...prev, newStandard]);
            setCustomStandardInput('');
            setShowCustomStandardInput(false);
        }
    };

    // Validates the form fields before submission
    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.organization) errors.organization = 'Organization is required';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Valid email is required';
        if (!formData.phone) errors.phone = 'Phone number is required';
        if (selectedStandards.length === 0) errors.standards = 'At least one standard must be selected';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handles changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Toggles the selection of a category
    const handleCategoryToggle = (categoryName) => {
        const isSelected = selectedCategories.includes(categoryName);
        if (isSelected) {
            setSelectedCategories(prev => prev.filter(c => c !== categoryName));
            // Also remove if it's a custom category
            setCustomCategories(prev => prev.filter(c => c.name !== categoryName));
            const categoryObj = allCategories.find(c => c.name === categoryName);
            // Also deselect standards associated with this category
            if (categoryObj && categoryObj.standards.length > 0) {
                const standardsToRemove = new Set(categoryObj.standards.map(s => s.id));
                setSelectedStandards(prev => prev.filter(s => !standardsToRemove.has(s.id)));
            }
        } else {
            setSelectedCategories(prev => [...prev, categoryName]);
        }
    };

    // Toggles the selection of a standard
    const handleStandardToggle = (standard) => {
        const isSelected = selectedStandards.some(s => s.id === standard.id);
        if (isSelected) {
            setSelectedStandards(prev => prev.filter(s => s.id !== standard.id));
            // Also remove if it's a custom standard
            if (standard.id.startsWith('custom-std')) {
                setCustomStandards(prev => prev.filter(s => s.id !== standard.id));
            }
        } else {
            setSelectedStandards(prev => [...prev, standard]);
        }
    };
    
    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', { ...formData, standards: selectedStandards.map(s => s.code) });
            setSubmitSuccess(true);
            setTimeout(() => {
                setSubmitSuccess(false);
                resetForm();
            }, 3000);
        }
    };

    // Renders the content for the side panel (or bottom on mobile)
    const renderSidePanelContent = () => (
        <>
            <h3 className="text-xl font-bold text-[#483434] mb-4 flex items-center">
                <FiBriefcase className="mr-2" /> Certification Information
            </h3>
            <InfoPanel activeInfo={activeInfo} />
            {selectedStandards.length > 0 && (
                <div className="mt-6">
                    <h3 className="font-bold text-[#483434] mb-3">Your Selected Standards</h3>
                    <div className="space-y-3">
                        {selectedStandards.map(s => (
                            <div
                                key={s.id}
                                className="bg-[#FFF3E4] p-3 rounded-lg border border-[#EED6C4] flex justify-between items-center cursor-pointer hover:bg-[#EED6C4]"
                                onClick={() => setActiveInfo(s)}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2">{s.icon}</span>
                                    <span className="font-bold text-[#483434]">{s.code}</span>
                                </div>
                                <button type="button" onClick={(e) => { e.stopPropagation(); handleStandardToggle(s); }} className="text-[#6B4F4F] hover:text-[#483434]"><FiX /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );

    return (
        <div className="min-h-screen bg-[#FFF3E4] py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-[#483434] flex items-center">
                            <FiUser /> <span className="ml-3">Application Details</span>
                        </h2>
                        <button
                            type="button"
                            onClick={handleGeolocate}
                            disabled={isLocating}
                            className="flex items-center px-3 py-2 text-sm bg-[#FFF3E4] text-[#483434] rounded-lg hover:bg-[#EED6C4] disabled:opacity-50 disabled:cursor-wait"
                        >
                            <FiNavigation className={`mr-2 ${isLocating ? 'animate-spin' : ''}`} />
                            {isLocating ? 'Locating...' : 'Use My Current Location'}
                        </button>
                    </div>
                    {submitSuccess && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">Application submitted successfully!</div>}
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
                                onAdd={() => setShowCustomCategoryInput(true)}
                            />
                            {showCustomCategoryInput && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg p-3">
                                    <div className="flex">
                                        <input type="text" value={customCategoryInput} onChange={(e) => setCustomCategoryInput(e.target.value)} className="flex-1 px-3 py-2 border border-[#EED6C4] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]" placeholder="Enter custom category" autoFocus />
                                        <button type="button" onClick={handleAddCustomCategory} className="px-3 py-2 bg-[#6B4F4F] text-white rounded-r-lg hover:bg-[#483434]">Add</button>
                                    </div>
                                    <button type="button" onClick={() => setShowCustomCategoryInput(false)} className="mt-2 text-sm text-[#6B4F4F] hover:text-[#483434]">Cancel</button>
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
                                            <div className="font-bold">{item.code} <span className="ml-2 text-xs text-[#6B4F4F] bg-[#FFF3E4] px-2 py-1 rounded">({item.categoryName})</span></div>
                                            <div className="text-sm text-[#6B4F4F]">{item.description}</div>
                                        </>
                                    )}
                                    onItemClick={setActiveInfo}
                                    error={formErrors.standards}
                                    onAdd={() => setShowCustomStandardInput(true)}
                                />
                                {showCustomStandardInput && (
                                    <div className="absolute z-20 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg p-3">
                                        <div className="flex">
                                            <input type="text" value={customStandardInput} onChange={(e) => setCustomStandardInput(e.target.value)} className="flex-1 px-3 py-2 border border-[#EED6C4] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]" placeholder="Enter custom standard" autoFocus />
                                            <button type="button" onClick={handleAddCustomStandard} className="px-3 py-2 bg-[#6B4F4F] text-white rounded-r-lg hover:bg-[#483434]">Add</button>
                                        </div>
                                        <button type="button" onClick={() => setShowCustomStandardInput(false)} className="mt-2 text-sm text-[#6B4F4F] hover:text-[#483434]">Cancel</button>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="mb-6">
                            <label className="block text-[#483434] font-bold mb-2 pl-1"><FiMessageSquare className="inline mr-2" /> Additional Information</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-2 border border-[#EED6C4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4F4F]" placeholder="Tell us more..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#6B4F4F] to-[#483434] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center font-bold">
                            <FiCheck /> <span className="ml-2">Submit Application</span>
                        </button>
                    </form>
                </div>
                <div className="hidden lg:block sticky top-6 h-fit">{renderSidePanelContent()}</div>
            </div>
            <div className="lg:hidden mt-8 bg-white rounded-2xl shadow-xl p-6">{renderSidePanelContent()}</div>
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#483434] mb-6 text-center">साथै ISO प्रमाणिकरणबाट तल उल्लेखित फाइदाहरु हुन्छन् ।</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BENEFITS.map((benefit, index) => (
                        <div key={index} className="bg-[#FFF3E4] p-4 rounded-lg border border-[#EED6C4] hover:shadow-md transition-shadow flex items-start">
                            <span className="mr-2 font-bold text-[#483434]">{index + 1}.</span>
                            <h3 className="text-lg font-bold text-[#483434]">{benefit}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Dropdown = ({ label, items, selectedItems, onToggle, displayKey, itemRenderer, onItemClick, error, onAdd }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const getDisplayItem = (key) => {
        const foundItem = items.find(item => item[displayKey] === key);
        return foundItem || { [displayKey]: key, name: key, icon: <FiBriefcase/> };
    };

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <label className="block text-[#483434] font-bold">{label}</label>
                {onAdd && (
                    <button type="button" onClick={(e) => { e.stopPropagation(); onAdd(); setIsOpen(false); }} className="flex items-center text-sm text-[#6B4F4F] hover:text-[#483434]">
                        <FiPlus size={16} className="mr-1" /> Add More
                    </button>
                )}
            </div>
            <div className="relative">
                <div
                    className={`w-full px-3 py-2 border ${error ? 'border-red-300' : 'border-[#EED6C4]'} rounded-lg cursor-pointer flex justify-between items-center`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex flex-wrap gap-1">
                        {selectedItems.length > 0 ? (
                            selectedItems.map(key => {
                                const item = getDisplayItem(key);
                                return (
                                    <span key={item.id || key} className="bg-[#FFF3E4] text-[#483434] px-2 py-1 rounded-md text-sm flex items-center hover:bg-[#EED6C4]" onClick={(e) => { e.stopPropagation(); onItemClick(item); }}>
                                        {item.icon} <span className="ml-1">{item[displayKey]}</span>
                                        <button type="button" onClick={(e) => { e.stopPropagation(); onToggle(displayKey === 'name' ? item.name : item); }} className="ml-1 text-[#6B4F4F] hover:text-[#483434]"><FiX /></button>
                                    </span>
                                );
                            })
                        ) : <span className="text-[#6B4F4F]">Select one or more...</span>}
                    </div>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {error && <p className="text-red-500 text-xs mt-1 flex items-center"><FiAlertCircle /> {error}</p>}
                {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-[#EED6C4] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {items.map(item => (
                            <div
                                key={item.id}
                                className={`px-4 py-2 hover:bg-[#FFF3E4] cursor-pointer ${selectedItems.includes(item[displayKey]) ? 'bg-[#FFF3E4]' : ''}`}
                                onClick={() => { onToggle(displayKey === 'name' ? item.name : item); setIsOpen(false); }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>{itemRenderer ? itemRenderer(item) : <div className="flex items-center">{item.icon}<span className="ml-3">{item.name}</span></div>}</div>
                                    {selectedItems.includes(item[displayKey]) && <FiCheck />}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ISOCertificationForm;
