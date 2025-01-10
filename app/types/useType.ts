
export interface BrandChoice {
  id: string; 
  BrandName: string;
  BrandPosition: string;
  BrandFonts: string;
  BrandColor: string;
  BrandSize: string;
}

export interface UserBrand {
  id: string;
  Brand: string;
  userChoice: BrandChoice;
  createdAt: number;
}
