import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import database from './src/db';
// import { db } from './src/db';

export default function App() {
  const onAperta = async () => {
    const usersCollection = database.get('users');
    const user = await usersCollection.find('1');
    console.warn(user.name);
  };

  const onShowUser = async () => {
    const usersCollection = database.get('users');
    await database.write(async () => {
      await usersCollection.create((user) => {
        user.name = "User 1";
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text>Bro, wake up! It's been 2 months already. Is Watermelon installed?s</Text>
      <Button title="Criar usuário!" onPress={onAperta}/>
      <Button title="Mostrar usuário" onPress={onShowUser}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
