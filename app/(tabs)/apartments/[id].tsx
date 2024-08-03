import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { getApartmentDetails } from "../../../services/apartments";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";

interface Apartment {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  space: number;
  amenities: string[];
  images: string[];
}

const ApartmentDetailsScreen = () => {
  const local = useLocalSearchParams();
  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getApartmentDetails(parseInt(local.id as string));
      setApartment(data);
    };
    fetchDetails();
  }, [local.id]);

  if (!apartment) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: apartment.images[0] }} style={styles.image} />
      <Text style={styles.title}>{apartment.name}</Text>
      <Text style={styles.description}>{apartment.description}</Text>
      <Text style={styles.info}>Price: {apartment.price}</Text>
      <Text style={styles.info}>Location: {apartment.location}</Text>
      <Text style={styles.info}>Bedrooms: {apartment.bedrooms}</Text>
      <Text style={styles.info}>Bathrooms: {apartment.bathrooms}</Text>
      <Text style={styles.info}>Space: {apartment.space} sqft</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ApartmentDetailsScreen;
