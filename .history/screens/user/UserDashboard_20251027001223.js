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


