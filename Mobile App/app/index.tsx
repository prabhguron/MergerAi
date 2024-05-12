import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signInButton]}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.buttonText, styles.signInText]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.createAccountButton]}
          onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={[styles.buttonText, styles.createAccountText]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 50, // Add padding to ensure content is not too close to the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000', // Ensure text is visible
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Add margin to create space between the buttons and the bottom
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  signInButton: {
    backgroundColor: '#000',
  },
  createAccountButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  signInText: {
    color: '#fff', // Set text color for visibility
  },
  createAccountText: {
    color: '#000', // Set text color for visibility
  },
});