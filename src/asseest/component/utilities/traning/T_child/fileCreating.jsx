import React from "react";

// All training names from multiple categories
const rawFileNames = [
  // Food Safety Trainings
  "LeadAuditorISO450012018",
  "InternalAuditorISO450012018",
  "NeboshDiplomaUK",
  "NeboshIGCUK",
  "IOSHManagingSafely",
  "IOSHSupervisingSafely",
  "CITBConstructionSafety",
  "SafetyProfessionalOfficer",
  "OHSInternalAuditor",
  "OHSIncidentInvestigator",
  "OHSRiskAssessmentJSA",
  "CertifiedFireWarden",
  "CertifiedFirstAider",
  "COSHHAssessment",
  "HAZOPHAZIN",
  "FireSafety",
  "ConfinedSpaceSafety",
  "WorkAtHeightSafety",
  "PermittoWorkSystemPTW",
  "ScaffoldSafety",
  "TransportSafety",
  "RightUseOfPPEs",
  "ElectricalSafety",
  "PowerToolsSafety",
  "MachineriesEquipmentSafety",
  "EarthworkSafety",
  "IndustrialPersonalHygiene",
  "EmergencyResponseMockDrills",
  "DisasterManagement",
  "OHSCampaignWorkshop",
  "HSEInductionCorporateIndividual",
  "AnIntroductionToLOLER",
  "EarthquakeAndFloodSafety",
  "RiggersBanksmanSafety",
  "ArticulatedForkliftTruckOperations",
  "AsbestosAwarenessInteractive",
  "BuildingResilience",
  "BullyingAndHarassmentForEmployees",
  "CleaningAndContainingChemicalSpills",
  "EarthmovingEquipmentSafety",
  "DisplayScreenEquipmentInteractive",
  "DrivingSafetyDefensiveDrivingAwareness",
  "DSEWorkstationAssessmentAwareness",
  "EnvironmentalAwareness",
  "HandArmVibrationHAV",
  "HealthAndSafetyForManagers",
  "HealthAndSafetyInductionLineManagers",
  "HomeWorkingHealthSafety",
  "HybridAndElectricVehicleBasicSafetyAwareness",
  "InfectionPreventionAndControl",
  "InformationSecurity",
  "LadderSafety",
  "HealthAndSafetyInduction",
  "LegionellaAwareness",
  "LoneWorkingSafety",
  "OHSLegalRequirementStandardGuides",
  "ManualHandlingSafety",
  "MentalHealthAndWellbeingAwareness",
  "OfficeSafety",
  "ProtectionAgainstTheEffectsOfNoise",
  "HeatstressManagement",
  "SlipsTripsAndFallsSafety",
  "StressManagementAndCopingWithPressure",
  "WorkingWithDisabilityInTheWorkplace",
  "FirstAid",
  "ChemicalSafety",
  "EmergencyDrills"


];

// Function to sanitize component/file names
const sanitizeName = (name) =>
  name
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/_+/g, "")
    .replace(/^_|_$/g, "")
    .trim();

// Generate file objects with name and content
const files = rawFileNames.map((rawName) => {
  const name = sanitizeName(rawName);
  return {
    name: `${name}.jsx`,
    content: `import React from 'react';

const  ${name}=()=> {
  return (<div>${rawName} Component</div>);
}

export default ${name};
`
  };
});

export default function CreateFiles() {
  // Download individual file
  function downloadFile(file) {
    const blob = new Blob([file.content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  // Download all files
  function downloadAll() {
    files.forEach(downloadFile);
  }

  return (
    <div className="p-4 space-y-2">
      <h1 className="text-xl font-bold mb-4">Download Training Components</h1>
      <button
        onClick={downloadAll}
        className="bg-green-600 hover:bg-green-800 text-white px-6 py-3 rounded mb-4"
      >
        Download All
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {files.map((file) => (
          <button
            key={file.name}
            onClick={() => downloadFile(file)}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            {file.name}
          </button>
        ))}
      </div>
    </div>
  );
}
