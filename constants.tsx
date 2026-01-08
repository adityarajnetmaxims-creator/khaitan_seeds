
import { Category, Language, TranslationStrings } from './types';

export interface GuideSection {
  title: string;
  points: string[];
}

export interface CultivationGuide {
  title: string;
  nursery?: GuideSection;
  landPrep: GuideSection;
  directSowing?: GuideSection;
}

export const CULTIVATION_GUIDES: Record<string, CultivationGuide> = {
  onion: {
    title: "Onion Cultivation Guide",
    nursery: {
      title: "Seeds and Nursery Preparation",
      points: [
        "Seed Rate: 5–7 kg/ha.",
        "Nursery Beds: Raised beds (10-15cm high) with 30cm spacing for drainage.",
        "Soil Mix: 1:1 ratio of soil and well-decomposed manure.",
        "Sowing: Line sowing 5-7.5cm apart, 1cm deep.",
        "Treatment: Fungicide (Thiram 2g/kg) to prevent damping off.",
        "Transplanting: Ready at 6-9 weeks (4-7 leaves)."
      ]
    },
    landPrep: {
      title: "Land Preparation for Main Field",
      points: [
        "Ploughing: 3-4 times for fine tilth.",
        "Soil: Deep loamy or sandy loam, pH 6.0-7.5.",
        "Manure: 15-20 tons FYM/ha during last ploughing.",
        "Fertilizers: Full P & K basal, half N at transplanting.",
        "Irrigation: Immediate irrigation after transplanting."
      ]
    }
  },
  tomato: {
    title: "Tomato Cultivation Guide",
    nursery: {
      title: "Seedling Preparation",
      points: [
        "Seed Rate: 400-500g/ha for hybrids.",
        "Beds: Use pro-trays with coco-peat for better root development.",
        "Treatment: Seed treatment with Carbendazim (2g/kg).",
        "Transplanting: Ready at 25-30 days after sowing."
      ]
    },
    landPrep: {
      title: "Field Preparation & Sowing",
      points: [
        "Tilth: 2-3 deep ploughings for fine texture.",
        "Manure: 25 tons FYM/ha.",
        "Basal Dose: 60:80:80 kg NPK/ha.",
        "Staking: Essential for hybrid varieties to support heavy fruiting.",
        "Spacing: 60x45cm or 90x60cm depending on variety."
      ]
    }
  },
  'hot-pepper': {
    title: "Chilli/Pepper Cultivation Guide",
    nursery: {
      title: "Nursery Management",
      points: [
        "Seed Rate: 1.0-1.5kg/ha.",
        "Raised Beds: Protect from heavy rain using polythene covers.",
        "Thinning: Maintain distance to avoid lanky seedlings.",
        "Hardening: Reduce water 1 week before transplanting."
      ]
    },
    landPrep: {
      title: "Main Field Management",
      points: [
        "Soil: Well-drained black or red loamy soil.",
        "Manure: 10-15 tons/ha FYM.",
        "Beds: Broad Bed Furrow (BBF) recommended for rainy season.",
        "Basal: 50% N, full P & K applied at transplanting."
      ]
    }
  },
  okra: {
    title: "Okra (Bhindi) Cultivation Guide",
    directSowing: {
      title: "Seed Treatment & Sowing",
      points: [
        "Seed Rate: 8-10kg/ha (Summer), 12-15kg/ha (Rainy).",
        "Soaking: Soak seeds in water for 12 hours to improve germination.",
        "Treatment: Imidacloprid (5g/kg) to prevent sucking pests.",
        "Spacing: 45x15cm or 60x30cm depending on season."
      ]
    },
    landPrep: {
      title: "Land Preparation",
      points: [
        "Ploughing: 2-3 times to remove weeds and stones.",
        "Soil: Neutral pH loamy soil is ideal.",
        "Manure: 20 tons FYM mixed during land preparation.",
        "Irrigation: Soil must be moist but not waterlogged."
      ]
    }
  },
  cucumber: {
    title: "Cucumber Cultivation Guide",
    directSowing: {
      title: "Pit/Hill Preparation",
      points: [
        "Seed Rate: 2.5-3.5kg/ha.",
        "Pits: Dig pits of 30x30x30cm size.",
        "Sowing: 2-3 seeds per pit at 1.5-2.0cm depth.",
        "Spacing: 1.5m x 1.0m for field crawl, higher for trellis."
      ]
    },
    landPrep: {
      title: "Main Field Setup",
      points: [
        "Soil: Sandy loam rich in organic matter.",
        "Manure: Fill pits with a mix of topsoil and 5kg FYM.",
        "Basal: Apply 50g Neem cake per pit to prevent soil pests.",
        "Trellis: Prepare bamboo or GI wire support for better fruit quality."
      ]
    }
  },
  watermelon: {
    title: "Watermelon Cultivation Guide",
    directSowing: {
      title: "Direct Sowing Instructions",
      points: [
        "Seed Rate: 3-4kg/ha.",
        "Pit Sowing: 2m x 2m distance between pits.",
        "Treatment: Treat with Trichoderma (10g/kg) for soil health.",
        "Thinning: Keep only 2 healthy vines per pit."
      ]
    },
    landPrep: {
      title: "Soil and Bed Management",
      points: [
        "Soil: Light sandy soils are best for sweetness.",
        "FYM: 20-25 tons/ha well-spread.",
        "Mulching: Black silver mulch (25 micron) recommended for high yield.",
        "Basal: High Potash dose helps in TSS (sugar) development."
      ]
    }
  },
  'bottle-gourd': {
    title: "Gourd Cultivation Guide",
    directSowing: {
      title: "Seed Preparation",
      points: [
        "Seed Rate: 4-5kg/ha.",
        "Germination: Hard seed coat requires soaking for 24 hours.",
        "Sowing: Direct sowing in pits is most common.",
        "Depth: 2.5cm deep in warm soil."
      ]
    },
    landPrep: {
      title: "Land Preparation",
      points: [
        "System: Bower or Pandal system for commercial hybrid yields.",
        "Pits: 45x45x45cm pits filled with compost and soil.",
        "Spacing: 2.5m x 2.0m for hybrid varieties."
      ]
    }
  }
};

export const CATEGORIES: Category[] = [
  {
    id: 'veg',
    name: 'Vegetables',
    crops: [
      {
        id: 'onion',
        name: 'Onion',
        products: [
          { id: 'oc', name: 'Onion Commander' },
          { id: 'or', name: 'Onion Royal' },
          { id: 'os', name: 'Onion Supreme' }
        ]
      },
      {
        id: 'tomato',
        name: 'Tomato',
        products: [
          { id: 'dhruv', name: 'Dhruv (1124)' },
          { id: 'indra', name: 'Indra (1125)' },
          { id: 'aasha', name: 'Aasha' },
          { id: 'bheema', name: 'Bheema' }
        ]
      },
      {
        id: 'hot-pepper',
        name: 'Hot Pepper',
        products: [
          { id: 'hhs474', name: 'HHS474' },
          { id: 'hhs7888', name: 'HHS 7888' },
          { id: 'shakti', name: 'Shakti' },
          { id: 'hhs8874', name: 'HHS 8874' }
        ]
      },
      {
        id: 'okra',
        name: 'Okra (Bhindi)',
        products: [
          { id: 'mahima', name: 'Mahima Super' },
          { id: 'shagun', name: 'Shagun' },
          { id: 'hs8815', name: 'HS 8815' },
          { id: 'saarika', name: 'Saarika' }
        ]
      },
      {
        id: 'cucumber',
        name: 'Cucumber',
        products: [
          { id: 'pepino', name: 'Pepino' },
          { id: 'venus', name: 'Venus' },
          { id: 'mitraa', name: 'Mitraa' },
          { id: 'pakeeza', name: 'Pakeeza' }
        ]
      },
      {
        id: 'watermelon',
        name: 'Watermelon',
        products: [
          { id: 'noor111', name: 'Noor - 111' },
          { id: 'sultan', name: 'Sultan' },
          { id: 'madhurekha', name: 'Madhu Rekha' },
          { id: 'madhuras', name: 'Madhuras' }
        ]
      },
      {
        id: 'pumpkin',
        name: 'Pumpkin',
        products: [
          { id: 'virat', name: 'Virat' }
        ]
      },
      {
        id: 'tinda',
        name: 'Tinda',
        products: [
          { id: 'hhs11', name: 'HHS-11 (OP)' }
        ]
      },
      {
        id: 'knol-khol',
        name: 'Knol Khol',
        products: [
          { id: 'early111', name: 'Early-111 (OP)' }
        ]
      },
      {
        id: 'cabbage',
        name: 'Cabbage',
        products: [
          { id: 'goldenacre', name: 'Early Golden Acre' },
          { id: 'champion45', name: 'Champion-45' },
          { id: 'veera60', name: 'Veera-60' }
        ]
      },
      {
        id: 'bottle-gourd',
        name: 'Bottle Gourd',
        products: [
          { id: 'hhs408', name: 'HHS-408' },
          { id: 'esha', name: 'Esha' },
          { id: 'surbhi', name: 'Surbhi' },
          { id: 'komal', name: 'Komal' }
        ]
      },
      {
        id: 'sponge-gourd',
        name: 'Sponge Gourd',
        products: [
          { id: 'sitara111', name: 'Sitara-111' },
          { id: 'rani', name: 'Rani (White Seeded)' },
          { id: 'greengold', name: 'Green Gold' }
        ]
      },
      {
        id: 'ridge-gourd',
        name: 'Ridge Gourd',
        products: [
          { id: 'zeenat', name: 'Zeenat' }
        ]
      },
      {
        id: 'bitter-gourd',
        name: 'Bitter Gourd',
        products: [
          { id: 'maharaja', name: 'Maharaja' },
          { id: 'nanha', name: 'Nanha' },
          { id: 'makhmal', name: 'Makhmal' }
        ]
      },
      {
        id: 'radish',
        name: 'Radish',
        products: [
          { id: 'pusa-chetki', name: 'Pusa Chetki Long' },
          { id: 'palak-patta', name: 'Palak Patta' },
          { id: 'chinese-pink', name: 'Chinese Pink' },
          { id: 'early40', name: 'Early 40 Days' },
          { id: 'him222', name: 'Him-222' },
          { id: 'him777', name: 'Him - 777' },
          { id: 'meno-early', name: 'Meno Early Long' },
          { id: 'hill-queen', name: 'Hill Queen' }
        ]
      },
      {
        id: 'carrot',
        name: 'Carrot',
        products: [
          { id: 'early-nantes', name: 'Early Nantes' },
          { id: 'super111', name: 'Super 111 (OP)' }
        ]
      },
      {
        id: 'beet-root',
        name: 'Beet Root',
        products: [
          { id: 'hdr88', name: 'HDR-88' },
          { id: 'ruby-queen', name: 'Ruby Queen' }
        ]
      },
      {
        id: 'cowpea',
        name: 'Cowpea',
        products: [
          { id: 'tejas4', name: 'Tejas-4' },
          { id: 'nidhi6', name: 'Nidhi-6' },
          { id: 'kranti5', name: 'Kranti-5' }
        ]
      },
      {
        id: 'french-beans',
        name: 'French Beans',
        products: [
          { id: 'pencil', name: 'Pencil' },
          { id: 'lucky111', name: 'Lucky-111' }
        ]
      },
      {
        id: 'coriander',
        name: 'Coriander',
        products: [
          { id: 'him111', name: 'Him-111' }
        ]
      },
      {
        id: 'palak',
        name: 'Palak',
        products: [
          { id: 'kirti', name: 'Kirti - All Green' }
        ]
      },
      {
        id: 'peas',
        name: 'Peas',
        products: [
          { id: 'hs10', name: 'HS-10' },
          { id: 'greenwonder', name: 'Green Wonder (GW-10)' }
        ]
      }
    ]
  }
];

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    findCatalog: 'FIND YOUR CROP CATALOG',
    heroSubtitle: 'HIGH YIELDING HYBRID SEEDS FOR PROSPEROUS FARMING',
    selectCategory: 'Select Category:',
    selectCrop: 'Select Crop:',
    selectProduct: 'Select Product:',
    seeDetails: 'See Details',
    contactUs: 'CONTACT US',
    home: 'HOME',
    aboutUs: 'ABOUT US',
    researchAndDev: 'RESEARCH & DEVELOPMENT',
    salesMarketing: 'SALES & MARKETING',
    products: 'PRODUCTS',
    media: 'MEDIA',
    helpCenter: 'HELP CENTER',
    allRightsReserved: 'Himalaya Hybrid Seeds Company. Copyright 2025. All Rights Reserved.'
  },
  hi: {
    findCatalog: 'अपना फसल कैटलॉग खोजें',
    heroSubtitle: 'समृद्ध खेती के लिए उच्च उपज वाले संकर बीज',
    selectCategory: 'श्रेणी चुनें:',
    selectCrop: 'फसल चुनें:',
    selectProduct: 'उत्पाद चुनें:',
    seeDetails: 'विवरण देखें',
    contactUs: 'संपर्क करें',
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    researchAndDev: 'अनुसंधान और विकास',
    salesMarketing: 'बिक्री और विपणन',
    products: 'उत्पाद',
    media: 'मीडिया',
    helpCenter: 'सहायता केंद्र',
    allRightsReserved: 'हिमालय हाइब्रिड सीड्स कंपनी। कॉपीराइट 2025। सर्वाधिकार सुरक्षित।'
  },
  mr: {
    findCatalog: 'तुमचा पीक कॅटलॉग शोधा',
    heroSubtitle: 'समृद्ध शेतीसाठी अधिक उत्पादन देणारे संकरित बियाणे',
    selectCategory: 'श्रेणी निवडा:',
    selectCrop: 'पीक निवडा:',
    selectProduct: 'उत्पाद निवडा:',
    seeDetails: 'तपशील पहा',
    contactUs: 'आमच्याशी संपर्क साधा',
    home: 'मुख्यपृष्ठ',
    aboutUs: 'आमच्याविषयी',
    researchAndDev: 'संशोधन आणि विकास',
    salesMarketing: 'विपणन आणि विक्री',
    products: 'उत्पादने',
    media: 'माध्यम',
    helpCenter: 'मदत केंद्र',
    allRightsReserved: 'हिमालय हायब्रीड सीड्स कंपनी. कॉपीराइट २०२५. सर्व हक्क राखीव.'
  }
};
