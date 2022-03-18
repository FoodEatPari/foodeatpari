import React from 'react'
import { View, Text } from 'react-native'
import Root from './app/Navigation/Root'
import {Provider} from 'react-redux'
import store from './app/Redux/Store'

import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>    
    <PaperProvider>
  <Root/>
  </PaperProvider>
  </Provider>
  )
}
