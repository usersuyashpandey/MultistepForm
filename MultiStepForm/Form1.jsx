import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const Form1 = ({formData, setFormData, navigation}) => {
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');
  const [errors, setErrors] = useState({email: '', password: ''});

  const validateForm1 = () => {
    let emailError = '';
    let passwordError = '';

    if (!email.trim()) {
      emailError = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Invalid email address';
    }

    if (!password.trim()) {
      passwordError = 'Password is required';
    } else {
      const capitalCount = (password.match(/[A-Z]/g) || []).length;
      const lowerCount = (password.match(/[a-z]/g) || []).length;
      const numberCount = (password.match(/[0-9]/g) || []).length;
      const specialCount = (password.match(/[^A-Za-z0-9]/g) || []).length;

      if (
        !(
          capitalCount >= 2 &&
          lowerCount >= 2 &&
          numberCount >= 2 &&
          specialCount >= 2
        )
      ) {
        passwordError = 'Invalid password format';
      }
    }

    setErrors({email: emailError, password: passwordError});

    return !(emailError || passwordError);
  };

  const handleSaveAndNext = () => {
    const isValid = validateForm1();

    if (isValid) {
      setFormData({...formData, email, password});
      navigation.navigate('Form2');
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter email"
      />
      {errors.email ? <Text>{errors.email}</Text> : null}

      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter password"
        secureTextEntry
      />
      {errors.password ? <Text>{errors.password}</Text> : null}

      <Button title="Back" disabled onPress={() => navigation.goBack()} />
      <Button title="Save" onPress={handleSaveAndNext} />
    </View>
  );
};

export default Form1;
