import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function NotifPage({ navigation }) {
  // Example notification data with time and date
  const [notifications] = useState([
    { id: 1, text: "#QN25", time: "10:30 AM", date: "Oct 5" },
    { id: 2, text: "#QN24", time: "10:15 AM", date: "Oct 5" },
    { id: 3, text: "#QN25", time: "10:00 AM", date: "Oct 5" },
    { id: 4, text: "#QN26", time: "9:45 AM", date: "Oct 5" },
    { id: 5, text: "#QN27", time: "9:30 AM", date: "Oct 5" },
    { id: 6, text: "#QN28", time: "9:15 AM", date: "Oct 5" },
    { id: 7, text: "#QN29", time: "9:00 AM", date: "Oct 5" },
    { id: 8, text: "#QN30", time: "8:45 AM", date: "Oct 5" },
    { id: 9, text: "#QN31", time: "8:30 AM", date: "Oct 5" },
    { id: 10, text: "#QN32", time: "8:15 AM", date: "Oct 5" },
    { id: 11, text: "#QN33", time: "8:00 AM", date: "Oct 4" },
    { id: 12, text: "#QN34", time: "7:45 AM", date: "Oct 4" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#7c3aed', '#9333ea', '#a855f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </LinearGradient>

      {/* Notifications Container */}
      <View style={styles.content}>
        <View style={styles.notifContainer}>
          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {notifications.map((notif, index) => (
              <View 
                key={notif.id} 
                style={[
                  styles.notifItem,
                  index === notifications.length - 1 && styles.lastNotifItem
                ]}
              >
                <Text style={styles.notifText}>{notif.text}</Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeText}>{notif.time}</Text>
                  <Text style={styles.dateText}>{notif.date}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  notifContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#9333ea",
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 4,
  },
  notifItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  lastNotifItem: {
    borderBottomWidth: 0,
  },
  notifText: {
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 2,
  },
  dateText: {
    fontSize: 12,
    color: "#9ca3af",
  },
});