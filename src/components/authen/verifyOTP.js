import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {View, Text, Center, Heading} from 'native-base';
import {Alert, Button} from 'native-base';
import {const_colors} from '../../common/constant';

import OTPInputView from '@twotalltotems/react-native-otp-input';

const codeDemo = '1111';

export default VerifyOTP = ({navigation, route}) => {
  const [codeText, setCode] = useState();
  
  useEffect(() => {
    navigation.setOptions({
      phoneFormated: route.params.phoneFormated,
    });
    console.log(route.params.phoneFormated);
  }, [navigation, route]);

  onNextStep = () => {
    if (codeText == codeDemo) {
      navigation.navigate('EnterAddress');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Center>
          <Heading mt={7}>Verify phone number</Heading>
          <Text
            textAlign="center"
            mt={3}
            mb={10}
            fontSize="lg"
            color={const_colors.textMain}>
            Enter the 4-Digit code sent to you at {'\n'}{' '}
            {route.params.phoneFormated}
          </Text>
          <OTPInputView
            keyboardType="phone-pad"
            style={{width: '80%', height: 40, alignSelf: 'center'}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={{
              color: 'black',
              fontSize: 17,
              fontWeight: 'bold',
            }}
            onCodeFilled={text => setCode(text)}
          />
          <Button
            onPress={this.onNextStep}
            width="90%"
            bgColor={const_colors.active}
            borderRadius="lg"
            py={3}
            my={4}>
            <Text bold color="#fff" textTransform="uppercase">
              Continue
            </Text>
          </Button>
          <Text my={3} mb={6} color={const_colors.textMain}>
            Didn’t receive code?{' '}
            <Text color={const_colors.active}>Resend Again.</Text>
          </Text>
          <Text
            fontSize="md"
            width="85%"
            textAlign="center"
            color={const_colors.textBody}>
            By Signing up you agree to our Terms {'\n'} Conditions {'&'} Privacy
            Policy.
          </Text>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
