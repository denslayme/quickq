import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TicketInfo({ navigation }) {

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
          <Text style={styles.headerTitle}>Ticket Info</Text>
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
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>

        {/* Ticket Number Box */}
        <LinearGradient
          colors={['#c084fc', '#a855f7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.ticketNumberBox}
        >
          <Text style={styles.ticketNumber}>#Q042</Text>
        </LinearGradient>

        {/* Queue Info Box */}
        <View style={styles.queueInfoBox}>
          <Text style={styles.queueNumber}>4</Text>
          <Text style={styles.queueText}>People are ahead of you</Text>
        </View>

        <View style={styles.spacer} />

        {/* Create Another Ticket Button */}
        <TouchableOpacity 
          style={styles.createButton}
          onPress={handleCreateAnother}
        >
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
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 32,
    justifyContent: 'center',
  },
  ticketNumberBox: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  ticketNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  queueInfoBox: {
    backgroundColor: '#e9d5ff',
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  queueNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#a855f7',
  },
  queueText: {
    fontSize: 14,
    color: '#a855f7',
    marginTop: 8,
    fontWeight: '500',
  },
  spacer: {
    flex: 1,
    minHeight: 80,
  },
  createButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9333ea',
    borderRadius: 26,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#9333ea',
    fontSize: 15,
    fontWeight: '600',
  },
});