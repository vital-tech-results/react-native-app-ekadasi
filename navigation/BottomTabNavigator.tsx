import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Haptics from "expo-haptics";

import Colors from "../constants/ColorsTypescript";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import PureBhakti from "../screens/PureBhaktiScreen";
import ContactScreen from "../screens/ContactScreen";
import ProductStash from "../screens/ProductStash";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Ekadasi"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Ekadasi"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-heart" color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            Haptics.selectionAsync();

            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
      <BottomTab.Screen
        name="PureBhakti"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-moon-outline" color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            Haptics.selectionAsync();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-mail-outline" color={color} />
          ),
        }}
        listeners={{
          tabPress: e => {
            Haptics.selectionAsync();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
      <BottomTab.Screen
        name="RoadMap"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color={color} />,
        }}
        listeners={{
          tabPress: e => {
            Haptics.selectionAsync();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  // if oreintation === landscape then styles.landscapeScreen
  // get initial orientation
  const [getOrientation, setGetOrientation] = React.useState("");

  const getCurrentOrientation = async () => {
    ScreenOrientation.getOrientationAsync().then(data => {
      if (data == 1) {
        setGetOrientation("portrait");
      }
      if (data == 3) {
        setGetOrientation("landscape");
      }
    });
  };

  React.useEffect(() => {
    getCurrentOrientation();
  }, []);

  // end get initial orientation

  // listen for changes in orientation from https://github.com/expo/expo/issues/10944 and
  // https://forums.expo.io/t/how-to-use-screenorientation-addorientationchangelistener/47921/2

  const [screenOrientation, setScreenOrientation] = React.useState();

  const onOrientationChange = currentOrientation => {
    const orientationValue = currentOrientation.orientationInfo.orientation;
    setScreenOrientation(orientationValue);
  };

  const screenOrientationListener = ScreenOrientation.addOrientationChangeListener(
    onOrientationChange
  );

  // end listen for changes in orientation from github

  return (
    <Ionicons
      size={30}
      // style={{ marginBottom: -3, paddingRight: 30 }}
      style={[
        screenOrientation === undefined
          ? styles.portraitMode
          : screenOrientation === 1
          ? styles.portraitMode
          : styles.landscapeMode,
      ]}
      {...props}
    />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Ekadasi is the Mother of Bhakti" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PureBhaktiScreen"
        component={PureBhakti}
        options={{ headerTitle: "Pure Bhakti Calendar" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{ headerTitle: "Contact" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="ProductStash"
        component={ProductStash}
        options={{ headerTitle: "Ideas and Roadmap" }}
      />
    </TabFourStack.Navigator>
  );
}

const styles = StyleSheet.create({
  landscapeMode: {
    marginBottom: -3,
    paddingRight: 30,
  },
  portraitMode: {
    marginBottom: -3,
  },
});
