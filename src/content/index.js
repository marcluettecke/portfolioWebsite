export default {
	nav: {
		// logo: 'ML',
		logo: 'https://i.ibb.co/T40gXmx/White-logo-no-background.png',
		links: [
			{ text: 'Work', to: 'mywork' },
			{ text: 'Contact', to: 'mycontact' }
		]
	},
	header: {
		img: 'https://i.ibb.co/3Fpnx8Y/headshot-blur.jpg',
		text: ['Hi!', "I'm Marc.", 'I am a'],
		typical: [
			'web developer. 📱💻',
			2000,
			'data scientist. 💡',
			2000,
			'financial consultant 📈',
			2000
		],
		btnText: 'Discover More'
	},

	stack: {
		title: 'Stack',
		tech: [
			{
				img: process.env.PUBLIC_URL + '/assets/mongo.png',
				alt: 'mongodb'
			},
			{
				img: process.env.PUBLIC_URL + '/logo512.png',
				alt: 'react'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/express.png',
				alt: 'express'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/node.png',
				alt: 'node'
			}
		],
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`
	}
};
