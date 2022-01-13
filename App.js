import React from 'react'
import { View, Text } from 'react-native'
import Root from './app/Navigation/Root'
import Home from './app/Screens/Home'
import Login from './app/Screens/Login'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
  <Root/>
  </PaperProvider>
  )
}
