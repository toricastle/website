import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import gen from "../../my-app/src/photos/g.png";
import heart from "../../my-app/src/photos/hnb.png";
import tutor from "../../my-app/src/photos/t2.png";
//import balls from "../../my-app/src/photos/s.png";
import b from "../../my-app/src/photos/b4.png";
import s from "../../my-app/src/photos/soccer.png";
import gene from "../../my-app/src/photos/lol1.png";
import robotnb from "../../my-app/src/photos/robot1.png";
import leaves from "../../my-app/src/photos/le.JPG";
import li from "../../my-app/src/photos/li.png";
import email from "../../my-app/src/photos/email.png";
import res from "../../my-app/src/photos/Resume.pdf";
import k from "../../my-app/src/photos/kon.png";
import life from "../../my-app/src/photos/life.png";
import game from "../../my-app/src/photos/game1.png";
import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Generate = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backView}>
          <Image style={styles.backImage} source={b} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Image style={styles.logo} source={gen} />
        <Text style={styles.text1}> My work @ Generate</Text>
        <Text style={styles.text4}>
          Northeastern’s student-led product development studio for
          entrepreneurial engineering
        </Text>
        <View style={styles.flexDirRow}>
          <Text style={styles.text2}>Generate's website: </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://web.northeastern.edu/generate/").catch(
                (err) => console.error("Couldn't load page", err)
              );
            }}
          >
            <Text style={styles.text3}>
              https://web.northeastern.edu/generate/
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <View style={styles.descriptionView}>
            <Text style={styles.posTitleText}>Software Engineer</Text>
            <Text style={styles.posTitleTextDate}>(Sept 2021 - Dec 2021)</Text>
            <Text style={styles.descriptionText}>
              At its core, ShowNxt is a video sharing social media app turning
              passion into opportunity Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>

            <View style={styles.container3}>
              <Image style={styles.logoScreen} source={s} />
              <View style={styles.rightStuff}>
                <View style={styles.techView}>
                  <Text style={styles.posTitleText}>Tech Stack: </Text>
                  <Text style={styles.techBulletPoints1}>
                    - React Native, Node.js
                  </Text>
                  <Text style={styles.techBulletPoints}>- GraphQL</Text>
                </View>
                <Image style={styles.logoHeart} source={heart} />
              </View>
            </View>
            {/* <View style={styles.centered}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    style={
                      hovered
                        ? styles.moreInfoButtonHover
                        : styles.moreInfoButton
                    }
                  >
                    More Details
                  </TouchableOpacity>
                )}
              </Hoverable>
              <TouchableOpacity style={styles.moreInfoButton}>
                More Details
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.posTitleText}>Project Lead</Text>
            <Text style={styles.posTitleTextDate}>(Dec 2021 - Present)</Text>

            {/* <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <View style={styles.container32}>
              <View style={styles.techView}>
                <Text style={styles.posTitleText}>Tech Stack: </Text>
                <Text style={styles.techBulletPoints1}>
                  - React Native, Node.js
                </Text>
                <Text style={styles.techBulletPoints}>- GraphQL</Text>
              </View>
              <Image style={styles.logoHeart} source={tutor} />
            </View> */}
            {/* WEBSITE SCREENSHOT HERE FOR TADPOLE!!! */}
            {/* <Image style={styles.logoHeart} source={heart} /> */}
            <Text style={styles.ipText}>
              This project is currently in Progress, more info will be added
              soon!
            </Text>
          </View>
        </View>

        <Text style={styles.smwText}>See more work:</Text>

        <View style={styles.workBox}>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover3 : styles.withoutHover3}
                    source={robotnb}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text> Research </Text>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover5 : styles.withoutHover5}
                    source={k}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text style={styles.marg1}> Translator </Text>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover : styles.withoutHover}
                    source={life}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <View style={styles.flexDirCol}>
              <Text> Project Management,</Text>
              <Text>Website Design & Volunteering</Text>
            </View>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity>
                  <Image
                    style={hovered ? styles.withHover4 : styles.withoutHover4}
                    source={game}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text style={styles.marg2}> Game Design </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backView: {
    position: "absolute",
    top: 70,
    left: 90,
    flexDirection: "row",
    alignItems: "center",
  },
  backImage: {
    width: 27,
    height: 27,
  },
  backText: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 6,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //backgroundColor: "#fff5ee", //beige
    //backgroundColor: "#f5fffa", // light mint green
    //backgroundColor: "#e0ffff", // light blue
    //backgroundColor: "#f0ffff", // light blue!!!!!!!
    backgroundColor: "#f0f8ff", // light blue!!!!!!!!!! even better
    height: windowHeight + 520,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 900,
    marginTop: 42,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
    marginTop: 20,
    alignItems: "center",
  },
  container32: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
    alignItems: "center",
    marginTop: 10,
  },
  flexDirRow: {
    flexDirection: "row",
  },
  logo: {
    width: 430,
    height: 70,
    marginTop: 35,
  },
  logoHeart: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginLeft: -7,
  },
  logoScreen: {
    width: 150,
    height: 320,
  },
  logoBall: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 21,
  },
  text4: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 4,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 6,
  },
  text3: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 6,
    color: "#0645AD",
  },
  rightStuff: {
    marginLeft: 20,
  },
  ipText: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 30,
  },
  posTitleText: {
    fontWeight: "bold",
    fontSize: 21,
  },
  posTitleTextDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 12,
  },
  techBulletPoints: {
    fontSize: 14,
  },
  techBulletPoints1: {
    fontSize: 14,
    marginTop: 6,
  },
  descriptionView: {
    width: 340,
  },
  techView: {
    width: 160,
  },
  moreInfoButton: {
    color: "red",
    fontSize: 26,
    //fontWeight: "bold",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "red",
    padding: 13,
    paddingLeft: 23,
    paddingRight: 20,
    alignItems: "center",
    marginTop: 23,
    shadowColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  moreInfoButtonHover: {
    color: "red",
    fontSize: 26,
    //fontWeight: "bold",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "red",
    padding: 13,
    paddingLeft: 23,
    paddingRight: 20,
    alignItems: "center",
    marginTop: 23,
    shadowColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 12,
    shadowOpacity: 0.5,
  },
  centered: {
    marginTop: 23,
    alignItems: "center",
  },
  smwText: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 55,
  },
  workBox: {
    //backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-evenly",
    //height: windowHeight / 4,
    width: (windowWidth * 32) / 40,
    marginTop: 20,
  },

  flexDirCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHover: {
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withHover: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withoutHover2: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3: {
    width: 170,
    height: 230,
    marginTop: -8,
  },
  withHover3: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 170,
    height: 230,
    marginTop: -8,
  },
  withoutHover4: {
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withHover4: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withoutHover5: {
    width: 200,
    height: 180,
    marginTop: 25,
  },
  withHover5: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 180,
    marginTop: 25,
  },
  marg1: {
    marginTop: 12,
  },
});

export default Generate;
