// app/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/users/login', { email, password });
      Alert.alert('Login Success', `Welcome!`);
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert('Login Failed', err.response?.data?.error || err.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 8, borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 8, borderWidth: 1, padding: 8 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
