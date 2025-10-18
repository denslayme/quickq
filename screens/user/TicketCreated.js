import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TicketCreated({ route, navigation }) {
  const { officeName = 'Office', officeId } = route.params || {};
  const [showSuccessPopup, setShowSuccessPopup] = useState(true);

  const handleNotif = () => {
    console.log('Notif button pressed');
    navigation.navigate('NotifPage');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateAnother = () => {
    console.log('Create Another Ticket pressed');
    navigation.navigate('UserDashboard');
  };

  const handleViewTicket = () => {
    console.log('View Ticket Info pressed');
    navigation.navigate('TicketInfo');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>QR/Ticket</Text>
          <Text style={styles.headerSubtitle}>One-time Use Only</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={handleNotif}
        >
          <Ionicons name="notifications-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>

        {/* QR Code Box */}
        <View style={styles.qrCodeContainer}>
            <View style={styles.qrPlaceholder}>
              <Text style={styles.qrPlaceholderText}>QR CODE</Text>
            </View>
          

          {/* View Ticket Info Link */}
          <TouchableOpacity onPress={handleViewTicket} style={styles.viewTicketLinkContainer}>
            <Text style={styles.viewTicketLink}>View Ticket Info</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />

        {/* Create Another Ticket Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateAnother}>
          <Text style={styles.createButtonText}>Create Another Ticket</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Success Popup */}
      <Modal
        transparent={true}
        visible={showSuccessPopup}
        animationType="fade"
        onRequestClose={() => setShowSuccessPopup(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.popupContainer}>
            {/* Close Button */}
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setShowSuccessPopup(false)}
            >
              <Ionicons name="close" size={24} color="#374151" />
            </TouchableOpacity>

            {/* Success Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="checkmark-circle" size={60} color="#10b981" />
            </View>

            {/* Success Message */}
            <Text style={styles.successMessage}>
              Ticket/QR created successfully!
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
  },
  notificationButton: {
    position: 'absolute',
    right: 24,
    top: 16,
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 24,
    justifyContent: 'center',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  qrPlaceholder: {
    width: 345,
    height: 345,
    backgroundColor: '#8a2876ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrPlaceholderText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  viewTicketLinkContainer: {
    paddingVertical: 8,
  },
  viewTicketLink: {
    color: '#8A2D7F',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  spacer: {
    flex: 1,
    minHeight: 40,
  },
  createButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#8A2D7F',
    borderRadius: 26,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 5,
  },
  createButtonText: {
    color: '#78226eff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Popup Styles
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    backgroundColor: '#edededff',
    borderRadius: 20,
    padding: 32,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 4,
    zIndex: 1,
  },
  iconContainer: {
    marginBottom: 16,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: '600',
    color: '#33b300ff',
    textAlign: 'center',
  },
});