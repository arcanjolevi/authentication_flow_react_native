import React, { createContext, useState } from 'react';

export function AuthProvider ({ children }) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isSigned, setIsSigned ] = useState(false);

    function signIn (email, password) {
        setIsLoading(true);
        console.log('Sign In', email, password);
        //sign in code
        setIsSigned(true);
        setIsLoading(false);
    }

    function signOut(){
        setIsLoading(true);
        console.log('Sign Out');
        //sign out code
        setIsSigned(false);
        setIsLoading(false);
    }
    
    return(
        <AuthContext.Provider value={
            { 
                loading: isLoading, 
                signed: isSigned,
                signIn,
                signOut
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}

const AuthContext = createContext({
    signed: String,
    token: String,
    user: String,
    signIn: Function,
    signOut: Function,
    loading: Boolean
});

export default AuthContext ;