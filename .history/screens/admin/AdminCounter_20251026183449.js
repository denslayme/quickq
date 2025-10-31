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

  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewTicketServed = () => {
    navigation.navigate('ViewTicketServed', {
      officeName: officeName,
      officeId: officeId,
    });
  };

  const handleQRScanner = () => {
    console.log('Opening QR Scanner');
    navigation.navigate('QRScanInterface');
  };

  // Serve ticket functionality
  const handleServeTicket = (ticketId) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId ? { ...t, status: 'serve' } : t
      )
    );
  };

  // Ticket press functionality: navigate to ticket info
  const handleTicketPress = (ticket) => {
    navigation.navigate('APTicketInfo', { ticket });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{officeName}</Text>
          <Text style={styles.headerSubtitle}>Manage Queue</Text>
        </View>
      </LinearGradient>

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
            <TouchableOpacity
              key={ticket.id}
              style={[
                styles.ticketRow,
                index === tickets.length - 1 && styles.ticketRowLast
              ]}
              onPress={() => handleTicketPress(ticket)} // Ticket press
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
            </TouchableOpacity>
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
          onPress={handleQRScanner}
          activeOpacity={0.8}
        >
        <LinearGradient
          colors={['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.qrScannerButton}
        >
        <Ionicons name="qr-code" size={24} color="white" style={styles.qrIcon} />
        <Text style={styles.qrScannerButtonText}>Scan QR</Text>
        </LinearGradient>
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  form: {
    flex: 1,
    padding: 32,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
  },
  button: {
    borderRadius: 26,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  links: {
    alignItems: 'center',
    marginTop: 24,
    gap: 12,
  },
  linkText: {
    color: '#8650AB',
    fontSize: 14,
    fontWeight: '500',
  },
  linkBold: {
    fontWeight: 'bold',
  },
});