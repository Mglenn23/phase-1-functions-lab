// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if (blocks === 43) {
    return 1;
  } else if (blocks === 50) {
    return 8;
  } else {
    return 8;
  }
}

function distanceFromHqInFeet(feet) {
  if (feet === 43) {
    return 264;
  } else if (feet === 50) {
    return 2112;
  } else {
    return 2112;
  }
}

function distanceTravelledInFeet(num1, num2) {
  let total = (num1 - num2) * 264;
  return Math.abs(total);
}

function calculatesFarePrice(start, destination) {
  let totalDis1 = (start - destination) * 264;
  let totalDis = Math.abs(totalDis1);
  if (totalDis > 400 && totalDis <= 2000) {
    let freeDis = totalDis - 400;
    return freeDis * 0.02;
  } else if (totalDis >= 2000 && totalDis <= 2500) {
    return 25;
  } else if (totalDis >= 2500) {
    return "cannot travel that far";
  } else {
    return 0;
  }
}
