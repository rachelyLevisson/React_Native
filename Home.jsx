// import React from 'react';
// import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//     const navigation = useNavigation();
//     return (
//         <ImageBackground 
//         source={require('./assets/jinji.jpg')}
//         style={styles.background}
//         >
//             <View style={styles.container}>
//                 <Text style={styles.title}>Welcome to Task Manager</Text>
//                 <Button 
//                     title="Add Task" 
//                     onPress={() => navigation.navigate('AddTask')} 
//                 />
//                 <Button 
//                     title="View Tasks" 
//                     onPress={() => navigation.navigate('ListTask')} 
//                 />
//             </View>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     container: {
//         alignItems: 'center',
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // רקע שקוף
//         padding: 20,
//         borderRadius: 10,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
// });

// export default Home;
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/jinji.jpg")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to Task Manager</Text>
          <Text style={styles.subtitle}>Organize your tasks efficiently</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddTask")} activeOpacity={0.8}>
              <Feather name="plus-circle" size={24} color="#fff" />
              <Text style={styles.buttonText}>Add New Task</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigation.navigate("ListTask")}
              activeOpacity={0.8}
            >
              <Feather name="list" size={24} color="#6C63FF" />
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>View All Tasks</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.9,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentContainer: {
    width: "85%",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 10,
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#6C63FF",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: "#6C63FF",
  },
})

export default Home
