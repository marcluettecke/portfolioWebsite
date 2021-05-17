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
			'financial consultant. 📈',
			2000
		],
		btnTextLeft: 'Discover more',
		btnTextRight: 'Download CV'
	},
	projects: {
		websites: [
			{
				name: 'Skateshop App',
				screenshotLink: 'https://i.ibb.co/DG5rntz/skate-Shop.jpg',
				github: '',
				websiteLink: '',
				technologies: [
					{
						img: '',
						alt: ''
					}
				]
			},
			{
				name: 'Weather App',
				screenshotLink: 'https://i.ibb.co/WPQgTQn/weather-App.jpg',
				github: '',
				websiteLink: '',
				technologies: [
					{
						img: '',
						alt: ''
					}
				]
			},
			{
				name: 'Kobe Bryant memorial app',
				screenshotLink: 'https://i.ibb.co/7p3r1K6/mamba-Mermories.jpg',
				github: '',
				websiteLink: '',
				technologies: [
					{
						img: '',
						alt: ''
					}
				]
			}
		]
	},

	stack: {
		title: 'Stack',
		tech: [
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
				alt: 'react'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
				alt: 'angular'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/postgres.png',
				alt: 'postgres'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/mongo.png',
				alt: 'mongodb'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
				alt: 'firebase'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tailwind.svg',
				alt: 'tailwind'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
				alt: 'python'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tensorflow.svg',
				alt: 'tensorflow'
			}
		],
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`
	}
};
