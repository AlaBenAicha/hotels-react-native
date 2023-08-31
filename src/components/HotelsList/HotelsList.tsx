import React from "react";
import { useSearchHotels } from "../../hooks/useSearchHotels/useSearchHotels";
import { Text, View } from "react-native";

const HotelsList = () => {
  const { hotels, hotelsIsLoading, hotelsError } = useSearchHotels({
    entityId: "1",
    checkin: "2023-08-31",
    checkout: "2023-08-31",
  });
  console.log("hotels", hotels);
  console.log("hotelsIsLoading", hotelsIsLoading);
  console.log("hotelsError", hotelsError);
  return (
    <View>
      {hotelsIsLoading && <Text>Loading...</Text>}
      {hotelsError && <Text>Error...</Text>}
      {hotels && hotels.data.hotels.map((hotel) => <Text>{hotel.name}</Text>)}
    </View>
  );
};

export default HotelsList;
