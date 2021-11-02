import regression from "regression";
import lodash from "lodash/lodash";
/*
  points are array of [x,y]
  points = [[0, 1], [32, 67], [12, 79]]
*/

function getXYpoints(xArray, yArray) {
  return lodash.zip(xArray, yArray);
}

function getXarrayYarray(xyPoints) {
  return lodash.unzip(xyPoints);
}

function basicRegression(xyPoints) {
  const result = regression.linear(xyPoints);
  return result.points;
}

function MathRegression({ xArray, yArray }) {
  const oldPoints = getXYpoints(xArray, yArray);
  const newPoints = basicRegression(oldPoints);
  const xyArray = getXarrayYarray(newPoints);
  return { xArray: xyArray[0], yArray: xyArray[1] };
}

export { MathRegression };
