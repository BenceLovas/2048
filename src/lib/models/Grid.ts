import type { Position } from "./Position";
import type { Tile } from "./Tile";

export class Grid {
    size: number;
    cells: (Tile | null)[][];

    constructor(size: number) {
        this.size = size;
        this.cells = this.empty();
    }

    empty() {
        const cells = [];

        for (var x = 0; x < this.size; x++) {
            var row: (Tile | null)[] = cells[x] = [];

            for (var y = 0; y < this.size; y++) {
                row.push(null);
            }
        }

        return cells;
    }

    // fromState(state: (Tile | null)[][]): (Tile | null)[][] {
    //     const cells = [];

    //     for (let x = 0; x < this.size; x++) {
    //       const row: (Tile | null)[] = cells[x] = [];

    //       for (let y = 0; y < this.size; y++) {
    //         const tile = state[x][y];
    //         row.push(tile ? new Tile(tile.position, tile.value) : null);
    //       }
    //     }

    //     return cells;
    // }

    randomAvailableCell(): Position | null {
        var cells = this.availableCells();

        if (cells.length) {
            return cells[Math.floor(Math.random() * cells.length)];
        }

        return null;
    }

    availableCells(): Position[] {
        var cells: Position[] = [];

        this.eachCell(function (position: Position, tile: Tile | null) {
            if (!tile) {
                cells.push(position);
            }
        });

        return cells;
    }

    eachCell(callback: (position: Position, tile: Tile | null) => void) {
        for (var x = 0; x < this.size; x++) {
            for (var y = 0; y < this.size; y++) {
                callback({ x, y }, this.cells[x][y]);
            }
        }
    }

    cellsAvailable(): boolean {
        return !!this.availableCells().length;
    }

    cellAvailable(position: Position) {
        return !this.cellOccupied(position);
    }

    cellOccupied(position: Position) {
        return !!this.cellContent(position);
    };
    
    cellContent(position: Position): Tile | null {
        if (this.withinBounds(position)) {
            return this.cells[position.x][position.y];
        } else {
            return null;
        }
    };

    insertTile(tile: Tile) {
        this.cells[tile.position.x][tile.position.y] = tile;
    };
    
    removeTile(tile: Tile) {
        this.cells[tile.position.x][tile.position.y] = null;
    };
    
    withinBounds(position: Position) {
        return position.x >= 0 && position.x < this.size &&
            position.y >= 0 && position.y < this.size;
    };

}

// function Grid(size, previousState) {
//     this.size = size;
//     this.cells = previousState ? this.fromState(previousState) : this.empty();
// }

// // Build a grid of the specified size
// Grid.prototype.empty = function () {
//     var cells = [];

//     for (var x = 0; x < this.size; x++) {
//         var row = cells[x] = [];

//         for (var y = 0; y < this.size; y++) {
//             row.push(null);
//         }
//     }

//     return cells;
// };

// Grid.prototype.fromState = function (state) {
//     var cells = [];

//     for (var x = 0; x < this.size; x++) {
//         var row = cells[x] = [];

//         for (var y = 0; y < this.size; y++) {
//             var tile = state[x][y];
//             row.push(tile ? new Tile(tile.position, tile.value) : null);
//         }
//     }

//     return cells;
// };

// // Find the first available random position
// Grid.prototype.randomAvailableCell = function () {
//     var cells = this.availableCells();

//     if (cells.length) {
//         return cells[Math.floor(Math.random() * cells.length)];
//     }
// };

// Grid.prototype.availableCells = function () {
//     var cells = [];

//     this.eachCell(function (x, y, tile) {
//         if (!tile) {
//             cells.push({ x: x, y: y });
//         }
//     });

//     return cells;
// };

// // Call callback for every cell
// Grid.prototype.eachCell = function (callback) {
//     for (var x = 0; x < this.size; x++) {
//         for (var y = 0; y < this.size; y++) {
//             callback(x, y, this.cells[x][y]);
//         }
//     }
// };

// // Check if there are any cells available
// Grid.prototype.cellsAvailable = function () {
//     return !!this.availableCells().length;
// };

// // Check if the specified cell is taken
// Grid.prototype.cellAvailable = function (cell) {
//     return !this.cellOccupied(cell);
// };

// Grid.prototype.cellOccupied = function (cell) {
//     return !!this.cellContent(cell);
// };

// Grid.prototype.cellContent = function (cell) {
//     if (this.withinBounds(cell)) {
//         return this.cells[cell.x][cell.y];
//     } else {
//         return null;
//     }
// };

// // Inserts a tile at its position
// Grid.prototype.insertTile = function (tile) {
//     this.cells[tile.x][tile.y] = tile;
// };

// Grid.prototype.removeTile = function (tile) {
//     this.cells[tile.x][tile.y] = null;
// };

// Grid.prototype.withinBounds = function (position) {
//     return position.x >= 0 && position.x < this.size &&
//         position.y >= 0 && position.y < this.size;
// };

// Grid.prototype.serialize = function () {
//     var cellState = [];

//     for (var x = 0; x < this.size; x++) {
//         var row = cellState[x] = [];

//         for (var y = 0; y < this.size; y++) {
//             row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
//         }
//     }

//     return {
//         size: this.size,
//         cells: cellState
//     };
// };