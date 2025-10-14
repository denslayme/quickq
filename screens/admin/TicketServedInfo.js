import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TicketServedInfo({ navigation }) {
  // Sample ticket data (would come from QR scan in real app)
  const ticketData = {
    ticketNumber: 'A-042',
    customerName: 'Juan Dela Cruz',
    service: 'Document Request',
    office: 'Office of the Registrar',
    queueTime: '10:30 AM',
    servedTime: '11:15 AM',
    waitTime: '45 minutes',
    status: 'Served',
    date: 'October 4, 2025'
  };

  const handleComplete = () => {
    navigation.navigate('AdminDashboard');
  };

  const handleQRScanner = () => {
    console.log('Opening QR Scanner');
    navigation.navigate('QRScanInterface');
  };

  const handleBack = () => {
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSubtitle}>View Ticket Served Info</Text>
      </LinearGradient>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

       <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.ticketNumberCard}
      >
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSubtitle}>View Ticket Served Info</Text>
      </LinearGradient>

      {/* Back Button */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={handleBack}
              >
                <Ionicons name="chevron-back" size={24} color="#000000" />
              </TouchableOpacity>

        {/* Status Badge */}
        <View style={styles.statusContainer}>
          <View style={styles.statusBadge}>
            <Ionicons name="checkmark-circle" size={24} color="#10b981" />
            <Text style={styles.statusText}>{ticketData.status}</Text>
          </View>
        </View>

        {/* Ticket Number */}
        <LinearGradient
          colors={['#8A2D7F', '#8650AB', '#8372D8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        style={styles.ticketNumberCard}
        >
          <Text style={styles.ticketLabel}>Ticket Number</Text>
          <Text style={styles.ticketNumber}>{ticketData.ticketNumber}</Text>
        </LinearGradient>

        {/* Customer Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Information</Text>
          
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>{ticketData.customerName}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="briefcase-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Service Requested</Text>
              <Text style={styles.infoValue}>{ticketData.service}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="business-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Office</Text>
              <Text style={styles.infoValue}>{ticketData.office}</Text>
            </View>
          </View>
        </View>

        {/* Time Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time Information</Text>
          
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="calendar-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>{ticketData.date}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="time-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Queue Time</Text>
              <Text style={styles.infoValue}>{ticketData.queueTime}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="checkmark-done-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Served Time</Text>
              <Text style={styles.infoValue}>{ticketData.servedTime}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="hourglass-outline" size={20} color="#9333ea" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Wait Time</Text>
              <Text style={styles.infoValue}>{ticketData.waitTime}</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
          <Ionicons name="checkmark-circle-outline" size={24} color="white" />
          <Text style={styles.completeButtonText}>Complete & Return</Text>
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
              style={styles.scanAnotherButton}
            >
              <Ionicons name="qr-code" size={24} color="white" style={styles.qrIcon} />
              <Text style={styles.scanAnotherButtonText}>Scan Another QR</Text>
            </LinearGradient>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
   backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1fae5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10b981',
    marginLeft: 8,
  },
  ticketNumberCard: {
    padding: 24,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 24,
  },
  ticketLabel: {
    fontSize: 14,
    color: '#e9d5ff',
    marginBottom: 8,
  },
  ticketNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f3e8ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  completeButton: {
    backgroundColor: '#10b981',
    borderRadius: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  scanAnotherButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 22,
  },
  scanAnotherButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  qrIcon: {
    marginRight: 8,
  },
});