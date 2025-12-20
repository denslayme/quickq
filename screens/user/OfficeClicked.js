import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../../config/supabase';

export default function OfficeClicked({ route, navigation }) {
  const { officeName, officeId, userId } = route.params || {};
  const [office, setOffice] = useState(null);
  const [waitingCount, setWaitingCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    loadOfficeDetails();
  }, []);

  const loadOfficeDetails = async () => {
    try {
      // Get office details
      const { data: officeData, error: officeError } = await supabase
        .from('offices')
        .select('*')
        .eq('id', officeId)
        .single();

      if (officeError) throw officeError;
      setOffice(officeData);

      // Get waiting tickets count
      const { data: ticketsData, error: ticketsError } = await supabase
        .from('tickets')
        .select('id', { count: 'exact' })
        .eq('office_id', officeId)
        .eq('status', 'waiting');

      if (ticketsError) throw ticketsError;
      setWaitingCount(ticketsData?.length || 0);

      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to load office details');
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateTicket = async () => {
    Alert.alert(
      'Create Ticket',
      `Do you want to get a ticket for ${officeName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: createTicket
        }
      ]
    );
  };

  const createTicket = async () => {
    setCreating(true);

    try {
      console.log('=== CREATING TICKET ===');
      console.log('User ID:', userId);
      console.log('Office ID:', officeId);
      console.log('Office Name:', officeName);

      // Get next queue number
      console.log('Getting next queue number...');
      const { data: queueData, error: queueError } = await supabase
        .rpc('get_next_queue_number', { p_office_id: officeId });

      console.log('Queue number result:', queueData, queueError);

      if (queueError) {
        console.error('Queue number error:', queueError);
        throw new Error('Failed to get queue number: ' + queueError.message);
      }

      const queueNumber = queueData || 1;
      console.log('Queue number:', queueNumber);

      // Create ticket
      console.log('Inserting ticket...');
      const { data: ticketData, error: ticketError } = await supabase
        .from('tickets')
        .insert([{
          user_id: userId,
          office_id: officeId,
          queue_number: queueNumber,
          status: 'waiting'
        }])
        .select()
        .single();

      console.log('Ticket insert result:', ticketData, ticketError);

      if (ticketError) {
        console.error('Ticket creation error:', ticketError);
        throw new Error('Failed to create ticket: ' + ticketError.message);
      }

      setCreating(false);

      console.log('✅ Ticket created successfully!');
      console.log('Ticket ID:', ticketData.id);
      console.log('Queue Number:', queueNumber);

      // Navigate to ticket created page
      navigation.navigate('TicketCreated', {
        ticketId: ticketData.id,
        queueNumber: queueNumber,
        officeName: officeName,
        officeId: officeId
      });

    } catch (error) {
      setCreating(false);
      console.error('=== TICKET CREATION ERROR ===');
      console.error('Error:', error.message);
      console.error('Full error:', error);
      Alert.alert('Error', error.message || 'Failed to create ticket');
    }
  };

  const handleNotif = () => {
    navigation.navigate('NotifPage', { userId });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#8A2D7F', '#8650AB', '#8372D8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{officeName}</Text>
          </View>
        </LinearGradient>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#8A2D7F" />
        </View>
      </SafeAreaView>
    );
  }

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
          <Text style={styles.headerTitle}>{officeName}</Text>
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
            <Text style={styles.infoValue}>{office?.name}</Text>
          </View>

          {/* Description */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Services:</Text>
            <Text style={styles.infoValue}>{office?.description}</Text>
          </View>

          {/* Queue Info */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>People Waiting:</Text>
            <Text style={styles.infoValue}>{waitingCount} {waitingCount === 1 ? 'person' : 'people'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Available Counters:</Text>
            <Text style={styles.infoValue}>{office?.counter_count || 1}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Estimated Wait:</Text>
            <Text style={styles.infoValue}>
              {waitingCount * 5}-{waitingCount * 10} minutes
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Create Ticket Button - Absolute positioned */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.createTicketButton}
          onPress={handleCreateTicket}
          disabled={creating}
        >
          {creating ? (
            <ActivityIndicator color="#78226eff" />
          ) : (
            <Text style={styles.createTicketButtonText}>Create Ticket/QR code</Text>
          )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    minHeight: 420,
    width: '100%',
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