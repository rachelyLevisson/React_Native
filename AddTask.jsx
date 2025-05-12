// import { useState } from "react"
// import {
//   View,
//   TextInput,
//   Alert,
//   StyleSheet,
//   Text,
//   Pressable,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from "react-native"
// import { arrTask, getNextId } from "./Model"
// import Task from "./Model"
// import { useNavigation } from "@react-navigation/native"
// import { Feather } from "@expo/vector-icons"

// const AddTask = () => {
//   const [taskName, setTaskName] = useState("")
//   const navigation = useNavigation()

//   const handleAddTask = () => {
//     if (taskName.trim() === "") {
//       Alert.alert("Error", "Please enter a task name")
//       return
//     }

//     const newTask = new Task(getNextId(), taskName)
//     arrTask.push(newTask)
//     setTaskName("")
//     Alert.alert("Success", "Task added successfully!", [{ text: "OK", onPress: () => navigation.navigate("ListTask") }])
//   }

//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <View style={styles.iconContainer}>
//             <Feather name="clipboard" size={60} color="#6C63FF" />
//           </View>

//           <Text style={styles.title}>Create a New Task</Text>

//           <View style={styles.inputContainer}>
//             <Feather name="edit-3" size={20} color="#6C63FF" style={styles.inputIcon} />
//             <TextInput
//               placeholder="What do you need to do?"
//               value={taskName}
//               onChangeText={setTaskName}
//               style={styles.input}
//               placeholderTextColor="#9CA3AF"
//               autoCapitalize="sentences"
//             />
//           </View>

//           <Pressable
//             onPress={handleAddTask}
//             style={({ pressed }) => [
//               styles.button,
//               {
//                 backgroundColor: pressed ? "#5A52D5" : "#6C63FF",
//                 transform: [{ scale: pressed ? 0.98 : 1 }],
//               },
//             ]}
//           >
//             <Feather name="plus" size={20} color="#fff" />
//             <Text style={styles.buttonText}>Add Task</Text>
//           </Pressable>

//           <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")}>
//             <Text style={styles.cancelButtonText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 24,
//   },
//   iconContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     marginBottom: 24,
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: "#333",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "600",
//     marginLeft: 8,
//   },
//   cancelButton: {
//     padding: 10,
//   },
//   cancelButtonText: {
//     color: "#6B7280",
//     fontSize: 14,
//     fontWeight: "500",
//   },
// })

// export default AddTask
import { useState } from "react"
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native"
import { arrTask, getNextId } from "./Model"
import Task from "./Model"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"

const AddTask = () => {
  const [taskName, setTaskName] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      Alert.alert("Error", "Please enter a task name")
      return
    }

    const newTask = new Task(getNextId(), taskName)
    arrTask.push(newTask)
    setTaskName("")
    setModalVisible(true) // פותח את המודאל
  }

  const handleCloseModal = () => {
    setModalVisible(false)
    navigation.navigate("ListTask")
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.iconContainer}>
            <Feather name="clipboard" size={60} color="#6C63FF" />
          </View>

          <Text style={styles.title}>Create a New Task</Text>

          <View style={styles.inputContainer}>
            <Feather name="edit-3" size={20} color="#6C63FF" style={styles.inputIcon} />
            <TextInput
              placeholder="What do you need to do?"
              value={taskName}
              onChangeText={setTaskName}
              style={styles.input}
              placeholderTextColor="#9CA3AF"
              autoCapitalize="sentences"
            />
          </View>

          <Pressable
            onPress={handleAddTask}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#5A52D5" : "#6C63FF",
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <Feather name="plus" size={20} color="#fff" />
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>

          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          {/* Modal for Success Message */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Success</Text>
                <Text style={styles.modalText}>Task added successfully!</Text>
                <Pressable style={styles.modalButton} onPress={handleCloseModal}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  cancelButton: {
    padding: 10,
  },
  cancelButtonText: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // צבע רקע בהיר עם שקיפות
  },
  modalContent: {
    backgroundColor: '#F9F9F9', // צבע רקע בהיר
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333', // צבע טקסט כהה
  },
  modalButton: {
    backgroundColor: "#A8DADC", // צבע עדין לכפתור
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#1D3557", // צבע טקסט כהה לכפתור
    fontWeight: "600",
  },
})

export default AddTask
