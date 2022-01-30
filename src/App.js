import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
} from "react-native";
import * as OpenAnything from "react-native-openanything";

import neu from "../../my-app/src/photos/nor.png";
import lb from "../../my-app/src/photos/lb1.png";
import l33 from "../../my-app/src/photos/l33.png";
import gen from "../../my-app/src/photos/lol1.png";
import gen2 from "../../my-app/src/photos/g.png";
import robotnb from "../../my-app/src/photos/robot1.png";
import leaves from "../../my-app/src/photos/le.JPG";
import li from "../../my-app/src/photos/li.png";
import email from "../../my-app/src/photos/email.png";
import res from "../../my-app/src/photos/Victoria Brennick Resume.pdf";
import life from "../../my-app/src/photos/life.png";
import k from "../../my-app/src/photos/kon.png";
import game from "../../my-app/src/photos/game1.png";
import b from "../../my-app/src/photos/b4.png";
import back from "../../my-app/src/photos/bg.jpg";
import pp from "../../my-app/src/photos/pp.jpg";
import s from "../../my-app/src/photos/soccer.png";
import heart from "../../my-app/src/photos/hnb.png";
import gene from "../../my-app/src/photos/lol1.png";
import pic from "../../my-app/src/photos/pic12.jpg";
import r from "../../my-app/src/photos/rag12.png";
import kons from "../../my-app/src/photos/kons.png";
//import video from "../../my-app/src/photos/t.mp4";

import { Hoverable } from "react-native-web-hover";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={styles.containerm}>
        {/* INTRO */}
        <ImageBackground style={styles.nameBox} source={leaves}>
          <View style={styles.threeTexts}>
            <Text style={styles.nameText}>Hi, I'm Victoria</Text>
            <View style={styles.flexDirRow}>
              <Text style={styles.nameText2}>An aspiring </Text>
              <Text style={styles.nameText22}>Software Engineer</Text>
            </View>

            <Text style={styles.nameText3}>
              I have experience in front-end development and have an eye for
              creative and beautiful UI/UX design, but I'm always looking to
              learn new things! I like making mobile apps and websites that make
              an impact on people. In my free time I design and code apps that
              make my life easier. I'm also interested in Human-Centered
              Computing and algorithms in Social Networks and Search Engines.
            </Text>
            <View style={styles.menuBox}>
              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    style={hovered ? styles.menuTextHover : styles.menuText}
                    onPress={() => navigation.navigate("AboutMe")}
                  >
                    About me
                  </TouchableOpacity>
                )}
              </Hoverable>

              <Hoverable>
                {({ hovered }) => (
                  <TouchableOpacity
                    style={hovered ? styles.menuTextHover : styles.menuText}
                    onPress={() => {
                      OpenAnything.Pdf(res);
                    }}
                  >
                    Resume
                  </TouchableOpacity>
                )}
              </Hoverable>
            </View>
          </View>
        </ImageBackground>
        {/* MENU BOX */}
        <View style={styles.column1}>
          <Text style={styles.eduText}> Education:</Text>
          <View style={styles.mTop}>
            <Text style={styles.text2}>Northeastern University (May 2024)</Text>
          </View>
          <Text style={styles.text2}>
            Candidate For Bachelor Of Computer Science
          </Text>
          <Text style={styles.text2}>
            Concentration in Human-Centered Computing
          </Text>
          <View style={styles.mTop2}>
            <Text style={styles.text22}>Relevant Courses:</Text>
            <Text style={styles.text2}>
              Fundamentals of Computer Science 1&2, Object-Oriented Design,
              Algorithms and Data, Human Computer Interaction, Computer Systems,
              Discrete Structures, Mathematics of Data Models, Foundations of
              Cybersecurity, Tech and Human values.
            </Text>
          </View>

          <Text style={styles.techText}> Technical skills:</Text>
          {/* 2 VIEW IN 1  */}
          <View style={styles.allSkills}>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> React Native</Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Java </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Git </Text>
              </View>
              <View style={styles.techBoxB}></View>
              <View style={styles.techBoxGreyB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Python </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Linux </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> C </Text>
              </View>
              <View style={styles.techBoxBBB}></View>
              <View style={styles.techBoxGreyBBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Adobe XD </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Adobe Illustrator </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> UI/UX Design </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>

            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Figma </Text>
              </View>
              <View style={styles.techBoxBB}></View>
              <View style={styles.techBoxGreyBB}></View>
            </View>
            <View style={styles.row1}>
              <View style={styles.techBoxSkillWithName}>
                <Text style={styles.skillText}> Premiere Pro </Text>
              </View>
              <View style={styles.techBox}></View>
              <View style={styles.techBoxGrey}></View>
            </View>
          </View>
        </View>
        {/* EXPERIENCE/PROJECTS */}
        <View>
          <Text style={styles.title}> My work:</Text>
        </View>
        <View style={styles.workBox}>
          <View style={styles.flexDirCol}>
            <Hoverable onPress={() => navigation.navigate("Generate")}>
              {({ hovered }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Generate")}
                >
                  <Image
                    style={hovered ? styles.withHover2 : styles.withoutHover2}
                    source={gen}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <View style={styles.lexDirCol}>
              <Text> Project Management &</Text>
              <Text style={styles.marg}>Software Engineering </Text>
            </View>
          </View>

          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Rag")}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Translator")}
                >
                  <Image
                    style={hovered ? styles.withHover7 : styles.withoutHover7}
                    source={k}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Text style={styles.workTextMargin}> Translator </Text>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Lifeboat")}
                >
                  <Image
                    style={hovered ? styles.withHover : styles.withoutHover}
                    source={life}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <View style={styles.flexDirCol}>
              <Text style={styles.workTextMargin}> Project Management,</Text>
              <Text> Website Design & Volunteering</Text>
            </View>
          </View>
          <View style={styles.flexDirCol}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("GameDesign")}
                >
                  <Image
                    style={hovered ? styles.withHover4 : styles.withoutHover4}
                    source={game}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>

            <Text style={styles.workTextMargin2}> Game Design </Text>
          </View>
        </View>
        <View style={styles.menuBox2}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://www.linkedin.com/in/victoria-brennick-8638031b9"
                  ).catch((err) => console.error("Couldn't load page", err));
                }}
              >
                <Image
                  style={hovered ? styles.withHoverIn : styles.withoutHoverIn}
                  source={li}
                />
              </TouchableOpacity>
            )}
          </Hoverable>

          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => {
                  OpenAnything.Email("vikawb02@gmail.com");
                }}
              >
                <Image
                  style={hovered ? styles.withHoverE : styles.withoutHoverE}
                  source={email}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
        </View>
        <Text style={styles.marginT}> Copyright © 2021 Victoria Brennick </Text>
      </View>
    </View>
  );
}

function AboutMe({ navigation }) {
  return (
    <View>
      <ImageBackground
        style={styles.backPica}
        resizeMode="repeat"
        source={back}
      >
        <View style={styles.containera}>
          <View style={styles.textContainera}>
            <View style={styles.row1a}>
              <Image style={styles.profilePica} source={pp} />
              <View style={styles.spacera}> </View>
              <View style={styles.allTexta}>
                <Text style={styles.name}> Victoria Brennick </Text>
                <Text style={styles.desa}>
                  When I'm not coding, I'm usually traveling in the mountains,
                  national parks, or to new cities. On this page, I added some
                  pictures from my recent travels.
                </Text>
                <Text style={styles.des1a}>
                  As for my hobbies, I enjoy making short films and I am
                  currently making my third one. I love horseback riding and
                  going on trail rides in forests. I'm a falconry enthusiast and
                  can talk about birds for hours. Lastly, I love
                  philosophy/ethics, debating controversial topics, and
                  listening to what other people have to say.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.menuBox2a}>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      "https://www.linkedin.com/in/victoria-brennick-8638031b9"
                    ).catch((err) => console.error("Couldn't load page", err));
                  }}
                >
                  <Image
                    style={
                      hovered ? styles.withHoverIna : styles.withoutHoverIna
                    }
                    source={li}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
            <Hoverable>
              {({ hovered }) => (
                <TouchableOpacity
                  onPress={() => {
                    OpenAnything.Email("vikawb02@gmail.com");
                  }}
                >
                  <Image
                    style={hovered ? styles.withHoverEa : styles.withoutHoverEa}
                    source={email}
                  />
                </TouchableOpacity>
              )}
            </Hoverable>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.backViewa}
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
      >
        <Image style={styles.backImagea} source={b} />
        <Text style={styles.backTexta}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

function Generate({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backView}
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
      >
        <Image style={styles.backImage} source={b} />
        <Text style={styles.backText}>BACK TO HOME</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={gen2} />
      <Text style={styles.text1}> My work @ Generate</Text>
      <Text style={styles.text4}>
        Northeastern’s student-led product development studio for
        entrepreneurial engineering
      </Text>
      <View style={styles.flexDirRow}>
        <Text style={styles.text2g}>Generate's website: </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://web.northeastern.edu/generate/").catch(
              (err) => console.error("Couldn't load page", err)
            );
          }}
        >
          <Text style={styles.text3}>web.northeastern.edu/generate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <View style={styles.descriptionView}>
          <Text style={styles.posTitleText}>Software Engineer</Text>
          <Text style={styles.posTitleTextDate}>(Sept 2021 - Dec 2021)</Text>
          <Text style={styles.descriptionText}>
            In the Fall of my Sophmore year of college I worked on a team of
            Software Engineers, UI/UX and Brand designers to build the ShowNxt
            app from scratch. ShowNxt is a video-sharing social media app
            turning passion into opportunity, starting in the world of
            collegiate soccer recruiting. On ShowNxt, athletes can showcase
            themselves to the world by posting highlights and connecting with
            college coaches. Our team built out an app that allows athletes to
            easily share their profiles directly to college athletic programs
            and allows coaches to quickly evaluate athletes by viewing their
            profiles.
          </Text>
        </View>
        {/* THREE IMAGES */}
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
      </View>
      <View style={styles.container2}>
        <View style={styles.descriptionView}>
          <Text style={styles.posTitleText}>Project Lead</Text>
          <Text style={styles.posTitleTextDate}>(Dec 2021 - Present)</Text>

          {/* <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
            This project is currently in Progress, more info will be added soon!
          </Text>
        </View>
      </View>

      <Text style={styles.smwText}>See more work:</Text>

      <View style={styles.workBoxg}>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Rag")}>
                <Image
                  style={hovered ? styles.withHover3g : styles.withoutHover3g}
                  source={robotnb}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text style={styles.pagesTitleText1}> Research </Text>
        </View>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Translator")}
              >
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
              <TouchableOpacity onPress={() => navigation.navigate("Lifeboat")}>
                <Image
                  style={hovered ? styles.withHoverg : styles.withoutHoverg}
                  source={life}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <View style={styles.flexDirCol}>
            <Text style={styles.pagesTitleText}> Project Management,</Text>
            <Text style={styles.pagesTitleText}>
              Website Design & Volunteering
            </Text>
          </View>
        </View>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("GameDesign")}
              >
                <Image
                  style={hovered ? styles.withHover4 : styles.withoutHover4}
                  source={game}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text style={styles.pagesTitleText2}> Game Design </Text>
        </View>
      </View>
      {/* ..................................................... */}
      {/* THIS IS CODE FOR PINK "MORE DETAILS" BUTTON */}
      {/* ..................................................... */}
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
  );
}

function Rag({ navigation }) {
  return (
    <View style={styles.containerr}>
      <Image style={styles.logo1} source={r} />
      <Text style={styles.text1r}> My work @ RAG</Text>
      <Text style={styles.text22r}>
        Designing Conversational Agents for healthcare and beyond
      </Text>
      <View style={styles.flexDirRow}>
        <Text style={styles.text2r}>RAG's website: </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("http://relationalagents.com/index.html").catch(
              (err) => console.error("Couldn't load page", err)
            );
          }}
        >
          <Text style={styles.text3r}>relationalagents.com</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2r}>
        <View style={styles.descriptionViewr}>
          <Text style={styles.posTitleTextr}>Research Assistant</Text>
          <Text style={styles.posTitleTextDater}>(May 2021 - Present)</Text>

          <Text style={styles.descriptionTextr}>
            At RAG I help with tasks that the Ph.D. students at the lab need
            help with. For example, I run research studies from start to end.
            First I would start with setting up the study and figuring out all
            of the details. Then I run human subject studies involving the use
            of computer aids (relational agents) for improving health education
            and social interaction. Finally, I prepare and maintain study
            documentation while safeguarding the confidentiality of subjects and
            pass over all the data to get analyzed. For certain studies, I also
            create data collection measures using Qualtrics.
          </Text>
        </View>
        <View style={styles.spacer}> </View>
        <Image style={styles.pic} source={pic} />
      </View>
      <Text style={styles.smwTextr}>See more work:</Text>
      <View style={styles.workBoxr}>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Generate")}>
                <Image
                  style={hovered ? styles.withHover3r : styles.withoutHover3r}
                  source={gene}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Generate </Text>
        </View>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Translator")}
              >
                <Image
                  style={hovered ? styles.withHover5r : styles.withoutHover5r}
                  source={k}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Translator </Text>
        </View>
        <View style={styles.flexDirCol}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Lifeboat")}>
                <Image
                  style={hovered ? styles.withHoverr : styles.withoutHoverr}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("GameDesign")}
              >
                <Image
                  style={hovered ? styles.withHover4 : styles.withoutHover4}
                  source={game}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Game Design </Text>
        </View>
      </View>
      {/* <View style={styles.flexDirRow}>
        <Text> Generate </Text>
        <Text> Translator </Text>
        <Text> Game Design </Text>
        <View style={styles.flexDirCol}>
          <Text> Project Management,</Text>
          <Text>Website Design & Volunteering</Text>
        </View>
      </View> */}
      <TouchableOpacity
        style={styles.backViewr}
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
      >
        <Image style={styles.backImager} source={b} />
        <Text style={styles.backTextr}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

function Translator({ navigation }) {
  //const video1 = React.useRef(null);
  return (
    <View style={styles.containert}>
      <Image style={styles.logo1t} source={kons} />
      <Text style={styles.text1t}> My work @ Konstanta+</Text>

      <View style={styles.flexDirRowt}>
        <Text style={styles.text2t}>Konstanta's website: </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://pkbc.ru/").catch((err) =>
              console.error("Couldn't load page", err)
            );
          }}
        >
          <Text style={styles.text3t}>pkbc.ru</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionViewt}>
        <Text style={styles.posTitleTextt}>Translator</Text>
        <Text style={styles.posTitleTextDatet}>(Sep 2018 - Mar 2020)</Text>

        <Text style={styles.descriptionTextt}>
          Konstanta+ designs compost sites, provides composting technology, and
          is engaged in the development and production of microbiological
          fertilizers. I worked in their aviation sector where they made
          agricultural aircrafts for aerial topdressing, where I interpreted at
          1-2 hours conferences from Spanish to Russian and vice versa while
          utilizing aviation terminology.
        </Text>
      </View>
      <Text style={styles.smwTextt}>See more work:</Text>
      <View style={styles.workBoxt}>
        <View style={styles.flexDirColt}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Generate")}>
                <Image
                  style={hovered ? styles.withHover3t : styles.withoutHover3t}
                  source={gene}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Generate </Text>
        </View>
        <View style={styles.flexDirColt}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Rag")}>
                <Image
                  style={hovered ? styles.withHover5t : styles.withoutHover5t}
                  source={robotnb}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Research </Text>
        </View>
        <View style={styles.flexDirColt}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Lifeboat")}>
                <Image
                  style={hovered ? styles.withHovert : styles.withoutHovert}
                  source={life}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <View style={styles.flexDirColt}>
            <Text style={styles.marg1t}> Project Management,</Text>
            <Text>Website Design & Volunteering</Text>
          </View>
        </View>
        <View style={styles.flexDirColt}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("GameDesign")}
              >
                <Image
                  style={hovered ? styles.withHover4t : styles.withoutHover4t}
                  source={game}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text style={styles.marg1t}> Game Design </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.backViewt}
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
      >
        <Image style={styles.backImaget} source={b} />
        <Text style={styles.backTextt}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

function Lifeboat({ navigation }) {
  return (
    <View style={styles.containerl}>
      <Image style={styles.logo1l} source={lb} />
      <Text style={styles.text1l}> My work @ Lifeboat</Text>
      {/* <Text style={styles.text22}>
            Designing Conversational Agents for healthcare and beyond
          </Text> */}
      <View style={styles.flexDirRowl}>
        <Text style={styles.text2l}>Lifeboat's website: </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.lifeboatboston.org/").catch((err) =>
              console.error("Couldn't load page", err)
            );
          }}
        >
          <Text style={styles.text3l}>www.lifeboatboston.org</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text4l}>
        (This is not the website that was designed by my team!){" "}
      </Text>

      <View style={styles.container2l}>
        <View style={styles.descriptionViewl}>
          <Text style={styles.posTitleTextl}>Project Lead</Text>
          <Text style={styles.posTitleTextDatel}>
            (July 2021 - August 2021)
          </Text>
          <Text style={styles.descriptionTextl}>
            Lifeboat Boston is a developing non-profit organization based in the
            Fenway neighborhood that provides food assistance to community
            residents in several Boston neighborhoods. I managed a team of
            designers and researchers working on different projects at Lifeboat
            to improve the community members' experience at Lifeboat food bank.
          </Text>
        </View>
        {/* IMAGE */}
        <View style={styles.spacerl}> </View>
        <Image style={styles.logoScreenl} source={l33} />
      </View>

      <View style={styles.container2l}>
        <View style={styles.descriptionViewl}>
          <Text style={styles.posTitleTextl}>Website Designer</Text>
          <Text style={styles.posTitleTextDatel}>
            (July 2021 - August 2021)
          </Text>
          <Text style={styles.descriptionTextl}>
            Drew upon skills in web design, marketing, health and nutrition, and
            food systems research to build a Community Food Board website for
            Lifeboat. We would get feedback in our weekly meetings and make
            changes based on that.
          </Text>
        </View>
        <View style={styles.spacerl2}> </View>
        <View style={styles.descriptionViewl}>
          <Text style={styles.posTitleTextl}>Volunteering</Text>
          <Text style={styles.posTitleTextDatel}>
            (July 2021 - August 2021)
          </Text>
          <Text style={styles.descriptionTextl}>
            Volunteered at Lifeboat food bank 2-3 times a month. I would come
            for a couple of hours to help sort food into boxes based on what
            neighborhood they would get sent to and then would distribute the
            rest of the food to people who would come pick up food in person.
          </Text>
        </View>
        {/* IMAGE */}
        {/* <View style={styles.spacerl}> </View>
        <Image style={styles.logoScreen2l} source={l22} /> */}
      </View>

      <Text style={styles.smwTextl}>See more work:</Text>
      <View style={styles.workBoxl}>
        <View style={styles.flexDirColl}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Generate")}>
                <Image
                  style={hovered ? styles.withHover3l : styles.withoutHover3l}
                  source={gene}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Generate </Text>
        </View>
        <View style={styles.flexDirColl}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Rag")}>
                <Image
                  style={hovered ? styles.withHover5l : styles.withoutHover5l}
                  source={robotnb}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Research </Text>
        </View>
        <View style={styles.flexDirColl}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Translator")}
              >
                <Image
                  style={hovered ? styles.withHoverl : styles.withoutHoverl}
                  source={k}
                />
              </TouchableOpacity>
            )}
          </Hoverable>

          <Text style={styles.marg1l}> Translator</Text>
        </View>
        <View style={styles.flexDirColl}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("GameDesign")}
              >
                <Image
                  style={hovered ? styles.withHover4l : styles.withoutHover4l}
                  source={game}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text> Game Design </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.backViewl}
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
      >
        <Image style={styles.backImagel} source={b} />
        <Text style={styles.backTextl}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

function GameDesign({ navigation }) {
  return (
    <View style={styles.containerg}>
      <Image style={styles.logo1g} source={neu} />
      <Text style={styles.text1g}> Game Design @ Northeastern</Text>
      <View style={styles.descriptionViewg}>
        <Text style={styles.posTitleTextg}>Game Design</Text>
        <Text style={styles.posTitleTextDateg}>(Sep 2020 - June 2021)</Text>

        <Text style={styles.descriptionTextg}>
          - Made Tetris in Racket in Fundamentals of Computer Science 1 course
        </Text>
        <Text style={styles.descriptionTextg}>
          - Made Mastermind, Flood-it, Maze games in Java in Fundamentals of
          Computer Science 2 course. The Maze could solve itself by using
          Breadth First Search or Depth First Search. I worked with a partner in
          both of these classes
        </Text>
        <Text style={styles.descriptionTextg}>
          - Made FreeCell game and Photo Editor in Java with a partner in
          Object-Oriented Design course
        </Text>
      </View>
      {/* VIDEO HERE */}

      <Text style={styles.smwTextg}>See more work:</Text>
      <View style={styles.workBoxg}>
        <View style={styles.flexDirColg}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Generate")}>
                <Image
                  style={hovered ? styles.withHover3g : styles.withoutHover3g}
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
              <TouchableOpacity onPress={() => navigation.navigate("Rag")}>
                <Image
                  style={hovered ? styles.withHover5g : styles.withoutHover5g}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("Translator")}
              >
                <Image
                  style={hovered ? styles.withHover4g : styles.withoutHover4g}
                  source={k}
                />
              </TouchableOpacity>
            )}
          </Hoverable>
          <Text style={styles.margg}> Translator </Text>
        </View>
        <View style={styles.flexDirColg}>
          <Hoverable>
            {({ hovered }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Lifeboat")}>
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
      <TouchableOpacity
        onPress={() => navigation.navigate("Victoria Brennick | Portfolio")}
        style={styles.backViewg}
      >
        <Image style={styles.backImageg} source={b} />
        <Text style={styles.backTextg}>BACK TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Victoria Brennick | Portfolio">
        <Stack.Screen
          name="Victoria Brennick | Portfolio"
          component={HomeScreen}
        />
        <Stack.Screen name="AboutMe" component={AboutMe} />
        <Stack.Screen name="Generate" component={Generate} />
        <Stack.Screen name="Rag" component={Rag} />
        <Stack.Screen name="Translator" component={Translator} />
        <Stack.Screen name="Lifeboat" component={Lifeboat} />
        <Stack.Screen name="GameDesign" component={GameDesign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  /////////////////////////////
  //////// MAIN PAGE //////////
  /////////////////////////////

  // withoutHover: {
  //   width: 190 * (windowWidth / 1436),
  //   height: 180 * (windowHeight / 764),
  //   marginTop: 15,
  // },

  withoutHover: {
    width: 190,
    height: 180,
    marginTop: 15,
  },

  withHover: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 190,
    height: 180,
    marginTop: 15,
  },
  withoutHover7: {
    width: 205,
    height: 180,
    marginTop: 26,
    marginLeft: 19,
  },
  withHover7: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 205,
    height: 180,
    marginTop: 26,
    marginLeft: 19,
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
  },
  withHover3: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 170,
    height: 230,
  },
  mTop: {
    marginTop: 10,
  },
  mTop2: {
    marginTop: 6,
  },
  containerm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: windowHeight + 575,
  },
  nameBox: {
    margin: 0,
    alignSelf: "flex-start",
    height: windowHeight - 70,
    width: (windowWidth * 3.75) / 6,
    padding: 10,
    alignItems: "center",
  },
  threeTexts: {
    alignItems: "center",
    marginTop: windowHeight / 2 - 200,
    flex: "column",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 55,
    alignSelf: "center",
    alignItems: "center",
    fontFamily: "Roboto-Bold",
  },
  nameText2: {
    fontWeight: "bold",
    fontSize: 55,
    marginTop: -2,
    alignSelf: "center",
    fontFamily: "Roboto-Bold",
  },
  nameText22: {
    fontWeight: "bold",
    fontSize: 55,
    marginTop: -2,
    alignSelf: "center",
    color: "green",
    fontFamily: "Roboto-Bold",
  },
  nameText3: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    alignSelf: "center",
    margin: 80,
    fontFamily: "Roboto-Bold",
  },
  menuBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: windowWidth / 3,
    padding: 10,
    marginTop: -40,
  },
  menuBox2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: windowWidth / 7,
    padding: 10,
    marginTop: 110,
    marginRight: -20,
    alignItems: "center",
  },
  workBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 195 * (windowHeight / 764),
    width: (windowWidth * 36) / 40,
    marginTop: 60,
  },
  workDescriptionsBox: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 50,
  },
  menuText: {
    fontSize: 27,
    fontWeight: "bold",
    borderRadius: 9,
    borderWidth: 1,
    padding: 8,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    fontFamily: "Roboto-Bold",
  },

  menuTextHover: {
    fontSize: 27,
    fontWeight: "bold",
    borderRadius: 9,
    borderWidth: 1,
    padding: 8,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 12,
    shadowOpacity: 0.6,
    fontFamily: "Roboto-Bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    justifyContent: "flex-end",
    width: 1000,
    marginTop: 115,
    fontFamily: "Roboto-Bold",
  },
  titleContact: {
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 75,
  },
  column1: {
    flex: "column",
    backgroundColor: "#d3d3d3", // a darker background color
    // backgroundColor: "#f5f5f5", // a lightter background color
    position: "absolute",
    top: 20,
    right: 35,
    width: 502,
    borderRadius: 13,
    paddingLeft: 11,
    paddingRight: 11,
    paddingBottom: 20,
  },
  row1: {
    marginTop: 10,
    marginLeft: 20,
    width: 400,
    flexDirection: "row",
  },
  eduText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 22,
    fontFamily: "Roboto-Bold",
  },
  text2: {
    fontSize: 17,
    paddingLeft: 20,
  },
  text22: {
    fontSize: 17,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  techText: {
    marginTop: 17,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold",
  },
  techBoxGrey: {
    // GREY
    height: 27,
    width: 90,
    backgroundColor: "#dcdcdc",
  },
  techBox: {
    // DARK GREEN
    height: 27,
    width: 190,
    backgroundColor: "#2e8b57",
  },

  techBoxGreyB: {
    // GREY
    height: 27,
    width: 150,
    backgroundColor: "#dcdcdc",
  },
  techBoxB: {
    // DARK GREEN
    height: 27,
    width: 130,
    backgroundColor: "#2e8b57",
  },

  techBoxGreyBB: {
    // GREY
    height: 27,
    width: 190,
    backgroundColor: "#dcdcdc",
  },
  techBoxBB: {
    // DARK GREEN
    height: 27,
    width: 90,
    backgroundColor: "#2e8b57",
  },

  techBoxGreyBBB: {
    // GREY
    height: 27,
    width: 230,
    backgroundColor: "#dcdcdc",
  },
  techBoxBBB: {
    // DARK GREEN
    height: 27,
    width: 50,
    backgroundColor: "#2e8b57",
  },
  techBoxSkillWithName: {
    // LIGHT GREEN
    height: 27,
    width: 130,
    backgroundColor: "#3cb371",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  skillText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  level: {
    width: 130,
    justifyContent: "flex-end",
    position: "absolute",
    top: 275,
    right: -56,
    color: "#dcdcdc",
  },
  flexDirRow: {
    flexDirection: "row",
  },
  // flexDirCol: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  allSkills: {
    marginTop: 10,
  },
  marg: {
    marginLeft: 6,
  },

  marginT: {
    marginTop: 13,
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
  workTextMargin: {
    marginTop: 23,
  },
  workTextMargin2: {
    marginTop: 23,
  },
  withoutHoverIn: {
    width: 35,
    height: 35,
  },
  withHoverIn: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    width: 35,
    height: 35,
  },
  withoutHoverE: {
    width: 43,
    height: 30,
  },
  withHoverE: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 43,
    height: 30,
  },
  //////////////////////////////
  //////// ABOUT ME PAGE ///////
  //////////////////////////////

  backViewa: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 27,
    borderWidth: 2,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  backImagea: {
    width: 25,
    height: 25,
  },
  backTexta: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  containera: {
    display: "flex",
    alignItems: "center",
  },

  backPica: {
    height: windowHeight,
    width: windowWidth,
  },
  spacera: {
    height: 2,
    width: 40,
  },
  profilePica: {
    width: 200,
    height: 200,
    borderRadius: 190,
  },
  allTexta: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginTop: -27,
    fontSize: 32,
    fontFamily: "DMSans-Regular",
  },
  desa: {
    fontSize: 15,
    width: 315,
    marginTop: 10,
    fontFamily: "DMSans-Regular",
  },
  des1a: {
    fontSize: 15,
    width: 315,
    fontFamily: "DMSans-Regular",
  },
  textContainera: {
    backgroundColor: "white",
    height: 450,
    width: 665,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 150,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  row1a: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  withoutHoverIna: {
    width: 35,
    height: 35,
  },
  withHoverIna: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    width: 35,
    height: 35,
  },
  withoutHoverEa: {
    width: 43,
    height: 30,
  },
  withHoverEa: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 43,
    height: 30,
  },
  menuBox2a: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: windowWidth / 7,
    padding: 10,
    marginTop: -76,
    marginRight: -10,
    alignItems: "center",
  },

  //////////////////////
  /////GENERATE/////////
  //////////////////////

  backView: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    shadowColor: "#202020",
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  backImage: {
    width: 25,
    height: 25,
  },
  backText: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: windowHeight + 480,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 780,
    marginTop: 42,
    color: "yellow",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
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
    marginLeft: 5,
    width: 150 * 1.1,
    height: 320 * 1.1,
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
    fontFamily: "DMSans-Medium",
  },
  text4: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 4,
    fontFamily: "DMSans-Regular",
  },
  text2g: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 6,
    fontFamily: "DMSans-Regular",
  },
  text3: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 6,
    color: "#0645AD",
    fontFamily: "DMSans-Regular",
  },
  rightStuff: {
    marginLeft: 20,
  },
  ipText: {
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 18,
    fontFamily: "DMSans-Regular",
  },
  posTitleText: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "DMSans-Regular",
  },
  posTitleTextDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    fontFamily: "DMSans-Regular",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 12,
    fontFamily: "DMSans-Regular",
  },
  techBulletPoints: {
    fontSize: 14,
    fontFamily: "DMSans-Regular",
  },
  techBulletPoints1: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: "DMSans-Regular",
  },
  descriptionView: {
    width: 370,
  },
  techView: {
    width: 160,
  },
  moreInfoButton: {
    color: "red",
    fontSize: 26,
    fontFamily: "DMSans-Regular",
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
    fontFamily: "DMSans-Regular",
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
    marginTop: 65,
    fontFamily: "DMSans-Regular",
  },
  workBoxg: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 32) / 40,
    marginTop: 20,
  },

  flexDirCol: {
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
  withoutHover3g: {
    width: 170,
    height: 230,
    marginTop: -8,
  },
  withHover3g: {
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
    fontFamily: "DMSans-Regular",
  },
  up: {
    marginTop: -40,
  },

  pagesTitleText1: {
    fontFamily: "DMSans-Regular",
    marginTop: 8,
  },
  pagesTitleText2: {
    fontFamily: "DMSans-Regular",
    marginTop: 12,
  },
  pagesTitleText: {
    fontFamily: "DMSans-Regular",
  },

  ///////////////////////////////////////
  ////////////////RAG///////////////////
  //////////////////////////////////////

  pic: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewr: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    shadowColor: "#202020",
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  backImager: {
    width: 25,
    height: 25,
  },
  backTextr: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  logo1: {
    width: 440,
    height: 90,
    marginTop: 15,
  },
  spacer: {
    width: 80,
    height: 100,
  },
  Scontainer: {
    backgroundColor: "#fffafa",
  },

  containerr: {
    height: windowHeight + 205,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container2r: {
    flexDirection: "row",
    width: 900,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },
  text1r: {
    //fontWeight: "bold",
    fontSize: 50,
    marginTop: 5,
    fontFamily: "Exo2-SemiBold",
  },
  text22r: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 5,
    fontFamily: "Exo2-ExtraLight",
  },
  text2r: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 8,
    fontFamily: "Exo2-ExtraLight",
  },
  text3r: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 8,
    color: "#0645AD",
    fontFamily: "Exo2-ExtraLight",
  },
  descriptionTextr: {
    fontSize: 15.4,
    marginTop: 12,
    //fontFamily: "Exo2-Regular",
  },
  flexDirRow: {
    flexDirection: "row",
  },
  workBoxr: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 5,
  },

  flexDirCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //OK
  },

  withoutHoverr: {
    width: 180,
    height: 180,
    marginTop: 15,
  },
  withHoverr: {
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
    //OK
  },
  withHover2: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
    //OK
  },
  withoutHover3r: {
    width: 199,
    height: 230,
    marginTop: -10,
  },
  withHover3r: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -10,
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
  withoutHover5r: {
    width: 200,
    height: 180,
    marginTop: 15,
  },
  withHover5r: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 180,
    marginTop: 15,
  },
  posTitleTextr: {
    fontWeight: "bold",
    fontSize: 21,
  },
  posTitleTextDater: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    //OK
  },
  descriptionViewr: {
    width: 370,
    marginTop: 20,
  },

  smwTextr: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 69,
    fontFamily: "DMSans-Regular",
  },

  /////////////////////////////////////////////
  ///////////////TRANSLATOR////////////////////
  /////////////////////////////////////////////

  video: {
    height: 700,
    width: 400,
  },

  pict: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewt: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    shadowColor: "#202020",
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  backImaget: {
    width: 25,
    height: 25,
  },
  backTextt: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  logo1t: {
    width: 282,
    height: 110,
    marginTop: 30,
  },
  spacert: {
    width: 80,
    height: 100,
  },
  Scontainert: {
    height: windowHeight + 140,
    // backgroundColor: "#f0f8ff",
  },

  containert: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "#f0f8ff",
    height: windowHeight + 120,
  },
  // container2: {
  //   flexDirection: "row",
  //   width: 900,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 53,
  // },
  text1t: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 19,
    fontFamily: "DMSans-Regular",
  },
  text22t: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    fontFamily: "DMSans-Regular",
  },
  text2t: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 8,
    fontFamily: "DMSans-Regular",
  },
  text3t: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 8,
    fontFamily: "DMSans-Regular",
    color: "#0645AD",
  },
  flexDirRowt: {
    flexDirection: "row",
  },
  workBoxt: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 4,
  },

  flexDirColt: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHovert: {
    width: 180,
    height: 180,
    marginTop: 25,
  },
  withHovert: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 180,
    height: 180,
    marginTop: 25,
  },
  withoutHover2t: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3t: {
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withHover3t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withoutHover4t: {
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withHover4t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 15,
  },
  withoutHover5t: {
    width: 200,
    height: 230,
    marginTop: 10,
  },
  withHover5t: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 230,
    marginTop: 10,
  },
  posTitleTextt: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 20,
    fontFamily: "DMSans-Regular",
    // color: "#FE4A71",
  },
  posTitleTextDatet: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    fontFamily: "DMSans-Regular",
    //marginTop: ,
  },
  descriptionViewt: {
    width: 440,
    marginTop: 10,
  },
  descriptionTextt: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: "DMSans-Regular",
  },

  smwTextt: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 45,
    fontFamily: "DMSans-Regular",
  },
  posTextt: {
    color: "#FE4A71",
  },
  marg1t: {
    marginTop: 12,
  },

  //////////////////////////////////////////////////////////////////
  ////////////////////////////LIFEBOAT//////////////////////////////
  //////////////////////////////////////////////////////////////////

  picl: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewl: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    shadowColor: "#202020",
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  backImagel: {
    width: 25,
    height: 25,
  },
  backTextl: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  logo1l: {
    width: 232,
    height: 80,
    marginTop: 24,
  },
  logoScreenl: {
    width: 700,
    height: 240,
    marginTop: 34,
  },
  logoScreen2l: {
    width: 700,
    height: 200,
    marginTop: 34,
  },
  spacerl: {
    width: 40,
    height: 100,
  },
  spacerl2: {
    width: 80,
    height: 100,
  },

  containerl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: windowHeight + 428,
  },
  container2l: {
    flexDirection: "row",
    width: 800,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
  text1l: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 19,
    fontFamily: "DMSans-Regular",
  },
  text22l: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    fontFamily: "DMSans-Regular",
  },
  text2l: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 7,
    fontFamily: "DMSans-Regular",
  },
  text3l: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 7,
    color: "#0645AD",
    fontFamily: "DMSans-Regular",
  },
  text4l: {
    // fontWeight: "bold",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "DMSans-Regular",
  },
  flexDirRowl: {
    flexDirection: "row",
  },
  workBoxl: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: (windowWidth * 36) / 40,
    marginTop: 15,
  },

  flexDirColl: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  withoutHoverl: {
    width: 200,
    height: 170,
    marginTop: 30,
  },
  withHoverl: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 170,
    marginTop: 30,
  },
  withoutHover2l: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withHover2l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 200,
    marginTop: 15,
  },
  withoutHover3l: {
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withHover3l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 199,
    height: 230,
    marginTop: -8,
  },
  withoutHover4l: {
    width: 239,
    height: 180,
    marginTop: 38,
  },
  withHover4l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 239,
    height: 180,
    marginTop: 38,
  },
  withoutHover5l: {
    width: 200,
    height: 230,
    marginTop: 2,
  },
  withHover5l: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    width: 200,
    height: 230,
    marginTop: 2,
  },
  posTitleTextl: {
    fontWeight: "bold",
    fontSize: 21,
    marginTop: 20,
    color: "#245a36",
    fontFamily: "DMSans-Regular",
  },
  posTitleTextDatel: {
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    fontFamily: "DMSans-Regular",
  },
  descriptionViewl: {
    width: 370,
    marginTop: 20,
  },
  descriptionTextl: {
    fontSize: 15,
    marginTop: 12,
    fontFamily: "DMSans-Regular",
  },

  smwTextl: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 75,
    fontFamily: "DMSans-Regular",
  },
  posTextl: {
    color: "#FE4A71",
  },
  marg1l: {
    marginTop: 25,
  },

  ////////////////////////////////////////////////
  //////////////////GAME DESIGN///////////////////
  ////////////////////////////////////////////////
  picg: {
    height: 300,
    width: 400,
    borderRadius: 17,
  },
  backViewg: {
    position: "absolute",
    top: 70,
    left: 75,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
    shadowColor: "#202020",
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowRadius: 8,
    shadowOpacity: 0.5,
  },
  backImageg: {
    width: 25,
    height: 25,
  },
  backTextg: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 6,
  },
  logo1g: {
    width: 210,
    height: 70,
    marginTop: 30,
  },
  spacerg: {
    width: 80,
    height: 100,
  },

  containerg: {
    height: windowHeight + 95,
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
    marginTop: 18,
    fontFamily: "Exo2-SemiBold",
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
    marginTop: 8,
    // color: "#540707",
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
    fontSize: 15,
    marginTop: 12,
    fontFamily: "Exo2-Regular",
  },
  smwTextg: {
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 51,
    fontFamily: "DMSans-Regular",
  },
  posTextg: {
    color: "#FE4A71",
  },
  margg: {
    marginTop: 11,
  },
});

export default App;
