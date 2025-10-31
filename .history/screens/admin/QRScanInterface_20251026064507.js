import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function QRScanInterface({ navigation }) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR scan
    setTimeout(() => {
      setIsScanning(false);
      Alert.alert(
        'QR Code Scanned',
        'Ticket validated successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('TicketServedInfo')
          }
        ]
      );
    }, 2000);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
        colors={['#8A2D7F', '#8650AB', '#8372D8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Admin Panel</Text>
        <Text style={styles.headerSubtitle}>Scan QR Code</Text>
      </LinearGradient>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <Ionicons name="chevron-back" size={24} color="#000000" />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>

      {/* QR Scanner Frame */}
        <View style={styles.scannerContainer}>
          <View style={styles.scannerFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
            
            {isScanning && (
              <View style={styles.scanLine} />
            )}
            
            <Ionicons 
              name="qr-code-outline" 
              size={120} 
              color="#9333ea" 
              style={styles.qrIcon}
            />
          </View>
        </View>

        <Text style={styles.instruction}>
          {isScanning ? 'Scanning...' : 'Position QR code within the frame'}
        </Text>

        {/* Scan Button */}
<TouchableOpacity 
  onPress={handleScan}
  disabled={isScanning}
  activeOpacity={0.8}
>
  <LinearGradient
    colors={isScanning ? ['#a855f7', '#c084fc'] : ['#8a2d7fbd', '#8750abc2', '#8372d8b8']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }} 
    style={[styles.scanButton, isScanning && styles.scanButtonDisabled]}
  >
    <Ionicons 
      name={isScanning ? "hourglass-outline" : "scan-outline"} 
      size={24} 
      color="white" 
      style={styles.buttonIcon}
    />
    <Text style={styles.scanButtonText}>
      {isScanning ? 'Scanning...' : 'Start Scan'}
    </Text>
  </LinearGradient>
</TouchableOpacity>
        

        {/* Info */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle-outline" size={20} color="#6b7280" />
          <Text style={styles.infoText}>
            Scan the customer's ticket QR code to verify and serve
          </Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  backButton: {
    width: 45,
    height: 45,
    alignItems: 'flex-start',
    marginTop: 2,
    marginLeft: 4,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerContainer: {
    marginBottom: 32,
  },
  scannerFrame: {
    width: 280,
    height: 280,
    backgroundColor: '#f9fafb',
    borderRadius: 24,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#8a2d7f',
  },
  topLeft: {
    top: 12,
    left: 12,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 8,
  },
  topRight: {
    top: 12,
    right: 12,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 8,
  },
  bottomLeft: {
    bottom: 12,
    left: 12,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 8,
  },
  bottomRight: {
    bottom: 12,
    right: 12,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 8,
  },
  scanLine: {
    position: 'absolute',
    top: '50%',
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: '#8a2d7f',
  },
  qrIcon: {
    opacity: 0.3,
  },
  instruction: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  scanButton: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  scanButtonDisabled: {
    opacity: 0.7,
  },
  buttonIcon: {
    marginRight: 8,
  },
  scanButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
    flex: 1,
  },
});