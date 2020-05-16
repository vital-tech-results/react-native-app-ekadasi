import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import NewsScreen from '../screens/NewsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Ekadasi';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Ekadasi"
        component={HomeScreen}
        options={{
          title: 'Ekadasi',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart-empty" />,
        }}
      />
      <BottomTab.Screen
        name="Resources"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="All"
        component={NewsScreen}
        options={{
          title: 'All',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Ekadasi':
      return 'The next Ekadasi is...';
    case 'Resources':
      return 'Bhakti Resources';
    case 'All':
      return 'Ekadasi dates in 2020';
  }
}