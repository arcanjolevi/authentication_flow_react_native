import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Index from './src/Index';

import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </NavigationContainer>
  );
}