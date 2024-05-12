import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TellUsAboutYourselfPage({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us About Yourself</Text>
      <View style={styles.content}>
        <Text style={styles.question}>Select your interests:</Text>
        <View style={styles.optionsContainer}>
          {['Reduce procrastination', 'Increase productivity', 'Improve work-life balance', 'Expense tracking', 'savemoney'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedOptions.includes(option) && styles.selectedOption
              ]}
              onPress={() => handleOptionToggle(option)}
            >
              <Text style={[styles.optionText, selectedOptions.includes(option) && styles.selectedOptionText]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('NextPage')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  content: {
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  option: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    margin: 10,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#000',
  },
  selectedOptionText: {
    color: '#fff',
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    fontSize: 18,
    color: 'white',
  },
});