import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function NotifPage({ navigation }) {
  // Example notification data with time and date
  const [notifications] = useState([
    { id: 1, text: "Ticket Created", time: "11:30 AM", date: "Oct 8" },
    { id: 2, text: "Ticket Created", time: "10:15 AM", date: "Oct 7" },
    { id: 3, text: "Ticket expiring soon", time: "4:50 PM", date: "Oct 5" },
    { id: 4, text: "3 people ahead left", time: "9:45 AM", date: "Oct 5" },
    { id: 5, text: "Ticket Created", time: "9:30 AM", date: "Oct 5" },
    { id: 6, text: "Ticket Created", time: "9:15 AM", date: "Oct 1" },
    { id: 7, text: "Ticket Created", time: "9:00 AM", date: "Sept 20" },
    { id: 8, text: "Ticket Created", time: "8:45 AM", date: "Sept 19" },
    { id: 9, text: "Ticket Expired", time: "5:00 PM", date: "Sept 14" },
    { id: 10, text: "3 people ahead left, Ticket expiring soon", time: "4:30 M", date: "Sept 14" },
    { id: 11, text: "Ticket Created", time: "8:00 AM", date: "Sept 14" },
    { id: 12, text: "Ticket Created", time: "7:45 AM", date: "Sept 2" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
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
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
    justifyContent: 'center',   // ✅ Centers vertically
    alignItems: 'center',       // ✅ Centers horizontally
    width: '100%',              // ✅ Ensures full screen width
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',           // ✅ Prevents long text from overflowing
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
    flexWrap: 'wrap',           // ✅ Keeps multi-line text inside bounds
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
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#8A2D7F",
    overflow: "hidden",
    shadowColor: "#741865ff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
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