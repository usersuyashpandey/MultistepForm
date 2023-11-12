import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const Form2 = ({formData, setFormData, navigation}) => {
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [address, setAddress] = useState(formData.address || '');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });

  const validateForm2 = () => {
    let firstNameError = '';
    let lastNameError = '';
    let addressError = '';

    if (!firstName.trim() || firstName.length < 2 || firstName.length > 50) {
      firstNameError = 'First name must be 2-50 characters long';
    }

    if (lastName && !/^[A-Za-z]+$/.test(lastName)) {
      lastNameError = 'Last name can only contain alphabets';
    }

    if (!address.trim() || address.length < 10) {
      addressError = 'Address must be at least 10 characters long';
    }

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      address: addressError,
    });

    return !(firstNameError || lastNameError || addressError);
  };

  const handleSaveAndNext = () => {
    const isValid = validateForm2();

    if (isValid) {
      setFormData({...formData, firstName, lastName, address});
      navigation.navigate('Form3');
    }
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={text => setFirstName(text)}
        placeholder="Enter first name"
      />
      {errors.firstName ? <Text>{errors.firstName}</Text> : null}

      <Text>Last Name (Optional)</Text>
      <TextInput
        value={lastName}
        onChangeText={text => setLastName(text)}
        placeholder="Enter last name"
      />
      {errors.lastName ? <Text>{errors.lastName}</Text> : null}

      <Text>Address</Text>
      <TextInput
        value={address}
        onChangeText={text => setAddress(text)}
        placeholder="Enter address"
      />
      {errors.address ? <Text>{errors.address}</Text> : null}

      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Save" onPress={handleSaveAndNext} />
    </View>
  );
};

export default Form2;
