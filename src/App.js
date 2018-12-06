import React, { Component } from 'react';
import './styles.css';
import Header from './Header';
import List from './List';
import ItemBox from './ItemBox';
import FilteredList from './FilteredList';

//import images for easy refererence
import prismacolor from './images/prismacolors.jpg';
import charcoal from './images/charcoal.jpg';
import brushPens from './images/brushPens.jpg';
import prismaMarkers from './images/prismaMarkers.jpg';
import oilPastel from './images/oilPastel.jpg';
import prismaPastel from './images/prismaPastel.jpg';
import acrylic from './images/acrylic.jpg';
import oil from './images/oil.jpg';
import watercolor from './images/watercolor.jpg';
import brushes from './images/brushes.jpg';
import canvas from './images/canvas.jpg';
import sketch from './images/sketch.jpg';
import drawingPad from './images/drawingPad.jpg';
import watercolorPad from './images/watercolorPad.jpg';

//declare the supply list with the properties of each item
const supplies = [
  {image:prismacolor, name:"Colored Pencils, 48-Count", price:"39.95", rating:"4.9/5", details:"Prismacolor Premier Soft Core Colored Pencils. Assorted Colors.", brand:"Prismacolor", type:"Drawing"},
  {image:charcoal, name:"Charcoal Drawing Set", price:"9.95", rating:"4.5/5", details:"Includes 3 charcoal pencils, 1 woodless graphite pencil, 4 charcoal sticks, 4 vine charcoal and 1 storage tin.", brand:"Royal & Langnickel", type:"Drawing"},
  {image:brushPens, name:"Dual Brush Pen Art Markers, 10-Count", price:"16.99", rating:"4.6/5", details:"Set of 9 colors and 1 blender pen, with flexible brush tip and fine tip in one marker.", brand:"Tombow", type:"Drawing"},
  {image:prismaMarkers, name:"Double-Ended Art Markers, 24-Count", price:"90.50", rating:"4.5/5", details:"Dual-ended markers featuring both fine and brush tips. Advanced dye-based ink formulation for richly saturated color and superior blendability.", brand:"Prismacolor", type:"Drawing"},
  {image:oilPastel, name:"Oil Pastels, 24-Count", price:"50.00", rating:"4.8/5", details:"Assorted Oil Pastel Cardboard Set 24 - Designed by Sennelier and Pablo Picasso. Chosen by Cézanne - Gauguin -Monet - Bonnard - Soutine - Picasso - Modigliani.", brand:"Sennelier", type:"Drawing"},
  {image:prismaPastel, name:"Firm Pastel Color Sticks, 48-Count", price:"54.99", rating:"4.3/5", details:"High-quality pigments deliver rich color saturation. Can be used wet or dry for varying effects. Ideal for blending and shading.", brand:"Prismacolor", type:"Drawing"},
  {image:acrylic, name:"Acrylic Paint Set, 36-Count of 18ml Tubes", price:"19.95", rating:"4.3/5", details:"Includes 36 vibrant water-based acrylic colors that allow you to create stunning vivid masterpieces. Ideal for use by professional artists, as well as the young aspiring artist.", brand:"U.S. Art Supply", type:"Painting"},
  {image:oil, name:"Oil Paint Set, 36-Count of 18ml Tubes", price:"24.95", rating:"4.3/5", details:"Made with premium quality pigments. Smooth consistency and the long working time permits the artist to blend colors and glaze them over a long period of time. ", brand:"U.S. Art Supply", type:"Painting"},
  {image:watercolor, name:"Watercolor Paint Set, 12-Count of 8ml Tubes", price:"44.95", rating:"4.7/5", details:"A popular water color made from selected pigments for an economical choice. A Cotman pocket brush (No. 5) also included.", brand:"Winsor & Newton", type:"Painting"},
  {image:brushes, name:"Artist Paint Brush Set", price:"20.99", rating:"4.7/5", details:"15 Different Shapes & Sizes. Includes Painting Knife & Watercolor Sponge. No Shed Bristles. Wood Handles. For Body Paint, Acrylics & Oil", brand:"Benicci", type:"Painting"},
  {image:canvas, name:"Art Canvas Panel Assortment Pack, 24-Count", price:"27.95", rating:"4.2/5", details:"Triple Acrylic Gesso Primed for Oil or Acrylic Painting. Panel Assortment Includes (in inches): 6-5x7, 6-8x10, 6-9x12, 6-11x14", brand:"U.S. Art Supply", type:"Painting"},
  {image:sketch, name:"9in x 12in Sketch Pad", price:"9.95", rating:"4.7/5", details:"A general purpose, medium weight sketch paper intended for technique practices or quick studies with any dry media. 100 sheets.", brand:"Strathmore", type:"Drawing"},
  {image:drawingPad, name:"18in x 24in Drawing Pad", price:"26.95", rating:"4.4/5", details:"Ideal for illustrations and final drawing. Includes 24 sheets of paper.", brand:"Strathmore", type:"Drawing"},
  {image:watercolorPad, name:"11in x 15in Watercolor Pad", price:"10.20", rating:"4.6/5", details:"A heavy-weight, cold press paper suited for watercolor experimentation. Includes 12 sheets of paper.", brand:"Strathmore", type:"Painting"}
]

class App extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }

     //This function to return to the top of the webpage was taken from
     //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
     toTop = () => {
          document.documentElement.scrollTop = 0;
      }

      render() {
        return (
          <div className="main">
            {/* displays the logo and intro */}
            <Header />

            {/* containts all of the products and filtering/sorting navigation */}
            <FilteredList items={supplies} />

            {/* button to jump back to the top of the page after scrolling to the bottom*/}
            <button onClick={this.toTop}  id="toTop">^</button>
          </div>
        );
      }
}

export default App;
