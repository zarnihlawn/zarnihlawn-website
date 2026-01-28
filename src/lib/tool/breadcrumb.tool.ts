export function formatBreadcrumb(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean);

	const formatSegment = (segment: string) =>
		segment
			.replace(/-/g, ' ')
			.split(' ')
			.map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ''))
			.join(' ');

	return segments.map(formatSegment).join(' : : ');
}

