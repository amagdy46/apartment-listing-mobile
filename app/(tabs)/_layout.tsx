import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs initialRouteName="apartments">
      <Tabs.Screen name="apartments" options={{ title: "Apartments" }} />
      <Tabs.Screen name="index" options={{ title: "Home" }} />
    </Tabs>
  );
}
