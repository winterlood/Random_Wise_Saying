/* eslint-disable prettier/prettier */
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
  Image,
} from 'react-native';

const WisdomComponent = ({wise, type, refresh}) => {
  const [renderRefresh, setRenderRefresh] = useState(false);
  useEffect(() => {
    console.log('new Wise');
    setRenderRefresh(false);
    setInterval(() => {
      setRenderRefresh(true);
    }, 2000);
  }, [wise]);
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width: '100%', height: '100%'}} //View를 꽉채우도록
        source={{
          uri: wise?.imgSrc,
        }} //이미지경로
        resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택
      >
        <View style={styles.container}>
          <View style={styles.centerDiv}>
            <Text style={styles.wiseText}> {wise?.text}</Text>
            <Text></Text>
            <Text style={styles.wiseAuthor}> - {wise?.author} -</Text>
          </View>
          {type === 'Main' && renderRefresh ? (
            <View>
              <TouchableOpacity
                style={styles.refershDiv}
                onPress={() => {
                  setRenderRefresh(false);
                  refresh();
                }}>
                <Image
                  source={require('./refresh.png')}
                  style={styles.refreshIcon}
                />
                <Text style={styles.refershText}>다음으로 넘어가기</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
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
    backgroundColor: 'rgba( 0, 0, 0, 0.65 )',
  },
  wiseText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  wiseAuthor: {
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  refershDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 30,
  },
  refreshIcon: {
    width: 20,
    height: 20,
    marginBottom: 10,
    opacity: 0.8,
  },
  refershText: {
    color: 'rgb(245,245,245)',
    opacity: 0.8,
  },
});

export default WisdomComponent;
