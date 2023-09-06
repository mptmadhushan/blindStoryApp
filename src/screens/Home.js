/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bgbew.jpeg')}>
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.height * 0.04,
          maxHeight: 50,
        }}>
        {/* <Image
          style={{
            width: 100,
            maxHeight: 50,
            resizeMode: 'contain',
          }}
          source={images.logo}
        /> */}
      </View>
      <View style={styles.overlay}>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Caption')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Icon name="graduation-cap" size={30} color={COLORS.white} />
              <Text style={styles.text001}>Caption</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detection')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Icon name="graduation-cap" size={30} color={COLORS.white} />
              <Text style={styles.text001}>Object Detection</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNorm}>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuizScreen')}
            style={styles.slide1}>
            <View style={styles.centerFlex}>
              <Icon name="graduation-cap" size={30} color={COLORS.white} />
              <Text style={styles.text001}>Navigation</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    marginTop: SIZES.height * 0.01,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    maxWidth: SIZES.width * 0.5,
    height: SIZES.width * 0.2,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.3,
    height: SIZES.height * 0.4,
    // alignItems: 'center',
  },
  title1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.height * 0.1,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
});
