import React, {useState} from 'react';
import {View, Text, TextInput, Button, CheckBox} from 'react-native';

const Form3 = ({formData, setFormData, navigation}) => {
  const [countryCode, setCountryCode] = useState(formData.countryCode || '');
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({countryCode: '', phoneNumber: ''});

  const validateForm3 = () => {
    let countryCodeError = '';
    let phoneNumberError = '';

    if (!countryCode || (countryCode !== '+91' && countryCode !== '+1')) {
      countryCodeError = 'Please select a valid country code';
    }

    if (
      !phoneNumber.trim() ||
      phoneNumber.length !== 10 ||
      !/^\d+$/.test(phoneNumber)
    ) {
      phoneNumberError = 'Phone number must be a 10-digit numeric value';
    }

    setErrors({countryCode: countryCodeError, phoneNumber: phoneNumberError});

    return !(countryCodeError || phoneNumberError || !acceptTerms);
  };

  const handleSave = () => {
    const isValid = validateForm3();

    if (isValid) {
      setFormData({...formData, countryCode, phoneNumber});
    }
  };

  return (
    <View>
      <Text>Country Code</Text>
      <TextInput
        value={countryCode}
        onChangeText={text => setCountryCode(text)}
        placeholder="Select country code"
      />
      {errors.countryCode ? <Text>{errors.countryCode}</Text> : null}

      <Text>Phone Number</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        placeholder="Enter phone number"
      />
      {errors.phoneNumber ? <Text>{errors.phoneNumber}</Text> : null}

      <CheckBox
        value={acceptTerms}
        onValueChange={value => setAcceptTerms(value)}
      />
      <Text>I accept the terms and conditions</Text>

      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default Form3;
