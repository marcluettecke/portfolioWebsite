export default {
	nav: {
		// logo: 'ML',
		logo: 'https://i.ibb.co/T40gXmx/White-logo-no-background.png',
		links: [{ text: 'Contact', to: 'mycontact' }]
	},
	header: {
		img: 'https://i.ibb.co/3Fpnx8Y/headshot-blur.jpg',
		imgAlt: 'profile Picture Marc Luettecke',
		// img: 'https://i.ibb.co/2cZ1PD7/headshot-color-transparent.png',
		text: ['Hey there!', "I'm Marc Lüttecke,", "and I'm a"],
		typical: [
			'web developer. 📱💻',
			2000,
			'data scientist. 💡',
			2000,
			'financial consultant. 📈',
			2000,
			'startup founder. 🚀',
			2000
		],
		btnTextLeft: 'Get CV',
		btnTwWidth: '40'
	},
	partners: {
		title: 'partners',
		layoutImage: process.env.PUBLIC_URL + '/assets/layoutImages/Creative_process_SVG.svg',
		logos: [
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/subsequent_transparent.png',
				alt: 'subsequent',
				widthMd: '240',
				widthLg: '320',
				height: '60'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/techlabs.png',
				alt: 'techlabs',
				widthMd: '200',
				widthLg: '300',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_kn.svg',
				alt: 'uni_kn',
				widthMd: '180',
				widthLg: '280',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/naklario.png',
				alt: 'naklario',
				widthMd: '160',
				widthLg: '280',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/maroon.png',
				alt: 'maroon',
				widthMd: '80',
				widthLg: '160',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/utx.png',
				alt: 'utexas',
				widthMd: '220',
				widthLg: '300',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/urbanhive.png',
				alt: 'urbanhive',
				widthMd: '220',
				widthLg: '300',
				height: '32'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/loyola.png',
				alt: 'loyola',
				widthMd: '200',
				widthLg: '280',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_heidelberg.png',
				alt: 'heidelberg',
				widthMd: '160',
				widthLg: '240',
				height: '40'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/kpmg_transparent.png',
				alt: 'kpmg',
				widthMd: '160',
				widthLg: '200',
				height: '26'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/correlaid_transparent.png',
				alt: 'correlaid',
				widthMd: '180',
				widthLg: '260',
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
		layoutImage: process.env.PUBLIC_URL + '/assets/layoutImages/Coding_SVG.svg',
		websites: [
			{
				name: 'Skateshop Landing Page',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/98vyxNN/skate-Shop-cropped.jpg',
				github: 'https://github.com/marcluettecke/skateshopSite',
				websiteLink: 'https://skateshopcss.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Portfolio',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/zW37tcB/portfolio-cropped.jpg',
				github: 'https://github.com/marcluettecke/portfolioWebsite',
				websiteLink: '',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/tailwind.svg',
						alt: 'tailwind',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
						alt: 'react',
						documentation: 'https://reactjs.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Weather App',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/wSZ4sQ3/weather-App-cropped.jpg',
				github: 'https://github.com/marcluettecke/weatherApp',
				websiteLink: 'https://weather-app-angular11.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'angular',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
						alt: 'firebase',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Memorial App',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/WDvjny8/mamba-Mermories-cropped.jpg',
				github: 'https://github.com/marcluettecke/MambaMemories',
				websiteLink: 'https://mambamemories.herokuapp.com/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/node.png',
						alt: 'node',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/mongo.png',
						alt: 'mongodb',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/heroku.png',
						alt: 'heroku',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Personal CV',
				type: 'both',
				screenshotLink: 'https://i.ibb.co/zS9Kt0z/cv-cropped.jpg',
				github: 'https://github.com/marcluettecke/cv/tree/master',
				websiteLink: 'https://cvmarcluettecke.netlify.app/',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_CV.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Naklar.io tutoring',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/b68cZBj/naklario-cropped.jpg',
				github: 'https://github.com/naklar-io/naklar.io/tree/develop/frontend',
				websiteLink: 'https://naklar.io/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'angular',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ionic.png',
						alt: 'ionic',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'ReactMeals',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/VTDTGdV/reactmeals-cropped.jpg',
				github: 'https://github.com/marcluettecke/ReactMeals',
				websiteLink: 'https://reactmealspractice.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
						alt: 'react',
						documentation: 'https://reactjs.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
						alt: 'firebase',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Realtor Landing Page',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/c8Bd77j/nexter-cropped.jpg',
				github: 'https://github.com/marcluettecke/nexter',
				websiteLink: 'https://marcluettecke.github.io/nexter/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Soccer Formations - Web App',
				type: 'both',
				screenshotLink: 'https://i.ibb.co/txrdXTb/soccer-Formations.jpg',
				github: 'https://github.com/marcluettecke/soccerFormationsFrontend/tree/master',
				websiteLink: 'https://soccerformations.netlify.app/',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_Thesis.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/d3.png',
						alt: 'angular',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'd3',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Business Statscard',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/pjmkD8k/statscard-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/StatsCard',
				websiteLink: 'https://statscard.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Business Coming Soon',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/kcT5bVv/baseapparel-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/BaseApparelComingSoon',
				websiteLink: 'https://basesapparelcomingsoonsite.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Three Columns',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/kgvR0b9/three-Column-Grid-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/ThreeColumnGrid',
				websiteLink: 'https://threecolumngrid.netlify.app/',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: ''
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Soccer Formations - Backend',
				type: 'document',
				screenshotLink: 'https://i.ibb.co/YWS1kcp/soccer-Formations-backend-cropped.jpg',
				github: 'https://github.com/marcluettecke/soccerFormationsBackend',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_Thesis.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
						alt: 'keras',
						documentation: ''
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/postgres.png',
						alt: 'postgres',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Sentence Classification',
				type: 'document',
				screenshotLink: 'https://i.ibb.co/pdHdqvP/ss-classification-cropped.jpg',
				github: 'https://github.com/marcluettecke/single-sentence-classification-NN/tree/23e7263382225694d583fd06aadcfad1e62fdd46',
				documentDownloadLink:
					process.env.PUBLIC_URL +
					'/assets/documents/MarcLuettecke_SS_classification.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
						alt: 'keras',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/tensorflow.svg',
						alt: 'tensorflow',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Rent Bubble Visualization',
				type: 'document',
				screenshotLink: 'https://i.ibb.co/zPWj6jT/rent-cropped.jpg',
				github: 'https://github.com/marcluettecke/rent_data_germany',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_rent_paper.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/R.svg',
						alt: 'R',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			},
			{
				name: 'Card mini game',
				type: 'other',
				screenshotLink: 'https://i.ibb.co/nRT9RPq/uno-cropped.jpg',
				github: 'https://github.com/marcluettecke/unoGame',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: ''
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: ''
					}
				]
			}
		]
	},

	stack: {
		layoutImage: process.env.PUBLIC_URL + '/assets/layoutImages/Coding2.png',
		title: 'Stack',
		tech: [
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
				alt: 'react',
				documentation: 'https://reactjs.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
				alt: 'git',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
				alt: 'angular',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/postgres.png',
				alt: 'postgres',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
				alt: 'html',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/node.png',
				alt: 'node',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/next.png',
				alt: 'nextjs',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
				alt: 'keras',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
				alt: 'js',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/mongo.png',
				alt: 'mongodb',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
				alt: 'firebase',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tailwind.svg',
				alt: 'tailwind',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
				alt: 'netlify',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
				alt: 'ts',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/ionic.png',
				alt: 'ionic',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
				alt: 'python',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/d3.png',
				alt: 'd3',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
				alt: 'css',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/heroku.png',
				alt: 'heroku',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/R.svg',
				alt: 'R',
				documentation: ''
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tensorflow.svg',
				alt: 'tensorflow',
				documentation: ''
			}
		],
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`
	},
	footer: {
		buttonText: 'Get in touch',
		buttonTwWidth: '56',
		text: 'This website was built using React.js and Tailwind.css. While inspired by other websites, it is fully my own work, so if you end up using it or parts of it, any reference would be appreciated | Marc Luettecke © 2021'
	},
	contactForm: {
		name: 'contactForm',
		contactInfo: {
			email: 'marc.luettecke1@gmail.com',
			address: 'Hamm | Germany',
			phone: '+49 176 21883495'
		},
		freeText: 'Fill in the form and I will get back to you within 24 hours.',
		buttonText: 'Send Message',
		buttonTwWidth: '56'
	},
	contactModal: {
		name: 'contactModal',
		text: {
			successTitle: 'Message sent!',
			successText: 'I will get back to you ASAP',
			failedTitle: 'Oops...',
			failedText:
				'Something went wrong! Please try again later, or contact me over any of the listed channels'
		}
	}
};
