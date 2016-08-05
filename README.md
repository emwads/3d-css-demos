# CSS Demos

[See the demo in action][link]

View a few animations created using JavaScript and CSS. Note that these are best/only viewable on updated versions of safari, Chrome, or Firefox.

[link]:https://emwads.github.io/3d-css-demos/

## Animations

### Pokestop

This animation is a simple demonstration of layering various 3d transforms on top of each other to create a more complex image. Here, transparent png's are used to display each of the rings of the pokestop.

### Starry night

This is another basic animation utilizing JavaScript to randomly add and remove twinkling stars from the "sky". The twinkling of the stars is animated with CSS.


### Picture Octahedron

Here images are clipped and rotated in 3-D to create a octahedron shape using CSS. Images from the image bank can be dragged to various faces of the octahedron to create a custom picture globe thanks to the HTML drag and drop API as well as a touch of JavaScript.

## Notes

### Cross-browser support

Unfortunately, not all browsers are created equal. A few of the demos (the picture octahedron and the stars demo) rely heavily on `clip-path` to change the appearance/shape of a div. The `clip-path` used in web-kit based browsers is not quite the same as Mozilla browsers. For instance, to create a triangle shape in chrome, the following CSS was used:

```css
.top img {
  -webkit-clip-path: polygon(50% 13.4%, 0% 100%, 100% 100%);
}
```
 this is simply marking the points (as a width/ height percentage of element). This however does not work out so well in Mozilla based browsers. Instead, this project used the following CSS to clip out a triangle shape

 ```css
 .top img {
   clip-path: url(../index.html#topTri);
 }
 ```
 this references the svg clipping path in the HTML file to make the traingular shape

 ```html
 <svg width="0" height="0">
   <defs>
     <clipPath id="topTri" clipPathUnits="objectBoundingBox">
       <polygon points="0.5 0.134, 0 1, 1 1" />
     </clipPath>
   </defs>
 </svg>
 ```
Furthermore, animations using these types of clip paths don't quite work in Mozilla browsers, thus, the starry night animation will appear differently in Firefox and Chrome.
