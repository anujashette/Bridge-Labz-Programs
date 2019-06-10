
/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: node StopWatch.js
 *  Execution:    node StopWatch.js
 *  
 *  Purpose:     Write a Stopwatch Program for measuring the time that elapses 
 *               between the start and end clicks.
 *
 *  @author  Anuja Shette
 *  @version 8.10.0
 *  @since   01-06-2019
 *
 ******************************************************************************/

/*
    Start contains initial time.
    Stop contains end time.
    Elapsed time  is simply the amount of time that passes from the beginning of an event to its end.
*/

var stop = 0, elapsed = 0
var start = 0

start = Date.now();
console.log("start time=" + start);

/*
    setTimeOut() function can evaluate peace of after specified amount of time i.e.(5000ms).
*/

setTimeout(function () {

    stop = Date.now();
    console.log("stop time=" + stop);
    elapsed = stop - start;
    console.log("elapsed time is=" + elapsed);

}, 5000);











