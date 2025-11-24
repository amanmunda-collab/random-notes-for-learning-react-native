import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import useAppTheme from '@/hooks/appTheme'



  
const TabsLayout = () => {

    const {colors} = useAppTheme();
  return (
<Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:colors.text,
   //  tabBarShowLabel:false,
    tabBarStyle:{
        backgroundColor:colors.surface,
       
        borderTopColor:colors.border,
        paddingBottom:0,
      
    
       },
       tabBarItemStyle:{
       
       },
       tabBarLabelStyle:{
       fontSize:10,
       color:colors.text
       }
}}>
     <Tabs.Screen name = "index"
                 options={{title:"Home",
                    tabBarIcon:({focused,color,size}) => (
                        <Ionicons name = "home" size = {30} color = {color} />
  )
                 }}    
                          
                 
                 />
    <Tabs.Screen name = "about_page"
                 options={{title:"Settings",
                    tabBarIcon:({focused,color,size}) => (
                        <Ionicons name = "settings" size = {30} color = {color} />
  )
                 }}             
                 
                 />
                
</Tabs>
  )
}

export default TabsLayout
