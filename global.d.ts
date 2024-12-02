// Declare module for text files
// https://github.com/oven-sh/bun/issues/9276
declare module '*.txt' {
	const content: string;
	export default content;
}
