import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function OfficeClicked({ route, navigation }) {
  const { officeName, officeId } = route.params || {};
  
  // Office data
  const officeData = {
    name: officeName || 'Office of the Student Affairs',
    address: "2nd Floor, New Medical Bldg. Educators' St.",
    services: ['Student ID concerns', 'ers', 'ersers']
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateTicket = () => {
    navigation.navigate('TicketCreated', {
      officeName,
      officeId
    });
  };

  const handleNotif = () => {
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
        <Text style={styles.headerTitle} numberOfLines={1}>
          {officeName || 'Office Info'}
        </Text>
        <Text style={styles.headerSubtitle}>
          Details and Services
        </Text>

        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={handleNotif}
          activeOpacity={0.7}
        >
          <Ionicons name="notifications-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
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
          activeOpacity={0.7}
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
      </ScrollView>

      {/* Create Ticket Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.createTicketButton}
          onPress={handleCreateTicket}
          activeOpacity={0.8}
        >
          <Text style={styles.createTicketButtonText}>Create Ticket / QR Code</Text>
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
    justifyContent: 'center', // ✅ Center vertically
    alignItems: 'center',     // ✅ Center horizontally
    width: '100%',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  notificationButton: {
    position: 'absolute',
    right: 32,
    top: 60,
    padding: 6,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 16,
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
    borderColor: '#8A2D7F',
    padding: 16,
    marginBottom: 35,
  },
  infoRow: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 20,
  },
  servicesList: {
    marginTop: 4,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  bullet: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 8,
    lineHeight: 20,
  },
  serviceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 63,
    left: 24,
    right: 24,
  },
  createTicketButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#8A2D7F',
    borderRadius: 26,
    paddingVertical: 14,
    alignItems: 'center',
  },
  createTicketButtonText: {
    color: '#78226eff',
    fontSize: 16,
    fontWeight: '600',
  },
});
