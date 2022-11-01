let activeUsers: string[] = [];
activeUsers.push("Tony");
activeUsers.push(true);

const ageList: number[] = [45, 54, 62, 26];
ageList[0] = 55;
ageList[0] = "55";

const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
  z?: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 32 });
coords.push({ x: 8, y: 27 });

// Multidimensional
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
