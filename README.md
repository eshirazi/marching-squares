# marching-squares
A simple and intuitive take on the Marching Squares algorithm.

Written using [three.js](https://threejs.org/).

## Demo
[Check out the Live Demo](https://eshirazi.github.io/marching-squares/)

## An intuative take on the Marching Squares algorithm
We're using a more intuitive and easier to implement approach to the Marching Squares algorithm.

The [Marching Squares algorithm](https://en.wikipedia.org/wiki/Marching_squares) is used to render an apporiximation of the isoline of a function over the 2D plane.

A typical implementation scans the function in non overlapping square intervals over the x and y axes.
For each square it then handles 16 pre coded cases, in order to find a line with a good approximation for F's isoline withing each square.

In our implementation, we approximate F's isoline by visualaizing F as a 3D map of created from triangles.
To approximate F's boundary, we simply slice it, triangle by triangle, with a plane parallel to the X-Y plane.

## Key Files:
- F.js - defines a mathematical function creating a nice metaball like effect
- functionAltitudeRenderer.js - renders the function's values on the 2d plane with grayscale colors
- marchingSquaresRenderer.js - renders F's boundary by using the Marching Squares variation described above.
