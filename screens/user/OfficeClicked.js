import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function OfficeClicked({ route, navigation }) {
  const { officeName, officeId } = route.params || {};
  
  // Office data - you can expand this based on the office selected
  const officeData = {
    name: officeName || 'Office of the Student Affairs',
    address: '2nd Floor, New Medical bldg. Educators\' St.',
    services: [
      'Student ID concerns',
      'ers',
      'ersers'
    ]
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateTicket = () => {
    console.log('Create Ticket/QR code pressed');
    // Navigate to create ticket screen
    navigation.navigate('CreateTicket', {
      officeName: officeName,
      officeId: officeId
    });
  };

  const handleNotif = () => {
  console.log('Notif button pressed');
  navigation.navigate('NotifPage');
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>({officeName})</Text>
        <TouchableOpacity 
                  style={styles.notificationButton}
                  onPress={handleNotif}
                >
                  <Ionicons name="notifications-outline" size={28} color="#ffffff" />
                </TouchableOpacity>
      </View>
      </LinearGradient>

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

        {/* Office Info Section */}
        <Text style={styles.sectionTitle}>Office Info</Text>

        <View style={styles.infoCard}>
          {/* Name */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{officeData.name}</Text>
          </View>

          {/* Address */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoValue}>{officeData.address}</Text>
          </View>

          {/* Services Catered */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Services Catered:</Text>
            <View style={styles.servicesList}>
              {officeData.services.map((service, index) => (
                <View key={index} style={styles.serviceItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.serviceText}>{service}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Create Ticket Button */}
        <TouchableOpacity 
          style={styles.createTicketButton}
          onPress={handleCreateTicket}
        >
          <Text style={styles.createTicketButtonText}>Create Ticket/QR code</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  notificationButton: {
    padding: 4,
    marginTop: 4,
    position: 'absolute',
    right: 32,
    top: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 32,
    flexGrow: 1,
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
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 20,
  },
  infoRow: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 22,
  },
  servicesList: {
    marginTop: 4,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 8,
    lineHeight: 22,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    lineHeight: 22,
  },
  spacer: {
    flex: 1,
    minHeight: 100,
  },
  createTicketButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9333ea',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  createTicketButtonText: {
    color: '#9333ea',
    fontSize: 16,
    fontWeight: '600',
  },
});