import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from '@react-navigation/elements';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DynamicColorIOS,
  ScrollView,
  useColorScheme,
  View,
} from 'react-native';

const BlackWhiteScrollView = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={{ padding: 16 }}
    >
      <View style={{ paddingBottom: 20 }}>
        <Text>Current colorscheme: {useColorScheme()}</Text>
      </View>
      <Text>View using DynamicColorIOS:</Text>
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: DynamicColorIOS({ dark: 'black', light: 'white' }),
        }}
      />
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BlackWhiteScrollView}
        options={{
          headerTransparent: true,
          headerTintColor: DynamicColorIOS({
            light: 'red',
            dark: 'green',
          }),
          headerBlurEffect: 'regular',
          unstable_headerRightItems: () => [
            {
              type: 'button',
              label: 'Button',
              onPress: () => {},
            },
          ],
        }}
      />
    </Stack.Navigator>
  );
};
const Tabs = createBottomTabNavigator();

export const UserInterfaceBug = () => {
  return (
    <NavigationContainer
      theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Tabs.Navigator>
        <Tabs.Screen name="Stack" component={StackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
