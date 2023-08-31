import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSearchHotels } from "./hooks/useSearchHotels/useSearchHotels";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelsList from "./components/HotelsList/HotelsList";
export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <HotelsList />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
