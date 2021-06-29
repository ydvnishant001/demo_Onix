import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#799AAB",
        inactiveTintColor: "#CDCED0",
        style: { padding: 10 },
      }}
    >
      <Tab.Screen
        name="Inbox"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "mail" : "ios-mail"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "search" : "ios-search"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Refer"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={
                Platform.OS === "android"
                  ? "arrow-forward"
                  : "ios-arrow-forward"
              }
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "person" : "ios-person"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "menu" : "ios-menu"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
