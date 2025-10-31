import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform, StatusBar } from 'react-native';
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
    { id: 7, name: 'PME Office', image: require('../../assets/images/pme.png'), screen: 'PMEOffice' }
  ];

  const handleLogOut = () => navigation.navigate('UserLogin');
  const handleOfficePress = (office) => navigation.navigate('OfficeClicked', { officeName: office.name, officeId: office.id });
  const handleNotif = () => navigation.navigate('NotifPage');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

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
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
          <Ionicons name="notifications-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Offices */}
      <View style={styles.content}>
        {offices.reduce((rows, office, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(office);
          return rows;
        }, []).map((row, i) => (
          <View key={i} style={styles.gridRow}>
            {row.map((office) => (
              <TouchableOpacity key={office.id} style={styles.officeCard} onPress={() => handleOfficePress(office)}>
                <View style={styles.imageContainer}>
                  <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
                </View>
                <Text style={styles.officeName}>{office.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Log Out Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.LogOutButton} onPress={handleLogOut}>
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
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  notificationButton: {
    position: 'absolute',
    right: 28,
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 60,
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 32,
    backgroundColor: '#ffffff',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  officeCard: {
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
  },
  logoutContainer: {
    paddingBottom: 32,
  },
  LogOutButton: {
    borderWidth: 2,
    borderColor: '#8A2D7F',
    borderRadius: 26,
    paddingVertical: 16,
    alignItems: 'center',
  },
  LogOutButtonText: {
    color: '#78226e',
    fontSize: 16,
    fontWeight: '600',
  },
});
