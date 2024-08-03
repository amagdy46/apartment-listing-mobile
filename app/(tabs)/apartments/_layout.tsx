import { Stack } from "expo-router";

export default function ApartmentsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="apartmentDetails"
        options={{ title: "Apartment Details" }}
      />
    </Stack>
  );
}
