


/*  thinking notes / understanding:

drawBarChart(data, options, element);

if data = [3, 6, 1, 2]

then bar should look like:

     |      ■
 y   |      ■
 -   |      ■
 a   |  ■   ■
 x   |  ■   ■       ■
 i   |__■___■___■___■___
 s     this is the x axis

options should be an object where { width: 400, height: 200 }
changes the overall size of the graph itself (not the bars)

the bar width should be calculated based on data length
the bar height should be dependent on the biggest value

a bunch of inline divs spanning horizontally
div height for each entry is percentage of the biggest
div width dynamic
space between the bars = padding

boxes:
main chart - can be whatever size
title - font size and color options
chart itself, set size based on options

*/
