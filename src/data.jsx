export const getComments = async () => {
	return [
		{
			id: '1',
			rating: '0',
			userId: '1',
			parentId: null,
			image: './images/avatars/image-amyrobson.png',
			username: 'amyrobson',
			date: '1 month ago',
			comment:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
			timestamp: 232342345234,
		},
		{
			id: '2',
			rating: '0',
			userId: '2',
			parentId: null,
			image: './images/avatars/image-maxblagun.png',
			username: 'maxblagun',
			date: '2 weeks ago',
			comment:
				"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
			timestamp: 343434,
		},
		{
			id: '3',
			rating: '0',
			userId: '3',
			parentId: '2',
			image: './images/avatars/image-ramsesmiron.png',
			username: 'ramsenmiro',
			date: '1 week ago',
			comment:
				"@maxblagun If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
			timestamp: 343434,
		},
		{
			id: '4',
			rating: '0',
			userId: '4',
			image: './images/avatars/image-juliusomo.png',
			username: 'juliusmomo',
			date: 'Right now',
			comment: '',
			timestamp: 343434,
		},
	];
};

export const createComment = async (text, parentId = null) => {
	return {
		id: Math.random().toString(36).substr(2, 9),
		rating: '0',
		userId: '4',
		parentId,
		image: './images/avatars/image-juliusomo.png',
		username: 'juliusmomo',
		date: 'Right now',
		comment: text,
		timestamp: 343434,
	};
};
