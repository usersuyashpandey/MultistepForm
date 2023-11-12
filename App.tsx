import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Modal,
  Text,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Form1 from './MultiStepForm/Form1';
import Form2 from './MultiStepForm/Form2';
import Form3 from './MultiStepForm/Form3';

function App(): JSX.Element {
  const Stack = createStackNavigator();
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmission = () => {
    setShowModal(true);
  };

  return (
    <ScrollView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form1">
          <Stack.Screen name="Form1" options={{title: 'Step 1'}}>
            {props => (
              <Form1 {...props} formData={formData} setFormData={setFormData} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Form2" options={{title: 'Step 2'}}>
            {props => (
              <Form2 {...props} formData={formData} setFormData={setFormData} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Form3" options={{title: 'Step 3'}}>
            {props => (
              <Form3 {...props} formData={formData} setFormData={setFormData} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

      <Modal visible={showModal} animationType="slide">
        <View>
          <Text>Form Data:</Text>

          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}

export default App;
