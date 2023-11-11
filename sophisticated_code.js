/* filename: sophisticated_code.js */

// This code generates a random maze using a Prim's algorithm
// The maze is represented as a 2D grid, with each cell either being a wall or a path
// The generated maze will have a single entrance and exit, with a unique path connecting them

// Define constants for grid dimensions
const WIDTH = 30;
const HEIGHT = 30;

// Define constants for cell types
const WALL = 0;
const PATH = 1;

// Create a 2D grid to represent the maze
let maze = new Array(HEIGHT);
for (let i = 0; i < HEIGHT; i++) {
  maze[i] = new Array(WIDTH).fill(WALL);
}

// Create a helper function to check if a cell is valid (within grid bounds)
function isValidCell(row, col) {
  return row >= 0 && row < HEIGHT && col >= 0 && col < WIDTH;
}

// Create a helper function to check if a cell is a wall
function isWall(row, col) {
  return maze[row][col] === WALL;
}

// Create a helper function to check if a cell is a path
function isPath(row, col) {
  return maze[row][col] === PATH;
}

// Create a helper function to get the neighbors of a cell
function getNeighbors(row, col) {
  let neighbors = [];
  if (isValidCell(row - 2, col) && isWall(row - 2, col)) {
    neighbors.push({ row: row - 2, col: col });
  }
  if (isValidCell(row + 2, col) && isWall(row + 2, col)) {
    neighbors.push({ row: row + 2, col: col });
  }
  if (isValidCell(row, col - 2) && isWall(row, col - 2)) {
    neighbors.push({ row: row, col: col - 2 });
  }
  if (isValidCell(row, col + 2) && isWall(row, col + 2)) {
    neighbors.push({ row: row, col: col + 2 });
  }
  return neighbors;
}

// Create a helper function to remove the wall between two cells
function removeWall(current, neighbor) {
  let wallRow = (current.row + neighbor.row) / 2;
  let wallCol = (current.col + neighbor.col) / 2;
  maze[wallRow][wallCol] = PATH;
}

// Create a stack to keep track of visited cells
let stack = [];

// Choose a random starting cell and mark it as a path
let startRow = Math.floor(Math.random() * (HEIGHT / 2)) * 2 + 1;
let startCol = Math.floor(Math.random() * (WIDTH / 2)) * 2 + 1;
maze[startRow][startCol] = PATH;

// Push the starting cell to the stack
stack.push({ row: startRow, col: startCol });

// Perform the Prim's algorithm until the stack is empty
while (stack.length > 0) {
  // Pop a random cell from the stack
  let current = stack.pop();

  // Get the neighbors of the current cell
  let neighbors = getNeighbors(current.row, current.col);

  // Check if there are unvisited neighboring cells
  if (neighbors.length > 0) {
    // Push the current cell back to the stack
    stack.push(current);

    // Choose a random neighbor
    let randomIndex = Math.floor(Math.random() * neighbors.length);
    let neighbor = neighbors[randomIndex];

    // Remove the wall between the current cell and the chosen neighbor
    removeWall(current, neighbor);

    // Mark the neighbor cell as a path
    maze[neighbor.row][neighbor.col] = PATH;

    // Push the neighbor cell to the stack
    stack.push(neighbor);
  }
}

// Print the maze to the console
for (let i = 0; i < HEIGHT; i++) {
  let row = '';
  for (let j = 0; j < WIDTH; j++) {
    if (maze[i][j] === WALL) {
      row += '█';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}