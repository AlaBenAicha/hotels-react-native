import axios from "axios";
import { ISearchHotelsParams } from "../hooks/useSearchHotels/useSearchHotels.type";
import { ISearchHotelsResponse } from "./searchHotels.type";

export const searchHotles = async ({
  entityId = "95673320",
  checkin = "2023-09-01",
  checkout = "2023-09-02",
  adults = 1,
  rooms = 1,
  limit = 30,
  currency = "TND",
  market = "en-US",
  countryCode = "TN",
}: ISearchHotelsParams): Promise<ISearchHotelsResponse | null> => {
  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      entityId,
      checkin,
      checkout,
      adults,
      rooms,
      limit,
      currency,
      market,
      countryCode,
    },
    headers: {
      "X-RapidAPI-Key": "6056341d81msh7b0d5ab8914ec98p13e4c2jsn8fb8b57b32c3",
      "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
