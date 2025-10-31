import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserDashboard({ navigation }) {
  const offices = [
    { id: 1, name: 'Admission Office', image: require('../../assets/images/admission.png') },
    { id: 2, name: 'Scholarship Office', image: require('../../assets/images/scholarship.png') },
    { id: 3, name: 'Office of Student Affairs', image: require('../../assets/images/osa.png') },
    { id: 4, name: 'Office of the Registrar', image: require('../../assets/images/registrar.png') },
    { id: 5, name: 'USTP International Affairs Office', image: require('../../assets/images/international.png') },
    { id: 6, name: 'Student Affairs and Services', image: require('../../assets/images/student-affairs.png') },
    { id: 7, name: 'PME Office', image: require('../../assets/images/pme.png') },
  ];

  const handleLogOut = () => navigation.navigate('UserLogin');
  const handleNotif = () => navigation.navigate('NotifPage');
  const handleOfficePress = (office) =>
    navigation.navigate('OfficeClicked', { officeName: office.name, officeId: office.id });

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle} numberOfLines={1} adjustsFontSizeToFit>
            QuickQ
          </Text>
          <Text style={styles.headerSubtitle} numberOfLines={1} adjustsFontSizeToFit>
            Choose an office in USTP-CDO
          </Text>
        </View>

        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
          <Ionicons name="notifications-outline" size={28} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <View style={styles.grid}>
          {offices.map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.7}
            >
              <View style={styles.imageContainer}>
                <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* LOG OUT BUTTON */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.LogOutButton} onPress={handleLogOut}>
            <Text style={styles.LogOutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* ✅ STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* HEADER */
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e9d5ff',
    textAlign: 'center',
    marginTop: 4,
  },
  notificationButton: {
    position: 'absolute',
    right: 28,
    top: 55,
    padding: 4,
  },

  /* CONTENT */
  content: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
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

  /* LOGOUT BUTTON */
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
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  LogOutButtonText: {
    color: '#78226e',
    fontSize: 16,
    fontWeight: '600',
  },
});
