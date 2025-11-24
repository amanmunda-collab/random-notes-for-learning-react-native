import { View, Text, TextProps,StyleSheet } from 'react-native'
import React from 'react'
import useAppTheme from '@/hooks/appTheme';

// custome type for the themed text 
interface ThemedTextProps extends TextProps{
    variant?:'body' | 'title' | 'caption' | 'link';
}
export function ThemedText({style,variant='body',...otherProps}:ThemedTextProps){
    const {colors} = useAppTheme();

      // different styles for different text variants 

    const VariantStyles = {
    body: { fontSize: 16, fontWeight: 'normal' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 0 },
    caption: { fontSize: 12, color: colors.textMuted }, // Use muted color for captions
    link: { fontSize: 16, color: colors.primary, textDecorationLine: 'underline' },
  } as const;

  return (
   <Text style ={
    [{color:colors.text},VariantStyles[variant],
    
    style]} 
    
    {...otherProps}
    
    />
  );
}

/// ------------- HOw to use -----------

/*
1 First import this component 

      
      /* It automatically knows to be 'colors.text' and size 32 
      <ThemedText variant="title">
        First page of the application
      </ThemedText>

      <Link href="/about_page" asChild>
       //  Pass variant="link" for automatic blue color 
        <ThemedText variant="link">Go to About Page</ThemedText>
      </Link>

     // Default is body text, so it works automatically 

      <ThemedText>
        2nd text of the page
      </ThemedText>

     // You can still override styles if you want specific red text 
      <ThemedText style={{ color: 'red' }}>
        Warning Text
      </ThemedText>

*/


