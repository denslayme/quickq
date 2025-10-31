import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function APTicketInfo({ navigation, route }) {
  const ticketData = route?.params?.ticket || {
    ticketNumber: '#QN38',
    name: 'Dwayne Johnson',
    yearSection: 'IT-3R9',
    classification: 'Student',
    office: "Registrar's Office",
    service: 'Subject Sequencing & Retention'
  };

  const [isServed, setIsServed] = useState(false);

  const handleServe = () => {
    if (!isServed) {
      setIsServed(true);
      console.log('Ticket marked as served:', ticketData.ticketNumber);
    }
  };

  const handleQRScanner = () => {
    console.log('Opening QR Scanner');
    navigation.navigate('QRScanInterface');
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
          <Text style={styles.headerTitle}>Admin Panel</Text>
          <Text style={styles.headerSubtitle}>View Ticket Info</Text>
        </View>
      </LinearGradient>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={26} color="#000000" />
      </TouchableOpacity>

      {/* Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoCard}>
          {/* Ticket Header */}
          <View style={styles.ticketHeader}>
            <Text style={styles.ticketNumber}>{ticketData.ticketNumber}</Text>
            <TouchableOpacity 
              style={[styles.serveButton, isServed && styles.servedButton]}
              onPress={handleServe}
              disabled={isServed}
              activeOpacity={isServed ? 1 : 0.7}
            >
              <Text style={[styles.serveButtonText, isServed && styles.servedButtonText]}>
                {isServed ? 'Served' : 'Serve'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Ticket Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Name: <Text style={styles.infoValue}>{ticketData.name}</Text></Text>
            <Text style={styles.infoLabel}>Year & Section: <Text style={styles.infoValue}>{ticketData.yearSection}</Text></Text>
            <Text style={styles.infoLabel}>Customer Classification: <Text style={styles.infoValue}>{ticketData.classification}</Text></Text>
            <Text style={styles.infoLabel}>Office Chosen: <Text style={styles.infoValue}>{ticketData.office}</Text></Text>
            <Text style={styles.infoLabel}>Service Chosen/Concern: <Text style={styles.infoValue}>{ticketData.service}</Text></Text>
          </View>
        </View>
      </ScrollView>

      {/* QR Scanner Button */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleQRScanner} activeOpacity={0.8}>
          <LinearGradient
            colors={['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.qrButton}
          >
            <Ionicons name="qr-code" size={22} color="white" style={styles.qrIcon} />
            <Text style={styles.qrButtonText}>QR Scanner</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    paddingTop: 55,
    paddingBottom: 35,
    paddingHorizontal: 32,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8A2D7F',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#741865',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#374151',
  },
  serveButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  servedButton: {
    backgroundColor: '#d1d5db',
  },
  serveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  servedButtonText: {
    color: '#6b7280',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 16,
  },
  infoContainer: {
    gap: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    lineHeight: 20,
  },
  infoValue: {
    fontWeight: '400',
    color: '#1f2937',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 26,
  },
  qrButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  qrIcon: {
    marginRight: 8,
  },
});
