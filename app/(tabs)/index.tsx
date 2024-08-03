import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { getApartments } from "../../services/apartments";
import { useRouter } from "expo-router";

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

const HomeScreen = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApartments();
      setApartments(data);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Apartment }) => (
    <TouchableOpacity onPress={() => router.push(`/apartments/${item.id}`)}>
      <View style={styles.card}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.info}>Price: {item.price}</Text>
        <Text style={styles.info}>Location: {item.location}</Text>
        <Text style={styles.info}>Bedrooms: {item.bedrooms}</Text>
        <Text style={styles.info}>Bathrooms: {item.bathrooms}</Text>
        <Text style={styles.info}>Space: {item.space} sqft</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apartments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  info: {
    fontSize: 14,
    marginVertical: 2,
  },
});

export default HomeScreen;
