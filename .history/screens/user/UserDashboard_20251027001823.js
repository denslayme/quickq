import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserDashboard({ navigation }) {
  const offices = [
    { id: 1, name: 'Admission Office', image: require('../../assets/images/admission.png'), screen: 'AdmissionOffice' },
    { id: 2, name: 'Scholarship Office', image: require('../../assets/images/scholarship.png'), screen: 'ScholarshipOffice' },
    { id: 3, name: 'Office of Student Affairs', image: require('../../assets/images/osa.png'), screen: 'OSAOffice' },
    { id: 4, name: 'Office of the Registrar', image: require('../../assets/images/registrar.png'), screen: 'RegistrarOffice' },
    { id: 5, name: 'USTP International Affairs Office', image: require('../../assets/images/international.png'), screen: 'InternationalOffice' },
    { id: 6, name: 'Student Affairs and Services', image: require('../../assets/images/student-affairs.png'), screen: 'StudentAffairsOffice' },
    { id: 7, name: 'PME Office', image: require('../../assets/images/pme.png'), screen: 'PMEOffice' },
  ];

  const handleLogOut = () => {
    console.log('Log Out pressed');
    navigation.navigate('UserLogin');
  };

  const handleOfficePress = (office) => {
    console.log('Selected office:', office.name);
    navigation.navigate('OfficeClicked', { 
      officeName: office.name,
      officeId: office.id 
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

      {/* Scrollable Office Grid */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {offices.map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.7}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={office.image} 
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* ✅ Fixed Header Layout */
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  notificationButton: {
    position: 'absolute',
    right: 24,
    top: 60,
    padding: 4,
  },

  /* ✅ Content Area */
  scrollContainer: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
  },
  officeCard: {
    alignItems: 'center',
    width: 110,
    marginBottom: 24,
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

  /* ✅ Logout Button */
  logoutContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  LogOutButton: {
    borderWidth: 2,
    borderColor: '#8A2D7F',
    borderRadius: 26,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  LogOutButtonText: {
    color: '#78226e',
    fontSize: 16,
    fontWeight: '600',
  },
});

