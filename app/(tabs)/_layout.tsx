import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Apartments" }} />
      <Stack.Screen
        name="apartments/[id]"
        options={({ route }) => ({
          title: "Apartment Details",
        })}
      />
    </Stack>
  );
}
