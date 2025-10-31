import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

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

  const handleLogOut = () => {
    navigation.navigate('UserLogin');
  };

  const handleOfficePress = (office) => {
    navigation.navigate('OfficeClicked', { 
      officeName: office.name,
      officeId: office.id 
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
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            QuickQ
          </Text>
          <Text style={styles.headerSubtitle} numberOfLines={2} ellipsizeMode="tail">
            Choose an office in USTP-CDO
          </Text>
        </View>

        <TouchableOpacity style={styles.notificationButton} onPress={handleNotif}>
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
                <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
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
                <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
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
                <Image source={office.image} style={styles.officeImage} resizeMode="contain" />
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

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
    paddingTop: height * 0.05, // responsive padding for small phones
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: width * 0.75, // prevent text from hitting edges
  },
  headerTitle: {
    fontSize: width < 380 ? 30 : 36, // smaller font on small devices
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: width < 380 ? 13 : 15,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  notificationButton: {
    position: 'absolute',
    right: 20,
    top: height * 0.05,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  logoutContainer: {
    paddingHorizontal: 20,
    paddingBottom: 32,
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
    lineHeight: 18,
    flexWrap: 'wrap',
    width: 100,
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

