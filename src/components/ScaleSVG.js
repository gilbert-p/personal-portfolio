import React, {useState} from 'react';

const ScaleSVG = (props) => {

    const { svgWidth, svgHeight , dynamicWidth, 
            dynamicHeight, adjustedHeight, x_pos, y_pos,
            viewBoxWidth, viewBoxHeight, preserveAspectRatio, 
            classInput, pathStringArray, fill, svgID

          } = props;

    


    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    const classConcat = () => {
        return !isEmpty(classInput) ? classInput.join(' '): "";
    }

    let tempID = "";

    if(svgID != null){
      tempID = svgID;
    }

  return (
    <svg id={tempID} className={classConcat()} width={svgWidth} height={svgHeight} viewBox={`${x_pos} ${y_pos} ${viewBoxWidth} ${viewBoxHeight}`} fill={fill} xmlns="http://www.w3.org/2000/svg">
        {pathStringArray.length > 0 ?
          pathStringArray.map((pathString, index)=> {
          return  <path key={index} d={pathString}/>
        })
        : null}

        {props.children}
    </svg>
  )
}

export default ScaleSVG;
