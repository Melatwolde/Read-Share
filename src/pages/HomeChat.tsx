import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import GroupsName from "../components/GroupsName";
import BookDiscoveryCards from "../components/BookDiscoveryCards";
import Events from "../components/Events";
import styles from "../styles/HomePage.module.css";
import '../styles/global.css'
import harryImage from '../assets/harry.png';
import Native from '../assets/Native.png';
import midnight from '../assets/midnight.png';
import profile from '../assets/profile.png';
import { Home,Add,Group, Upload, ForkLeft, SwipeRight, JoinLeft, BookmarkAddRounded, Chat, ChatBubbleRounded, PersonOffOutlined, Person2Rounded, Explore, AddAlarm, KeyboardArrowLeftRounded, KeyboardArrowRightOutlined } from "@mui/icons-material";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent />
      <main className={styles.homePageInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorWrapper}>
              <Home className={styles.vectorIcon} />
              </div>
              <div className={styles.groupWrapper}>
                <BookmarkAddRounded className={styles.addIcon} />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.addIconWrapper}>
                <ChatBubbleRounded className={styles.addIcon} />
                </div>
                <div className={styles.groupContainer}>
                <Person2Rounded className={styles.groupIcon1} />
                </div>
                <div className={styles.uploadParent}>
                <Upload className={styles.uploadIcon} />
                 
                  <div className={styles.discoverGroupsWrapper}>
                  
                    <Explore className={styles.discoverGroupsIcon} />
                  </div>
                  <div className={styles.createGroupsWrapper}>
                  <Add className={styles.createGroupsIcon} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.discovrWrapper}>
              <div className={styles.discovr}>
                <a className={styles.popular}>Popular</a>
                <div className={styles.viewAllLayout}>
                  <button className={styles.viewAllButton}>
                    <a className={styles.viewAll}>View all</a>
                  </button>
                  <KeyboardArrowLeftRounded className={styles.spacerIcon} />
                  <KeyboardArrowRightOutlined className={styles.spacerIcon1} />
                  
                 
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.booksCardParent}>
                <div className={styles.booksCard}>
                  <BookDiscoveryCards
                    image24={Native}
                    theyBothDieAtTheEnd="They Both Die At The End"
                  />
                  <BookDiscoveryCards
                    image24={midnight}
                    theyBothDieAtTheEnd="The Ninth Life"
                    propBorderRadius="unset"
                    propBackgroundImage="unset"
                    propBackgroundSize="unset"
                  />
                  <BookDiscoveryCards
                    image24={harryImage}
                    theyBothDieAtTheEnd="There’s A Life"
                    propBorderRadius="unset"
                    propBackgroundImage="url('/book-discovery-cards@3x.png')"
                    propBackgroundSize="cover"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.image21Parent}>
                      <div className={styles.image21} />
                      <h3 className={styles.upcomingEventsFrom}>
                        Upcoming Events From The community
                      </h3>
                    </div>
                  </div>
                  <div className={styles.eventCard}>
                    <Events
                      parisReadersSummit="Paris Readers Summit"
                      eventDay="08"
                    />
                    <Events
                      parisReadersSummit="Tizeta Book review"
                      eventDay="12"
                      propBackgroundColor="rgba(204, 203, 233, 0.5)"
                    />
                    <Events
                      parisReadersSummit="Tizeta Book review"
                      eventDay="12"
                      propBackgroundColor="rgba(204, 203, 233, 0.5)"
                    />
                    
                    
                    <div className={styles.left}>
                      <img
                        className={styles.vectorIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.discoverClubParent}>
                  <div className={styles.discoverClub}>
                    <div className={styles.discoverBookClubsParent}>
                      <h3 className={styles.discoverBookClubs}>
                        Discover book clubs
                      </h3>
                      <a className={styles.seeAll}>See all</a>
                    </div>
                    <div className={styles.discoverGroup}>
                      <GroupsName
                        taylor1= {profile}
                        fantasyClub="Biography"
                        frameDiv={false}
                      />
                      <GroupsName
                        taylor1={profile}
                        fantasyClub="Fantasy club"
                        frameDiv
                      />
                      <GroupsName
                        taylor1={profile}
                        fantasyClub="Sherlock "
                        frameDiv={false}
                      />
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.newlyReleasedParent}>
                          <div className={styles.newlyReleased}>
                            <h3
                              className={styles.newlyReleased1}
                            >{`Newly Released `}</h3>
                          </div>
                          <img
                            className={styles.image25Icon}
                            loading="lazy"
                            alt=""
                            src={midnight}
                          />
                        </div>
                        <div className={styles.titleParent}>
                          <div className={styles.title}>
                            <div className={styles.onbiCutThe}>
                              Onbi Cut The Rop
                            </div>
                          </div>
                          <div className={styles.description}>
                            <div className={styles.loremIpsumDolor}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.bookInfo}>
                      <div className={styles.container}>
                        <div className={styles.info}>
                          <div className={styles.stats}>
                            <div className={styles.details}>
                              <div className={styles.count}>331</div>
                              <div className={styles.pages}>Pages</div>
                            </div>
                            <div className={styles.details1}>
                              <div className={styles.div}>4.6/5</div>
                              <div className={styles.rating}>Rating</div>
                            </div>
                            <div className={styles.details2}>
                              <div className={styles.k}>160k</div>
                              <div className={styles.downloads}>Downloads</div>
                            </div>
                          </div>
                        </div>
                        <button className={styles.buyNowButton}>
                          <div className={styles.buyNow}>Buy now</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
