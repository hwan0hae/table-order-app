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
  const authMutation = useMutation<IMutatedValue, IMutatedError, IUserData>(
    (data) => auth(data),
    {
      onError: (res) => {
        AsyncStorage.removeItem('user');
        navigation.replace('SignIn');
      },
      onSuccess: async (res) => {
        if (res.data) {
          const userData: IUserData = res.data;
          const stringValue = JSON.stringify(userData);
          await AsyncStorage.setItem('user', stringValue);
        }
        navigation.replace('Home');
      },
    }
  );

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user').then((user) => {
        if (user !== null) {
          const data: IUserData = JSON.parse(user);
          authMutation.mutate(data);
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
