import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator } from "./tabNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => {
        return (
          <SafeAreaView style={styles.drawerContainer}>
            <ScrollView>
              <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={require("../assets/circle-cropped.jpg")}
                />
                <View style={styles.imageTextContainer}>
                  <Text style={styles.title}>Alex</Text>
                  <Text style={styles.place}>
                    <Ionicons
                      name={
                        Platform.OS === "android"
                          ? "location-sharp"
                          : "ios-location-sharp"
                      }
                      size={12}
                    />
                    CA, USA
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={Platform.OS === "android" ? "mail" : "ios-mail"}
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Inbox</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={Platform.OS === "android" ? "person" : "ios-person"}
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Edit Picture</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={
                      Platform.OS === "android"
                        ? "arrow-forward"
                        : "ios-arrow-forward"
                    }
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Refer a Friend</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={
                      Platform.OS === "android"
                        ? "add-circle"
                        : "ios-add-circle"
                    }
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Manage Subscription</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={
                      Platform.OS === "android"
                        ? "pause-circle"
                        : "ios-pause-circle"
                    }
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Pause Activity</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => {}}>
                <View style={styles.container}>
                  <Ionicons
                    name={Platform.OS === "android" ? "log-out" : "ios-log-out"}
                    size={23}
                    color="#799AAB"
                  />
                  <Text style={styles.drawerText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen name="logout" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    padding: 30,
    top: 30,
  },
  drawerText: {
    fontSize: 16,
    color: "#799AAB",
    marginLeft: 13,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tabContainer: {
    padding: 5,
  },
  drawerContainer: { flex: 1, paddingTop: 55, marginLeft: 10 },
  image: { height: 100, width: 100, marginLeft: 30 },
  imageTextContainer: { justifyContent: "center", marginLeft: 10 },
  title: { fontSize: 25, color: "#799AAB" },
  place: { fontSize: 12, color: "#799AAB" },
});
