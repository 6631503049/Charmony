// screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [warningVisible, setWarningVisible] = useState(true);
  
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={warningVisible} transparent animationType="slide">
        
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.warningText}>Warning</Text>
            <Text style={styles.warningTextDescription}>This is an auspicious color app. The colors and their meanings are intended to enhance various aspects of your life based on traditional beliefs."</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setWarningVisible(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
      <View style={styles.headerBar}>
        <Text style={styles.logo}>🎨 Lucky Colors</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.dateText}>Monday, 3 March 2025</Text>
        <View style={styles.weekContainer}>
          {["SUN", "MON", "THES", "WED", "THU", "FRI", "SAT"].map((day, index) => (
            <View key={index} style={styles.dayBox}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.dayText}>{index + 3}</Text>
            </View>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}

//Alert warning Blackground
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  //Alert warning Box
  modalBox: {
    width: 300,
    backgroundColor: "#eee9f8",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  warningText: { fontSize: 18, marginBottom: 10 , fontWeight: "bold", color: "red"},
  warningTextDescription: { textAlign: "center", color: "#1F2940"},
  closeButton: { position: "absolute", top: 10, right: 10 },

  //second Header Bar
  headerBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 200,
    backgroundColor: "#eee9f8",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  //Lucky Colors Text-bandner
  logo: {
    color: "#1F2940",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    top: 20,
    left: 10,
  },

  mainContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginTop: 75,
    
  },

  dateText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#1F2940",
  },

  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
  },

  dayBox: {
    width: 48,
    height: 60,  
    backgroundColor: "#5B3E90",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  dayText: { 
  fontSize: 13,
  fontWeight: "600",
  color: "white",
  },
});
