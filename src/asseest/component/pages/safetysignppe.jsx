import React from "react";
import {
  GiCancel,
  GiShield,
  GiAlarmClock,
  GiExitDoor,
  GiFireExtinguisher,
  GiCheckMark,
  GiRecycle,
  GiHealthNormal,
  GiChemicalTank,
  GiFactory,
  GiHospital,
  GiPowerGenerator,
  GiSewingMachine,
  GiMineTruck,
  GiOfficeChair,
  GiSuspensionBridge,
  GiOilDrum,
} from "react-icons/gi";

const industrySectors = [
  { icon: <GiFactory className="w-6 h-6" />, name: "Manufacturing" },
  { icon: <GiHospital className="w-6 h-6" />, name: "Healthcare" },
  { icon: <GiPowerGenerator className="w-6 h-6" />, name: "Energy" },
  { icon: <GiSewingMachine className="w-6 h-6" />, name: "Textile" },
  { icon: <GiMineTruck className="w-6 h-6" />, name: "Mining" },
  { icon: <GiOfficeChair className="w-6 h-6" />, name: "Corporate Offices" },
  { icon: <GiSuspensionBridge className="w-6 h-6" />, name: "Construction" },
  { icon: <GiOilDrum className="w-6 h-6" />, name: "Oil & Gas" },
];

const signCategories = [
  {
    id: 1,
    icon: <GiCancel className="text-white w-12 h-12" />,
    title: "Prohibition Signs",
    description: "Prohibit unsafe behaviors like smoking, entry, or fire risk in danger zones.",
    iso: "Red circle with diagonal slash (ISO 7010)",
    examples: [
      "No Smoking",
      "No Entry",
      "No Open Flames",
      "No Mobile Phones",
      "No Pedestrians"
    ],
    gradient: "bg-gradient-to-br from-red-600 to-red-800",
    sectors: ["Chemical", "Healthcare", "Transportation", "Energy", "Manufacturing"],
  },
  {
    id: 2,
    icon: <GiShield className="text-white w-12 h-12" />,
    title: "Mandatory Action Signs",
    description: "Show what actions are required—like wearing PPE—for safety compliance.",
    iso: "Blue circle with white pictogram (ISO 7010)",
    examples: [
      "Wear Safety Helmet",
      "Wear Eye Protection",
      "Wear Gloves",
      "Wear Hearing Protection",
      "Use Handrail"
    ],
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    sectors: ["Construction", "Food Production", "Mining", "Aerospace", "Logistics"],
  },
  {
    id: 3,
    icon: <GiAlarmClock className="text-white w-12 h-12" />,
    title: "Warning Signs",
    description: "Alert people to hazardous areas or risky conditions before accidents happen.",
    iso: "Yellow triangle with black pictogram (ISO 7010)",
    examples: [
      "High Voltage",
      "Slippery Surface",
      "Toxic Chemicals",
      "Biohazard",
      "Overhead Load"
    ],
    gradient: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    sectors: ["Electrical", "Marine", "Railways", "Pharmaceutical", "Waste Management"],
  },
  {
    id: 4,
    icon: <GiExitDoor className="text-white w-12 h-12" />,
    title: "Emergency & Safe Condition Signs",
    description: "Guide people to safety zones, exits, showers, and first aid stations.",
    iso: "Green background with white pictogram (ISO 7010)",
    examples: [
      "Emergency Exit",
      "First Aid Station",
      "Assembly Point",
      "Emergency Shower",
      "Emergency Eye Wash"
    ],
    gradient: "bg-gradient-to-br from-green-600 to-green-800",
    sectors: ["Offices", "Public Spaces", "Education", "Retail", "Events"],
  },
  {
    id: 5,
    icon: <GiFireExtinguisher className="text-white w-12 h-12" />,
    title: "Fire Safety Signs",
    description: "Identify fire equipment and emergency measures like extinguishers and alarms.",
    iso: "Red background with white symbol (ISO 7010)",
    examples: [
      "Fire Extinguisher",
      "Fire Hose Reel",
      "Fire Alarm Call Point",
      "Fire Blanket",
      "No Smoking Near Oxygen"
    ],
    gradient: "bg-gradient-to-br from-red-500 to-orange-700",
    sectors: ["Warehousing", "Medical", "Hotels", "Parking", "Oil & Gas"],
  },
  {
    id: 6,
    icon: <GiCheckMark className="text-white w-12 h-12" />,
    title: "Quality Control Signs",
    description: "Support ISO 9001 practices through visual SOPs, calibration and 5S tools.",
    iso: "Defined by organization standards (ISO 9001, GMP, etc.)",
    examples: [
      "5S Board",
      "SOP Display",
      "Defect Reporting Area",
      "Calibration Tag",
      "Cleanroom Entry Protocol"
    ],
    gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
    sectors: ["Automotive", "Electronics", "Precision", "Textile", "Medical Devices"],
  },
  {
    id: 7,
    icon: <GiRecycle className="text-white w-12 h-12" />,
    title: "Environmental Signs",
    description: "Encourage eco-compliance via recycling, waste management and conservation tips.",
    iso: "Color-coded bins & icons (ISO 14001, LEED)",
    examples: [
      "Waste Segregation",
      "Energy Saving Tips",
      "Spill Control",
      "Water Conservation",
      "Carbon Footprint"
    ],
    gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    sectors: ["Eco Construction", "Agriculture", "Renewables", "Waste Mgmt", "Tourism"],
  },
  {
    id: 8,
    icon: <GiHealthNormal className="text-white w-12 h-12" />,
    title: "Health & Safety Process Signs",
    description: "Provide guidance on LOTO, PPE zones, evacuation maps and hazard protocols.",
    iso: "Custom to ISO 45001 or OSHA",
    examples: [
      "LOTO Station",
      "PPE Storage",
      "Evacuation Map",
      "Chemical Handling",
      "Machine Guarding"
    ],
    gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    sectors: ["Shipbuilding", "Heavy Industry", "Foundries", "Paper", "Plastics"],
  },
  {
    id: 9,
    icon: <GiChemicalTank className="text-white w-12 h-12" />,
    title: "Hazardous Material Signs",
    description: "Mark dangerous chemicals under GHS standards to ensure proper handling.",
    iso: "Diamond shapes, color coded (GHS/UN) ",
    examples: [
      "Flammable Liquids",
      "Corrosives",
      "Compressed Gases",
      "Oxidizers",
      "Aquatic Hazards"
    ],
    gradient: "bg-gradient-to-br from-amber-600 to-amber-800",
    sectors: ["Paints", "Battery Plants", "R&D Labs", "Pesticides", "Petrochemicals"],
  },
  {
    id: 10,
    icon: <GiPowerGenerator className="text-white w-12 h-12" />,
    title: "Electrical Safety Signs",
    description: "Highlight electrical risks and emergency actions near energized equipment.",
    iso: "Yellow triangle with black symbol (ISO 7010)",
    examples: [
      "High Voltage Zone",
      "Arc Flash Zone",
      "Emergency Shutoff",
      "Authorized Entry Only",
      "No Metal Tools"
    ],
    gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    sectors: ["Data Centers", "Power Plants", "Automation", "Telecom", "Transport"],
  }
];

export default function SafetySignPPE() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-600">
          ISO-Compliant Safety Signs & Visual Systems
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore categorized safety signage tailored for every industrial need—designed to meet ISO, OSHA, and workplace safety standards.
        </p>
      </header>

      {/* Sectors */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {industrySectors.map((sector, i) => (
            <span
              key={i}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              {sector.icon}
              <span className="ml-2">{sector.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sign Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {signCategories.map(({ id, icon, title, description, iso, examples, gradient, sectors }) => (
          <article
            key={id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className={`${gradient} h-28 flex items-center justify-center`}>
              {icon}
            </div>
            <div className="bg-white p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-700">{description}</p>
              <p className="text-xs italic text-gray-500">{iso}</p>

              <div>
                <h4 className="font-semibold text-sm text-gray-800">Examples</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {examples.slice(0, 3).map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-800">Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  {sectors.slice(0, 3).map((sector, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded">{sector}</span>
                  ))}
                  {sectors.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      +{sectors.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Why Choose Our Signage Solutions?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🛡️", title: "Regulatory Compliance", desc: "ISO, OSHA, ANSI signage standards met" },
            { icon: "📉", title: "Risk Prevention", desc: "Reduce injuries and workplace incidents" },
            { icon: "⚙️", title: "Operational Clarity", desc: "Enable smooth workflows through signs" },
            { icon: "🎨", title: "Custom Branding", desc: "Maintain brand identity with visual cues" },
          ].map((benefit, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-5 space-y-2">
              <div className="text-3xl">{benefit.icon}</div>
              <h4 className="font-bold text-lg text-gray-900">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border border-gray-200 p-10 rounded-xl text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Ready to Transform Your Workplace Safety?
        </h2>
        <p className="text-gray-700 mb-6">
          Connect with our experts to design and deploy industry-specific safety signage solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow">
            Request Consultation
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-md font-medium">
            Download Full Sign Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
