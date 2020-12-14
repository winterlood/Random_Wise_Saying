import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

// TEST UNIT
// ca-app-pub-3940256099942544/1033173712

const AdBannerBottom = () => (
  <BannerAd
    unitId={TestIds.BANNER}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
    onAdLoaded={function () {
      console.log('Advert loaded');
    }}
    onAdFailedToLoad={function (error) {
      console.error('Advert failed to load: ', error);
    }}
  />
);

export default AdBannerBottom;
