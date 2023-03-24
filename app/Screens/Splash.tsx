import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMutation } from 'react-query';
import { IMutatedError, IMutatedValue, IUserData } from '../../types/api';
import { RootStackParamList } from '../../types/data';
import { auth } from '../../utill/api';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

function Splash({ navigation }: SplashProps) {
  const playMutation = useMutation<IMutatedValue, IMutatedError>(auth, {
    onError: async (res) => {
      navigation.replace('SignIn');
    },
    onSuccess: async (res) => {
      navigation.replace('Home');
    },
  });

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('accessToken').then((token) => {
        if (token) {
          playMutation.mutate();
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 2000);
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 60 }}>스플래쉬 화면</Text>
    </View>
  );
}

export default Splash;
