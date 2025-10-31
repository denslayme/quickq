import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    navigation.navigate('AdminLogin');
  };

  const handleOfficePress = (office) => {
    navigation.navigate('AdminCounter', { 
      officeName: office.name,
      officeId: office.id 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>QuickQ</Text>
          <Text style={styles.headerSubtitle}>Click your Office Assigned</Text>
        </View>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
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

const HEADER_HEIGHT = 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerContent: {
    paddingTop: 20,
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
  scrollContainer: {
    flex: 1,
    paddingTop: HEADER_HEIGHT + 20,
    paddingHorizontal: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  officeCard: {
    width: '40%',
    alignItems: 'center',
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
  logoutContainer: {
    marginTop: 30,
    marginBottom: 60,
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
