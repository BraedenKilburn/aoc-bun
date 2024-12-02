# 🎄 Advent of Code - Bun Template

Welcome to the Advent of Code Bun Template! This repository provides a streamlined setup for participating in the Advent of Code challenges using [Bun](https://bun.sh), a fast JavaScript all-in-one toolkit.

## Why This Template is Useful

This template simplifies the process of tackling daily coding puzzles by providing a structured environment with essential tools and scripts. It allows you to quickly generate puzzle folders, fetch input data, and run your solutions with ease. Whether you're a seasoned coder or just starting, this template helps you focus on solving puzzles rather than setting up your development environment.

Key features include:

- **Easy Setup**: Clone the repository and get started with a single command.
- **Organized Structure**: Each puzzle is neatly organized into its own folder with all necessary files.
- **Convenient Scripts**: Run puzzles, watch for changes, and format your code effortlessly.
- **Customizable**: Adjust your session token and target year easily through environment variables.

Join the fun and challenge yourself with daily coding puzzles while enhancing your programming skills!

## 🚀 Quick Start

**1. Create your repository**

Click the "Use this template" button at the top of this repository to create your own copy. You can also [learn more about creating repositories from templates](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

**2. Clone your new repository**

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

**3. Install dependencies**

```bash
bun install
```

**4. Set up your environment**

```bash
cp .env.sample .env
```

**5. Add your Advent of Code session token to `.env`**

```bash
AOC_SESSION=your_session_token_here
YEAR=2024
```

**🔑 Getting Your Session Token**

1. Visit [adventofcode.com](https://adventofcode.com)
2. Open your browser's Developer Tools:
   - Windows/Linux: Press `F12` or `Ctrl + Shift + I`
   - macOS: Press `Cmd + Option + I`
3. Navigate to the **Network** tab
4. Refresh the page
5. Click on any request to `adventofcode.com`
6. In the request details, find the **Cookies** section
7. Look for the `session` cookie and copy its value

> **Note**: Keep your session token private and never commit it to version control!

**6. Generate your first puzzle folder**

```bash
bun run generate day=1
```

**7. Start solving!**

```bash
bun run aoc 2024 1      # Run once
bun run aoc:watch 2024 1 # Run with hot reload
```

## 📁 What You Get

When you generate a new puzzle, you'll get a folder with everything you need:

```
src/2024/1/
├── index.ts    # Main entry point
├── 1.ts        # Part one solution
├── 2.ts        # Part two solution
├── input.txt   # Your puzzle input
└── example.txt # For example test cases
```

## 💡 Pro Tips

- Use `example.txt` to test your solution with the puzzle's example data
- The template automatically measures execution time for each part
- Hot reload with `aoc:watch` makes testing iterations quick
- All source files are automatically formatted with `bun run format`

Want to try a different year? Just update `YEAR` in your `.env` file!
