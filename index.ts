const [year, day] = process.argv.slice(2);

if (!year || !day) {
	console.error('Usage: bun run aoc <year> <day>');
	console.error('Example: bun run aoc 2024 1');
	process.exit(1);
}

await import(`./src/${year}/${day}/index.ts`);
