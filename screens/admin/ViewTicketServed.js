import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ViewTicketServed({ navigation }) {
    const officeName = route?.params?.officeName || 'Office';


  // Example ticket data - all tickets here are already served
  const [tickets] = useState([
    { id: 1, ticketNumber: "#QN25" },
    { id: 2, ticketNumber: "#QN24" },
    { id: 3, ticketNumber: "#QN25" },
    { id: 4, ticketNumber: "#QN26" },
    { id: 5, ticketNumber: "#QN27" },
    { id: 6, ticketNumber: "#QN28" },
    { id: 7, ticketNumber: "#QN29" },
    { id: 8, ticketNumber: "#QN30" },
    { id: 9, ticketNumber: "#QN31" },
    { id: 10, ticketNumber: "#QN32" },
    { id: 11, ticketNumber: "#QN33" },
    { id: 12, ticketNumber: "#QN34" },
  ]);

  const handleTicketPress = (ticket) => {
    console.log("Viewing served ticket:", ticket.ticketNumber);
    navigation.navigate('TicketServedInfo', { ticket });
  };



  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.officeName}>{officeName}</Text>
          <Text style={styles.headerSubtitle}>Ticket Served List</Text>
        </View>
      </LinearGradient>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#374151" />
      </TouchableOpacity>

      {/* Tickets Container */}
      <View style={styles.content}>
        <View style={styles.ticketContainer}>
          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {tickets.map((ticket, index) => (
              <TouchableOpacity
                key={ticket.id} 
                style={[
                  styles.ticketItem,
                  index === tickets.length - 1 && styles.lastTicketItem
                ]}
                onPress={() => handleTicketPress(ticket)}
                activeOpacity={0.7}
              >
                <Text style={styles.ticketNumber}>{ticket.ticketNumber}</Text>
                
                <View style={styles.servedBadge}>
                  <Text style={styles.servedText}>Served</Text>
                </View>
              </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: "center",
  },
  officeName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
  },
  backButton: {
    position: "absolute",
    top: 120,
    left: 16,
    padding: 8,
    zIndex: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  ticketContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#8A2D7F",
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 4,
  },
  ticketItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  lastTicketItem: {
    borderBottomWidth: 0,
  },
  ticketNumber: {
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  viewButton: {
    backgroundColor: "#c7d2fe",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 16,
  },
  viewButtonText: {
    fontSize: 14,
    color: "#4f46e5",
    fontWeight: "600",
  },
  servedBadge: {
    backgroundColor: "#d1d5db",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
  },
  servedText: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "600",
  },
});