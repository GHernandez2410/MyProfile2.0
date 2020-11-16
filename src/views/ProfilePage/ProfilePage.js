/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import CardContent from '@material-ui/core/CardContent';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Code from "@material-ui/icons/Code";
import Palette from "@material-ui/icons/Palette";
import GitHub from "@material-ui/icons/GitHub";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
// images
import profile from "assets/img/faces/me.jpg";
import landing from "assets/img/iceland.jpeg";
import syros from "assets/img/syros.jpg";
import athens from "assets/img/athns.jpg";
import surf from "assets/img/surf.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

import pdf from '../../assets/files/CV.pdf';

const useStyles = makeStyles(styles);

const instagramLink = 'https://www.instagram.com/masato.raw/';
const githubLink = 'https://github.com/GHernandez2410';

const portfolioData = [
  {
    name: 'This Webpage',
    link: 'https://github.com/GHernandez2410/MyProfile',
    stack: 'ReactJs + Material UI + Firebase Hosting'
  },
  {
    name: 'ÜPics',
    link: 'https://github.com/GHernandez2410/Upics',
    stack: 'ReactJs + GoogleApi + Semantic UI'
  },
  {
    name: 'FakeYoutube',
    link: 'https://github.com/GHernandez2410/MyYoutube',
    stack: 'ReactJs + YoutubeApi + GoogleApi + Semantic UI'
  },
];

const frontEndData = ['React','Typescript','Javascript', 'Npm/Yarn', 'Redux', 'HTML', 'CSS', 'Semantic UI/Material UI/Antdesign'];
const backEndData = ['NodeJs', 'ExpressJs','Rest Web Services', 'Microservices','Docker', 'Insomnia/Postgres'];
const dataBaseData = ['PostgreSql', 'Firebase'];
const organizationData = ['Agile','Scrum', 'Jira', 'Git'];

function generate(list) {
  return list.map((value) =>
    <ListItem>
      <ListItemIcon>
        <FiberManualRecordIcon />
      </ListItemIcon>
      <ListItemText
        primary={value}
      />
    </ListItem>
  );
}

export default function ProfilePage(props) {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  function generatePorfolio(portfolioData) {
    return portfolioData.map((proyect) =>
      <GridItem xs={12} sm={12} md={12}>
        <CardContent>
          <div target="_blank" onClick={() => window.open((proyect.link))}>
            <div>
              <GitHub style={{ paddingRight: 8 }} />
              <Typography variant="h9" className={classes.title}>
                {proyect.name}
              </Typography>
            </div>
            <p as='a'>{proyect.stack}</p>
          </div>
        </CardContent>
      </GridItem>
    )
  }

  return (
    <div>
      <Parallax small filter image={landing} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Gonzalo Hernandez</h3>
                    <h6>SOFTWARE ENGINEER</h6>
                    <Button justIcon link className={classes.margin5} onClick={()=>window.open(githubLink)} >
                      <i className={"fab fa-github"} />
                    </Button>                   
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I'm a software developer, focused in frontend with experience in back end.
                I studied computer engineering in South America.
              </p>

              <p>
                I'm highly interested in the frontend and the user experience and design in general.
                I'm a natural challenge lover, I don't give up that easy.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "My stack",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={2} sm={2} md={3}>
                              <Typography variant="h9" className={classes.title}>
                                FrontEnd
                              </Typography>
                              <List dense={dense}>
                                {generate(frontEndData)}
                              </List>
                          </GridItem>
                          <GridItem xs={2} sm={2} md={3}>
                              <Typography variant="h9" className={classes.title}>
                                BackEnd
                              </Typography>
                              <List dense={dense}>
                                {generate(backEndData)}
                              </List>
                          </GridItem>
                          <GridItem xs={2} sm={2} md={3}>
                              <Typography variant="h9" className={classes.title}>
                                DataBase
                              </Typography>
                              <List dense={dense}>
                                {generate(dataBaseData)}
                              </List>
                          </GridItem>
                          <GridItem xs={2} sm={2} md={3}>
                              <Typography variant="h9" className={classes.title}>
                                Organization
                              </Typography>
                              <List dense={dense}>
                                {generate(organizationData)}
                              </List>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <div>
                              <p className={classes.description}>
                                I'm a selfmotivated learner, passionate for code, with almost 3 years of professional experience.
                                I believe in the art of code, developing scalable and maintainable code following best practices.
                              </p>
                              <p className={classes.description}>
                                Currently getting my hands dirty with AWS, studing and getting the certificates of attendance from AWS free webinars 2020.
                              </p>
                              <p className={classes.description}>
                                Feel free to take a deeper look at what I've accomplished over the years and what I'm able to do for you.
                              </p>
                              <br />
                              <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudDownloadIcon />}
                                onClick={() => window.open(pdf)}
                              >
                                Download my resume
                            </Button>
                            </div>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Portfolio",
                      tabIcon: GitHub,
                      tabContent: (
                        <GridContainer justify="center">
                              <GridItem xs={24} sm={24} md={24}>
                                <p className={classes.description}>
                                  This are just some little projects to show my style of coding,
                                  I'm also building a personal project with Antdesign Pro + NodeJs + Firebase,
                                  for intellectual reasons is not in public repository, available to show in case needed.
                                </p>
                              </GridItem>
                              <List dense={dense}>
                                {generatePorfolio(portfolioData)}
                              </List>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "More about me",
                      tabIcon: Info,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <p className={classes.title}>
                              Let's talk about my passion
                            </p>
                            <p className={classes.description}>
                              My life is guided by the feeling of overcoming,
                              I want to build the best version of my self.
                            </p>
                            <p className={classes.description}>
                              I'm a surfer, longboarder and also a proud Bjj (Brazilian jui jitsu) blue belt.
                            </p>
                            <p className={classes.description}>
                              I love to travel, meet people, learn different cultures and languages.
                              I believe every language is a new way of thinking, and thats pretty interesing to me...
                            </p>
                            <p className={classes.description}>
                              And yes... I love to take pictures :)
                            </p>
                            <Button justIcon link className={classes.margin5} onClick={()=>window.open(instagramLink)} >
                              <i className={"fab fa-instagram"} />
                            </Button>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={athens}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={surf}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={syros}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
