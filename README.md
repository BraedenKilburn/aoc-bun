# 🎄 Advent of Code - Bun Template

Welcome to the Advent of Code Bun Template! This repository provides a streamlined setup for participating in the Advent of Code challenges using Bun, a modern JavaScript runtime.

## Why This Template is Useful

This template simplifies the process of tackling daily coding puzzles by providing a structured environment with essential tools and scripts. It allows you to quickly generate puzzle folders, fetch input data, and run your solutions with ease. Whether you're a seasoned coder or just starting, this template helps you focus on solving puzzles rather than setting up your development environment.

Key features include:

- **Easy Setup**: Clone the repository and get started with a single command.
- **Organized Structure**: Each puzzle is neatly organized into its own folder with all necessary files.
- **Convenient Scripts**: Run puzzles, watch for changes, and format your code effortlessly.
- **Customizable**: Adjust your session token and target year easily through environment variables.

Join the fun and challenge yourself with daily coding puzzles while enhancing your programming skills!

## Usage

To get started, clone the repository and run `bun install` in the root.

Any year folder in `/src` (like `2024`, `2023` etc), are puzzle content and not part of the template.

### Get your session token

First thing you need is your session token from adventofcode.com. This is used to fetch your personalized input data from each puzzle. It can be found under the network tab in your dev tools. [Check this post for assistance](https://github.com/wimglenn/advent-of-code-wim/issues/1).

Once you have your token, copy `.env.sample`, rename it to `.env`, and include your token in the `AOC_SESSION` spot. In your `.env` file you can also adjust what year of Advent of Code you want to work with. Defaults to 2024.

### Generate a puzzle

Use `bun run generate` to generate a folder for a puzzle, and fetch the input data. The script expects an argument for the day you want to work with, for example `bun run generate day=5` will generate the folder and fetch the input data for day 5.

The generated folder includes the following files:

- `index.ts`: The TS file to work with, lightly prepared for reading the input file.
- `1.ts` and `2.ts`: The TS files for each part of the puzzle, lightly prepared for consuming the prepared input file.
- `input.txt`: The raw input data for the puzzle.
- `example.txt`: An example input file for the examples in the puzzle.

## 🚀 Scripts

### Run the puzzle once

```bash
bun run aoc <year> <day>
```

### Run the puzzle in watch mode

```bash
bun run aoc:watch <year> <day>
```

### Format the code

```bash
bun run format
```
