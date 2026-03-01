import { Category, Product, HeroData, Certification, CompanyInfo, Article } from '../types';

export const heroData: HeroData = {
  headline: 'Premium Bulk Cinnamon Sourcing for Global Markets',
  subheadline: 'Direct from Vietnamese farms. High Volatile Oil (VO) content, strict moisture control, and reliable container-load shipping for food manufacturers and wholesale distributors.',
  ctaText: 'Request Wholesale Quote',
  backgroundImage: '/images/hero-farming.jpg'
};

export const categories: Category[] = [
  { id: '1', name: 'Cassia Cinnamon Sticks', slug: 'cassia-sticks', image: '/images/cassia-sticks.jpg', altText: 'Bulk Cassia Cinnamon Sticks ready for export' },
  { id: '2', name: 'Cinnamon Powder', slug: 'cinnamon-powder', image: '/images/cinnamon-powder.jpg', altText: 'Finely milled Cinnamon Powder in industrial packaging' },
  { id: '3', name: 'Split Cassia', slug: 'split-cassia', image: '/images/split-cassia.jpg', altText: 'Split Cassia bark with high volatile oil content' },
  { id: '4', name: 'Cinnamon Oil', slug: 'cinnamon-oil', image: '/images/cinnamon-oil.jpg', altText: 'Pure Cinnamon Essential Oil in bulk drums' },
];

export const productGrades: Product[] = [
  { 
    id: 'p1', 
    name: 'Cigarette Cassia (Premium)', 
    slug: 'cigarette-cassia-premium',
    fobPrice: '$4,500 / MT', 
    categoryId: '1', 
    image: '/images/cigarette-cassia.jpg', 
    altText: 'Premium Cigarette Cassia tightly rolled',
    specifications: ['VO: 4.0% min', 'Moisture: 13.5% max', 'Length: 8-10cm'],
    isFeatured: true 
  },
  { 
    id: 'p2', 
    name: 'Split Cassia (Standard)', 
    slug: 'split-cassia-standard',
    fobPrice: '$2,800 / MT', 
    categoryId: '3', 
    image: '/images/split-cassia-standard.jpg', 
    altText: 'Standard Split Cassia for grinding',
    specifications: ['VO: 2.5% min', 'Moisture: 14% max', 'Admixture: 1% max'],
    isFeatured: true 
  },
  { 
    id: 'p3', 
    name: 'Broken Cassia (KABC)', 
    slug: 'broken-cassia-kabc',
    fobPrice: '$2,100 / MT', 
    categoryId: '1', 
    image: '/images/broken-cassia-kabc.jpg', 
    altText: 'Broken Cassia KABC grade',
    specifications: ['VO: 1.5% min', 'Moisture: 14% max', 'Admixture: 2% max'],
    isFeatured: false 
  },
  { 
    id: 'p4', 
    name: 'Cinnamon Powder (100 Mesh)', 
    slug: 'cinnamon-powder-100mesh',
    fobPrice: '$3,200 / MT', 
    categoryId: '2', 
    image: '/images/cinnamon-powder-100mesh.jpg', 
    altText: '100 Mesh Cinnamon Powder',
    specifications: ['VO: 2.0% min', 'Moisture: 12% max', 'Mesh: 100% pass 100 mesh'],
    isFeatured: true 
  },
  {
    id: 'p5',
    name: 'Ground Black Pepper',
    slug: 'ground-black-pepper',
    fobPrice: '$4,100 / MT',
    categoryId: '2',
    image: '/images/ground-black-pepper.jpg',
    altText: 'Ground Black Pepper',
    specifications: ['Moisture: 13% max', 'Impurity: 0,1% max', 'Shape: Powder'],
    isFeatured: true,
    generalProperties: {
      'Ingredient': 'Coarse form of 100% natural Black pepper (Family of Piperaceae)',
      'Flavour Characteristic(s)': 'Pungent and biting',
      'Odour/Aroma': 'Characteristic, free from any objectionable odors',
      'Physical Colour': 'Black',
      'Country of Origin': 'Vietnam'
    },
    quickDetails: {
      'Product Type': 'Single Herbs & Spices',
      'Processing Type': 'Raw',
      'Color': 'Dark grey to Black (Natural)',
      'Place of Origin': 'Tây Nguyên (Central Highlands), Vietnam',
      'Product Name': 'Ground Black Pepper',
      'Shelf Life': '2 years',
      'Moisture': '13% max',
      'Density': '—',
      'Style': 'Dried',
      'Certification': '—',
      'Impurity': '0,1% max',
      'Drying Process': 'AD',
      'Features': '100% Pure',
      'Shape': 'Powder',
      'Broken': '—',
      'Particle Size': '10,14,24,28, 32,40 ,60 ,80Mesh',
      'Packing': 'The material is packaged in 25 kg Kraft poly woven bags with EVOH Liner',
      'Age': '2025',
      'MOQ': '8 Tons',
      'Capacity': '13,5 MTS/20FT, 27 MTS/40FT',
      'Samples': 'Free or Available',
      'Payment': 'LC at sight, TT, DP, CAD'
    }
  }
];

export const certifications: Certification[] = [
  { id: 'c1', name: 'ISO 9001:2015', logo: '/images/cert-iso.png' },
  { id: 'c2', name: 'HACCP Certified', logo: '/images/cert-haccp.png' },
  { id: 'c3', name: 'Non-GMO Project Verified', logo: '/images/cert-nongmo.png' },
  { id: 'c4', name: 'USDA Organic (Optional)', logo: '/images/cert-usda.png' },
];

export const companyInfo: CompanyInfo = {
  title: 'Global Shipping & Contract Manufacturing',
  description: 'Direct from the farms of Vietnam to your processing facility. We manage the entire supply chain, ensuring consistent Volatile Oil (VO) levels, strict moisture control, and seamless international logistics for FCL (Full Container Load) shipments.',
  features: [
    'Direct Farm Sourcing & Ethical Harvesting',
    'State-of-the-Art Processing & Milling Facilities',
    'Custom Bulk Packaging (25kg Cartons, 50kg Bags, Jumbo Bags)',
    'Comprehensive Export Documentation & Customs Clearance',
    'Reliable FOB & CIF Pricing Models'
  ],
  image: '/images/container-loading.jpg',
  altText: 'Shipping containers being loaded at a commercial port for global export'
};

export const articles: Article[] = [
  {
    id: 'a1',
    title: 'Q3 Cassia Crop Yield Forecast: What Buyers Need to Know',
    excerpt: 'An in-depth analysis of the upcoming harvest season in Yen Bai province, predicting stable yields but slightly delayed processing times due to unseasonal rains.',
    category: 'Market Update',
    date: 'October 12, 2023',
    image: '/images/cassia-harvest-forecast.jpg',
    altText: 'Farmers harvesting cassia bark in Yen Bai province'
  },
  {
    id: 'a2',
    title: 'Understanding Volatile Oil Content in Cinnamon',
    excerpt: 'Volatile Oil (VO) is the primary indicator of cinnamon quality and flavor intensity. Learn how our testing protocols ensure a minimum of 4.0% VO in our premium grades.',
    category: 'Quality Standards',
    date: 'September 28, 2023',
    image: '/images/lab-testing-vo.jpg',
    altText: 'Laboratory technician testing cinnamon volatile oil content'
  },
  {
    id: 'a3',
    title: 'Navigating Global Shipping Challenges in Q4',
    excerpt: 'With container shortages affecting Southeast Asian ports, we outline our proactive logistics strategies to guarantee on-time CIF and FOB deliveries for our wholesale partners.',
    category: 'Logistics',
    date: 'September 15, 2023',
    image: '/images/port-logistics.jpg',
    altText: 'Cargo ships and containers at a busy international port'
  }
];
