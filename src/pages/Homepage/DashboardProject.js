import React, {useRef, useState, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScaleSVG from '../../components/ScaleSVG';
import DashboardContainer from '../../uiComponents/DashboardContainer';

import '../../styles/animationStyles/xbox_logo.scss';
import '../../styles/projects.scss';

import transitionStyles from "../../styles/xboxDashboardStyles/TransitionStyles.module.css";


function ProjectsSection() {

  const xboxLogoRef  = useRef(null);
  const dashboardTimeline = useRef(null);

  const [getLogoScale, setLogoScale] = useState(410);

  const [showDashboard, setShowDashboard] = useState(false);

  let  timeline = dashboardTimeline.current = gsap.timeline({paused: true});

  timeline.to("#dashboard-launch-prompt", {y: 500, opacity: 0, ease:"power3.out"})
           .to(".xboxDashboard-menu", {y: -100, opacity: 1, ease: "power3.out"})
           .to("#dashboard-launch-prompt", { display: "none"});




  return (
    <>
      <section className="project-section">
        <div className="project-info">
          <div className="project-heading">
            <span><h2>PROJECT 01</h2></span>
            <div className="project-subheading">
              <span><h3>XBOX DASHBOARD</h3></span>
            </div>
          </div>

          <div className="project-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

        {/* Dashboard Menu */}
        <>
        <div className="xboxDashboard-menu">
          <DashboardContainer getLogoScale={getLogoScale} thisRef={xboxLogoRef}>

          </DashboardContainer>   
        </div>

        </>


        <div id="dashboard-launch-prompt" className={`interaction-window ${showDashboard ? transitionStyles.makeTransparent : ""}`}>
          <div className="xbox-logo-animation">
            <div className="holo-select-animation">
              <div className="circle-path">
                <ScaleSVG
                    classInput={["geo-path"]}
                    x_pos={-205}
                    y_pos={-205}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={[""]}
                    pathProperties={{}}
                    fill={""}
                    >
                  <circle id="f1" r="180" stroke="#53d57a" strokeWidth="33" strokeDasharray="150">
                  <animate id="f1"
                    attributeName="stroke-dashoffset"
                    // begin="2s;f1.end+2.4s"
                    values="300; 60; 60; 600; 300"
                    dur="10s"
                    calcMode="spline"
                    repeatCount="indefinite"
                    keyTimes="0; 0.4; 0.6; 0.75; 1"
                    keySplines="0.4 0 0.4 1;0.4 0 0.4 1;0.4 0 0.4 1;0.4 0 0.4 1;"
                    />
                  </circle>
                  <circle r="165" stroke="#37a959" strokeWidth="15" strokeDasharray="130">
                  <animate id="f1"
                    attributeName="stroke-dashoffset"
                    // begin="0.1s;f1.end+0.4s"
                    values="2000; 0"
                    dur="10s"
                    calcMode="linear"
                    repeatCount="indefinite"
                    /> 
                  </circle>

                  <circle r="175" stroke="#0faa21" strokeWidth="20" strokeDasharray="130">
                  <animate id="f1"
                    attributeName="stroke-dashoffset"
                    // begin="0.1s;f1.end+0.4s"
                    values="3000; 0; 60; 3500"
                    dur="30s"
                    calcMode="linear"
                    repeatCount="indefinite"
                    /> 
                  </circle>

                </ScaleSVG>
              </div>
            </div>
            <div className="xbox-logo-vector" ref={xboxLogoRef}>
              <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={126}
                    svgHeight={136} 
                    x_pos={-84}
                    y_pos={-36}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M0.929688 17.4269C18.0685 -18.4464 71.5704 7.40499 124.52 39.3001L125.29 115.88C117.907 121.823 108.791 128.851 101.003 135.765L80.6485 77.216C41.306 38.5105 12.8875 19.0213 0.929688 17.4269Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_linear_202_20912)"}
                    >
                      <defs>
                      <linearGradient id="paint0_linear_202_20912" x1="1.22778" y1="115.69" x2="29.528" y2="12.4538" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white">
                        <animate attributeName="stop-color" values="#FFFFFF;#9BC054;#FFFFFF" dur="7s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.395833" stop-color="#9BC054;#87AE53">
                        <animate attributeName="stop-color" values="#9BC054;#7DA552;#9BC054" dur="7s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="1" stop-color="#5C8850">
                        <animate attributeName="stop-color" values="#5C8850;#49803B;#5C8850" dur="7s" repeatCount="indefinite" />
                      </stop>
                      </linearGradient>
                      </defs>
                </ScaleSVG>
    
                <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={126}
                    svgHeight={136}
                    x_pos={-208}
                    y_pos={-37}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M125.253 15.2306C107.378 -13.5274 60.6806 2.07759 0.492889 38.3497L1.29008 114.88C8.67317 120.822 16.2223 127.895 24.01 134.809L44.7369 75.0197C84.0794 36.3142 113.295 16.825 125.253 15.2306Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_linear_202_20915)"}
                    >
                    <defs>
                    <linearGradient id="paint0_linear_202_20915" x1="1.22778" y1="115.69" x2="29.528" y2="12.4538" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white">
                        <animate attributeName="stop-color" values="#FFFFFF;#9BC054;#FFFFFF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.395833" stop-color="#9BC054;#87AE53">
                        <animate attributeName="stop-color" values="#9BC054;#7DA552;#9BC054" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="1" stop-color="#5C8850">
                        <animate attributeName="stop-color" values="#5C8850;#49803B;#5C8850" dur="4s" repeatCount="indefinite" />
                      </stop>
                      </linearGradient>
                    </defs>
                </ScaleSVG>
    
                <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={133}
                    svgHeight={222} 
                    x_pos={-52}
                    y_pos={-110}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M8.81011 221.638C-28.6578 184.04 68.1385 48.2631 112.383 0.0332031L132.71 58.6266C72.5855 114.018 3.62839 194.934 8.81011 221.638Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_linear_202_20907)"}
                    >
                    <defs>
                    <linearGradient id="paint0_linear_202_20907" x1="132.308" y1="60.2209" x2="46.1409" y2="44.6758" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white">
                        <animate attributeName="stop-color" values="#FFFFFF;#e2e2e2;#FFFFFF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.395833" stop-color="#9BC054;#87AE53">
                        <animate attributeName="stop-color" values="#9BC054;#7DA552;#9BC054" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="1" stop-color="#5C8850">
                        <animate attributeName="stop-color" values="#5C8850;#49803B;#5C8850" dur="4s" repeatCount="indefinite" />
                      </stop>
                      </linearGradient>
                    </defs>
                  </ScaleSVG>
    
                    <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={133}
                    svgHeight={223} 
                    x_pos={-232}
                    y_pos={-112}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M123.176 222.435C163.036 188.156 64.9805 48.2495 20.7365 0.0195312L0.0101429 59.8087C59.7993 114.815 126.763 195.729 123.176 222.435Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_linear_202_20914)"}
                    >
                    <defs>
                    <linearGradient id="paint0_linear_202_20914" x1="1.11978" y1="60.2221" x2="67.2864" y2="44.6769" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white">
                        <animate attributeName="stop-color" values="#FFFFFF;#e2e2e2;#FFFFFF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.395833" stop-color="#9BC054;#87AE53">
                        <animate attributeName="stop-color" values="#9BC054;#7DA552;#9BC054" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="1" stop-color="#5C8850">
                        <animate attributeName="stop-color" values="#5C8850;#49803B;#5C8850" dur="4s" repeatCount="indefinite" />
                      </stop>
                      </linearGradient>
                    </defs>
                </ScaleSVG>
                
                <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={249}
                    svgHeight={72} 
                    x_pos={-85}
                    y_pos={-5}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M123.493 71.747C185.275 34.6777 229.12 19.9297 248.253 48.2299C244.665 28.6988 178.1 0 124.689 0C81.0011 0 4.71169 21.9227 0.327148 49.4257C16.2709 16.3424 63.3051 35.4749 123.493 71.747Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_radial_207_20919)"}
                    >
                      <defs>
                        <radialGradient id="paint0_radial_207_20919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.689 98.4528) rotate(-90) scale(183.353 633.588)">
                        <stop offset="0.103218" stop-color="#A9A9A9"/>
                        <stop offset="0.551925" stop-color="#858585"/>
                        </radialGradient>
                      </defs>
                </ScaleSVG>
    
                <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={157}
                    svgHeight={284}
                    x_pos={-8}
                    y_pos={-48}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M0 154.282C0 94.6274 25.3082 40.6714 66.7181 4.01196C70.2798 0.858788 72.9428 0.572953 76.1315 0.971548C88.0894 2.56593 117.305 23.509 156.648 62.2146C112.404 110.445 16.741 245.437 54.2088 283.036C34.6777 268.686 0.000778505 213.937 0 154.282Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_radial_207_20923)"}
                    >
                      <defs>
                        <radialGradient id="paint0_radial_207_20923" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(149.074 67.3846) rotate(144.025) scale(194.059 127.905)">
                        <stop stop-color="#EDEDED"/>
                        <stop offset="0.569384" stop-color="#8A8A8A"/>
                        <stop offset="0.991886" stop-color="#797979"/>
                        </radialGradient>
                      </defs>
                </ScaleSVG>
    
                              <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={295}
                    svgHeight={250}
                    x_pos={-60}
                    y_pos={-150}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M294.756 183.036C270.862 222.859 204.421 249.951 148.376 250C84.9844 249.94 9.57273 209.323 0.411601 181.84C-5.17748 139.456 116.801 20.4092 148.224 0.479492C176.117 22.5002 300.345 140.652 294.756 183.036Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_radial_207_20921)"}
                    >
                      <defs>
                        <radialGradient id="paint0_radial_207_20921" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(117.2 -4.70219) rotate(67.9285) scale(313.984 369.623)">
                        <stop stop-color="#DADADC"/>
                        <stop offset="0.380617" stop-color="#939192"/>
                        <stop offset="0.753957" stop-color="#767475"/>
                        </radialGradient>
                      </defs>
                </ScaleSVG>
    
    
                <ScaleSVG
                    classInput={["xGradient"]}
                    svgWidth={157}
                    svgHeight={283}
                    x_pos={-252}
                    y_pos={-52}
                    viewBoxWidth={getLogoScale}
                    viewBoxHeight={getLogoScale}
                    preserveAspectRatio={"xMaxYMid meet"}
                    pathStringArray={["M156.587 153.541C156.587 93.8862 131.279 39.9302 89.8688 3.27075C86.3071 0.117577 83.6441 -0.168258 80.4554 0.230337C68.4976 1.82471 40.079 21.3136 0.736511 60.0191C44.9805 108.249 141.042 245.087 103.574 282.685C123.105 268.336 156.586 213.195 156.587 153.541Z"]}
                    pathProperties={{}}
                    fill={"url(#paint0_radial_207_20922)"}
                    >
                      <defs>
                        <radialGradient id="paint0_radial_207_20922" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-128.807 21.7541) rotate(22.7704) scale(385.166 253.864)">
                        <stop offset="0.0528527" stop-color="#BFBFBF"/>
                        <stop offset="0.523366" stop-color="#706E6E"/>
                        <stop offset="0.862604" stop-color="#949494"/>
                        </radialGradient>
                      </defs>
                </ScaleSVG>
            </div>
          </div>
          <button onClick={()=>{timeline.play()}} className="start-button">CLICK TO BEGIN</button>
        </div>



      </section>
    </>
  )
}

export default ProjectsSection