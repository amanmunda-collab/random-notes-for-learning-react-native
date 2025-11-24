import { Text,StyleSheet, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useAppTheme from "@/hooks/appTheme";
import { ThemedText } from "@/components/ThemedText";

interface UserDetails extends Record<string,string>{
  accountType:string ;
  contracts:string;

}

const AboutPage = () => {
  const {toggleDarkMode,colors} = useAppTheme();

  const params = useLocalSearchParams<UserDetails>();
  const accountType = params.accountType ?? "Data not sent !";
  const contracts = params.contracts ?? "Data not sent !";
  
  return (
    <View
      style={[styles.container, {backgroundColor:colors.bg}]}
    >

       <ThemedText>This is the about page</ThemedText>
       <ThemedText>
        Account Type : {accountType} {"\n"}
        Contracts Completed : {contracts}{"\n"}
        You came from Index page


       </ThemedText>
       <TouchableOpacity style = {styles.button}  onPress={toggleDarkMode} > 
        <ThemedText style={{color:"white"}}>Change the app theme </ThemedText>
       </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
  

  },
  content:{
    fontSize:40,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  }
});

export default AboutPage;
