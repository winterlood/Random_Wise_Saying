/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

import wise from './../../wise.json';
import WisdomComponent from './../WisdomComponent/WisdomComponent';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const BodyComponent = () => {
  const [nowList, setNowList] = useState([]);

  const insertNewList = () => {
    var nowListCopy = nowList.slice();
    for (var i = 0; i < 20; i++) {
      var nowWise = wise[getRandomInt(0, 100)];
      var nowWiseTexts = nowWise.message.split('.');
      var nowWiseText = nowWiseTexts.slice(0, 2).map((it) => it);
      var nowWiseAuthor = nowWise.author;
      var randomImg = `https://source.unsplash.com/random?idx=${i}`;
      nowListCopy.push({
        text: nowWiseText,
        author: nowWiseAuthor,
        imgSrc: randomImg,
      });
    }
    setNowList(nowListCopy);
  };

  useEffect(() => {
    insertNewList();
  }, []);
  if (nowList?.length !== 0) {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} showsPagination={true}>
        {nowList?.map((it, idx) => (
          <View key={idx} style={styles.slide1}>
            <WisdomComponent wise={it} idx={idx} />
          </View>
        ))}
      </Swiper>
    );
  } else {
    return <Text>Loading...</Text>;
  }
  // return <WisdomComponent wise={wise} />;
};

export default BodyComponent;
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
