import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import { VerticalContainer, Text, Title } from '../../style/styled';
import { IAppSignInData } from '../../types/api';
import { RootStackParamList } from '../../types/data';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignIn({ navigation, route }: SignInProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<IAppSignInData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data: IAppSignInData) => {
    console.log(data);
    navigation.push('Home');
  };
  return (
    <VerticalContainer>
      <Title>로그인</Title>
      {errors.email && <Text>{errors.email.message}</Text>}
      <Controller
        name="email"
        rules={{
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: '이메일 형식이 아닙니다.',
          },
        }}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(textValue) => onChange(textValue)}
            value={value}
            style={{ width: 240, fontSize: 24 }}
            label="Email"
            keyboardType="email-address"
          />
        )}
      />
      {errors.password && <Text>{errors.password.message}</Text>}
      <Controller
        name="password"
        rules={{
          required: '비밀번호를 입력해주세요.',
          minLength: { value: 8, message: '최소 8자 이상 가능합니다.' },
          maxLength: { value: 15, message: '최대 15자 까지만 가능합니다.' },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
            message: '영문, 숫자 포함 8자리를 입력해주세요.',
          },
        }}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(textValue) => onChange(textValue)}
            value={value}
            style={{ width: 240, fontSize: 24 }}
            label="Password"
            secureTextEntry
          />
        )}
      />
      {errors.tableNo && <Text>{errors.tableNo.message}</Text>}
      <Controller
        name="tableNo"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(textValue) => onChange(textValue)}
            style={{ width: 240, fontSize: 24 }}
            label="Table No."
            keyboardType="number-pad"
          />
        )}
      />

      <Button
        onPress={handleSubmit(onSubmit)}
        mode="outlined"
        style={{ width: 240 }}
      >
        Sign In
      </Button>
    </VerticalContainer>
  );
}
