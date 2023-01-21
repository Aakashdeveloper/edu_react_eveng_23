import React from 'react';
import {StyleSheet,ScrollView,View,Text,Image} from 'react-native';

function DisplayList(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key={item.restaurant_id}>
                        <Image style={styles.logo}
          source={{uri: item.restaurant_thumb}}/>
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    logo: {
        width: 170,
        height: 170,
    },
    text: {
      fontSize: 42,
    },
  });

export default DisplayList;

