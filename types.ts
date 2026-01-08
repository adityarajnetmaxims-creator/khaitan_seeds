
export type Language = 'en' | 'hi' | 'mr';

export interface Product {
  id: string;
  name: string;
  description?: string;
}

export interface Crop {
  id: string;
  name: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  crops: Crop[];
}

export interface TranslationStrings {
  findCatalog: string;
  heroSubtitle: string;
  selectCategory: string;
  selectCrop: string;
  selectProduct: string;
  seeDetails: string;
  contactUs: string;
  home: string;
  aboutUs: string;
  researchAndDev: string;
  salesMarketing: string;
  products: string;
  media: string;
  helpCenter: string;
  allRightsReserved: string;
}
