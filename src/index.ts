/* Game Rules
 * 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation
 * 2. Any live cell with two or three live neighbours lives on to the next generation
 * 3. Any live cell with more than three live neighbours dies, as if by overpopulation
 * 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
 */

// A|B|C
// D|E|F
// G|H|I
// The neighbours of E are,
//  * A, B, C, D, F, G, H, I
// The neighbours of A are,
//  * B, D, E

/* Summary
 * The initial pattern constitutes the "seed" of the system. The first generation is
 * created by applying the above rules simultaneously to every cell in the seed,
 * live or dead; births and deaths occur simultaneously, and the discrete moment at
 * which this happens is somtimes called a tick.
 */

function main() {
  // TODO: Implement Game of Life
  console.log('Hello, World.');
}

main();
