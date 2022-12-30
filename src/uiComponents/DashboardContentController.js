import React, { useEffect, useState, useCallback } from 'react';

import MainContentContainer from './MainContentContainer'

//pages
import Marketplace from './xboxPages/Marketplace';
import Xboxlive from './xboxPages/Xboxlive';
import Games from './xboxPages/Games';
import Media from './xboxPages/Media';
import System from './xboxPages/System';

import styles from '../styles/xboxDashboardStyles/Dashboard.module.css';
import transitionStyles from '../styles/xboxDashboardStyles/TransitionStyles.module.css';

function DashboardContentController(props) {

    const { context_index } = props;


    const renderDashboardPage = () => {
        switch(context_index) {
            case 0: return <Marketplace context_index={context_index} />;
            case 1: return <Xboxlive context_index={context_index} />;
            case 2: return <Games context_index={context_index} />;
            case 3: return <Media context_index={context_index} />;
            case 4: return <System context_index={context_index} />;
            
            default: return <Marketplace/>;
        }
    }



  return (
   <>


        <div className="navBladeContainer"></div>


        <MainContentContainer context_index={context_index}>
            {renderDashboardPage()}
        </MainContentContainer>

   </>
  )
}

export default DashboardContentController