import { Category, Product, HeroData, Certification, CompanyInfo, Article } from '../types';

export const heroData: HeroData = {
  headline: 'Premium Bulk Cinnamon Sourcing for Global Markets',
  subheadline: 'Direct from Vietnamese farms. High Volatile Oil (VO) content, strict moisture control, and reliable container-load shipping for food manufacturers and wholesale distributors.',
  ctaText: 'Request Wholesale Quote',
  backgroundImage: '/images/hero-farming.jpg'
};

export const categories: Category[] = [
  { id: '1', name: 'Cinnamon', slug: 'cinnamon', image: '/images/cassia-sticks.jpg', altText: 'Cinnamon' },
  { id: '2', name: 'Ginger', slug: 'ginger', image: '/images/ginger.jpg', altText: 'Ginger' },
  { id: '3', name: 'Pepper', slug: 'pepper', image: '/images/pepper.jpg', altText: 'Pepper' },
  { id: '4', name: 'Star anise', slug: 'star-anise', image: '/images/star-anise.jpg', altText: 'Star anise' },
  { id: '5', name: 'Turmeric', slug: 'turmeric', image: '/images/turmeric.jpg', altText: 'Turmeric' },
];

export const productGrades: Product[] = [
  { 
    id: 'p1', 
    name: 'Cigarettes cassia', 
    slug: 'cigarettes-cassia',
    fobPrice: '$4,500 / MT', 
    categoryId: '1', 
    image: '/images/cigarette-cassia.jpg', 
    altText: 'Cigarettes cassia',
    specifications: ['VO: 4.0% min', 'Moisture: 13.5% max', 'Length: 8-10cm'],
    isFeatured: true 
  },
  { 
    id: 'p2', 
    name: 'Cassia Powder', 
    slug: 'cassia-powder',
    fobPrice: '$2,800 / MT', 
    categoryId: '1', 
    image: '/images/cinnamon-powder.jpg', 
    altText: 'Cassia Powder',
    specifications: ['VO: 2.5% min', 'Moisture: 14% max', 'Admixture: 1% max'],
    isFeatured: true 
  },
  { 
    id: 'p3', 
    name: 'Cassia Broken', 
    slug: 'cassia-broken',
    fobPrice: '$2,100 / MT', 
    categoryId: '1', 
    image: '/images/broken-cassia-kabc.jpg', 
    altText: 'Cassia Broken',
    specifications: ['VO: 1.5% min', 'Moisture: 14% max', 'Admixture: 2% max'],
    isFeatured: true 
  },
  { 
    id: 'p4', 
    name: 'Whole Cassia', 
    slug: 'whole-cassia',
    fobPrice: '$3,200 / MT', 
    categoryId: '1', 
    image: '/images/split-cassia.jpg', 
    altText: 'Whole Cassia',
    specifications: ['VO: 2.0% min', 'Moisture: 12% max'],
    isFeatured: true 
  },
  {
    id: 'p5',
    name: 'Ground Pepper',
    slug: 'ground-black-pepper',
    fobPrice: '$4,100 / MT',
    categoryId: '3',
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
  },
  {
    id: 'p6',
    name: 'White Pepper',
    slug: 'white-pepper',
    fobPrice: '$5,200 / MT',
    categoryId: '3',
    image: '/images/white-pepper.jpg',
    altText: 'White Pepper',
    specifications: ['Moisture: 13.5% max', 'Density: 630g/l min'],
    isFeatured: true
  },
  {
    id: 'p7',
    name: 'Black Pepper',
    slug: 'black-pepper',
    fobPrice: '$4,000 / MT',
    categoryId: '3',
    image: '/images/black-pepper.jpg',
    altText: 'Black Pepper',
    specifications: ['Moisture: 13.5% max', 'Density: 500g/l min'],
    isFeatured: true
  },
  {
    id: 'p8',
    name: 'Turmeric Powder',
    slug: 'turmeric-powder',
    fobPrice: '$1,800 / MT',
    categoryId: '5',
    image: '/images/turmeric-powder.jpg',
    altText: 'Turmeric Powder',
    specifications: ['Curcumin: 3% min', 'Moisture: 10% max'],
    isFeatured: true
  },
  {
    id: 'p9',
    name: 'Organic Cayenne Powder',
    slug: 'organic-cayenne-powder',
    fobPrice: '$3,500 / MT',
    categoryId: '3',
    image: '/images/cayenne-powder.jpg',
    altText: 'Organic Cayenne Powder',
    specifications: ['SHU: 30,000 min', 'Moisture: 10% max'],
    isFeatured: true
  },
  {
    id: 'p10',
    name: 'Madras Curry Powder',
    slug: 'madras-curry-powder',
    fobPrice: '$2,500 / MT',
    categoryId: '5',
    image: '/images/curry-powder.jpg',
    altText: 'Madras Curry Powder',
    specifications: ['Blend', 'Moisture: 10% max'],
    isFeatured: true
  },
  {
    id: 'p11',
    name: 'Cinnamon Powder',
    slug: 'cinnamon-powder',
    fobPrice: '$3,200 / MT',
    categoryId: '1',
    image: '/images/cinnamon-powder-100mesh.jpg',
    altText: 'Cinnamon Powder',
    specifications: ['VO: 2.0% min', 'Moisture: 12% max'],
    isFeatured: true
  },
  {
    id: 'p12',
    name: 'Granulated Garlic',
    slug: 'granulated-garlic',
    fobPrice: '$2,800 / MT',
    categoryId: '2',
    image: '/images/granulated-garlic.jpg',
    altText: 'Granulated Garlic',
    specifications: ['Moisture: 6% max', 'Size: 40-60 mesh'],
    isFeatured: true
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
