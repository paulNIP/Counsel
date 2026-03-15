import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LawyerDiscoveryScreen from './screens/LawyerDiscoveryScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddPaymentScreen from './screens/AddPaymentScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import './i18n';
import HelpScreen from './screens/HelpScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import LocationScreen from './screens/LocationScreen';
import ChatScreen from './screens/ChatScreen';
import ChatDetailsScreen from './screens/ChatDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ChatTabStack() {
  const ChatStack = createStackNavigator();
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="ChatList" component={ChatScreen} options={{ title: 'Chats' }} />
      <ChatStack.Screen name="ChatDetails" component={ChatDetailsScreen} options={{ title: 'Chat Details' }} />
    </ChatStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileTabStack() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="AddPayment" component={(props: any) => <ScreenWithBack navigation={props.navigation}><AddPaymentScreen {...props} /></ScreenWithBack>} />
      <ProfileStack.Screen name="Subscription" component={(props: any) => <ScreenWithBack navigation={props.navigation}><SubscriptionScreen {...props} /></ScreenWithBack>} />
      <ProfileStack.Screen name="Help" component={(props: any) => <ScreenWithBack navigation={props.navigation}><HelpScreen {...props} /></ScreenWithBack>} />
      <ProfileStack.Screen name="AboutUs" component={(props: any) => <ScreenWithBack navigation={props.navigation}><AboutUsScreen {...props} /></ScreenWithBack>} />
      <ProfileStack.Screen name="Location" component={(props: any) => <ScreenWithBack navigation={props.navigation}><LocationScreen {...props} /></ScreenWithBack>} />
    </ProfileStack.Navigator>
  );
}

const ScreenWithBack = ({ navigation, children }: any) => (
  <>
    <View style={{ paddingTop: 16, paddingLeft: 16 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: '#007AFF', fontSize: 16, fontWeight: 'bold' }}>{'< Back'}</Text>
      </TouchableOpacity>
    </View>
    {children}
  </>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          } else if (route.name === 'Chat') {
            iconName = 'chat';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatTabStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileTabStack} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LawyerDiscovery" component={LawyerDiscoveryScreen} options={{ headerShown: true, title: 'Lawyer Discovery' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
