import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn'
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes()  {
  const {user} = useAuth();
  return(
      <NavigationContainer>
     { user.id ? <AuthRoutes /> : <SignIn />}
      </NavigationContainer>
  )
}