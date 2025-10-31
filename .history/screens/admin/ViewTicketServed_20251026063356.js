import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Header from '../components/Header'; // 👈 import your shared header component

export default function ViewTicketServed({ navigation, route }) {
  // Get office name from route params or use a default
  const officeName = route?.params?.officeName || "Office Name";
  
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
        <Ionicons name="chevron-back" size={30} color="black" />
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
  },
  officeName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 9,
  },
  backButton: {
    width: 40,
    height: 40,
    marginLeft: 4,
    marginBottom: 32,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  ticketContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#8A2D7F",
    overflow: "hidden",
    shadowColor: "#741865ff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  ticketItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  lastTicketItem: {
    borderBottomWidth: 0,
  },
  ticketNumber: {
    fontSize: 15,
    color: "#4b5563",
    fontWeight: "400",
  },
  servedBadge: {
    backgroundColor: "#b8c9b8",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 14,
  },
  servedText: {
    fontSize: 13,
    color: "#ffffff",
    fontWeight: "500",
  },
});