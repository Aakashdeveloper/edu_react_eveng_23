import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import DisplayComponent from './Component/DisplayRest';

const url = "http://3.17.216.66:4000/restaurants"

function App() {

  const [title,updateTitle] = useState('Developer Funnel');
  const [rest,setRest] = useState('')

  setTitle = () => {
    updateTitle('New Title')
  }

  useEffect(() => {
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  },[])
   
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="Change Text" color="pink" 
      onPress={setTitle}/>
       <Button title="Revert Text" color="orange" 
      onPress={()=> {updateTitle('Developer Funnel')}}/>
      <Button title="Press Me" color="red" onPress={()=> Alert.alert('Button Got Clicked')}/>
      <DisplayComponent restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;