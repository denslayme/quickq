import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AdminCounter({ route, navigation }) {
  const { officeName = 'Admin Panel', officeId } = route.params || {};
  
  const [tickets, setTickets] = useState([
    { id: 'Q055', status: 'serve' },
    { id: 'Q059', status: 'pending' },
    { id: 'Q040', status: 'pending' },
    { id: 'Q041', status: 'pending' },
    { id: 'Q042', status: 'pending' },
  ]);

  const handleServeTicket = (ticketId) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, status: 'serve' }
        : ticket
    ));
  };
  
  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewTicketServed = () => {
  navigation.navigate('ViewTicketServed', {
    officeName: officeName,
    officeId: officeId
  });
};

  const handleQRScanner = () => {
    console.log('QR Scanner pressed');
    navigation.navigate('QRScanInterface', {
      officeName: officeName,
      officeId: officeId
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
          colors={['#8A2D7F', '#8650AB', '#8372D8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
      ></LinearGradient>
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>QuickQ</Text>
            <Text style={styles.headerSubtitle}>Click your office assigned</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>

        {/* Pending Tickets Section */}
        <Text style={styles.sectionTitle}>Pending Tickets</Text>

        <View style={styles.ticketsContainer}>
          {tickets.map((ticket, index) => (
            <View 
              key={ticket.id}
              style={[
                styles.ticketRow,
                index === tickets.length - 1 && styles.ticketRowLast
              ]}
            >
              <Text style={styles.ticketId}>#{ticket.id}</Text>
              <TouchableOpacity
                style={[
                  styles.statusButton,
                  ticket.status === 'serve' ? styles.serveButton : styles.pendingButton
                ]}
                onPress={() => handleServeTicket(ticket.id)}
                disabled={ticket.status === 'serve'}
              >
                <Text style={styles.statusButtonText}>
                  {ticket.status === 'serve' ? 'Serve' : 'Pending'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* View Ticket Served Button */}
        <TouchableOpacity 
          style={styles.viewTicketButton}
          onPress={handleViewTicketServed}
        >
          <Text style={styles.viewTicketButtonText}>View Ticket Served</Text>
        </TouchableOpacity>

        {/* QR Scanner Button */}
        <TouchableOpacity 
          style={styles.qrScannerButton}
          onPress={handleQRScanner}
        >
          <Ionicons name="qr-code" size={24} color="#ffffff" />
          <Text style={styles.qrScannerButtonText}>QR Scanner</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#9333ea',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  notificationButton: {
    padding: 4,
    marginTop: 8,
    position: 'absolute',
    right: 32,
    top: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  ticketsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
    marginBottom: 20,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  ticketRowLast: {
    borderBottomWidth: 0,
  },
  ticketId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  statusButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  serveButton: {
    backgroundColor: '#4ade80',
  },
  pendingButton: {
    backgroundColor: '#ef4444',
  },
  statusButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  viewTicketButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9333ea',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  viewTicketButtonText: {
    color: '#9333ea',
    fontSize: 16,
    fontWeight: '600',
  },
  qrScannerButton: {
    backgroundColor: '#9333ea',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  qrScannerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});