/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {RNCamera} from 'react-native-camera';
// import {BASE_URL} from '../../Config/index';
// import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'react-native-image-picker';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../components/Loader';

const MainScreen = ({routes, navigation}) => {
  let camera;
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = React.useState(false);

  async function takePicture() {
    navigation.navigate('DetectionRes');
    setLoading(true);
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        // orientation: 'landscape',
        // forceUpOrientation: true,
        // fixOrientation: true,
      };
      const data = await camera.takePictureAsync(options);
      const baseImage = data.base64;
      console.log('hello camera');
      let formData = new FormData();

      formData.append('image', {
        uri: data.uri,
        type: 'image/jpg',
        name: 'image.jpg',
      });
      fetch('http://127.0.0.1:5000/api/detection', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => response.json())
        .then(response => {
          console.log(
            '🚀 ~ file: PlantUpload.js:95 ~ takePicture ~ response:',
            response,
          );
          const resData = {
            result: response.data.objects_detected,
          };
          console.log('response 🔥', resData.result);
          navigation.navigate('Result', {resData});
        })
        .catch(err => console.error(err));
    }
  }
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response.assets[0].uri);
      const imageUrl = response.assets[0].uri;
      setLoading(true);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let formData = new FormData();
        formData.append('image', {
          uri: response.assets[0].uri,
          type: 'image/jpg',
          name: 'image.jpg',
        });
        fetch('http://127.0.0.1:5000/api/detection', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
          .then(response => response.json())
          .then(response => {
            const resData = {
              result: response,
            };
            console.log('response 🔥', resData);
            console.log(resData);
            setLoading(false);
            navigation.navigate('DetectionRes', {resData});
          })
          .catch(err => console.error(err));
      }
    });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: SIZES.height * 0.8,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Loader loading={loading} />
        {/* <View style={{width: '100%', height: SIZES.height * 0.8}}> */}
        <RNCamera
          ref={ref => (camera = ref)}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        {/* </View> */}
      </View>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.third]}
        style={styles.overlay}>
        <View style={styles.rowFlex}>
          <TouchableOpacity onPress={() => takePicture()} style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>Capture</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowFlex}>
          <TouchableOpacity
            onPress={() => launchImageLibrary()}
            style={styles.slide2}>
            <View style={styles.centerFlex}>
              <Text style={styles.text001}>upload</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  overlay: {
    marginTop: -SIZES.height * 0.2,
    height: SIZES.height * 0.7,
    flex: 1,
  },
  rowFlex: {
    height: SIZES.height * 0.1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: COLORS.black,
  },
  slide1: {
    backgroundColor: COLORS.third,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    maxHeight: SIZES.width * 0.15,
  },
  slide2: {
    backgroundColor: COLORS.third,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.1,
  },
});
