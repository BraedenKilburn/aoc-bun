import { argv, env } from 'process';
import { resolve } from 'node:path';
import { exists, mkdir } from 'node:fs/promises';

const AOC_SESSION = env['AOC_SESSION'];
const YEAR = env['YEAR'];

let day: string;

// Grab day from arguments
try {
	day = argv[2].split('=')[1];
} catch (error) {
	console.error('Missing "day" argument (e.g., day=1)');
	process.exit(1);
}

// Check environment variables
if (!AOC_SESSION || !YEAR) {
	console.error(
		`Missing environment variable${!AOC_SESSION ? ' (AOC_SESSION)' : ''}${
			!AOC_SESSION && !YEAR ? ' and' : ''
		}${!YEAR ? ' (YEAR)' : ''}`,
	);
	process.exit(1);
}

async function setup() {
	try {
		const yearPath = resolve(import.meta.dir, YEAR as string);
		const folderPath = resolve(yearPath, day);

		// Check if folder already exists
		if (await exists(folderPath)) {
			console.warn('Folder already exists. To start over, remove the folder.');
			process.exit(1);
		}

		// Create the directory
		await mkdir(folderPath, { recursive: true });

		const [inputData, templateContent, indexTemplate] = await Promise.all([
			// Fetch input data
			fetch(`https://adventofcode.com/${YEAR}/day/${day}/input`, {
				headers: { cookie: `session=${AOC_SESSION}` },
			}).then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to fetch input: ${response.statusText}`);
				}
				return response.text();
			}),
			// Get template files
			Bun.file(resolve(import.meta.dir, 'solution.template.ts')).text(),
			Bun.file(resolve(import.meta.dir, 'index.template.ts')).text(),
		]);

		// Write all files in parallel
		await Promise.all([
			Bun.write(resolve(folderPath, 'input.txt'), inputData.trim()),
			Bun.write(resolve(folderPath, 'example.txt'), ''),
			Bun.write(resolve(folderPath, 'index.ts'), indexTemplate),
			Bun.write(
				resolve(folderPath, '1.ts'),
				templateContent.replace('partNumber', 'partOne'),
			),
			Bun.write(
				resolve(folderPath, '2.ts'),
				templateContent.replace('partNumber', 'partTwo'),
			),
		]);

		console.log(`Generated folder for year ${YEAR}, day ${day}. Good luck!`);
	} catch (error) {
		console.error('Failed to generate template folder:', error);
		process.exit(1);
	}
}

await setup();
