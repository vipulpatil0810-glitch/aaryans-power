// Exact Original Image Paths (Public Folder)
const muktiVehicle = "/powerimage/mukti-vehicle.jpg";
const sohamDemo = "/powerimage/soham-demo.jpg";
const bhaktiFront = "/powerimage/bhakti-front.jpg";
const muktiCabinet = "/powerimage/mukti-cabinet.jpg";
const sohamControl = "/powerimage/soham-control.jpg";
const muktiCargo = "/powerimage/mukti-cargo.jpg";

export const productsData = [
  {
    id: 'aarya',
    category: 'aerospace',
    categoryLabel: 'Aerospace & Defense',
    title: 'AARYA — Hybrid H₂ VTOL UAV',
    tagline: 'Long-Endurance Defense & ISR Platform',
    desc: 'Indigenous hybrid hydrogen fuel-cell UAV engineered to overcome flight endurance limits of battery drones Combines VTOL rotors with a PEM fuel cell and pusher propeller for extended mission range within a biomimetic blended-wing frame',
    img: muktiCargo,
    specs: {
      'Framework & Envelope': '2m × 2m × 2m Biomimetic Blended-Wing Design',
      'Energy Architecture': 'Dual Power System (Battery BMS for VTOL + Lightweight Composite Cylinder PEM Fuel Cell for Forward Cruise)',
      'Telemetry & Control': 'GPS/GNSS, Onboard Sensors, IoT Diagnostics, and Digital Twin Ground Control Station',
      'Mission Focus': 'ISR, Border & Coastal Surveillance, Disaster Response, and Difficult Terrain Operations'
    }
  },
  {
    id: 'soham',
    category: 'hydrogen',
    categoryLabel: 'Green Hydrogen Systems',
    title: 'SOHAM — On-Demand H₂ System',
    tagline: 'Decentralized Chemical Generation',
    desc: 'Indigenous automated platform producing hydrogen on-demand at the point of consumption to eliminate expensive transport and high storage costs',
    img: sohamControl,
    specs: {
      'Capacity Target': '100 kg/day Modular Commercial Platform',
      'Process Control': 'PLC Automation with Controlled Reactant Dosing & Process Monitoring',
      'Gas Purification': 'Integrated Reactor Instrumentation, Gas Purification, and Drying',
      'Safety Architecture': 'Pressure/Temperature Interlocks, Emergency Shutdown & Auto Isolation',
      'Digital Intelligence': 'IoT-enabled Operating Data Acquisition & Digital Twin Ready'
    }
  },
  {
    id: 'mukti',
    category: 'hydrogen',
    categoryLabel: 'Green Hydrogen Systems',
    title: 'MUKTI — Mobile Green H₂ Demonstrator',
    tagline: 'Lab on Wheels & Clean Power Generator',
    desc: 'Retrofitted EV platform functioning as a "Lab on Wheels" that demonstrates the complete hydrogen value chain from renewable electrolysis to fuel cell electricity generation',
    img: muktiVehicle,
    specs: {
      'Vehicle Platform': 'Retrofitted Diesel-to-Electric Vehicle Conversion (Clean Second Life)',
      'Value Chain Ecosystem': 'Solar Power → Electrolysis → Storage → Dispensing → Fuel Cell Output',
      'Primary Function': 'Diesel Generator Replacement, Community Outreach, and Educational Laboratory',
      'Safety Integration': 'Ventilated H₂ Storage Enclosure, Flow Controls & Active Sensor Monitoring'
    }
  },
  {
    id: 'bhakti',
    category: 'mobility',
    categoryLabel: 'Clean Mobility',
    title: 'BHAKTI — Dual-Fuel Mobility Architecture',
    tagline: 'Hydrogen-Assisted Combustion Retrofit',
    desc: 'Retrofit-oriented dual-fuel technology blending hydrogen with petrol/diesel in internal combustion engines for immediate emission reduction in existing fleets',
    img: bhaktiFront,
    specs: {
      'Engine Integration': 'Controlled H₂-Petrol Blending Architecture for Existing ICE Vehicles',
      'TRINETRA Safety Architecture': 'Layered Safety (Flashback Protection, Reverse-Flow Prevention, Abnormal Leak Detection)',
      'Control & Instrumentation': 'Pressure Regulation, Air-Fuel-Hydrogen Management & Sensor Telemetry',
      'Emergency Interlocks': 'Intelligent Warning System & Automatic Safety Isolation/Shutdown'
    }
  },
  {
    id: 'pragati',
    category: 'aerospace',
    categoryLabel: 'Aerospace & Defense',
    title: 'PRAGATI — H₂-O₂ Propulsion Platform',
    tagline: 'Aerospace Propulsion R&D & Testing',
    desc: 'Indigenous research testbed designed for studying high-speed hydrogen–oxygen combustion, propellant management, thermal behavior, and thrust parameters',
    img: sohamDemo,
    specs: {
      'Propulsion Research': 'Laboratory-Scale H₂/O₂ Combustion & Ignition Stability',
      'Data & Telemetry': 'Real-time Telemetry, Thermal Sensors, and Data Acquisition Systems',
      'Testing Workflow': 'Concept Modeling → Simulation → Testbed Fabrication → Controlled Testing → Data Correlation',
      'Human Capital Focus': 'Aerospace, Mechanical, AI/Data Analytics, and Control Engineering Education'
    }
  },
  {
    id: 'shoonya',
    category: 'aerospace',
    categoryLabel: 'Aerospace & Defense',
    title: 'SHOONYA AVKASH (L) — Space Debris Testbed',
    tagline: 'Orbital Capture & Sustainability R&D',
    desc: 'Ground-based experimental testbed investigating orbital space fragment detection, tracking, approach, and capture concepts',
    img: muktiCabinet,
    specs: {
      'Test Environment': '8 ft × 8 ft Controlled Cubical Experimental Chamber',
      'Sensing & Tracking': 'LiDAR & Vision-Based Orbital Debris Position Estimation',
      'Capture Mechanisms': 'Pneumatic Deployment Net Capture & Magnetic Metallic Modules',
      'Domain Alignment': 'Space Sustainability, Orbital Robotics, Autonomous Controls & ISRO DFSM Guidance'
    }
  }
];