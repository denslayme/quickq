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
  };

  const handleViewTicket = () => {
    console.log('View Ticket Info pressed');
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
        <View style={styles.qrCodeBox}>
          <View style={styles.qrPlaceholder}>
            <Text style={styles.qrPlaceholderText}>QR CODE</Text>
          </View>
        </View>

        {/* Success Message */}
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Ticket/QR created successfully!</Text>
        </View>

        {/* Ticket Number */}
        <LinearGradient
          colors={['#c084fc', '#a855f7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.ticketNumberBox}
        >
          <Text style={styles.ticketNumber}>#Q042</Text>
        </LinearGradient>

        {/* Queue Info */}
        <View style={styles.queueInfoBox}>
          <Text style={styles.queueNumber}>4</Text>
          <Text style={styles.queueText}>People are ahead of you</Text>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={handleViewTicket}>
          <Text style={styles.buttonText}>View Ticket Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCreateAnother}>
          <Text style={styles.buttonText}>Create Another Ticket</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />
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
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 16,
    justifyContent: 'center',
  },
  qrCodeBox: {
    width: '100%',
    height: 240,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  successText: {
    color: '#059669',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  ticketNumberBox: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  ticketNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  queueInfoBox: {
    backgroundColor: '#e9d5ff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  queueNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a855f7',
  },
  queueText: {
    fontSize: 13,
    color: '#a855f7',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9333ea',
    borderRadius: 26,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#9333ea',
    fontSize: 15,
    fontWeight: '600',
  },
  spacer: {
    height: 20,
  },
});