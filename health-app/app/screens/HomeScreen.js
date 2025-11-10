// app/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/health-data')
      .then(res => setHealthData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Health Data</Text>
      <FlatList
        data={healthData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1 }}>
            <Text>Mood: {item.mood}</Text>
            <Text>Activity: {item.activity}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}
