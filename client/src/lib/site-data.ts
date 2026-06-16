/**
 * Inditech Semicon — Site Data
 * Centralized content reflecting the India + Singapore partnership
 * and expanded Asia-Pacific procurement capabilities.
 */

export const SITE = {
  name: "Inditech Semicon Support",
  shortName: "Inditech Semicon",
  tagline: "India's First Semiconductor-Focused ESD & Parts Company",
  email: "info@inditechsemiconsupport.com",
  phone: "+91 8606200858",
  phoneRaw: "918606200858",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=918606200858&text=Hi%20Inditech%20Semicon%2C%20I'd%20like%20to%20enquire%20about%20your%20services.&type=phone_number&app_absent=0",
  address: {
    line1: "Vilapuram",
    line2: "Chathannoor PO, Kollam",
    pincode: "691572",
    country: "India",
  },
  singaporeAddress: {
    line1: "Singapore Office",
    line2: "Asia-Pacific Regional Hub",
    country: "Singapore",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },
  logoLight: "images/ITS_web_logo.png",
  logoDark: "images/ITS_web_logo-white.png",
};

export const HERO_IMAGE = "images/hero_cleanroom.jpg";
export const CTA_IMAGE = "images/cta_warehouse.jpg";
export const BLUEPRINT_PATTERN = "images/blueprint_pattern.png";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  spec: { label: string; value: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "spare-parts-supply",
    title: "Spare Parts Supply",
    short: "OEM-grade semiconductor equipment spares.",
    description:
      "High-quality spare parts for wafer processing, lithography, etching, and deposition equipment — sourced from trusted OEMs and rigorously tested.",
    longDescription:
      "We maintain an extensive inventory of critical and routine spare parts for the leading semiconductor equipment platforms operating across Asia-Pacific. Every part is sourced from trusted OEMs, rigorously inspected on receipt, and stored under controlled conditions to preserve performance. Our procurement specialists work directly with global suppliers to deliver fast turnaround, transparent traceability, and competitive pricing — so your fab keeps running.",
    highlights: [
      "OEM and OEM-equivalent parts",
      "Rigorous incoming inspection",
      "Traceability documentation",
      "24-hour quote turnaround",
    ],
    image: "images/svc_spare_parts.jpg",
    spec: [
      { label: "Lead Time", value: "24-72H" },
      { label: "Catalog", value: "107+ LINES" },
      { label: "Coverage", value: "ASIA-PACIFIC" },
    ],
  },
  {
    slug: "esd-products",
    title: "ESD Products",
    short: "Cleanroom-grade electrostatic discharge protection.",
    description:
      "ESD-safe wrist straps, mats, garments, packaging, and footwear engineered for semiconductor cleanrooms and assembly lines.",
    longDescription:
      "Electrostatic discharge can destroy microelectronics in microseconds. Our ESD product line covers the full chain of static control — from personnel grounding to surface protection to packaging. All products meet ANSI/ESD S20.20 and IEC 61340 standards, and we provide installation guidance, audit support, and replacement schedules tailored to your fab.",
    highlights: [
      "ANSI/ESD S20.20 compliant",
      "Cleanroom-grade materials",
      "Audit and certification support",
      "Replacement scheduling service",
    ],
    image: "images/svc_esd_products.jpg",
    spec: [
      { label: "Standards", value: "ANSI/ESD S20.20" },
      { label: "Range", value: "FULL CHAIN" },
      { label: "Lead Time", value: "48H" },
    ],
  },
  {
    slug: "repair-services",
    title: "Repair Services",
    short: "Component-level repair for semiconductor equipment.",
    description:
      "Component-level diagnostics and repair for PCBs, controllers, motors, sensors, RF generators, and power supplies — minimizing downtime.",
    longDescription:
      "Our engineering team specializes in diagnosing and repairing semiconductor equipment subsystems at the component level. From RF generators and matching networks to PCB controllers, servo motors, and vacuum sensors, we restore failed assemblies to specification and provide detailed test reports. Most repairs are completed in 5-10 business days at a fraction of the cost of OEM replacement.",
    highlights: [
      "Component-level board repair",
      "Calibrated test & validation",
      "Detailed repair report included",
      "60-90 day warranty on workmanship",
    ],
    image: "images/svc_repair_services.jpg",
    spec: [
      { label: "Turnaround", value: "5-10 DAYS" },
      { label: "Warranty", value: "60-90 DAYS" },
      { label: "Cost Saving", value: "UP TO 70%" },
    ],
  },
  {
    slug: "cleanroom-consumables",
    title: "Cleanroom Consumables",
    short: "Wipes, gloves, garments and contamination control.",
    description:
      "Class 10-100 cleanroom wipes, gloves, garments, swabs, and contamination control products for ISO 14644-compliant fabs.",
    longDescription:
      "Maintaining cleanroom integrity demands consistent, high-quality consumables. We supply a complete range of cleanroom-grade wipes, gloves, hoods, coveralls, swabs, and sticky mats — all tested for low particulate and ionic contamination. Our scheduled delivery program ensures your fab never runs short during critical production runs. Available across India and Singapore with regional fulfillment.",
    highlights: [
      "ISO 14644-compliant",
      "Low particulate, low ionic",
      "Scheduled delivery program",
      "Bulk pricing available",
    ],
    image: "images/svc_cleanroom.jpg",
    spec: [
      { label: "Class", value: "10-100" },
      { label: "Compliance", value: "ISO 14644" },
      { label: "Delivery", value: "SCHEDULED" },
    ],
  },
  {
    slug: "packaging-materials",
    title: "Packaging Materials",
    short: "Anti-static and moisture-barrier packaging solutions.",
    description:
      "Moisture barrier bags, desiccants, humidity indicator cards, protective packaging, and anti-static packaging for semiconductor and electronics shipping.",
    longDescription:
      "Proper packaging is critical for protecting sensitive semiconductor components during storage and transit. We supply a comprehensive range of moisture barrier bags, desiccants, humidity indicator cards, protective foam, and anti-static packaging materials. All products meet MIL-PRF-81705 and EIA-583 standards for moisture-sensitive device protection, ensuring your components arrive in perfect condition across Asia-Pacific.",
    highlights: [
      "MIL-PRF-81705 compliant",
      "Moisture barrier bags (MBB)",
      "Humidity indicator cards",
      "Anti-static packaging solutions",
    ],
    image: "images/svc_packaging.jpg",
    spec: [
      { label: "Standards", value: "MIL-PRF-81705" },
      { label: "Range", value: "FULL LINE" },
      { label: "MOQ", value: "FLEXIBLE" },
    ],
  },
  {
    slug: "industrial-consumables",
    title: "Industrial Consumables",
    short: "Safety products, adhesives, and factory supplies.",
    description:
      "Safety products, labels, adhesives, cleaning materials, and general factory consumables for electronics manufacturing and precision engineering facilities.",
    longDescription:
      "Beyond the cleanroom, modern manufacturing facilities require a steady supply of industrial consumables — from safety products and PPE to adhesives, labels, cleaning agents, and general factory supplies. We serve as a single procurement point for these high-volume, recurring needs, simplifying your vendor management and ensuring consistent quality and competitive pricing across your operations.",
    highlights: [
      "Single-source procurement",
      "Safety and PPE products",
      "Adhesives and cleaning materials",
      "Competitive bulk pricing",
    ],
    image: "images/svc_industrial.jpg",
    spec: [
      { label: "Categories", value: "50+" },
      { label: "Delivery", value: "REGIONAL" },
      { label: "Pricing", value: "COMPETITIVE" },
    ],
  },
  {
    slug: "water-leak-detection",
    title: "Water Leak Detection",
    short: "Sensor systems for fab utility safety.",
    description:
      "Custom water leak detection sensor systems for cooling loops, sub-fab utilities, and chemical delivery rooms — early warning prevents catastrophic damage.",
    longDescription:
      "Water leaks in semiconductor facilities can destroy millions worth of equipment and disrupt production for weeks. We design and install custom water leak detection systems using point and rope sensors, integrated with your facility monitoring system for real-time alerts. From cooling loops to sub-fab utility chases, we cover every critical location.",
    highlights: [
      "Point and rope sensors",
      "Real-time facility monitoring",
      "Custom installation design",
      "24/7 alert integration",
    ],
    image: "images/svc_water_leak.jpg",
    spec: [
      { label: "Coverage", value: "FULL FAB" },
      { label: "Alert", value: "REAL-TIME" },
      { label: "Custom", value: "ENGINEERED" },
    ],
  },
  {
    slug: "heater-jacket-installation",
    title: "Heater Jacket Installation",
    short: "Custom thermal management for process gas lines.",
    description:
      "Engineered heater jackets and on-site installation for process gas lines, valves, and chambers — preventing condensation and process drift.",
    longDescription:
      "Heater jackets are essential for maintaining stable temperatures in process gas delivery lines and reducing the risk of condensation, deposition, and process drift. We design, supply, and install custom heater jackets sized to your specific equipment, with integrated thermocouples and controllers. Our installation team works on-site during scheduled maintenance windows to minimize disruption.",
    highlights: [
      "Custom-sized to equipment",
      "Integrated thermocouples",
      "On-site installation team",
      "Validated thermal profile",
    ],
    image: "images/svc_heater_jacket.jpg",
    spec: [
      { label: "Custom Fit", value: "100%" },
      { label: "Install", value: "ON-SITE" },
      { label: "Lead Time", value: "2-3 WEEKS" },
    ],
  },
];

export type Product = {
  partNumber: string;
  title: string;
  category: string;
  image: string;
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    partNumber: "AMAT 0010-21748",
    title: "Impedance Match Network",
    category: "RF / Match",
    image: "images/impedance.jpg",
  },
  {
    partNumber: "AMAT 0010-00752 Rev.003",
    title: "PCB Controller Board",
    category: "Electronics / PCB",
    image: "images/Pcb.jpg",
  },
  {
    partNumber: "AMAT 1080-01243",
    title: "Yaskawa Servo Motor",
    category: "Motion / Servo",
    image: "images/servo.jpg",
  },
  {
    partNumber: "0100-09042",
    title: "OPTO Switch Assembly",
    category: "Sensors / Switch",
    image: "images/switch.jpg",
  },
];

export const FAQ = [
  {
    q: "What types of semiconductor equipment spare parts do you supply?",
    a: "We supply a comprehensive range of OEM and OEM-equivalent spare parts for wafer processing, lithography, etching, deposition, CMP, and metrology equipment. Our inventory covers RF generators and matching networks, PCB controllers, servo motors, vacuum sensors, gas delivery components, and consumable kits. Every part is sourced from trusted suppliers and inspected on receipt.",
  },
  {
    q: "Do you serve customers outside India?",
    a: "Yes. With our new Singapore regional hub, we now serve semiconductor fabs, electronics manufacturers, and precision engineering companies across Asia-Pacific — including Singapore, Malaysia, Thailand, Vietnam, Indonesia, and the Philippines. Our Singapore team handles regional business development, quotation management, and logistics coordination, while our India team provides technical sourcing and supplier management.",
  },
  {
    q: "How quickly can you provide repair services for semiconductor equipment?",
    a: "Most component-level repairs are completed within 5-10 business days from receipt, including diagnostics, repair, calibration, and full functional testing. For critical production-down situations, we offer expedited 48-72 hour turnaround on select assemblies. Every repair includes a detailed test report and a 60-90 day workmanship warranty.",
  },
  {
    q: "What cleanroom and ESD products do you supply?",
    a: "We supply a full range of cleanroom consumables (gloves, wipes, garments, sticky mats, swabs, shoe covers) and ESD products (wrist straps, heel straps, mats, bags, workstations, packaging materials). All products meet ANSI/ESD S20.20, IEC 61340, and ISO 14644 standards. We also supply moisture barrier bags, desiccants, and anti-static packaging.",
  },
  {
    q: "What is your business model for procurement services?",
    a: "We operate as a procurement and fulfillment partner — you submit an RFQ, our team sources products from approved suppliers, provides a competitive quotation, and handles procurement and delivery upon PO confirmation. This lean model minimizes your vendor management overhead while giving you access to our extensive supplier network across India and Asia.",
  },
  {
    q: "Do you supply parts for Applied Materials (AMAT), Lam Research, and Tokyo Electron equipment?",
    a: "Yes. Our inventory includes parts for major OEM platforms including Applied Materials, Lam Research, Tokyo Electron, ASM, KLA, and Hitachi. Provide us with the part number, equipment model, and quantity, and we'll respond with availability and pricing within 24 hours.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve semiconductor fabrication plants, electronics manufacturing (EMS, PCB, contract manufacturers), medical device manufacturers, pharmaceutical cleanroom facilities, precision engineering companies, aerospace suppliers, and industrial automation companies. Our product range covers cleanroom consumables, ESD products, semiconductor spare parts, packaging materials, and industrial consumables.",
  },
];

export const TRUST_STATS = [
  { value: "107+", label: "Product Lines" },
  { value: "14", label: "ESD Categories" },
  { value: "24H", label: "Quote Turnaround" },
  { value: "100%", label: "Sourced to Order" },
];

export const PARTNER_BRANDS = [
  "Applied Materials",
  "Lam Research",
  "Tokyo Electron",
  "ASM International",
  "KLA Corporation",
  "Hitachi High-Tech",
  "Yaskawa",
  "ASML",
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Enquire",
    description: "Send us the part number, equipment model, or service requirement via form, email, or WhatsApp.",
  },
  {
    number: "02",
    title: "Source & Quote",
    description: "Our procurement team sources from approved suppliers and delivers a transparent quotation within 24 hours.",
  },
  {
    number: "03",
    title: "Procure & Deliver",
    description: "Upon PO confirmation, we procure and ship via our India or Singapore hub — whichever is closest to you.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Installation support, calibration, and validation reporting to confirm equipment is back to spec.",
  },
];

/* ========== PARTNERSHIP / REGIONAL DATA ========== */

export type Region = {
  name: string;
  role: string;
  focus: string[];
  status: "active" | "expanding" | "planned";
};

export const REGIONS: Region[] = [
  {
    name: "India",
    role: "Headquarters & Technical Operations",
    focus: ["Supplier relationships", "Technical support", "Product sourcing", "Vendor development", "Repair services"],
    status: "active",
  },
  {
    name: "Singapore",
    role: "Asia-Pacific Regional Hub",
    focus: ["Business development", "Customer acquisition", "Quotation management", "Regional logistics", "Account management"],
    status: "active",
  },
  {
    name: "Malaysia & Thailand",
    role: "Phase 2 Expansion",
    focus: ["Semiconductor ecosystem", "Electronics manufacturing", "Precision engineering"],
    status: "expanding",
  },
  {
    name: "Vietnam, Indonesia & Philippines",
    role: "Phase 3 Expansion",
    focus: ["Electronics manufacturing", "Industrial automation", "Contract manufacturing"],
    status: "planned",
  },
];

export const TARGET_INDUSTRIES = [
  { name: "Semiconductor", customers: ["Wafer fabrication plants", "Assembly & test facilities", "Equipment OEMs"] },
  { name: "Electronics", customers: ["EMS companies", "PCB manufacturers", "Contract manufacturers"] },
  { name: "Medical", customers: ["Medical device manufacturers", "Pharmaceutical cleanrooms"] },
  { name: "Industrial", customers: ["Precision engineering", "Aerospace suppliers", "Industrial automation"] },
];

export const COMPETITIVE_ADVANTAGES = [
  {
    title: "Industry Knowledge",
    description: "Deep semiconductor industry expertise through years of hands-on equipment support and supplier relationships.",
  },
  {
    title: "Dual-Hub Network",
    description: "India + Singapore presence gives access to supplier networks across Asia with regional credibility and fast fulfillment.",
  },
  {
    title: "Lean Operations",
    description: "Low-inventory procurement model minimizes capital risk while delivering competitive pricing and fast turnaround.",
  },
  {
    title: "Hard-to-Find Sourcing",
    description: "Specialized capability to source difficult-to-find, obsolete, and long-lead-time components across our supplier network.",
  },
  {
    title: "Fast Response",
    description: "24-hour quote turnaround on standard requests, with expedited options for production-critical situations.",
  },
  {
    title: "Complete Solution",
    description: "Single point of contact for cleanroom consumables, ESD products, spare parts, packaging, and industrial supplies.",
  },
];
