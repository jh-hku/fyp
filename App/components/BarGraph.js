import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


const windowWidth = Dimensions.get('window').width;
const data = [
  { day: "MON", steps: 13120 },
  { day: "TUE", steps: 13200 },
  { day: "WED", steps: 14250 },
  { day: "THU", steps: 13030 },
  { day: "FRI", steps: 10557 },
  { day: "SAT", steps: 13976 },
  { day: "SUN", steps: 12250 },
];

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart 
            // domainPadding={
            //     { x: 18 }
            // } }
            padding={{left: 50, bottom:30, top: 60}}
            width={windowWidth-30} 
            height={250}
            theme={VictoryTheme.material}
            >
        <VictoryBar 
            name="Bar"
            barWidth={35} 
            domainPadding={{x: 23}}
            style={
                { data:  styles.data }
            } 
            data={data} 
            x="day" 
            y="steps" 
            labels=""
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPressIn: () => {
                    return [
                      {
                      target: "labels",
                      mutation: (props) => ({ text:  props.datum.steps })
                    }, 
                    {
                      target: "data",
                      mutation: () => ({ style: { fill: "orange" }})
                    }];
                  },
                  onPressOut: () => { 
                    return [
                    {
                    target: "labels",
                    mutation: () => null
                    }, 
                    {
                      target: "data",
                      mutation: () => null 
                    }]; 
                  }
                }
              }
            ]}
            />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:350,
    justifyContent: "center",
    alignItems: "center",
    // paddingStart:50,
    // backgroundColor: "#f0f59f",
  },
  chart: {
    marginStart: 400
  },
});