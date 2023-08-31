import { useQuery } from "@tanstack/react-query";
import { ISearchHotelsParams } from "./useSearchHotels.type";
import { searchHotles } from "../../api/searchHotels";
import { ISearchHotelsResponse } from "../../api/searchHotels.type";

export const useSearchHotels = ({
  entityId,
  checkin,
  checkout,
  adults,
  rooms,
  limit,
  currency,
  market,
  countryCode,
}: ISearchHotelsParams) => {
  const {
    data: hotels,
    isLoading: hotelsIsLoading,
    isError: hotelsError,
  } = useQuery<ISearchHotelsResponse | null>({
    queryKey: [
      "hotels",
      entityId,
      checkin,
      checkout,
      adults,
      rooms,
      limit,
      currency,
      market,
      countryCode,
    ],
    queryFn: () =>
      searchHotles({
        entityId,
        checkin,
        checkout,
        adults,
        rooms,
        limit,
        currency,
        market,
        countryCode,
      }),
    onError: (error) => {
      console.log(error);
    },
  });
  return { hotels, hotelsIsLoading, hotelsError };
};
