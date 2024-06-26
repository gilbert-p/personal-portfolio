import React from 'react';



import iconLibrary from "../../styles/xboxDashboardStyles/IconStyling.module.css";
import pageGridStyles from '../../styles/xboxDashboardStyles/PageGrid.module.css';
import transitionStyles from '../../styles/xboxDashboardStyles/TransitionStyles.module.css';
import itemSelectStyles from '../../styles/xboxDashboardStyles/ItemSelect.module.css';


import styles from "../../styles/xboxDashboardStyles/Dashboard.module.css";
import backgroundAnimation from "../../styles/xboxDashboardStyles/BackgroundPulse.module.css";

import systemStyles from '../../styles/xboxDashboardStyles/System.module.css';


const XboxlivePage = (props) => {

    const {context_index: current_context_index} = props;
    let isHighlightActive = true;
    let systemMenuIndex = 0;

  return (
     <>
        <div id={systemStyles["systemContextContainer"]} className={`${pageGridStyles.outerContextContainer}`} style={{"--z-depth": `${current_context_index === 4 ? 1 : -1}`}} >

        <div className={styles.systemBackground}>
            {/* <div id={backgroundAnimation["systemPulse"]} className={`${backgroundAnimation.pulseContainer} ${current_context_index !== 4 ? transitionStyles.makeTransparent : ""}`}>
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

            <div id={pageGridStyles["system"]} className={`${pageGridStyles.mainGridContent} `}>

                <div className={pageGridStyles.leftContent}>
                    <div className={`${itemSelectStyles.systemListContainer} ${itemSelectStyles.selectItemListContainer}`}>
                        <div id={itemSelectStyles["systemHighlightContainer"]} className={itemSelectStyles.boxInsetHighlightContainer}>
                            <div className={itemSelectStyles.boxInsetHighlightMaskTop}>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 3 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 4 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 5 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightTop} ${systemMenuIndex !== 6 ? transitionStyles.makeTransparent : ""}`}></div>
                            </div>
                            <div className={itemSelectStyles.boxInsetHighlightMaskBottom}>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 3 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 4 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 5 ? transitionStyles.makeTransparent : ""}`}></div>
                                <div className={`${itemSelectStyles.boxInsetHighlightBottom} ${systemMenuIndex !== 6 ? transitionStyles.makeTransparent : ""}`}></div>
                            </div>
                        </div>
                        <div className={itemSelectStyles.innerListContainer} >
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.console_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Console Settings
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.family_settings_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Family Settings
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.mu_storage_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Memory
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.adhoc_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 3 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Network Settings
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.computer_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 4 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Computers
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.xboxlive_vision}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 5 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Xbox Live Vision
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                            <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")} onMouseLeave={console.log("")}>
                                <span className={`${itemSelectStyles.listIcon} ${iconLibrary.console_controller_icon}`}></span>
                                <p>
                                    <span className={`${itemSelectStyles.listItemHighlight} ${systemMenuIndex !== 6 ? transitionStyles.makeTransparent : ""}`}></span>
                                    Initial Setup
                                </p>
                                <div className={itemSelectStyles.listItemBorder}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={pageGridStyles.rightContent}>
                    <div className={itemSelectStyles.containerReset}>
                        <div id="console-settings" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descTitle}>
                                Edit your Xbox 360 system settings, including:
                            </div>
                            <div className={systemStyles.descContent}>
                                <ul>
                                    <li>Display</li>
                                    <li>Audio</li>
                                    <li>Language</li>
                                    <li>Remote Control</li>
                                    <li>and more</li>
                                </ul>
                            </div>
                        </div>
                        <div id="family-settings" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Protect younger family members by customizing content, communications, and online
                                    interactions. Adjust settings on the console or at the individual profile level.
                                </p>
                            </div>
                        </div>
                        <div id="memory-settings" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Move or delete saved games, profiles, and other items on Xbox 360 storage devices.</p>
                            </div>
                        </div>
                        <div id="network-settings" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 3 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Connect your console to your home network or Xbox Live. Set up wireless network connections and test network settings.</p>
                            </div>
                        </div>
                        <div id="computers" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 4 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Manage your connections to Windows XP or Media Center PC.</p>
                            </div>
                        </div>
                        <div id="xboxlive-vision" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 5 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Change the settings for your Xbox Live Vision camera.</p>
                            </div>
                        </div>
                        <div id="initial-setup" className={`${systemStyles.itemSelectDescription} ${systemMenuIndex !== 6 ? transitionStyles.makeTransparent : ""}`}>
                            <div className={systemStyles.descContent}>
                                <p>Run the system setup that you saw the first time you started the console.</p>
                            </div>
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

export default XboxlivePage;
