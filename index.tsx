import { Text,StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {Link} from "expo-router"
import useAppTheme from "@/hooks/appTheme";
import { ThemedText } from "@/components/ThemedText";
import {api} from "@/convex/_generated/api"
import { useQuery,useMutation } from "convex/react";
import { getTodos } from "@/convex/todos";



const userData = {
  accountType:"seller",
  contracts:20
}

export default function Index() {

 const getTodos =  useQuery(api.todos.getTodos);
 console.log(getTodos);
 const addToDo = useMutation(api.todos.addTodo);
 const clearAll = useMutation(api.todos.clearAllToDo);


  const {colors} = useAppTheme();
  /// we will use array syntax for styles inside text component //
  // it merges the properties and the last property wins

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bg }]}
    >

       <ThemedText >First page of the application </ThemedText>
       
        
       {getTodos === undefined ? (
    <ThemedText>Loading...</ThemedText>
  ) :(
    <ScrollView>
    {getTodos.map((todo) => (
           
      <View key = {todo._id} style ={styles.taskCard}>
         <ThemedText style={{ fontSize: 18 }}>
            {todo.text}
  
          </ThemedText>
          <ThemedText variant="caption" style={{ color: colors.textMuted }}>
             Status: {todo.isCompleted ? "Done" : "Pending"}
          </ThemedText>
          <ThemedText variant="caption" style={{ color: colors.textMuted }}>
            ` Creation time: 
          </ThemedText>

      </View>
    )

    )}
    </ScrollView>
  )

}
      

       <TouchableOpacity style = {styles.button} onPress= { () => addToDo({
        text:"Task added Successfully!"
       })}  > <ThemedText style={{color:"white"}}>Add a task </ThemedText> </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress= { () => clearAll()}  > <ThemedText style={{color:"white"}}>Clear Task </ThemedText> </TouchableOpacity>


      
       <ThemedText variant="caption">
        {getTodos===undefined? "loading all taks ":`Total tasks:${getTodos.length}`}
       </ThemedText>
      
        {
        getTodos===undefined? (<ThemedText variant="caption"> "loading all taks"
       </ThemedText>):(<ThemedText variant = "caption">{JSON.stringify(getTodos)}</ThemedText>)
      }

    <Link href = {{pathname:"/about_page",params:userData}}><ThemedText variant="link">About page</ThemedText></Link> 
       <ThemedText style = {{color:colors.text}}>2nd text of the page</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    gap:20,
  

  },
   button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  taskCard:{
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  }
});
