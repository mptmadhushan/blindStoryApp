import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  // const {resData} = route.params;
  // const result = {
    
  // };
    // Function to speak the detected objects
    const speakObjects = () => {
      if (result.objects_detected) {
        result.objects_detected.forEach((item, index) => {
          // Delay the speech of each object to make it more natural
          setTimeout(() => {
            Tts.speak(item);
          }, index * 1000); // Adjust the delay as needed
        });
      }
    };
    useEffect(() => {
      Tts.setDefaultRate(0.5);
      Tts.setDefaultPitch(1.0);
      Tts.setDefaultLanguage('en-US');
    }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bgbew.jpeg')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        {/* <Text style={styles.title2}>{result.name}</Text> */}
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
          <Text style={styles.title}>Caption</Text>
          <Text style={styles.des} key={list.index}>
                {/* {resData} */}
              </Text>
          {/* {result.objects_detected &&
            result.objects_detected.map(list => (
              <Text style={styles.des} key={list.index}>
                {list}
              </Text>
            ))} */}

          {/* // ))} */}
        </View>
        <TouchableOpacity
          onPress={() => {
            speakObjects(); // Speak the detected objects when the button is pressed
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Speak</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.2,
    height: SIZES.height * 0.8,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    borderRadius: 50,
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: 'white',
  },
  title2: {
    // marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
