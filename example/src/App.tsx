import { View, StyleSheet, Platform, ToastAndroid, StatusBar, Text, ScrollView } from 'react-native';
import PtButton from '../../src/components/atoms/Button/PtButton';
import { PtText } from '../../src/components/atoms/Text';
import type React from 'react';
import { colors } from './colors';
import { PtTextInput } from '../../src/components/atoms/TextInput';
import { useState } from 'react';

const Divider: React.FC = ({}) => {
  return (
    <View style={{margin: 16, backgroundColor: colors.dividerColor, height: 1}}/>
  )
}

export default function App() {

  const [ptText, setText] = useState("Heading Two")
  const [ptText2, setText2] = useState("Heading Three")
  const [ptText3, setText3] = useState("Heading One")

  return (
    <View style={styles.container}>

      <View style={styles.toolbar}>
        <Text style={styles.toolbarTxt}>Components</Text>
        </View>

        <ScrollView>

          {/* Practo Button Component */}
          <View style={styles.row}>

            <PtButton 
              title="Normal Button"
              onClick= {() => {
                if (Platform.OS === 'android')
                  ToastAndroid.show('Normal Button', ToastAndroid.SHORT);
                else console.log('Clicked');
              }}
              type='primary'
            />

            <PtButton 
              title="Disabled Button"
              onClick= {() => {
                if (Platform.OS === 'android')
                  ToastAndroid.show('Disabled Button', ToastAndroid.SHORT);
                else console.log('Clicked');
              }}
              type='disabled'
            />
          </View>

          <View style={styles.row}>
            <PtButton 
              title="Error Button"
              onClick= {() => {
                if (Platform.OS === 'android')
                  ToastAndroid.show('Error Button', ToastAndroid.SHORT);
                else console.log('Clicked');
              }}
              type='error'
            />

            <PtButton 
              title="Success Button"
              onClick= {() => {
                if (Platform.OS === 'android')
                  ToastAndroid.show('Success Button', ToastAndroid.SHORT);
                else console.log('Clicked');
              }}
              type='success'
            />
          </View>

          <Divider/>

          {/* Practo Text Component */}
          <View>
            <PtText text='Heading' defaultStyle={{color: colors.txtColor, alignSelf: 'center'}}/>
            <PtText text={ptText3} h1Style={{color: colors.txtColor, alignSelf: 'center'}} h1/>
          </View>
          <View>
            <PtText text={ptText} h2Style={{color: colors.txtColor, alignSelf: 'center'}} h2/>
            <PtText text={ptText2} h3Style={{color: colors.txtColor, alignSelf: 'center'}} h3/>
          </View>

          <Divider />

          {/* Practo Text Input Component */}
          <View style={{padding: 6}}>
            <PtTextInput placeholder='Enter Text Here...' placeholderTextColor={colors.dividerColor} onTextChange={(text) =>
              (text === '' ? setText("Heading Two") : setText(text))
            } type='outline' />
          </View>

          <View style={{padding: 6}}>
            <PtTextInput placeholder='Enter Password Here...' placeholderTextColor={colors.txtColor} onTextChange={(text) =>
              (text === '' ? setText2("Heading Three") : setText2(text))
            } inputType='password' />
          </View>

          <View style={{padding: 6}}>
            <PtTextInput placeholder='Filled Edit Text...' placeholderTextColor={colors.dividerColor} onTextChange={(text) =>
              (text === '' ? setText("Heading Two") : setText(text))
            } type='filled' />
          </View>

          <View style={{padding: 6}}>
            <PtTextInput placeholder='Filled Password Edit Text...' placeholderTextColor={colors.txtColor} onTextChange={(text) =>
              (text === '' ? setText2("Heading Three") : setText2(text))
            } inputType='password' type='filled' />
          </View>

          <View style={{padding: 6}}>
            <PtTextInput placeholder='Multiline EditText...' placeholderTextColor={colors.dividerColor} onTextChange={(text) =>
              (text === '' ? setText3("Heading One") : setText3(text))
            } type='outline' inputType='multiline' />
          </View>

          <View style={{padding: 6}}>
            <PtTextInput placeholder='Filled Multiline Edittext...' placeholderTextColor={colors.txtColor} onTextChange={(text) =>
              (text === '' ? setText3("Heading One") : setText3(text))
            } inputType='multiline' type='filled' />
          </View>

          <Divider/>

          
        </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (StatusBar.currentHeight ?? 0) + 16,
    paddingHorizontal: 16,
    backgroundColor: colors.bgColor
  },
  toolbar: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: colors.toolbarColor,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16
  },
  toolbarTxt: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "300"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8
  }
});
