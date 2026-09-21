export type Vendor = {
  slug: string
  name: string
  domain: string
  logo: string
  categories: string[]
  description: string
}

export type CatalogProduct = {
  id: string
  vendor: string
  vendorSlug: string
  category: string
  name: string
  partNumber: string
  description: string
  specs: string[]
  price: number
  image: string
  gallery: string[]
}

type ProductSeed = {
  id: string
  name: string
  partNumber: string
  description: string
  specs: string[]
  price: number
}

type VendorSeed = Omit<Vendor, 'categories' | 'logo'> & { products: ProductSeed[] }

type CategorySeed = {
  category: string
  vendors: VendorSeed[]
}

const logo = (name: string, background = 'E9EEF0') => `https://placehold.co/180x180/${background}/0B3045?text=${encodeURIComponent(name.split(' ').map(word => word[0]).join('').slice(0, 3))}`
const image = (name: string, background = 'EEF3F4') => `https://placehold.co/1200x900/${background}/0B3045?text=${encodeURIComponent(name)}`

const categorySeeds: CategorySeed[] = [
  {
    category: 'Thermocouples',
    vendors: [
      { slug: 'omega', name: 'Omega Engineering', domain: 'omega.com', description: 'Thermal sensing and instrumentation for deposition equipment.', products: [
        { id: 'omega-tc-k', name: 'K-Type Sheathed Thermocouple', partNumber: 'TJ-K-6-300-ALD', description: 'Mineral-insulated K-type probe for repeatable chamber temperature monitoring through ALD cycles.', specs: ['6 mm sheath', '300 mm length', '±1.5°C accuracy'], price: 214 },
        { id: 'omega-tc-rtd', name: 'Thin-Film Pt100 RTD Sensor', partNumber: 'SA1-RTD-PT100-4', description: 'Compact platinum RTD with flexible leads for substrate and chamber feedback retrofits.', specs: ['Pt100 Class A', '-50 to 250°C', '4-wire lead'], price: 164 },
        { id: 'omega-tc-j', name: 'J-Type Vacuum Thermocouple', partNumber: 'TJ-J-VAC-450', description: 'Vacuum-compatible J-type sensor with a grounded junction for fast thermal response.', specs: ['J-type', '450 mm probe', 'Response under 1 s'], price: 238 },
        { id: 'omega-tc-multipoint', name: 'Multi-Point Chamber Probe', partNumber: 'MTP-K-4X-600', description: 'Four-point K-type assembly for mapping thermal uniformity across a heated process zone.', specs: ['4 sensing points', '600 mm cable', '316L sheath'], price: 486 },
      ] },
      { slug: 'watlow', name: 'Watlow', domain: 'watlow.com', description: 'Precision temperature sensors and thermal systems for process control.', products: [
        { id: 'watlow-tc-k', name: 'Mineral-Insulated K Probe', partNumber: 'MI-K-3.2-250', description: 'Fast-response mineral-insulated probe designed for compact heated chamber assemblies.', specs: ['3.2 mm sheath', '250 mm length', 'Ungrounded junction'], price: 192 },
        { id: 'watlow-rtd', name: 'Platinum RTD Cartridge', partNumber: 'RTD-PT100-CAR-150', description: 'Cartridge-style Pt100 sensor for direct insertion into heater blocks and susceptors.', specs: ['Pt100 Class B', '150 mm length', '6 mm diameter'], price: 176 },
        { id: 'watlow-tc-feedthrough', name: 'Vacuum TC Feedthrough', partNumber: 'VTF-8-K-4P', description: 'Four-pin hermetic feedthrough for routing thermocouple signals through vacuum walls.', specs: ['4 channels', 'KF16 flange', '10⁻⁸ mbar rated'], price: 328 },
        { id: 'watlow-tc-high-temp', name: 'High-Temperature S-Type Probe', partNumber: 'S-ALD-600-400', description: 'Platinum-rhodium S-type probe for high-temperature coating and anneal stages.', specs: ['S-type', '0–1600°C', '400 mm length'], price: 612 },
      ] },
    ],
  },
  {
    category: 'Gaskets & O-rings',
    vendors: [
      { slug: 'dupont', name: 'DuPont', domain: 'dupont.com', description: 'High-performance sealing solutions for vacuum and thermal systems.', products: [
        { id: 'dupont-kalrez-214', name: 'Kalrez® 9100 O-Ring Set', partNumber: 'KAL-9100-214-SET', description: 'FFKM O-ring set for demanding vacuum and thermal cycling around deposition chambers.', specs: ['Size 214', 'FFKM compound', 'Up to 260°C'], price: 186 },
        { id: 'dupont-kalrez-320', name: 'Kalrez® Chamber Seal Kit', partNumber: 'KAL-4079-320-KIT', description: 'Large-format FFKM chamber seal kit with broad chemical resistance for precursor service.', specs: ['Size 320', 'Kalrez 4079', 'Low compression set'], price: 620 },
        { id: 'dupont-kalrez-quad', name: 'Quad-Ring® Process Seal', partNumber: 'QRG-FFKM-325-70', description: 'Quad-ring profile that improves stability in dynamic chamber door and valve sealing.', specs: ['Size 325', '70 Shore hardness', 'Vacuum compatible'], price: 248 },
        { id: 'dupont-gasket-sheet', name: 'FFKM Sheet Gasket Pack', partNumber: 'KAL-SHEET-2MM-300', description: 'Precision-cut FFKM sheet gaskets for custom flanges and precursor manifold interfaces.', specs: ['2 mm thickness', '300 mm sheet', 'Chemical resistant'], price: 418 },
      ] },
      { slug: 'greene-tweed', name: 'Greene Tweed', domain: 'gtweed.com', description: 'Engineered elastomer and composite sealing products for critical process tools.', products: [
        { id: 'greene-tweed-ffkm-214', name: 'Chemraz® 505 O-Ring', partNumber: 'CRZ-505-214-75', description: 'High-purity Chemraz® O-ring for aggressive precursor chemistry and elevated temperature.', specs: ['Size 214', '75 Shore', 'Up to 315°C'], price: 274 },
        { id: 'greene-tweed-ffkm-320', name: 'Chemraz® Door Seal', partNumber: 'CRZ-505-320-90', description: 'Large chamber door seal engineered for repeated compression and thermal cycling.', specs: ['Size 320', '90 Shore', 'Low outgassing'], price: 792 },
        { id: 'greene-tweed-cseal', name: 'C-Seal Metal Jacket', partNumber: 'GT-CSEAL-160-VCR', description: 'Metal-jacketed C-seal for robust high-vacuum flange isolation in corrosive service.', specs: ['160 mm nominal', 'Inconel jacket', '10⁻¹⁰ mbar class'], price: 536 },
        { id: 'greene-tweed-gasket', name: 'Kalrez Replacement Gasket', partNumber: 'GT-FFKM-GSK-200', description: 'Custom-cut FFKM flange gasket for retrofit chamber and manifold maintenance.', specs: ['200 mm OD', '2.4 mm section', 'Custom cut'], price: 346 },
      ] },
    ],
  },
  {
    category: 'Fittings',
    vendors: [
      { slug: 'swagelok', name: 'Swagelok', domain: 'swagelok.com', description: 'Tube fittings, valves, and fluid system components for high-purity lines.', products: [
        { id: 'swagelok-vcr-valve', name: '316L VCR Diaphragm Valve', partNumber: 'SS-4H-VCR-2WAY', description: 'Two-way diaphragm valve with face-seal connections for repeatable pulse and purge isolation.', specs: ['1/4 in VCR', '150°C service', 'Helium leak tested'], price: 428 },
        { id: 'swagelok-vcr-fitting', name: '316L VCR Face-Seal Set', partNumber: 'SS-4-VCR-1-SET', description: 'Matched 316L body, gland, and gasket set for high-purity vacuum delivery lines.', specs: ['1/4 in tube', '316L stainless', '10⁻⁹ mbar L/s'], price: 186 },
        { id: 'swagelok-elbow', name: 'VCR 90° Elbow Fitting', partNumber: 'SS-4-VCR-9-2T', description: 'Compact 90-degree elbow for routing precursor and reactant lines inside tool frames.', specs: ['1/4 in VCR', '90° elbow', 'Electropolished'], price: 92 },
        { id: 'swagelok-reducer', name: 'Tube Reducer Adapter', partNumber: 'SS-8-4-VCR-RD', description: '316L reducer for transitioning from 1/2 inch utility tubing to 1/4 inch process lines.', specs: ['1/2 to 1/4 in', 'VCR ends', 'High-purity clean'], price: 126 },
      ] },
      { slug: 'parker', name: 'Parker Hannifin', domain: 'parker.com', description: 'Precision tube fittings and connectors for vacuum and gas delivery.', products: [
        { id: 'parker-vcr-valve', name: 'Vacuum Face-Seal Coupling', partNumber: 'VCR-4F-SS316-COUP', description: 'Reusable face-seal coupling for clean, low-leak disconnection of process lines.', specs: ['1/4 in tube', '316L body', 'Reusable design'], price: 118 },
        { id: 'parker-elbow', name: 'High-Purity 90° Elbow', partNumber: 'HPF-4-90-EP', description: 'Electropolished elbow fitting for compact routing in precursor delivery manifolds.', specs: ['1/4 in tube', '90° elbow', 'Ra < 0.25 µm'], price: 84 },
        { id: 'parker-tee', name: 'High-Purity Branch Tee', partNumber: 'HPF-4-T-EP', description: 'Three-port tee for splitting inert gas or reactant flow to parallel chambers.', specs: ['1/4 in tube', '316L', 'EP internal bore'], price: 104 },
        { id: 'parker-bulkhead', name: 'Bulkhead Connector', partNumber: 'HPF-BH-4-VCR', description: 'Panel-mount bulkhead connector for clean pass-through between heated zones.', specs: ['1/4 in VCR', 'Panel mount', '200°C rated'], price: 164 },
      ] },
    ],
  },
  {
    category: 'Precursor Chemicals',
    vendors: [
      { slug: 'merck-ald', name: 'Merck KGaA', domain: 'merckgroup.com', description: 'Electronic-grade precursor chemistry for advanced thin-film deposition.', products: [
        { id: 'merck-tma', name: 'Trimethylaluminum 99.999%', partNumber: 'ECS-TMA-100G-5N', description: 'High-purity TMA source for aluminum oxide and nitride ALD processes.', specs: ['99.999% purity', '100 g bottle', 'Moisture < 5 ppm'], price: 486 },
        { id: 'merck-tdma', name: 'Tetrakis(dimethylamino)titanium', partNumber: 'ECS-TDMAT-100G', description: 'Electronic-grade titanium precursor for TiN and TiO₂ conformal film growth.', specs: ['99.99% purity', '100 g bottle', 'Liquid source'], price: 728 },
        { id: 'merck-tdma-hafnium', name: 'Tetrakis(dimethylamido)hafnium', partNumber: 'ECS-TDHA-50G-4N', description: 'Hafnium precursor for high-k dielectric film development and process screening.', specs: ['99.99% purity', '50 g bottle', 'Hf-based dielectric'], price: 1180 },
        { id: 'merck-dez', name: 'Diethylzinc 99.999%', partNumber: 'ECS-DEZ-100G-5N', description: 'High-purity DEZ source for zinc oxide and related oxide ALD recipes.', specs: ['99.999% purity', '100 g bottle', 'Pyrophoric liquid'], price: 534 },
      ] },
      { slug: 'entegris', name: 'Entegris', domain: 'entegris.com', description: 'Ultra-high-purity process chemicals and delivery solutions for fabs.', products: [
        { id: 'entegris-tma', name: 'TMA Electronic Grade', partNumber: 'EG-TMA-500G-5N', description: 'Fab-ready trimethylaluminum for controlled Al₂O₃ deposition and precursor screening.', specs: ['5N purity', '500 g source', 'Low metals'], price: 912 },
        { id: 'entegris-tdeah', name: 'Tetrakis(ethylmethylamino)Hafnium', partNumber: 'EG-TDEAH-100G', description: 'High-purity Hf precursor supplied for production-compatible high-k processes.', specs: ['99.99% purity', '100 g source', 'Low vapor residue'], price: 1320 },
        { id: 'entegris-bdeas', name: 'Bis(diethylamino)silane', partNumber: 'EG-BDEAS-250G-4N', description: 'Silicon precursor for silicon nitride and oxide film development.', specs: ['4N purity', '250 g source', 'Liquid delivery'], price: 774 },
        { id: 'entegris-water', name: 'ALD Water Process Grade', partNumber: 'EG-H2O-1L-6N', description: 'Ultra-pure co-reactant packaged for oxide ALD and qualification runs.', specs: ['6N purity', '1 L bottle', 'TOC < 5 ppb'], price: 168 },
      ] },
    ],
  },
  {
    category: 'Precursor Containers & Bubblers',
    vendors: [
      { slug: 'picosun', name: 'Picosun', domain: 'picosun.com', description: 'Precursor delivery hardware and heated source containers for ALD systems.', products: [
        { id: 'picosun-bubbler-250', name: '250 mL Precursor Bubbler', partNumber: 'PIC-BUB-250-316L', description: '316L stainless steel bubbler for stable precursor delivery up to 200°C.', specs: ['250 mL volume', '316L wetted path', '200°C max'], price: 1260 },
        { id: 'picosun-bubbler-500', name: '500 mL Heated Bubbler', partNumber: 'PIC-BUB-500-HT', description: 'Heated source container with insulated jacket for higher-volume precursor campaigns.', specs: ['500 mL volume', '120 W heater', '220°C max'], price: 1680 },
        { id: 'picosun-source-manifold', name: 'Dual-Source Manifold', partNumber: 'PIC-MNF-2SRC-VCR', description: 'Two-source manifold for switching between precursors without breaking vacuum.', specs: ['2 source ports', '1/4 in VCR', 'Pneumatic isolation'], price: 2140 },
        { id: 'picosun-bubbler-50', name: '50 mL Mini Bubbler', partNumber: 'PIC-BUB-050-LAB', description: 'Compact laboratory bubbler for recipe development and low-consumption chemistries.', specs: ['50 mL volume', '316L body', '150°C max'], price: 780 },
      ] },
      { slug: 'aixtron', name: 'AIXTRON', domain: 'aixtron.com', description: 'Process source hardware for repeatable precursor and reactant delivery.', products: [
        { id: 'aixtron-bubbler-250', name: 'Compact 250 mL Source', partNumber: 'AXT-SRC-250-H2', description: 'Compact heated source container for pilot-scale ALD and MLD process development.', specs: ['250 mL volume', 'Dual thermocouple', '200°C max'], price: 1380 },
        { id: 'aixtron-bubbler-1000', name: '1 L Production Bubbler', partNumber: 'AXT-SRC-1000-HT', description: 'Large-capacity precursor source with jacketed heating and high-purity outlets.', specs: ['1 L volume', '316L stainless', '250°C max'], price: 2860 },
        { id: 'aixtron-vaporizer', name: 'Liquid Precursor Vaporizer', partNumber: 'AXT-VAP-LIQ-200', description: 'Controlled vaporizer for low-vapor-pressure liquid precursors and stable delivery.', specs: ['200 sccm carrier', '200°C outlet', 'Closed-loop heater'], price: 4120 },
        { id: 'aixtron-source-panel', name: 'Four-Port Source Panel', partNumber: 'AXT-PNL-4SRC-VCR', description: 'Pre-plumbed source panel for organizing four precursor connections in a compact tool footprint.', specs: ['4 source ports', 'VCR face seal', 'Pneumatic valves'], price: 3480 },
      ] },
    ],
  },
  {
    category: 'MFCs',
    vendors: [
      { slug: 'mks', name: 'MKS Instruments', domain: 'mks.com', description: 'Precision flow control and process measurement for deposition tools.', products: [
        { id: 'mks-mfc-100', name: '100 sccm Mass Flow Controller', partNumber: 'MKS-1179A-100SCCM', description: 'Digital MFC with fast response and repeatable regulation for reactant and purge gases.', specs: ['100 sccm full scale', '±1% reading', '1/4 in VCR'], price: 1780 },
        { id: 'mks-mfc-1000', name: '1000 sccm Mass Flow Controller', partNumber: 'MKS-1179B-1SLM', description: 'High-range controller for carrier gas and chamber purge services.', specs: ['1 slm full scale', 'Analog + RS-485', 'N₂ calibration'], price: 1920 },
        { id: 'mks-mfc-corrosive', name: 'Corrosive Gas MFC', partNumber: 'MKS-147C-050SCCM', description: 'Corrosion-resistant flow controller for reactive gases and demanding ALD chemistries.', specs: ['50 sccm full scale', 'Hastelloy wetted path', 'Fast valve response'], price: 2380 },
        { id: 'mks-pressure-controller', name: 'Pressure-Based Flow Controller', partNumber: 'MKS-649A-2Torr', description: 'Pressure-based controller for low-flow precursor and chamber pressure regulation.', specs: ['2 Torr range', 'Closed-loop pressure', '1/4 in VCR'], price: 2640 },
      ] },
      { slug: 'horiba-stec', name: 'HORIBA STEC', domain: 'horiba.com', description: 'High-accuracy gas flow controllers for advanced semiconductor processes.', products: [
        { id: 'horiba-mfc-100', name: 'SEC-Z500 100 sccm MFC', partNumber: 'SEC-Z500MGX-100S', description: 'Compact digital MFC for precise ALD pulse, purge, and carrier gas control.', specs: ['100 sccm full scale', '±0.5% reading', 'EtherCAT ready'], price: 1640 },
        { id: 'horiba-mfc-500', name: 'SEC-Z500 500 sccm MFC', partNumber: 'SEC-Z500MGX-500S', description: 'General-purpose high-repeatability controller for process gas distribution.', specs: ['500 sccm full scale', '10 ms response', '316L wetted path'], price: 1720 },
        { id: 'horiba-mfc-2000', name: 'SEC-Z500 2 slm MFC', partNumber: 'SEC-Z500MGX-2SLM', description: 'High-flow controller for fast chamber purge and carrier gas delivery.', specs: ['2 slm full scale', 'Digital display', 'N₂ calibration'], price: 1880 },
        { id: 'horiba-mfc-ammonia', name: 'Ammonia-Compatible MFC', partNumber: 'SEC-N100-NH3-100S', description: 'Configured MFC for ammonia and other reactive process gas services.', specs: ['100 sccm full scale', 'NH₃ service', 'Heated valve option'], price: 2260 },
      ] },
    ],
  },
  {
    category: 'Valves & Flow Control',
    vendors: [
      { slug: 'vat', name: 'VAT Group', domain: 'vatgroup.com', description: 'Ultra-high-vacuum valves and isolation systems for semiconductor tools.', products: [
        { id: 'vat-gate-200', name: 'Pneumatic ALD Gate Valve', partNumber: 'VAT-26424-JH52-0001', description: 'High-cycle gate valve for isolating 200 mm process chambers and transfer modules.', specs: ['200 mm port', 'Pneumatic actuation', '10⁻⁹ mbar class'], price: 4120 },
        { id: 'vat-angle-100', name: 'Compact Angle Valve', partNumber: 'VAT-48124-CE44-0001', description: 'Compact high-vacuum angle valve for foreline and chamber service.', specs: ['100 mm port', 'All-metal seal', '250°C bakeout'], price: 2860 },
        { id: 'vat-throttle', name: 'Automatic Pressure Control Valve', partNumber: 'VAT-61540-JH52-0001', description: 'Fast-response throttle valve for stable chamber pressure during pulsed deposition.', specs: ['200 mm port', '0.1–1000 mTorr', 'Motorized control'], price: 5240 },
        { id: 'vat-butterfly', name: 'High-Cycle Butterfly Valve', partNumber: 'VAT-26328-KA11-0001', description: 'Low-particle butterfly valve for fast isolation and pump protection.', specs: ['80 mm port', '50 ms actuation', '10⁻⁸ mbar'], price: 1980 },
      ] },
      { slug: 'ckd', name: 'CKD Corporation', domain: 'ckd.co.jp', description: 'Pneumatic valves and actuators for reliable gas and fluid automation.', products: [
        { id: 'ckd-pulse-valve', name: 'High-Speed Pulse Valve', partNumber: 'CKD-APV-10A-24DC', description: 'Fast pneumatic valve for repeatable precursor and purge pulse timing.', specs: ['1/4 in port', '24 VDC coil', '12 ms response'], price: 382 },
        { id: 'ckd-air-operated', name: 'Air-Operated Isolation Valve', partNumber: 'CKD-AVB-20-316L', description: 'Compact normally-closed isolation valve for gas box and utility services.', specs: ['1/2 in port', '316L body', '200°C rated'], price: 448 },
        { id: 'ckd-check', name: 'High-Purity Check Valve', partNumber: 'CKD-CV-4-VCR-316', description: 'Cracking-pressure controlled check valve for preventing backflow in precursor lines.', specs: ['1/4 in VCR', '0.2 bar cracking', '316L internals'], price: 214 },
        { id: 'ckd-solenoid', name: 'Direct-Acting Solenoid Valve', partNumber: 'CKD-AB41-4-24DC', description: 'Direct-acting valve for compact pilot circuits and automated source selection.', specs: ['1/4 in port', '24 VDC', '10 million cycles'], price: 168 },
      ] },
    ],
  },
  {
    category: 'Vacuum & Pumping',
    vendors: [
      { slug: 'edwards', name: 'Edwards', domain: 'edwardsvacuum.com', description: 'Clean vacuum pumps for demanding deposition environments.', products: [
        { id: 'edwards-turbo-700', name: '700 L/s Mag-Lev Turbo Pump', partNumber: 'T-700-ALD-MAGLEV', description: 'Magnetic-levitation turbo pump for high-throughput, clean vacuum deposition systems.', specs: ['700 L/s N₂', 'ISO 160 inlet', '10⁻⁹ mbar ultimate'], price: 8940 },
        { id: 'edwards-dry-pump', name: 'Dry Scroll Vacuum Pump', partNumber: 'nXDS15i-ALD', description: 'Oil-free dry scroll pump for clean foreline service with low vibration.', specs: ['15 m³/h', 'Oil-free', '52 dB(A)'], price: 4380 },
        { id: 'edwards-booster', name: 'Roots Booster Pump', partNumber: 'EH500-ALD-BOOST', description: 'Roots booster for increasing pumping speed during high-load precursor cycles.', specs: ['500 m³/h', 'Water-cooled', 'ATEX option'], price: 7260 },
        { id: 'edwards-pirani', name: 'Active Pirani Gauge', partNumber: 'APG100-XM-ALD', description: 'Compact thermal conductivity gauge for reliable rough-to-medium vacuum monitoring.', specs: ['5×10⁻⁴ to 1000 mbar', 'KF16 flange', 'Analog output'], price: 486 },
      ] },
      { slug: 'pfeiffer', name: 'Pfeiffer Vacuum', domain: 'pfeiffer-vacuum.com', description: 'Turbo pumps, dry pumps, and vacuum measurement for process equipment.', products: [
        { id: 'pfeiffer-turbo-700', name: 'HiPace 700 Turbo Pump', partNumber: 'PM-PF-HIPACE700', description: 'High-throughput turbo pump for clean process vacuum and rapid cycle recovery.', specs: ['670 L/s N₂', 'DN160 ISO-K', '8×10⁻¹⁰ mbar'], price: 8420 },
        { id: 'pfeiffer-dry-pump', name: 'DuoLINE Dry Screw Pump', partNumber: 'ACP40G-ALD', description: 'Dry screw pump for corrosive and moisture-sensitive foreline applications.', specs: ['40 m³/h', 'Purge-ready', 'Low oil-free base'], price: 6160 },
        { id: 'pfeiffer-cold-cathode', name: 'Cold Cathode Gauge', partNumber: 'PTR-91N-CC-ALD', description: 'Wide-range cold cathode gauge for process chamber and load-lock pressure monitoring.', specs: ['10⁻⁹–10⁻² mbar', 'DN25 ISO-KF', 'Remote electronics'], price: 980 },
        { id: 'pfeiffer-valve', name: 'Electropneumatic Vacuum Valve', partNumber: 'EVB-160-ISO-K-24', description: 'Electropneumatic valve for automated isolation in multi-chamber vacuum platforms.', specs: ['160 mm port', '24 VDC control', 'High-cycle rated'], price: 2480 },
      ] },
    ],
  },
  {
    category: 'Quartz & Chamber Parts',
    vendors: [
      { slug: 'heraeus', name: 'Heraeus', domain: 'heraeus.com', description: 'High-purity quartz chamber parts and process-critical materials.', products: [
        { id: 'heraeus-quartz-liner', name: 'Quartz Chamber Liner', partNumber: 'HQS-LINER-200-15', description: 'Fused quartz liner for 200 mm systems with clean thermal cycling and stable geometry.', specs: ['200 mm diameter', '1.5 mm wall', '99.99% SiO₂'], price: 2380 },
        { id: 'heraeus-quartz-boat', name: 'High-Purity Quartz Process Boat', partNumber: 'HQS-BOAT-150-12', description: 'High-purity quartz boat for batch handling and thermal deposition workflows.', specs: ['150 mm length', '12 wafer slots', 'Low metals'], price: 1140 },
        { id: 'heraeus-showerhead', name: 'Quartz Showerhead Plate', partNumber: 'HQS-SH-200-64', description: 'Perforated quartz showerhead for uniform reactant distribution across a process zone.', specs: ['200 mm OD', '64 apertures', 'Fused quartz'], price: 2640 },
        { id: 'heraeus-susceptor', name: 'Quartz Susceptor Ring', partNumber: 'HQS-SUS-200-RING', description: 'Precision-machined quartz ring for wafer support and thermal isolation.', specs: ['200 mm wafer', 'Machined finish', '1200°C service'], price: 920 },
      ] },
      { slug: 'momentive', name: 'Momentive Technologies', domain: 'momentivetech.com', description: 'Specialty quartzware and silicon components for advanced process chambers.', products: [
        { id: 'momentive-liner', name: 'CVD Quartz Chamber Liner', partNumber: 'MT-QW-LINER-200-A', description: 'Low-metal quartz liner engineered for repeatable chamber conditioning and cleanability.', specs: ['200 mm chamber', '2.0 mm wall', 'Low OH quartz'], price: 2520 },
        { id: 'momentive-ring', name: 'Quartz Focus Ring', partNumber: 'MT-QW-FR-200-6', description: 'Precision focus ring for stable edge coverage and wafer-zone protection.', specs: ['200 mm platform', '6 mm thickness', 'High-purity quartz'], price: 780 },
        { id: 'momentive-tube', name: 'Process Quartz Tube', partNumber: 'MT-QW-TUBE-150-800', description: 'Large-bore process tube for thermal ALD and batch chamber retrofits.', specs: ['150 mm ID', '800 mm length', '1100°C service'], price: 3120 },
        { id: 'momentive-injector', name: 'Quartz Gas Injector', partNumber: 'MT-QW-INJ-4PORT-250', description: 'Four-port quartz injector for separated precursor and reactant delivery.', specs: ['4 delivery ports', '250 mm length', 'Replaceable tip'], price: 1860 },
      ] },
    ],
  },
  {
    category: 'N2 Generators',
    vendors: [
      { slug: 'atlas-copco-n2', name: 'Atlas Copco', domain: 'atlascopco.com', description: 'On-site nitrogen generation and gas treatment for reliable process utilities.', products: [
        { id: 'atlas-n2-40', name: 'Membrane N₂ Generator', partNumber: 'N2-MEM-40-ALD', description: 'Compact membrane nitrogen generator for continuous inert-gas supply to ALD tools.', specs: ['40 Nm³/h', '99.5% N₂', '7 bar outlet'], price: 6480 },
        { id: 'atlas-n2-80', name: 'PSA Nitrogen Generator', partNumber: 'N2-PSA-80-5N', description: 'PSA system for higher-purity nitrogen used in purge, carrier, and glovebox services.', specs: ['80 Nm³/h', '99.999% N₂', 'Integrated dryer'], price: 12400 },
        { id: 'atlas-n2-120', name: 'High-Flow PSA Generator', partNumber: 'N2-PSA-120-FAB', description: 'High-flow nitrogen package for multi-tool facilities and continuous production demand.', specs: ['120 Nm³/h', '99.999% N₂', 'Remote monitoring'], price: 18600 },
        { id: 'atlas-n2-purity', name: 'Nitrogen Purity Analyzer', partNumber: 'N2-ANL-O2-PPM', description: 'Inline oxygen analyzer for verifying nitrogen quality at the process gas point of use.', specs: ['0–1000 ppm O₂', 'Inline sample cell', '4–20 mA output'], price: 2380 },
      ] },
      { slug: 'peak-scientific', name: 'Peak Scientific', domain: 'peakscientific.com', description: 'Laboratory and process gas generators for consistent, local nitrogen supply.', products: [
        { id: 'peak-n2-30', name: 'Precision N₂ Generator', partNumber: 'PEAK-N2-30-ALD', description: 'Quiet nitrogen generator sized for research tools, pilot reactors, and analytical systems.', specs: ['30 L/min', '99.999% N₂', '230 VAC'], price: 4920 },
        { id: 'peak-n2-60', name: 'Dual-Bank N₂ Generator', partNumber: 'PEAK-N2-60-DUAL', description: 'Redundant dual-bank system for uninterrupted nitrogen supply during cylinder changeover.', specs: ['60 L/min', '99.999% N₂', 'Auto changeover'], price: 7860 },
        { id: 'peak-n2-dryer', name: 'N₂ Dryer and Filter Pack', partNumber: 'PEAK-N2-DRY-FLT', description: 'Point-of-use filtration and drying package for moisture-sensitive precursor processes.', specs: ['<1 ppm H₂O', '0.01 µm filter', '1/4 in VCR'], price: 1640 },
        { id: 'peak-n2-monitor', name: 'Gas Quality Monitor', partNumber: 'PEAK-N2-MON-5N', description: 'Continuous monitor for oxygen and moisture levels in nitrogen process utilities.', specs: ['O₂ + H₂O sensing', 'Alarm relay', 'Data logging'], price: 3120 },
      ] },
    ],
  },
  {
    category: 'Chillers',
    vendors: [
      { slug: 'advanced-thermal', name: 'Advanced Thermal Sciences', domain: 'ats-hct.com', description: 'Recirculating chillers and thermal control systems for deposition equipment.', products: [
        { id: 'ats-chiller-3kw', name: '3 kW Recirculating Chiller', partNumber: 'ATS-RC-3KW-ALD', description: 'Compact process chiller for chamber walls, RF sources, and high-duty thermal loads.', specs: ['3 kW cooling', '5–35°C range', '220 VAC'], price: 8420 },
        { id: 'ats-chiller-8kw', name: '8 kW Process Chiller', partNumber: 'ATS-RC-8KW-FAB', description: 'High-capacity chiller for multi-zone ALD and plasma equipment cooling loops.', specs: ['8 kW cooling', '±0.1°C stability', 'Stainless reservoir'], price: 14600 },
        { id: 'ats-chiller-heat', name: 'Heater-Chiller Combo Unit', partNumber: 'ATS-HC-2KW-ALD', description: 'Combined heating and cooling unit for recipes requiring controlled thermal ramps.', specs: ['-10–80°C range', '2 kW cooling', 'Ethernet control'], price: 11800 },
        { id: 'ats-flow-module', name: 'Dual-Loop Flow Module', partNumber: 'ATS-FM-2LOOP-316', description: 'Dual-loop distribution module for independently cooling chamber and source hardware.', specs: ['2 independent loops', '316L wetted path', 'Flow alarms'], price: 4280 },
      ] },
      { slug: 'lytron', name: 'Lytron', domain: 'lytron.com', description: 'Engineered liquid cooling systems for precision semiconductor process tools.', products: [
        { id: 'lytron-chiller-2kw', name: 'Compact Tool Chiller', partNumber: 'LYT-LC-2KW-120', description: 'Space-efficient liquid chiller for benchtop ALD reactors and precursor delivery systems.', specs: ['2 kW cooling', '10–40°C range', '120 VAC'], price: 6240 },
        { id: 'lytron-chiller-6kw', name: '6 kW Closed-Loop Chiller', partNumber: 'LYT-LC-6KW-230', description: 'Closed-loop unit with cleanable reservoir for continuous production cooling service.', specs: ['6 kW cooling', '±0.2°C stability', '230 VAC'], price: 10800 },
        { id: 'lytron-heat-exchanger', name: 'Plate Heat Exchanger', partNumber: 'LYT-PHE-10KW-316', description: 'Compact plate heat exchanger for integrating facility water into an equipment cooling loop.', specs: ['10 kW duty', '316L plates', '1 in ports'], price: 2860 },
        { id: 'lytron-pump-skid', name: 'Precision Pump Skid', partNumber: 'LYT-PMP-SKID-ALD', description: 'Flow-controlled pump skid for stable coolant delivery across distributed tool loads.', specs: ['20 L/min', 'Variable-speed pump', 'Flow sensor'], price: 4980 },
      ] },
    ],
  },
]

export const vendors: Vendor[] = categorySeeds.flatMap(({ category, vendors: categoryVendors }) => categoryVendors.map(({ products: _products, ...vendor }) => ({ ...vendor, logo: logo(vendor.name), categories: [category] })))

export const catalogProducts: CatalogProduct[] = categorySeeds.flatMap(({ category, vendors: categoryVendors }) => categoryVendors.flatMap(vendor => vendor.products.map(product => {
  const productImage = image(product.name)
  return { ...product, vendor: vendor.name, vendorSlug: vendor.slug, category, image: productImage, gallery: [productImage, image(`${vendor.name} ${category}`, 'E5ECEE')] }
})))

export const getVendor = (slug: string) => vendors.find(vendor => vendor.slug === slug)
export const getProduct = (id: string) => catalogProducts.find(product => product.id === id)
