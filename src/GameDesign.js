import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
} from "react-native";

import gene from "../../my-app/src/photos/lol1.png";
import robotnb from "../../my-app/src/photos/robot1.png";
import k from "../../my-app/src/photos/kon.png";
import life from "../../my-app/src/photos/life.png";
import game from "../../my-app/src/photos/game1.png";
import pic from "../../my-app/src/photos/pic12.jpg";
import r from "../../my-app/src/photos/rag12.png";
import b from "../../my-app/src/photos/b4.png";
import kons from "../../my-app/src/photos/kons.png";
import neu from "../../my-app/src/photos/nor.png";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class GameDesign extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Scontainerg}>
        <View style={styles.containerg}>
          <Image style={styles.logo1g} source={neu} />
          <Text style={styles.text1g}> Game Design @ Northeastern</Text>
          {/* <Text style={styles.text22}>
            Designing Conversational Agents for healthcare and beyond
          </Text> */}

          <View style={styles.descriptionViewg}>
            <Text style={styles.posTitleTextg}>Game Design</Text>
            <Text style={styles.posTitleTextDateg}>(Sep 2020 - June 2021)</Text>

            <Text style={styles.descriptionTextg}>
              Tetris, Maze, Photo Editor, FreeCell, Mastermind, Dijkstra's
              algorithm, and comparison with BFS/DFS , Kruskal's,mMinimum
              spanning trees: Prim's and Kruskal's algorithms, Flood-it
            </Text>
          </View>
          <Text style={styles.smwTextg}>See more work:</Text>
          <View style={styles.workBoxg}>
            <View style={styles.flexDirColg}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover3g : styles.withoutHover3g
                      }
                      source={gene}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Generate </Text>
            </View>
            <View style={styles.flexDirColg}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover5g : styles.withoutHover5g
                      }
                      source={robotnb}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text> Research </Text>
            </View>
            <View style={styles.flexDirColg}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={
                        hovered ? styles.withHover4g : styles.withoutHover4g
                      }
                      source={k}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <Text style={styles.marg}> Translator </Text>
            </View>
            <View style={styles.flexDirColg}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity>
                    <Image
                      style={hovered ? styles.withHoverg : styles.withoutHoverg}
                      source={life}
                    />
                  </TouchableOpacity>
                )}
              </Hoverable>
              <View style={styles.flexDirColg}>
                <Text> Project Management,</Text>
                <Text>Website Design & Volunteering</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.backViewg}>
            <Image style={styles.backImageg} source={b} />
            <Text style={styles.backTextg}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  picg: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewg: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  backImageg: {
    width: 27,
    height: 27,
  },
  backTextg: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 6,
  },
  logo1g: {
    width: 210,
    height: 70,
    marginTop: 20,
  },
  spacerg: {
    width: 80,
    height: 100,
  },
  Scontainerg: {
    height: windowHeight + 140,
    backgroundColor: "#fffafa",
  },

  containerg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container2g: {
    flexDirection: "row",
    width: 900,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 53,
  },
  text1g: {
    fontWeight: "bold",
    fontSize: 46,
    marginTop: 9,
  },
  text22g: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  text2g: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
  },
  text3g: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 15,
    color: "#0645AD",
  },
  flexDirRowg: {
    flexDirection: "row",
  },
  workBoxg: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 35,
  },

  flexDirColg: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHoverg: {
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withHoverg: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withoutHover2g: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2g: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3g: {
    width: 199,
    height: 230,
    marginTop: -30,
  },
  withHover3g: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -30,
  },
  withoutHover4g: {
    width: 190,
    height: 165,
    marginTop: 33,
  },
  withHover4g: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 190,
    height: 165,
    marginTop: 33,
  },
  withoutHover5g: {
    width: 200,
    height: 230,
    marginTop: -17,
  },
  withHover5g: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 230,
    marginTop: -17,
  },
  posTitleTextg: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
    // color: "#FE4A71",
  },
  posTitleTextDateg: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
  },
  descriptionViewg: {
    width: 370,
    marginTop: 20,
  },
  descriptionTextg: {
    fontSize: 14,
    marginTop: 12,
  },

  smwTextg: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 65,
  },
  posTextg: {
    color: "#FE4A71",
  },
  marg: {
    marginTop: 11,
  },
});

export default GameDesign;
