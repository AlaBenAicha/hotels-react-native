export interface ISearchHotelsParams {
  entityId: string;
  checkin: string;
  checkout: string;
  adults?: number;
  rooms?: number;
  limit?: number;
  currency?: string;
  market?: string;
  countryCode?: string;
}
