import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AdminDashboard({ navigation }) {
  const offices = [
    { id: 1, name: 'Admission Office', image: require('../../assets/images/admission.png'), screen: 'AdmissionOffice' },
    { id: 2, name: 'Scholarship Office', image: require('../../assets/images/scholarship.png'), screen: 'ScholarshipOffice' },
    { id: 3, name: 'Office of Student Affairs', image: require('../../assets/images/osa.png'), screen: 'OSAOffice' },
    { id: 4, name: 'Office of the Registrar', image: require('../../assets/images/registrar.png'), screen: 'RegistrarOffice' },
    { id: 5, name: 'USTP International Affairs Office', image: require('../../assets/images/international.png'), screen: 'InternationalOffice' },
    { id: 6, name: 'Student Affairs and Services', image: require('../../assets/images/student-affairs.png'), screen: 'StudentAffairsOffice' },
    { id: 7, name: 'Programs and Monitoring Evaluation', image: require('../../assets/images/pme.png'), screen: 'PMEOffice' },
  ];

  const handleLogOut = () => {
    console.log('Log Out pressed');
    navigation.navigate('AdminLogin');
  };

  const handleOfficePress = (office) => {
    console.log('Selected office:', office.name);
    navigation.navigate('AdminCounter', { officeName: office.name, officeId: office.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header (not absolute — stays at top naturally) */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">QuickQ</Text>
          <Text style={styles.headerSubtitle} numberOfLines={1} ellipsizeMode="tail">Click your Office Assigned</Text>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
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
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 18 : 14, // keep a small top padding inside SafeArea
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#6b21a8',    // consistent fixed border
    alignItems: 'center',
    justifyContent: 'center',
    // subtle shadow/elevation so header visually separates from content
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 4 },
      android: { elevation: 4 },
    }),
  },
  headerContent: {
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#e9d5ff',
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    justifyContent: 'flex-start',
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
    borderWidth: 2,
    borderColor: '#6b21a8',          // consistent border style with header
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
