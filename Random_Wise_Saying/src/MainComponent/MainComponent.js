/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import wise from './../../wise.json';
import WisdomComponent from './../WisdomComponent/WisdomComponent';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from '@react-native-firebase/admob';
// const adUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : 'ca-app-pub-8356725717508400/1561891319';
const adUnitId = 'ca-app-pub-8356725717508400/1561891319';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const MainComponent = () => {
  const [nowWise, setNowWise] = useState();
  const [count, setCount] = useState(1);

  const resetWise = () => {
    var nowWise = wise[getRandomInt(0, 100)];
    var nowWiseTexts = nowWise.message.split('.');
    var nowWiseText = nowWiseTexts.slice(0, 2).map((it) => it);
    var nowWiseAuthor = nowWise.author;
    var randomImg = `https://source.unsplash.com/random?time=${new Date().getTime()}`;
    setNowWise({
      text: nowWiseText,
      author: nowWiseAuthor,
      imgSrc: randomImg,
    });
  };

  const upCount = () => {
    setCount(count + 1);
  };

  const checkAd = () => {
    if (count > 5 && count % 10 === 0) {
      const interstitialAd = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
      });
      interstitialAd.onAdEvent((type, error) => {
        console.log('New advert event: ', type);
        if (type === AdEventType.LOADED) {
          // interstitialAd.show();
          interstitialAd.show();
          console.log('show');
        }
      });
      interstitialAd.load();
    }
  };

  const upCountLogic = async () => {
    console.log(count);
    await checkAd();
    resetWise();
  };

  useEffect(() => {
    resetWise();
  }, []);

  useEffect(() => {
    upCountLogic();
  }, [count]);

  return <WisdomComponent wise={nowWise} type={'Main'} refresh={upCount} />;
};

export default MainComponent;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
