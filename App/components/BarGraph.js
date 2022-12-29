import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from "react-native";
import { Bar, VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


const windowWidth = Dimensions.get('window').width;

const BarGraph = ({data}) =>  {
  const onBarPressed = () => {
    return [
    {
      target: "labels",
      mutation: (props) => ({ text:  props.datum.steps })
    }, 
    {
      target: "data",
      mutation: () => ({ style: { fill: "orange" }})
    }];
  }
  const onBarNotPressed = () => { 
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
          labels={() => ""}
          events={[
            {
              target: "data",
              eventHandlers: {
                onPressIn: onBarPressed,
                onPressOut: onBarNotPressed
              }
            }
          ]}
          />
      </VictoryChart>
    </View>
  );
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

BarGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      steps: PropTypes.number
    })
  )
};

export default BarGraph;