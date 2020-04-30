import React, { useContext } from 'react';

import SignedScreen from './SignedScreen';
import UnsignedScreen from './UnsignedScreen';
import LoadingScreen from './LoadingScreen';

import AuthContext from './contexts/Auth';

export default function App() {
	const { signed, loading } = useContext(AuthContext);

	if(loading)
		return(
			<LoadingScreen />
		);
		
  return signed ? <SignedScreen /> : <UnsignedScreen /> 
}