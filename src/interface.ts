export interface CategoryResponse {
  data: string[];
}

export interface ThemeInfo {
  _id: string;
  category: string[];
  themeId: string;
  imageUrl: string;
  name: string;
  paymentType: string;
  price: number;
  sale: number;
  downloads: number;
  priority: number;
  recommendPriority: number;
  officialRecommendPriority: number;
  minimulVersion: number;
  maximumVersion: number;
  minimulIOSVersion: number;
  maximumIOSVersion: number;
  isOnlyBuy: boolean;
  isLiveTheme: boolean;
  isNewTheme: boolean;
  hashtag: string[];
  testcase: string[];
  versionBranches: string[];
  createdAt: string;
  updatedAt: string;
  isBuy: boolean;
}

export interface ThemeRes {
  data: ThemeInfo[];
}

export interface ThemeDetail {
  _id: string;
  category: string[];
  hide: boolean;
  recommend: boolean;
  lang: string;
  bannerImageUrl: string;
  bannerEvent: string;
  creator: string;
  designStoryTitle: string;
  designStoryContent: string;
  price: number;
  sale: number;
  downloadKey: string;
  downloads: number;
  priority: number;
  requireVersion: number;
  isLiveTheme: boolean;
  hashtag: string[];
  figure: {
    keyword: string;
    text: string;
    imageUrl: string;
  }[];
  imageUrl: string;
  name: string;
  paymentType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  localDownloads: number;
  randomPriority: number;
  themeId: string;
  recommendPriority: number;
  relatedKeyword: string[];
  platform: string[];
  testImageUrls: [];
  testcase: [];
  brandDescription: string;
  brandImageUrl: string;
  brandAction: string;
  relativeThemes: ThemeInfo[];
  localDownloadBuffer: number;
  usedPaymentBuffer: number;
  versionBranches: [];
  officialRecommendPriority: number;
  brandType: string;
  officialRecommendPriorities: null;
  maximumIOSVersion: number;
  minimulIOSVersion: number;
  maximumVersion: number;
  minimulVersion: number;
  reviewNoticeContent: string;
  reviewNoticeTitle: string;
  brandMaximumDownload: number;
  reviewPlaceholder: string;
  isOnlyStore: boolean;
  isNew: boolean;
  isNewTheme: boolean;
  buyActions: [];
  specialImageUrl1: string;
  specialImageUrl2: string;
  localFreeUseCount: number;
  localFreeUseCountBuffer: number;
  isOnlyBuy: boolean;
  images: string[];
  color: string[];
  mood: string[];
  isBuy: boolean;
  isFreeUse: boolean;
}

export interface ThemeDetailRes {
  data: ThemeDetail;
}
