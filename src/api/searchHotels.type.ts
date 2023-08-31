export interface ISearchHotelsResponse {
  status: boolean;
  timestamp: number;
  data: {
    searchStatus: {
      completionPercentage: number;
      status: string;
      searchId: string;
      firstPageStatus: string;
    };
    hotels: Hotel[];
    nightsForPrice: string;
    filters: Filter[];
    sortOptions: SortOption[];
  };
}

interface Hotel {
  hotelId: string;
  heroImage: string;
  name: string;
  stars: number;
  brandIds: string[];
  distance: string;
  relevantPoiDistance: string;
  coordinates: [number, number];
  price: string;
  cug: {
    cugWithoutLabel: string;
    rawType: string;
    type: string;
    icons: string[];
    discount: string;
    priceWithoutDiscount: string;
    rawDiscountPercentage: number;
  };
  cheapestOfferPartnerId: string;
  cheapestOfferRateId: string;
  rawPrice: number;
  rating: Rating;
  reviewSummary: ReviewSummary;
  cheapestOffer: string;
  offerTypes: string;
  guestType: string | null;
  exclusiveDealLabel: string | null;
  pricesFrom: string;
  images: string[];
  otherRates: OtherRate[];
  priceDescription: string;
  taxPolicy: string;
  rateFeatures: RateFeature[];
  cheapestOfferPartnerName: string;
}

interface Rating {
  description: string;
  count: number;
  value: string;
  color: string;
}

interface ReviewSummary {
  description: string;
  count: number;
  formatCount: string;
  value: string;
  formatValue: string;
  color: string;
  taImage: string;
  confidenceBadge: {
    type: string;
    score: number;
    icon: string;
    color: {
      light: string;
      dark: string;
    };
    message: string;
  };
}

interface OtherRate {
  partnerId: string;
  partnerName: string;
  rawPrice: number;
  price: string;
}

interface RateFeature {
  key: string;
  text: string;
  color: {
    light: string;
    dark: string;
  };
}

interface Filter {
  type: string;
  title: string;
  values: FilterValue[];
}

interface FilterValue {
  id: string;
  label: string;
  minPrice: number | null;
  maxPrice: number | null;
  count: number;
}

interface SortOption {
  optionName: string;
  type: string;
}
