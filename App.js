// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AddTask from './AddTask';
// import ListTask from './ListTask'; // ודא שיש לך את רכיב ListTask
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Home from './Home'; // ייבוא של רכיב הבית
// import { StatusBar, StyleSheet, Text, View } from 'react-native';

// const Stack = createNativeStackNavigator();

// const App = () => {
//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.container}>
//                 <NavigationContainer>
//                     <Stack.Navigator initialRouteName="Home">
//                         <Stack.Screen name="Home" component={Home} />
//                         <Stack.Screen name="AddTask" component={AddTask} />
//                         <Stack.Screen name="ListTask" component={ListTask} />
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     );
// };

// export default App;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "red"
//     },
// });
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddTask from "./AddTask"
import ListTask from "./ListTask"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Home from "./Home"
import { StatusBar, StyleSheet } from "react-native"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#6C63FF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              contentStyle: {
                backgroundColor: "#F5F7FA",
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} options={{ title: "Task Manager" }} />
            <Stack.Screen name="AddTask" component={AddTask} options={{ title: "Create New Task" }} />
            <Stack.Screen name="ListTask" component={ListTask} options={{ title: "My Tasks" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
})

export default App

