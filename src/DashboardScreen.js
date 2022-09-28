import { View, Text } from "react-native"
import styled, { createGlobalStyle } from "styled-components"
import { useState, useEffect } from "react"
import MQTT from "sp-react-native-mqtt"


const Topic = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 48% 0 0;
    padding: 30px;
    background-color: #51e2f5;
    border-radius: 5px;
    margin: 0 0 10px 0;
`


const TopicContainer = styled(View)`
    margin: 20px 5px 0 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`


export default function DashboardScreen() {
    const [tempValue, setTempValue] = useState(0)
    
    const start = async()=>{
      
       await MQTT.createClient({
            uri: 'mqtt://test.mosquitto.org:1883',
            clientId: 'your_client_id'
            }).then(function(client) {
                
                console.log('client',client)
                // client?.on('closed', function() {
                // console.log('mqtt.event.closed');
                // });
                // client?.on('error', function(msg) {
                // console.log('mqtt.event.error', msg);
                // });
                // client?.on('message', function(msg) {
                // console.log('mqtt.event.message', msg);
                // });
                // client?.on('connect', function() {
                // console.log('connected');
                // client?.subscribe('TEMPERATURE_TEST', 0);
                // });
                // client?.connect();
            }).catch(function(err){
                console.log(err);
            });
    }
    
    useEffect(()=>{
    console.log('MQTT',MQTT)
        start()
    },[])

    return (
        <TopicContainer>
            <Topic>
                <Text>Temperature</Text>
                {/* <Text>{tempValue}</Text> */}
            </Topic>
            <Topic>
                <Text>Humidity</Text>
                <Text>12.45</Text>
            </Topic>
            <Topic>
                <Text>Flow Rate</Text>
                <Text>35</Text>
            </Topic>
        </TopicContainer>
    )
}
