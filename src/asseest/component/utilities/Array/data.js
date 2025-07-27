import { p, path, title } from "framer-motion/client";

export const navbarItems = [
  {
    title: "Training",
    path: "/training",
    children: [
      {
        title: "OHSE Training",
        children: [
          "Lead Auditor ISO 45001 : 2018",
          "Internal Auditor ISO 45001 : 2018",
          "Nebosh Diploma - UK",
          "nebosh IGC - UK",
          "IOSH Managing Safely",
          "IOSH Supervising Safely",
          "CITB - Construction Safety",
          "Safety Professional , Officer",
          "OHS Internal Auditor",
          "OHS Incident Investigator",
          "OHS Risk Assessment/JSA",
          "Certified Fire Warden",
          "Certified First Aider",
          "COSHH Assessment",
          "HAZOP / HAZIN",
          "Fire Safety",
          "Confined Space Safety",
          "Work at Height Safety",
          "Permit to Work System (PTW)",
          "Scaffold Safety",
          "Transport Safety",
          "Right use of PPEs",
          "Electrical Safety",
          "Power Tools Safety",
          "Machineries & Equipment Safety",
          "Earthwork safety",
          "Industrial Personal Hygiene",
          "Emergency Response, Mock Drills",
          "Disaster Management",
          "OHS Campaign, workshop",
          "HSE Induction (Corporate / Individual)",
          "An Introduction to LOLER",
          "Earthquake and Flood Safety",
          "Riggers & Banksman Safety",
          "Articulated Forklift Truck Operations",
          "Asbestos Awareness Interactive",
          "Building Resilience",
          "Bullying and Harassment for Employees",
          "Cleaning and Containing Chemical Spills",
          "Earthmoving Equipment Safety",
          "Display Screen Equipment Interactive",
          "Driving Safety & Defensive Driving Awareness",
          "DSE Workstation Assessment Awareness",
          "Environmental Awareness",
          "Hand-Arm Vibration (HAV)",
          "Health and Safety for Managers",
          "Health and Safety Induction (line managers)",
          "Home Working Health & Safety",
          "Hybrid and Electric Vehicle Basic Safety Awareness",
          "Infection Prevention and Control",
          "Information Security",
          "Ladder Safety",
          "Health and Safety Induction",
          "Legionella Awareness",
          "Lone Working Safety",
          "OHS Legal Requirement, Standard & Guides",
          "Manual Handling Safety",
          "Mental Health and Wellbeing Awareness",
          "Office Safety",
          "Protection Against the Effects of Noise",
          "Heatstress Management",
          "Slips Trips and Falls Safety",
          "Stress Management and Coping with Pressure",
          "Working with Disability in the Workplace",
          "First Aid",
          "Chemical Safety",
          "Emergency Drills",
          "Road Safety Campaign",
          "OHS Campaigns"
        ]
      },
      {
        title: "Food Safety Trainings",
        children: [
          "Lead Auditor-FSMS",
          "Internal Auditor - FSMS",
          "Food Safety Inspector",
          "HACCP Awareness",
          "Person Incharge (PI#1)",
          "Person Incharge (PI#2)",
          "Person Incharge (PI#3)",
          "Person Incharge (PI#4)",
          "Food & Hygiene Officer",
          "Food Safety Awareness",
          "Food Allergens",
          "Food Hygiene Level 1",
          "Food Hygiene Level 2",
          "Food & Baverage Recall Drill"
        ]
      },
      {
        title: "Road Safety Trainings",
        children: [
          "Road Hazard Identification",
          "Road & Traffic Safety Awareness",
          "RTS Risk Management",
          "Road Emergency Preparedness",
          "ISO 39001 RTSMS Awareness",
          "ISO 39001 RTSMS Internal Auditor",
          "RTS Data Analysis, MIS & MP",
          "RTS Factors Road, Vehicle & Driver",
          "Road Safety Induction",
          "Road Crash Investigation"
        ]
      },
      {
        title: "HRD Trainings",
        children: [
          "Customer Care & Management",
          "Presentation Skill",
          "Lean Six Sigma Green Belt",
          "Lean Six Sigma Black Belt",
          "Advanced Excel & MIS",
          "Time Management",
          "Motivation Skill"
        ]
      },
      {
        title: "Professional Trainings",
        children: [
          "Saftey Signs & PPEs",
          "Safety Signs",
          "PPEs & Safety Requisites",
          "Fire Safety Requisites",
          "Emergency & Rescue Kits",
          "Lightening & Electric Shock Protection",
          "General Safety Requisites"
        ]
      }
    ]
  },
  {
    title: "ISO Consultancy",
    path: "/iso-consultancy",
    children: [
      "ISO Certification Process Explained How to Certify Your Organization | Everest Consultrain",
      "ISO 9001:2015 Quality Management System",
      "ISO 45001:2018 Occupational Health, Safety & Environment",
      "ISO 14001:2015 Environment",
      "ISO 39001:2012 Road Safety Management System Book For Related Services"
    ]
  },
  {
    title: "OHS Consultancy",
    path: "/ohs-consultancy",
    children: [
      "Health & Safety Plan / Doc",
      "HSE Implementation / Training / Workshop",
      "HSE Audits",
      "Supply of PPE (Personal Protective Equipment)",
      {
        title: "Risk Management",
        children: [
          "Hazard Identification & Risk Assessment [HIRA]",
          "Risk Control / Transfer",
          "Monitor/Review/Sustain Risk Controls"
        ]
      },
      "Safe Operating Procedure (SOP) / WMS",
      "Supply of Fire Safety, Rescue & Safety Equipment"
    ]
  },
  {
    title: "Environmental Services",
    path: "/environmental-services",
    children: [
      "EIA [Environment Impact Assessment]",
      "Environmental Monitoring & Testing",
      "Waste Management Plan",
      "Other Environmental"
    ]
  },
  {
    title: "Safety Signs And PPEs",
    path: "/safety-signs-and-ppes",
    children: [
      "Safety Signs",
      "PPEs & Safety Requisites",
      "Fire Safety Requisites",
      "Emergency & Rescue Kits",
      "Lightening & Electric Shock Protection",
      "General Safety Requisites"
    ]
  },
  {
    title: "Placement",
    path: "/placement",
    children: []
  }
];
export const menuitems = [
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Services",
    path: "/services",
    children: [
      {
        title: 'ISO consultancy',
        path: '/services/iso-consultancy'
      },
      {
        title: 'ISO Audit',
        path: '/services/iso-audit'
      }, {
        title: 'ISO certification',
        path: '/services/iso-certification'
      }, {
        title: 'ISO training',
        path: '/services/iso-training'
      },
      {
        title: 'Tender/Technical/Bid Preparation',
        path: '/services/tender-technical-bid-preparation'
      }, {
        title: 'Environmental Services,ETA,Env.Monitoring(Air,Water,Soil etc)',
        path: '/services/environmental-services-eta-env-monitoring-air-water-soil-etc'
      }, {
        title: 'Supply of Sign (Quality,safety,Env.,Companies )',
        path: '/services/supply-of-sign-quality-safety-env-companies'
      },
    ]

  },
  {
    title: "Blog/Offers",
    path: "/Blog-Offers",
    children: [
      {
        title: 'Offers/Contents/Latest Boosting',
        path: '/Blog-Offers/Offers-Contents-Latest-Boosting'
      },
      {
        title: 'FAQ',
        path: '/Blog-Offers/FAQ'
      }, {
        title: 'FB,Titktok,Linkedin,youtube',
        path: '/Blog-Offers/FB-Titktok-Linkedin-youtube'
      }, {
        title: 'get quote & Check Eligibility',
        path: '/Blog-Offers/get-quote-and-check-eligibility'
      },

    ],

  },
  {
    title: "Contact Us", path: "/contact-us"
  }
]
export const testimonials = [
  {
    id: 1,
    title: "Award-Winning Consultancy",
    desc: "Recognized for excellence in ISO certification and safety standards.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    id: 2,
    title: "Trusted by Leading Brands",
    desc: "Partnered with top companies for end-to-end compliance.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    id: 3,
    title: "Global Recognition",
    desc: "Delivering impactful results in quality, safety, and environmental initiatives.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  }
];
export const features = [
  {
    id: 1,
    title: 'End-to-End Solutions',
    desc: 'From documentation to final audits, we simplify every step of your certification journey.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 2,
    title: 'Globally Recognized Standards',
    desc: 'Accredited certifications trusted across industries and countries.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 3,
    title: 'Industry Specialists',
    desc: 'Consultants with years of hands-on experience in ISO, OHS, and environmental safety.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    id: 4,
    title: 'Tailored Programs',
    desc: 'Customized consultancy and training designed to meet your unique business requirements.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  },
  {
    id: 5,
    title: 'Proven Track Record',
    desc: 'We have helped hundreds of organizations achieve operational excellence and compliance.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
];
