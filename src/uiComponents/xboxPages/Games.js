import React from 'react';


import iconLibrary from "../../styles/xboxDashboardStyles/IconStyling.module.css";
import profileCardStyles from '../../styles/xboxDashboardStyles/ProfileCard.module.css';
import pageGridStyles from '../../styles/xboxDashboardStyles/PageGrid.module.css';
import transitionStyles from '../../styles/xboxDashboardStyles/TransitionStyles.module.css';
import itemSelectStyles from '../../styles/xboxDashboardStyles/ItemSelect.module.css';
import gamesStyles from '../../styles/xboxDashboardStyles/Games.module.css';
import descriptionContentStyles from "../../styles/xboxDashboardStyles/DescriptionContainer.module.css";

import styles from "../../styles/xboxDashboardStyles/Dashboard.module.css";

import backgroundAnimation from "../../styles/xboxDashboardStyles/BackgroundPulse.module.css";


const GamesPage = (props) => {

    const {context_index: current_context_index} = props;
    let isHighlightActive = true;
    let gamesMenuIndex = 0;
    

  return (
     <>
        <div id={gamesStyles["gamesContextContainer"]} className={pageGridStyles.outerContextContainer} style={{"--z-depth": `${current_context_index === 2 ? 1 : -1}`}}>

        <div className={styles.gamesBackground}>
            {/* <div id={backgroundAnimation["gamesPulse"]} className={`${backgroundAnimation.pulseContainer} ${current_context_index !== 2 ? transitionStyles.makeTransparent : ""}`}>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 1}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 2}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 3}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 4}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 5}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 6}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 7}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 8}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 9}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
                <div className={backgroundAnimation.pulseRing} style={{"--ring-index": 10}}>
                    <div className={backgroundAnimation.pulseRingInner}></div>
                </div>
            </div> */}
        </div>

            <div id={gamesStyles["games"]} className={`${pageGridStyles.mainGridContent} ${current_context_index !== 2 ? transitionStyles.makeTransparent : ""}`}>
                <div className={pageGridStyles.leftContent}>
                    <div className={profileCardStyles.profileContainer}>
                        <p>Epoxi117</p>
                        <div className={profileCardStyles.profileImgContainer}>
                            <div className={profileCardStyles.profileIcon}></div>
                        </div>
                        <div className={profileCardStyles.profileDescription}>
                            <p className={profileCardStyles.repTitle}>Rep</p>
                            <div className={profileCardStyles.reputationStars}>
                                <div className={profileCardStyles.starIcon}></div>
                                <div className={profileCardStyles.starIcon}></div>
                                <div className={profileCardStyles.starIcon}></div>
                                <div className={profileCardStyles.starIcon}></div>
                                <div className={profileCardStyles.starIcon}></div>
                            </div>
                            <p className={profileCardStyles.gamerscoreTitle}>Gamerscore</p>
                            <p className={profileCardStyles.gamerscoreValue}>21117</p>
                            <p className={profileCardStyles.zoneTitle}>Zone</p>
                            <div className={profileCardStyles.zoneStatus}>Pro</div>
                        </div>
                    </div>
                    <div className={itemSelectStyles.selectItemListContainer}>
                        <div id={itemSelectStyles["gamesHighlightContainer"]} className={itemSelectStyles.boxInsetHighlightContainer}>
                            <div className={itemSelectStyles.boxInsetHighlightMaskTop}>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightTop} ${isHighlightActive && gamesMenuIndex !== 0 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightTop} ${isHighlightActive && gamesMenuIndex !== 1 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightTop} ${isHighlightActive && gamesMenuIndex !== 2 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightTop} ${isHighlightActive && gamesMenuIndex !== 3 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightTop} ${isHighlightActive && gamesMenuIndex !== 4 ? transitionStyles.instantTransparent : ""}`}></div>
                            </div>
                            <div className={itemSelectStyles.boxInsetHighlightMaskBottom}>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightBottom} ${isHighlightActive && gamesMenuIndex !== 0 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightBottom} ${isHighlightActive && gamesMenuIndex !== 1 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightBottom} ${isHighlightActive && gamesMenuIndex !== 2 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightBottom} ${isHighlightActive && gamesMenuIndex !== 3 ? transitionStyles.instantTransparent : ""}`}></div>
                                <div className={`${isHighlightActive && itemSelectStyles.boxInsetHighlightBottom} ${isHighlightActive && gamesMenuIndex !== 4 ? transitionStyles.instantTransparent : ""}`}></div>
                            </div>
                        </div>
                        <div className={itemSelectStyles.innerListContainer} >
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.trophy_icon}`}></span>
                                <p>
                                    <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${gamesMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Achievements
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.controller_icon}`}></span>
                                <p>
                                    <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${gamesMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Played Games
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.joystick_icon}`}></span>
                                <p>
                                    <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${gamesMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Xbox Live Arcade
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.demos_icon}`}></span>
                                <p>
                                    <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${gamesMenuIndex !== 3 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Demos
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.film_icon}`}></span>
                                <p>
                                    <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${gamesMenuIndex !== 4 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Trailers
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pageGridStyles.rightContent}>
                    <div className={gamesStyles.xbox360Logo}>
                        <div className={gamesStyles.boxShadow}></div>
                    </div>
                    <div className={descriptionContentStyles.descriptionContainer}>
                        <div className={descriptionContentStyles.descriptionTitle}>Xbox LIVE</div>
                        <div className={descriptionContentStyles.descriptionContent}>
                            Games. Tournaments. Entertainment. 
                            All the rewards. Endless possibilities. What are you waiting for?
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${styles.systemTrayContainer}`}>
                <div className={styles.trayEllipse}></div>
                <div className={styles.trayRect}></div>
                <div className={styles.trayTriangleButton}></div>
                <div className={styles.trayRectButton}></div>
                <p>Open Tray</p>
            </div>

        </div>
  </>);
};

export default GamesPage;
