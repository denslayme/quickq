import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TicketCreated({ route, navigation }) {
  const { officeName = 'Office', officeId } = route.params || {};

  const handleNotif = () => {
    console.log('Notif button pressed');
    navigation.navigate('NotifPage');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateAnother = () => {
    console.log('Create Another Ticket pressed');
    navigation.navigate('OfficeClicked', {
      officeName: officeName,
      officeId: officeId
    });
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
          <View style={styles.qrCodeBox}>
            <View style={styles.qrPlaceholder}>
              <Text style={styles.qrPlaceholderText}>QR CODE</Text>
            </View>
          </View>

          {/* Success Message */}
          <View style={styles.successMessage}>
            <Text style={styles.successText}>Ticket/QR created successfully!</Text>
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
    marginBottom: 24,
  },
  qrCodeBox: {
    width: 220,
    height: 220,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  qrPlaceholder: {
    width: 180,
    height: 180,
    backgroundColor: '#8650AB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrPlaceholderText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  successMessage: {
    backgroundColor: '#d1fae5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  successText: {
    color: '#059669',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  viewTicketLinkContainer: {
    paddingVertical: 8,
  },
  viewTicketLink: {
    color: '#a855f7',
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
    borderColor: '#9333ea',
    borderRadius: 26,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#9333ea',
    fontSize: 15,
    fontWeight: '600',
  },
});