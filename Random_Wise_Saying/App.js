import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import wise from './wise.json';
const image = {uri: 'https://reactjs.org/logo-og.png'};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
const App = () => {
  const [state, setState] = useState();
  const refresh = () => {
    var nowWise = wise[getRandomInt(0, 100)];
    var nowWiseTexts = nowWise.message.split('.');
    var nowWiseText = nowWiseTexts.slice(0, 2).map((it) => it);
    var nowWiseAuthor = nowWise.author;
    var randomImg = `https://source.unsplash.com/random?time=${new Date().getTime()}`;
    setState({
      text: nowWiseText,
      author: nowWiseAuthor,
      imgSrc: randomImg,
    });
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width: '100%', height: '100%'}} //View를 꽉채우도록
        source={{
          uri: state?.imgSrc,
        }} //이미지경로
        resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택
      >
        <View style={styles.container}>
          <View style={styles.centerDiv}>
            <Text style={{color: 'white'}}> {state?.text}</Text>
            <Text></Text>
            <Text style={{color: 'white'}}> {state?.author}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => refresh()}>
              <Text style={{color: 'white'}}>REFRESH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.4 )',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
