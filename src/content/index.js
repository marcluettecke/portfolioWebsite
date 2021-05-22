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
		// img: 'https://i.ibb.co/2cZ1PD7/headshot-color-transparent.png',
		text: ['Hey there!', "I'm Marc Luettecke.", "and I'm a"],
		typical: [
			'web developer. 📱💻',
			2000,
			'data scientist. 💡',
			2000,
			'financial consultant. 📈',
			2000
		],
		btnTextLeft: 'Check out CV'
	},
	partners: {
		title: 'partners',
		logos: [
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/subsequent_bw.png',
				alt: 'subsequent',
				width: '80',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/techlabs_bw.png',
				alt: 'techlabs',
				width: '64',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_kn.svg',
				alt: 'uni_kn',
				width: '64',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/naklario_bw.png',
				alt: 'naklario',
				width: '64',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/maroon_bw.png',
				alt: 'maroon',
				width: '32',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/utx_bw.png',
				alt: 'utexas',
				width: '80',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/urbanhive_bw.png',
				alt: 'urbanhive',
				width: '64',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/loyola_bw.png',
				alt: 'loyola',
				width: '64',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_heidelberg.png',
				alt: 'heidelberg',
				width: '64',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/kpmg_bw.png',
				alt: 'kpmg',
				width: '48',
				height: '26'
			}
		]
	},
	testimonials: {
		title: 'testimonials',
		people: [
			{
				name: 'Dr. Mehmet Dicle',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/dicle.png',
				job: 'Associate Professor',
				text: 'Mr. Luettecke is one of the best students I had, we hired him as a finance tutor at our college. He actually had a waiting list. My MBA students are scheduling appointments with him. I am receiving high praises and very positive emails about his teaching.'
			},
			{
				name: 'Dr. Karsten Donnay',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/donnay.png',
				job: 'Professor',
				text: "Marc's way of working is characterized to a very high extent by his systematic approach, sense of responsibility and determination, which lead to excellent solutions. Due to his very high commitment, he always delivers his work results on time and in very good quality at any time."
			},
			{
				name: 'Daniel Demleitner',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/demleitner_bw.png',
				job: 'Senior Manager',
				text: 'Marc has a very quick perception and is always characterized by very good organizational, analytical and judgmental skills. He has an excellent ability to successfully apply his extensive, in-depth professional knowledge and experience to new situations for the benefit of the team.'
			},
			{
				name: 'Dr. John Levendis',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/levendis_bw.png',
				job: 'Professor',
				text: "I first met Marc when he was taking my Business Statistics class in the Fall of 2011. He was my best student by far. As they say, it wasn't even close. He mastered material so well, in fact, that he would tutor his classmates on statistics. Several of his classmates would not have passed were it not for his help."
			},

			{
				name: 'Dr. Ron Christner',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/christner.png',
				job: 'Ex Department Chair',
				text: 'Marc is very personable and also asked some of the most insightful and challenging questions about Investments and other topics that I have ever encountered in my many years of teaching. In summary Marc is exceptional as a person and a scholar.'
			},
			{
				name: 'Michael Giusti',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/giusti_bw.png',
				job: 'Department Chair / Senior Editor',
				text: "Marc is a model of who I hope to hire in my business office. Marc is personable, he is intelligent, and most importantly, he is reliable. I have worked with Marc for six months now, and during those six months, my only regret is that I didn't meet him sooner in his college career."
			}
		]
	},
	projects: {
		websites: [
			{
				name: 'Skateshop App',
				type: 'frontend',
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
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/wSZ4sQ3/weather-App-cropped.jpg',
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
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/7p3r1K6/mamba-Mermories.jpg',
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
				name: 'Personal CV website',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/VW0Yz64/cv.jpg',
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
				name: 'Nexter Dummy website',
				type: 'practice',
				screenshotLink: 'https://i.ibb.co/c8Bd77j/nexter-cropped.jpg',
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
				name: 'Soccer Formations Frontend - Thesis application',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/txrdXTb/soccer-Formations.jpg',
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
				name: 'Business Statscard',
				type: 'practice',
				screenshotLink: 'https://i.ibb.co/pjmkD8k/statscard-cropped.jpg',
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
				name: 'Business Coming Soon',
				type: 'practice',
				screenshotLink: 'https://i.ibb.co/kcT5bVv/baseapparel-cropped.jpg',
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
				name: 'Three column grid',
				type: 'practice',
				screenshotLink: 'https://i.ibb.co/kgvR0b9/three-Column-Grid-cropped.jpg',
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
	},
	footer: {
		text: 'This website was built using React.js and Tailwind.css. While inspired by other websites, it is fully my own work, so if you end up using it or parts of it, any reference would be appreciated | Marc Luettecke © 2021'
	}
};
