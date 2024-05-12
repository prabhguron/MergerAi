import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Homepage() {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.iconBubble}>
          <MaterialIcons name="person" size={24} color="black" />
        </View>
        <Text style={styles.greeting}>Hello, User</Text>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search..." style={styles.searchInput} />
          <TouchableOpacity style={styles.searchIconContainer}>
            <MaterialIcons name="search" size={24} color="black" style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Centered Overview of the Week */}
      <View style={styles.centeredContainer}>
        <View style={styles.overviewContainer}>
          <View style={styles.triangle}></View>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <MaterialIcons name="timer" size={24} color="black" style={styles.statIcon} />
              <Text style={styles.statValue}>3 Hours</Text>
              <Text style={styles.savingText}>Saving</Text>
            </View>
            <View style={[styles.statBox, { marginLeft: 'auto' }]}>
              <MaterialIcons name="attach-money" size={24} color="black" style={styles.statIcon} />
              <Text style={styles.statValue}>$5</Text>
              <Text style={styles.savingText}>Saving</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Activity Log */}
      {/* Activity log content */}
{/* using information from api to disaply activity log */}
      {/* New Container */}
      <View style={styles.newContainer}>
        {/* New container content */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  overviewContainer: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 15,
    height: 220, // Adjusted height to accommodate the additional content
    width: 342,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'end',
    paddingVertical: 10, // Added padding for better spacing
  },
  iconBubble: {
    marginRight: 10,
    backgroundColor: '#f2f2f2',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    marginRight: 'auto',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 16,
  },
  searchIconContainer: {
    padding: 5,
    borderRadius: 50,
  },
  searchIcon: {
    marginLeft: 5,
  },
  notificationIcon: {
    borderRadius: 100,
    padding: 5,
    marginLeft: 'auto',
    borderColor: '#5E5C5C',
    borderWidth: 1,
    backgroundColor: "#5E5C5C",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ccc',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10, // Added horizontal padding
  },
  statBox: {
    width: 120, // Adjusted width
    height: 70, // Adjusted height
    backgroundColor: 'white',
    borderColor: '#f2f2f2', // Same color as the background
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10, // Added horizontal padding
  },
  statIcon: {
    marginBottom: 5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  savingText: {
    fontSize: 12,
    color: '#aaa',
  },
  newContainer: {
    marginTop: 20, // Added margin top for spacing
    alignItems: 'center',
  },
});