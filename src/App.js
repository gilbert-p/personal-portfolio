import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResizeObserver } from './customHooks/useResizeObserver';

import './App.css';
import './styles/mainpage_container.scss';
import './styles/landing_section.scss';
import './styles/animationStyles/blackhole.scss';
import './styles/animationStyles/xbox_logo.scss';


import './styles/projects.scss';

import DashboardSection from './pages/Homepage/DashboardProject';

import rotateEllipse from './assets/Ellipse-4.svg';
import ScaleSVG from './components/ScaleSVG';
import hexLogo from './assets/hex-logo.png';
import navButton from './assets/nav-button.png';



function App() {

  const canvasContainer  = useRef(null);

  // let windowDimensions = useResizeObserver(canvasContainer);

  const {getWidth: viewportWidth, getHeight: viewportHeight,
         getAspectRatio: viewportAspect} = useResizeObserver(canvasContainer);

  // const {getWidth: viewportWidth, getHeight: viewportHeight,
  // getAspectRatio: viewportAspect} = useResizeObserver(canvasContainer);


  const [getAdjustedHeight, setAdjustedHeight] = useState(0);
  const [getLogoScale, setLogoScale] = useState(410);
  const [blackholeScale, setBlackholeScale] = useState(350);





    return (
    <div className="App">

      {/* index.css */}
      <div className="flowcontrol-container" ref={canvasContainer}>

        <section className="landing-section" >
          <div className="desktopNav-container">
            <div className="website-logo">
              <img src={hexLogo} alt="Hexagon Logo" />
              <img src={hexLogo} alt="Hexagon Logo" />
            </div>

          </div>
          <div className="main-content">
            <div className="navigation-container">
              <div className="nav-button-block">
                <span>HOME</span>
              </div>
              <div className="nav-button-block">
                <span>PROJECTS</span>
              </div>
              <div className="nav-button-block">
                <span>DIGITAL ART</span>
              </div>
              <div className="nav-button-block">
                <span>CONTACT</span>
              </div>
            </div>
            <div className="hero-display">
              <div className="blackhole-animation-container" >
              
              <div className="blackhole">


              <div className="blackhole-corona">

                  <ScaleSVG
                    svgID={"corona-5"}
                    classInput={["blackhole-corona-vector"]}
                    svgWidth={700}
                    svgHeight={500} 
                    x_pos={-180}
                    y_pos={-80}
                    viewBoxWidth={1000}
                    viewBoxHeight={420}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    >
                        <path  id="cor-5" fill="#5D0069" d="M654.5 16.6704C666.99 49.9395 533.6 128.867 353 196.67C172.4 264.474 14.106 287.716 1.61573 254.447C-10.8746 221.177 125.405 139.242 306.006 71.4389C486.606 3.63571 642.01 -16.5988 654.5 16.6704Z"/>
                    </ScaleSVG>

                  <ScaleSVG
                    svgID={"corona-4"}
                    classInput={["blackhole-corona-vector"]}
                    svgWidth={700}
                    svgHeight={500} 
                    x_pos={-160}
                    y_pos={-135}
                    viewBoxWidth={800}
                    viewBoxHeight={500}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    >
                      <path id="cor-4" fill="#89005C"  d="M107.152 113.48C141.53 76.8212 131.941 23.8964 204.112 6.06489C272.164 -10.7488 267.03 10.8212 325.595 31.146C354.902 41.3169 456.235 11.9735 465.53 24.8212C484.638 51.2302 339.389 119.145 276.528 146.164C194.977 181.215 19.6385 219.766 0.530273 192.321C-7.33514 177.142 77.2013 140.407 107.152 113.48Z"/>
                    </ScaleSVG>

                  <ScaleSVG
                    svgID={"corona-3"}
                    classInput={["blackhole-corona-vector"]}
                    svgWidth={400}
                    svgHeight={350} 
                    x_pos={-210}
                    y_pos={-140}
                    viewBoxWidth={820}
                    viewBoxHeight={500}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    >
                      <path id="cor-3" fill="#FE7800"  d="M80.5303 105.321C114.676 65.6957 109.53 18.1055 168.03 4.32118C219.53 -7.81371 230.35 12.9056 285.529 29.8212C313.121 38.2796 381.315 19.0147 390.529 32.5851C399.743 46.1555 293.896 109.343 235.408 134.436C159.53 166.99 9.84151 189.332 1.53019 173.321C-5.78802 159.224 56.7419 132.927 80.5303 105.321Z"/>
                    </ScaleSVG>

                  <ScaleSVG
                    svgID={"corona-2"}
                    classInput={["blackhole-corona-vector"]}
                    svgWidth={350}
                    svgHeight={350} 
                    x_pos={-260}
                    y_pos={-150}
                    viewBoxWidth={870}
                    viewBoxHeight={500}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    fill="url(#paint0_radial_207_20919)"
                    >
                      <path id="cor-2" fill="#FFB002"  d="M60.5297 101.821C92.0303 65.3212 82.2283 19.2356 144.046 4.69194C206.905 -10.0969 204.625 14.2398 255.53 29.8212C280.984 37.6124 334.03 21.8212 342.53 34.3212C351.03 46.8212 260.862 100.525 206.905 123.638C135.804 154.096 9.19725 170.569 1.52976 155.821C-5.22155 142.836 38.5841 127.25 60.5297 101.821Z"/>
                    </ScaleSVG>

                    <ScaleSVG
                    svgID={"corona-1"}
                    classInput={["blackhole-corona-vector"]}
                    svgWidth={350}
                    svgHeight={350} 
                    x_pos={-345}
                    y_pos={-148}
                    viewBoxWidth={1000}
                    viewBoxHeight={500}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    fill="url(#paint0_radial_207_20923)"
                    >
                      <path id="cor-1" fill="#FEEBB4"  d="M48.027 99.3212C76.027 62.8212 67.527 18.3212 127.027 4.32122C187.53 -9.91483 185.03 15.3224 234.027 30.3213C258.527 37.8213 300.299 28.8212 305.53 37.3212C312.853 49.2208 239.465 96.5718 187.53 118.821C119.094 148.14 9.40853 160.517 2.02848 146.321C-4.46975 133.821 18.5284 137.775 48.027 99.3212Z"/>
                    </ScaleSVG>

                </div>

                <div className="blackhole-center-container">
                  {/* <img className="blackhole-img" src={blackholeImg} alt="" /> */}
                    <ScaleSVG
                    classInput={["blackhole-center-vector"]}
                    svgWidth={350}
                    svgHeight={350} 
                    x_pos={-90}
                    y_pos={-92}
                    viewBoxWidth={blackholeScale}
                    viewBoxHeight={blackholeScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    >
                      <path fill="black"  d="M0.675293 90.9562C0.675293 41.2505 40.9697 0.956177 90.6753 0.956177C132.8 0.956177 168.167 29.8977 177.974 68.9821C153.756 83.8495 123.129 98.0866 88.8315 109.618C60.7827 119.049 33.5956 125.555 9.15064 129.135C3.71371 117.545 0.675293 104.606 0.675293 90.9562Z"/>
                    </ScaleSVG>
                </div>
              
              </div>


              <ScaleSVG
              classInput={["ellipse-anim", "ellipse-1"]}
              svgWidth={1299}
              svgHeight={600} 
              x_pos={0}
              y_pos={0}
              viewBoxWidth={1300}
              viewBoxHeight={500}
              preserveAspectRatio={"xMaxYMid meet"}
              pathStringArray={["M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z"]}
              pathProperties={{}}
              >
                <circle className="orbiting-comet" r="12" fill="#77155A" >
                  <animateMotion
                    begin="30s"
                    dur="8s"
                    repeatCount="indefinite"
                    path="M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z" />
                  
                </circle>
              </ScaleSVG>
              <ScaleSVG
                classInput={["ellipse-anim", "ellipse-2"]}
                svgWidth={1230}
                svgHeight={538} 
                x_pos={0}
                y_pos={0}
                viewBoxWidth={1300}
                viewBoxHeight={465}
                preserveAspectRatio={"xMaxYMid meet"}
                pathStringArray={["M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z"]}
                pathProperties={{}}
                >
                <circle className="orbiting-comet" r="12" fill="#77155A" >
                  <animateMotion
                    begin="5s"
                    dur="11s"
                    repeatCount="indefinite"
                    path="M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z" />
                  
                </circle>
              </ScaleSVG>
              <ScaleSVG
                classInput={["ellipse-anim", "ellipse-3"]}
                svgWidth={1230}
                svgHeight={538} 
                x_pos={0}
                y_pos={0}
                viewBoxWidth={1300}
                viewBoxHeight={530}
                preserveAspectRatio={"xMaxYMid meet"}
                pathStringArray={["M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z"]}
                pathProperties={{}}
                >

              <circle className="orbiting-comet" r="12" fill="#77155A" >
                  <animateMotion
                    begin="10s"
                    dur="13s"
                    repeatCount="indefinite"
                    path="M1292.92 34.6066C1295.58 41.6775 1294.66 50.3675 1289.47 60.887C1284.28 71.4128 1275.02 83.3283 1261.81 96.4171C1235.4 122.576 1193.95 152.743 1140.3 185.131C1033.06 249.872 877.848 323.055 698.993 390.431C520.187 457.789 352.32 502.577 226.071 522.06C162.915 531.806 110.368 535.189 72.145 531.977C53.02 530.37 37.7095 527.129 26.5122 522.353C15.2965 517.57 8.69484 511.469 6.03452 504.407C3.38132 497.364 4.36062 488.593 9.71194 477.885C15.0603 467.183 24.5541 455.024 38.0351 441.647C64.9765 414.913 107.151 383.986 161.509 350.84C270.168 284.583 426.803 209.887 605.645 142.516C784.44 75.1624 950.871 31.8936 1075.68 13.9262C1138.12 4.93812 1189.95 2.31075 1227.63 6.08338C1246.48 7.97091 1261.57 11.4405 1272.62 16.3734C1283.68 21.313 1290.24 27.5046 1292.92 34.6066Z" />
                  
                </circle>
              </ScaleSVG>
              <svg viewBox="0 0 1230 530" xmlns="http://www.w3.org/2000/svg">

              </svg>
              </div>
            </div>
          </div>

        </section>

        <DashboardSection/>



        <section id="digital-art" className="digital-art-section">
          
        </section>
      </div>

    </div>
  );

}

export default App;
