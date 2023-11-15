import {View, Text, ActivityIndicator,Image, Modal, ImageBackground, ScrollView, Button, Pressable, StatusBar, Alert} from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";

const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  const [isModalVisible, setIsModalVisisble] = useState(false);

  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
    <Greet name="Nikita Jare"/>
    <ScrollView>
    <ActivityIndicator size="large" color="midnightblue"/>
    {/* <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
    <View style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}></View> */}
    <Text><Text style={{ color:"white" }}>Hello</Text> World</Text>
    {/* <StatusBar barStyle="light-content" hidden/> */}
    <Pressable onPress={()=>{console.log("Image Pressed")}}>
    <Image source={logoImg} style={{ width:300, height:300 }}/> 
    </Pressable>

    <Button 
    title="Press" 
    onPress = {()=>setIsModalVisisble(true)}
    color="midnightblue"
    />

    <Modal 
      visible={isModalVisible} 
      onRequestClose={()=>setIsModalVisisble(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
    <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60}}>
      <Text>Modal Content</Text>
      <Button 
        title="Close"
        color="midnightblue" 
        onPress={()=>setIsModalVisisble(false)}/>
    </View>
    </Modal>
    {/*<Image 
    source={{ uri: "https://picsum.photos/200"}}
    style={{ width:300, height:300 }}
    />  */}
    {/*network image - mandatory to specify width/height. Also, source expects integer, so need to pass object and uri as string*/}
    {/* <ImageBackground source={logoImg} style={{ flex:1 }}/> */}
    <Text>Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. Court heard which up above hoped grave do. Answer living law things either sir bed length. Looked before we an on merely. These no death he at share alone. Yet outward the him compass hearted are tedious.
Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted.
Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.
She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but. Questions am sincerity zealously concluded consisted or no gentleman it.
</Text>
  
  <Image source={logoImg} style={{ width:300, height:300 }}/> 

  <Button
    title="Alert 1" onPress={()=>Alert.alert("Inavlaid Data!")}
  />
  <Button
    title="Alert 2" onPress={()=>Alert.alert("Inavlaid Data!", "DOB incorrect")}
  />
  <Button
    title="Alert 3" 
    onPress={()=>Alert.alert("Inavlaid Data!", "DOB incorrect", [
      {
        text:"Cancel",
        onPress: ()=>console.log("Cancel Pressed")
      },
      {
        text:"Ok",
        onPress: ()=>console.log("OK Pressed")
      },
      {
        text:"BYE",
        onPress: ()=>console.log("BYE Pressed")
      }
    ])}
  />
  </ScrollView>
  </View>
}