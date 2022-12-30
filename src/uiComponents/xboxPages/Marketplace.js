import React from 'react';

import iconLibrary from "../../styles/xboxDashboardStyles/IconStyling.module.css";
import pageGridStyles from '../../styles/xboxDashboardStyles/PageGrid.module.css';
import transitionStyles from '../../styles/xboxDashboardStyles/TransitionStyles.module.css';
import itemSelectStyles from '../../styles/xboxDashboardStyles/ItemSelect.module.css';
import marketplaceStyles from '../../styles/xboxDashboardStyles/Marketplace.module.css';

import styles from '../../styles/xboxDashboardStyles/Dashboard.module.css';

const Marketplace = (props) => {

    const {context_index: current_context_index} = props;
    let isHighlightActive = true;
    let marketplaceMenuIndex = 0;

  return (
    <>
            <div id={marketplaceStyles["marketplaceContextContainer"]} className={pageGridStyles.outerContextContainer} style={{"--z-depth": `${current_context_index === 0 ? 1 : -1}`}}>
            <div className={styles.marketplaceBackground}></div>
                <div id={pageGridStyles["marketplaceGrid"]} className={`${pageGridStyles.mainGridContent} ${current_context_index !== 0 ? transitionStyles.makeTransparent : ""}`}>
                    <div className={pageGridStyles.leftContent}>
                        <div className={marketplaceStyles.selectOption}>
                            <div className={marketplaceStyles.textHighlight}></div>
                            <p>Games</p>
                        </div>
                        <div className={marketplaceStyles.selectOption}>
                            <div className={marketplaceStyles.textHighlight}></div>
                            <p>Media and Entertainment</p>
                        </div>
                        <div className={marketplaceStyles.selectOption}>
                            <div className={marketplaceStyles.textHighlight}></div>
                            <p>Game Demos</p>
                        </div>
                        <div className={marketplaceStyles.selectOption}>
                            <p>Game Videos</p>
                            <div className={marketplaceStyles.textHighlight}></div>
                        </div>
                        <div className={marketplaceStyles.selectOption}>
                            <div className={marketplaceStyles.textHighlight}></div>
                            <p>Themes and Gamer Pictures</p>
                        </div>
                        <div className={marketplaceStyles.selectOption}>
                            <div className={marketplaceStyles.textHighlight}></div>
                            <p>Featured Downloads</p>
                        </div>
                    </div>
                    <div className={pageGridStyles.rightContent}>
                        <div className={marketplaceStyles.imageHeaderContainer}></div>
                        <div id={itemSelectStyles["marketSelectList"]} className={`${itemSelectStyles.selectItemListContainer}`}>
                            <div className={itemSelectStyles.innerListContainer} >
                                <div className={itemSelectStyles.listItem} onMouseEnter={console.log("")}>
                                    <span className={`${itemSelectStyles.listIcon} ${iconLibrary.card_icon}`}></span>
                                    <p>
                                        <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${marketplaceMenuIndex !== 0 ? transitionStyles.makeTransparent : ""}`}></span>
                                        Redeem Code
                                    </p>
                                    <div className={itemSelectStyles.listItemBorder}></div>
                                </div>
                                <div className={itemSelectStyles.listItem} >
                                    <span className={`${itemSelectStyles.listIcon} ${iconLibrary.download_icon}`}></span>
                                    <p>
                                        <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${marketplaceMenuIndex !== 1 ? transitionStyles.makeTransparent : ""}`}></span>
                                        Active Downloads
                                    </p>
                                    <div className={itemSelectStyles.listItemBorder}></div>
                                </div>
                                <div className={itemSelectStyles.listItem}>
                                    <span className={`${itemSelectStyles.listIcon} ${iconLibrary.crown_icon}`}></span>
                                    <p>
                                        <span className={`${isHighlightActive && itemSelectStyles.listItemHighlight} ${marketplaceMenuIndex !== 2 ? transitionStyles.makeTransparent : ""}`}></span>
                                        Account Management
                                    </p>
                                    <div className={itemSelectStyles.listItemBorder}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </>
  )
}

export default Marketplace