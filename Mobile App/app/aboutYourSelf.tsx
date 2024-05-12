import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TellUsAboutYourselfPage({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us About Yourself</Text>
      <View style={styles.content}>
        <Text style={styles.question}>Select your interests:</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.option, selectedOptions.includes('Reduceprocrastination') && styles.selectedOption]}
            onPress={() => handleOptionToggle('Reduceprocrastination')}>
            <Text style={[styles.optionText, selectedOptions.includes('Reduceprocrastination') && styles.selectedOptionText]}>Reduce procrastination</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOptions.includes('Increaseproductivity') && styles.selectedOption]}
            onPress={() => handleOptionToggle('Increaseproductivity')}>
            <Text style={[styles.optionText, selectedOptions.includes('Increaseproductivity') && styles.selectedOptionText]}>Increase productivity</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.option, selectedOptions.includes('Improveworklifebalance') && styles.selectedOption]}
            onPress={() => handleOptionToggle('Improveworklifebalance')}>
            <Text style={[styles.optionText, selectedOptions.includes('Improveworklifebalance') && styles.selectedOptionText]}>Improve work-life balance</Text>
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.option, selectedOptions.includes('Expensetracking') && styles.selectedOption]}
            onPress={() => handleOptionToggle('Expensetracking')}>
            <Text style={[styles.optionText, selectedOptions.includes('Expensetracking') && styles.selectedOptionText]}>Expense tracking</Text>
          </TouchableOpacity>
          {/* Add more options here */}
        
        </View>
        </View>
        <TouchableOpacity
            style={[styles.option, selectedOptions.includes('savemoney') && styles.selectedOption]}
            onPress={() => handleOptionToggle('savemoney')}>
            <Text style={[styles.optionText, selectedOptions.includes('savemoney') && styles.selectedOptionText]}>savemoney</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('NextPage')}>
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