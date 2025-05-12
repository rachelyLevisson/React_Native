// import { useState, useRef, useEffect } from "react"
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Animated, ActivityIndicator } from "react-native"
// import { arrTask } from "./Model"
// import { Feather } from "@expo/vector-icons"

// const ListTask = () => {
//   const [loading, setLoading] = useState(true)
//   const fadeAnim = useRef(new Animated.Value(0)).current
//   const itemFadeAnims = useRef(arrTask.map(() => new Animated.Value(0))).current

//   // Simulate loading for better UX
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start()
//     }, 800)

//     return () => clearTimeout(timer)
//   }, [])

//   useEffect(() => {
//     itemFadeAnims.forEach((anim, index) => {
//       const delay = index * 100
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 300,
//         delay,
//         useNativeDriver: true,
//       }).start()
//     })
//   }, [])

//   const renderItem = ({ item, index }) => {
//     return (
//       <Animated.View
//         style={{
//           opacity: itemFadeAnims[index],
//           transform: [
//             {
//               translateY: itemFadeAnims[index].interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [20, 0],
//               }),
//             },
//           ],
//         }}
//       >
//         <TouchableOpacity style={styles.itemContainer}>
//           <View style={styles.taskIconContainer}>
//             <Feather name="check-circle" size={24} color="#6C63FF" />
//           </View>
//           <View style={styles.taskContent}>
//             <Text style={styles.itemText}>{item.name}</Text>
//             <Text style={styles.taskId}>Task #{item.id}</Text>
//           </View>
//           <TouchableOpacity style={styles.moreButton}>
//             <Feather name="more-vertical" size={20} color="#9CA3AF" />
//           </TouchableOpacity>
//         </TouchableOpacity>
//       </Animated.View>
//     )
//   }

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#6C63FF" />
//         <Text style={styles.loadingText}>Loading tasks...</Text>
//       </View>
//     )
//   }

//   return (
//     <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>My Tasks</Text>
//         <Text style={styles.taskCount}>{arrTask.length} tasks</Text>
//       </View>

//       {arrTask.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Feather name="inbox" size={60} color="#D1D5DB" />
//           <Text style={styles.emptyText}>No tasks yet</Text>
//           <Text style={styles.emptySubtext}>Add a new task to get started</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={arrTask}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.listContent}
//           showsVerticalScrollIndicator={false}
//         />
//       )}
//     </Animated.View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#F5F7FA",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     marginTop: 12,
//     fontSize: 16,
//     color: "#6B7280",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   taskCount: {
//     fontSize: 14,
//     color: "#6B7280",
//     backgroundColor: "#E5E7EB",
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   listContent: {
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   taskIconContainer: {
//     marginRight: 12,
//   },
//   taskContent: {
//     flex: 1,
//   },
//   itemText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#333",
//     marginBottom: 4,
//   },
//   taskId: {
//     fontSize: 12,
//     color: "#9CA3AF",
//   },
//   moreButton: {
//     padding: 4,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#6B7280",
//     marginTop: 16,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: "#9CA3AF",
//     marginTop: 8,
//   },
// })

// export default ListTask
"use client"

import { useState, useRef, useEffect } from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Animated, ActivityIndicator } from "react-native"
import { arrTask } from "./Model"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const ListTask = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const fadeAnim = useRef(new Animated.Value(0)).current
  const itemFadeAnims = useRef(arrTask.map(() => new Animated.Value(0))).current

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    itemFadeAnims.forEach((anim, index) => {
      const delay = index * 100
      Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
      }).start()
    })
  }, [])

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        style={{
          opacity: itemFadeAnims[index],
          transform: [
            {
              translateY: itemFadeAnims[index].interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.taskIconContainer}>
            <Feather name="check-circle" size={24} color="#6C63FF" />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.taskId}>Task #{item.id}</Text>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Feather name="more-vertical" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Loading tasks...</Text>
      </View>
    )
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Tasks</Text>
        <Text style={styles.taskCount}>{arrTask.length} tasks</Text>
      </View>

      {arrTask.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Feather name="inbox" size={60} color="#D1D5DB" />
          <Text style={styles.emptyText}>No tasks yet</Text>
          <Text style={styles.emptySubtext}>Add a new task to get started</Text>
        </View>
      ) : (
        <FlatList
          data={arrTask}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Feather name="home" size={20} color="#fff" />
        <Text style={styles.backButtonText}>חזרה לדף הבית</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#6B7280",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  taskCount: {
    fontSize: 14,
    color: "#6B7280",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  taskIconContainer: {
    marginRight: 12,
  },
  taskContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  taskId: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  moreButton: {
    padding: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B7280",
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
})

export default ListTask
