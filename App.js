import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './components/HomeScreen';
import ItemsScreen from './components/ItemsScreen';
import Profile from './components/firebase/authentication/Profile';
import Chat from './components/firebase/chatingwithDatabase/Chat';
import Chat2 from './components/firebase/chatingwithDatabase/Chat2';
import reducer from './components/Reducer';

const middleware = function ({ getState }) {
  return function (next) {
    return function (action) {
      const returnVal = next(action);
      console.log('current action is')
      console.log(action)
      console.log('state when action is dispatched', getState());

      return returnVal
    }
  }
}

const store = createStore(reducer, initialState = {}, applyMiddleware(promise));

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarStyle: { backgroundColor: 'powderblue', paddingTop: 35, },
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Item" component={ItemsScreen} />
          <Tab.Screen name="Chating">
            {() => (
              <Tab.Navigator initialRouteName='Chat' >
                <Tab.Screen name='User1' component={Chat} />
                <Tab.Screen name='User2' component={Chat2} />
              </Tab.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
