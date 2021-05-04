import React,{useState,useEffect} from 'react'
import {FlatList,View,Text,Image} from 'react-native';
import axios from "axios";
import { Container,Content,Card,CardItem,Thumbnail,Body,Left,Button } from 'native-base';
import YoutubePlayer from 'react-native-youtube-iframe';

function Home ({navigation}) {

    const [feedData,setFeedData] = useState([]);
    
    useEffect (() => {
        feeds()
    },[])

    const feeds =()=>{
     axios.post('https://www.crick3tsocial.com/mobile/includes/ajaxFromApp.php?request=getAllFeeds')
    .then(function(response) {
      setFeedData(response.data.item)
      
    })
    .catch(function (error) {
      console.log(error);
    })
  }

    return (
      <Container>
       <FlatList
          data={feedData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:item.user.image}}/>
                <Body>
                  <Text>{item.user.first_name}</Text>
                </Body>
              </Left>
            </CardItem>
            {(item.type=='picture') ?
            <CardItem cardBody>
              <Image style={{width:355,height:200}} source={{uri:item.post_image}}/>
            </CardItem> : <></>}
            {(item.type=='youtube') ? 
            <CardItem cardBody>
              <View style={{flex:1}}>
                  <YoutubePlayer
                    height={200}
                    play={true}
                    videoId={(item.value).split("v=")[1].substring(0,11)}
                  />
              </View>
             </CardItem> : <></>}
            <CardItem>
              <Body>
                <Text>{item.message}</Text>
              </Body>
            </CardItem>
          </Card>
          </Content>
          }
        />
        </Container>
    )
  }

  export default Home;


