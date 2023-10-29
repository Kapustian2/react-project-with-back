export const sanitizeContent = (content) => {
	if (content) {
		return content
			.replaceAll('&nbsp', ' ')
			.replace(/ +/, ' ')
			.replaceAll('<div><br></div>', '\n')
			.replaceAll('<div>', '\n')
			.replaceAll('</div>', ' ');
	}
	return '';
};
