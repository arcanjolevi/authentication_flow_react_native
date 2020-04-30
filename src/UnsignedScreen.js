import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AuthContext from './contexts/Auth';

export default function UnsignedScreen() {
	const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Button title="Sign In" onPress={ () => signIn("email", "pass") }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
