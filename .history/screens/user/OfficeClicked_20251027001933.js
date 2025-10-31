import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function OfficeClicked({ route, navigation }) {
  const { officeName, officeId } = route.params || {};

  const officeData = {
    name: officeName || 'Office of the Student Affairs',
    address: "2nd Floor, New Medical bldg. Educators' St.",
    services: [
      'Student ID concerns',
      'ers',
      'ersers',
    ],
  };

  const handleBack = () => navigation.goBack();
  const handleCreateTicket = () => {
    navigation.navigate('TicketCreated', { officeName, officeId });
  };
  const handleNotif = () => navigation.navigate('NotifPage');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
          <Ionicons name="chevron-back" size={26} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.headerTitle}>
            {officeName || 'Office of the Student Affairs'}
          </Text>
        </View>

        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
          <Ionicons name="notifications-outline" size={26} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Office Info</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{officeData.name}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Address:</Text>
            <Text style={styles.infoValue}>{officeData.address}</Text>
          </View>

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
        <TouchableOpacity style={styles.createTicketButton} onPress={handleCreateTicket}>
          <Text style={styles.createTicketButtonText}>Create Ticket/QR code</Text>
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
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    padding: 8,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  notificationButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
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
    color: '#78226e',
    fontSize: 16,
    fontWeight: '600',
  },
});
