import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AuthContext from './contexts/Auth';

export default function SignedScreen() {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Sign Out" onPress={() => signOut() } />
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
