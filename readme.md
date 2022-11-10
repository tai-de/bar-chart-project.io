Lighthouse Labs Stretch Project
===

## Bar Chart API

# About

This project creates a scalable and customizable bar chart.

`drawBarChart(data, options, element);`

Where:

- *data* is an array of numerical values
- *options* is an object of customization options (see below)
- *element* is the targeted element ID from the page

# Screenshots

> Example showing the empty DIV setup\
![HTML example](/screenshots/bar-chart-html-divs.png)

>Example of arguments placed in function\
![Function example](/screenshots/bar-chart-html-functions.png)

>Live output & results\
![Live output example](/screenshots/bar-chart-live-output.png)


# Additional features

- Data bars include **hover effects** (see chart 2, bar 2 in screenshots above
- **y-axis** has dynamically-drawn background lines at correct intervals

# Customization options

Example for the *objects* argument:

```
{
title_name: "Bar Chart",
title_size: '1.5em',
title_color: 'blue',
chart_width: 750,
chart_height: 500,
bar_color: 'blue',
bar_label_pos: 'center', /*bottom, top, or center*/
bar_label_color: 'white',
bar_spacing: 2 /*percent*/
}
```

| key             | description & formatting                    |
|-----------------|---------------------------------------------|
| title_name      | "bar chart name"                            |
| title_size      | "value" (can be in em, px, etc)             |
| title_color     | "color name, hex, rgb, rgba"                |
| chart_width     | numerical value (pixels)                    |
| chart_height    | numerical value (pixels)                    |
| bar_color       | "color name, hex, rgb, rgba"                |
| bar_label_pos   | "top, center, or bottom"                    |
| bar_label_color | "color name, hex, rgb, rgba"                |
| bar_spacing     | numerical value (percentage of chart width) |

# Known issues / bugs

- Only a single array of data can be processed by the function.
  - Modifications of the current code were attempted, however due to the bars being added as DIV elements, I was unable to rework the code to stack multiple values in the time provided.
- Background lines showing the **y-axis intervals** is hard-coded to display at every 1 step of the data value.
  - This means datasets where values are high (example 2 in the screenshot) will have upwards of 200 lines being 'drawn'.
  - Likewise, if the dataset includes non-integers, it will not render correctly.

# Resources & supporting documentation

External resources used to help create this library:

- HTML & CSS: Previous knowledge
- JavaScript: Lighthouse Labs, Udacity, MDN
- jQuery: MDN, Web Dev Simplified (YouTube)
