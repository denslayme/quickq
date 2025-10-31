import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Reserve horizontal space so title never touches notification icon
const NOTIF_AREA = 72; // px reserved on right
const HORIZONTAL_PADDING = 32; // same as header paddingHorizontal
const HEADER_CONTENT_MAX_WIDTH = width - NOTIF_AREA - HORIZONTAL_PADDING * 2;

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
  const handleOfficePress = (office) => navigation.navigate('OfficeClicked', { officeName: office.name, officeId: office.id });

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar for proper spacing on Android */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* HEADER */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        {/* Title wrapper is constrained with maxWidth so it never reaches the notif icon */}
        <View style={[styles.headerContent, { maxWidth: Math.max(HEADER_CONTENT_MAX_WIDTH, 120) }]}>
          <Text
            style={styles.headerTitle}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
          >
            QuickQ
          </Text>

          <Text
            style={styles.headerSubtitle}
            numberOfLines={2}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
          >
            Choose an office in USTP-CDO
          </Text>
        </View>

        {/* Notification icon — absolutely positioned visually but headerContent has reserved space */}
        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif} activeOpacity={0.8}>
          <Ionicons name="notifications-outline" size={26} color="#ffffff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        {/* grid: 3 columns. Cards have fixed width so long names wrap/shrink. */}
        <View style={styles.grid}>
          {offices.map((office) => (
            <TouchableOpacity
              key={office.id}
              style={styles.officeCard}
              onPress={() => handleOfficePress(office)}
              activeOpacity={0.8}
            >
              <View style={styles.imageContainer}>
                <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
              </View>

              <Text
                style={styles.officeName}
                numberOfLines={2}
                adjustsFontSizeToFit
                minimumFontScale={0.7}
              >
                {office.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.LogOutButton} onPress={handleLogOut} activeOpacity={0.8}>
            <Text style={styles.LogOutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const baseHeaderTop = Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 16 : 44;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  /* Header */
  header: {
    paddingTop: baseHeaderTop,
    paddingBottom: 20,
    paddingHorizontal: HORIZONTAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: width < 360 ? 28 : 32,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: width < 360 ? 12 : 14,
    color: '#e9d5ff',
    textAlign: 'center',
    marginTop: 4,
  },
  notificationButton: {
    position: 'absolute',
    right: HORIZONTAL_PADDING - 4,
    top: baseHeaderTop, // aligns with paddingTop
    padding: 6,
  },

  /* Main content */
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  /* grid layout */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // ensures even spacing
    marginBottom: 24,
  },

  /* each card */
  officeCard: {
    width: Math.min(120, (width - 40) / 3), // fixed-ish width per column, responsive
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 96,
    height: 96,
    borderRadius: 20,
    backgroundColor: '#8750abe7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  officeImage: {
    width: 64,
    height: 64,
  },
  officeName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    lineHeight: 18,
  },

  logoutContainer: {
    marginTop: 8,
    alignItems: 'center',
    paddingBottom: 32,
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

