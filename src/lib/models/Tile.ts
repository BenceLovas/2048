import type { Position } from "./Position";


export class Tile {
    position: Position;
    value: number;
    previousPosition:Position | null;
    mergedFrom: Position | null;

    constructor(position: Position, value: number) {
        this.position = position;
        this.value = value;
        this.previousPosition = null;
        this.mergedFrom = null;
    }

}



// function Tile(position, value) {
//     this.x                = position.x;
//     this.y                = position.y;
//     this.value            = value || 2;
  
//     this.previousPosition = null;
//     this.mergedFrom       = null; // Tracks tiles that merged together
//   }
  
//   Tile.prototype.savePosition = function () {
//     this.previousPosition = { x: this.x, y: this.y };
//   };
  
//   Tile.prototype.updatePosition = function (position) {
//     this.x = position.x;
//     this.y = position.y;
//   };
  
//   Tile.prototype.serialize = function () {
//     return {
//       position: {
//         x: this.x,
//         y: this.y
//       },
//       value: this.value
//     };
//   };