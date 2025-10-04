import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function APTicketInfo({ navigation }) {

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
             <Text style={styles.headerTitle}>Ticket Info</Text>
             <Text style={styles.headerSubtitle}>One-time Use Only</Text>
           </View>
         <TouchableOpacity 
           style={styles.notificationButton}
           onPress={handleNotif}
         >
           <Ionicons name="notifications-outline" size={28} color="#ffffff" />
         </TouchableOpacity>
       </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
});