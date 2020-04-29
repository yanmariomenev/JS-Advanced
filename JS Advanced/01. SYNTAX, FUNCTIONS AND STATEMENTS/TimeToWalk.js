function walkTime(steps, footPrintLength, kmph){
    let metersWalked = steps * footPrintLength;
    let totalRestMinutes = Math.floor(metersWalked / 500);

    let totalTime = metersWalked / kmph / 1000 * 60;
    let totalTimeInSeconds = Math.ceil((totalRestMinutes + totalTime) * 60);

    let result = new Date(null, null, null, null, null, totalTimeInSeconds).toTimeString().split(' ')[0];
    
    console.log(result);
}

walkTime(4000, 0.60, 5)
walkTime(2564, 0.70, 5.5)