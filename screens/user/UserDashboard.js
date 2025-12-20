import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { supabase } from '../../config/supabase';

export default function UserDashboard({ navigation, route }) {
  const { userId, userName } = route.params || {};
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Office images mapping
  const officeImages = {
    'Admission Office': require('../../assets/images/admission.png'),
    'Scholarship Office': require('../../assets/images/scholarship.png'),
    'Office of Student Affairs': require('../../assets/images/osa.png'),
    'Office of the Registrar': require('../../assets/images/registrar.png'),
    'USTP International Affairs Office': require('../../assets/images/international.png'),
    'Student Affairs and Services': require('../../assets/images/student-affairs.png'),
    'Planning, Monitoring and Evaluation Office': require('../../assets/images/pme.png')
  };

  useEffect(() => {
    loadOffices();
  }, []);

  const loadOffices = async () => {
    try {
      const { data, error } = await supabase
        .from('offices')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      
      setOffices(data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Failed to load offices');
    }
  };

  const handleLogOut = async () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          onPress: async () => {
            try {
              console.log('Logging out...');
              const { error } = await supabase.auth.signOut();
              if (error) {
                console.error('Logout error:', error);
                Alert.alert('Error', 'Failed to logout: ' + error.message);
              } else {
                console.log('Logout successful');
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Home' }],
                });
              }
            } catch (err) {
              console.error('Logout exception:', err);
              Alert.alert('Error', 'Failed to logout');
            }
          }
        }
      ]
    );
  };

  const handleOfficePress = (office) => {
    navigation.navigate('OfficeClicked', { 
      officeName: office.name,
      officeId: office.id,
      userId: userId
    });
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
            <Text style={styles.headerTitle}>QuickQ</Text>
            <Text style={styles.headerSubtitle}>Choose an office in USTP-CDO</Text>
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
          <Text style={styles.headerTitle}>QuickQ</Text>
          <Text style={styles.headerSubtitle}>Choose an office in USTP-CDO</Text>
        </View>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={handleNotif}
        >
          <Ionicons name="notifications-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Office Grid */}
      <View style={styles.content}>
        <View style={styles.gridRow}>
          {offices.slice(0, 3).map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.7}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={officeImages[office.name]} 
                  style={styles.officeImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.gridRow}>
          {offices.slice(3, 6).map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.7}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={officeImages[office.name]} 
                  style={styles.officeImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.gridRow}>
          {offices.slice(6).map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.7}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={officeImages[office.name]} 
                  style={styles.officeImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.LogOutButton}
            onPress={handleLogOut}
          >
            <Text style={styles.LogOutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 40,
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
    marginTop: 4,
    position: 'absolute',
    right: 32,
    top: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 32,
    justifyContent: 'space-between',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  logoutContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  officeCard: {
    flex: 1,
    alignItems: 'center',
    maxWidth: 110,
  },
  imageContainer: {
    width: 96,
    height: 96,
    backgroundColor: '#8750abe7',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  officeImage: {
    width: 64,
    height: 64,
  },
  officeName: {
    fontSize: 13,
    color: '#374151',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 18,
  },
  LogOutButton: {
    borderWidth: 2,
    borderColor: '#8A2D7F',
    borderRadius: 26,
    paddingVertical: 16,
    alignItems: 'center',
  },
  LogOutButtonText: {
    color: '#78226eff',
    fontSize: 16,
    fontWeight: '600',
  },
});