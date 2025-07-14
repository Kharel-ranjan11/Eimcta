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
