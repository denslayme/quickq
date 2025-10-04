import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ViewTicketServed({ route, navigation }) {
  const { officeName = 'Admin Panel', officeId } = route.params || {};
  
  // Sample ticket data - replace with actual data from your backend
  const ticketData = {
    queueNumber: 'Q058',
    name: 'Dwayne Johnson',
    yearSection: 'H4R9',
    classification: 'Student',
    office: 'Registrar\'s Office',
    service: 'Subject Sequencing & Retention',
  };

  const handleNotif = () => {
    console.log('Notif button pressed');
    navigation.navigate('NotifPage');
  };

  const handleBack = () => {
    navigation.goBack();
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
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{officeName}</Text>
          <Text style={styles.headerSubtitle}>Manage Queue</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Queue Details</Text>

        {/* Queue Details Card */}
        <View style={styles.detailsCard}>
          {/* Queue Number and Serve Button */}
          <View style={styles.queueHeader}>
            <Text style={styles.queueNumber}>#{ticketData.queueNumber}</Text>
            <TouchableOpacity style={styles.serveButton}>
              <Text style={styles.serveButtonText}>Serve</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Customer Details */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name:</Text>
            <Text style={styles.detailValue}>{ticketData.name}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Year & Section:</Text>
            <Text style={styles.detailValue}>{ticketData.yearSection}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Customer Classification:</Text>
            <Text style={styles.detailValue}>{ticketData.classification}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Office Chosen:</Text>
            <Text style={styles.detailValue}>{ticketData.office}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Service Chosen/Concern:</Text>
            <Text style={styles.detailValue}>{ticketData.service}</Text>
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

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
  scrollContent: {
    paddingBottom: 32,
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
  detailsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 20,
  },
  queueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  queueNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  serveButton: {
    backgroundColor: '#4ade80',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  serveButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 16,
  },
  detailRow: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#4b5563',
  },
  spacer: {
    flex: 1,
    minHeight: 100,
  },
  qrScannerButton: {
    backgroundColor: '#9333ea',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  qrScannerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});