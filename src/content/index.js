export default {
	nav: {
		// logo: 'ML',
		logo: 'https://i.ibb.co/T40gXmx/White-logo-no-background.png',
		logoDark: 'https://i.ibb.co/fxXf355/Color-logo-no-background.png',
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
				height: '60',
				url: 'www.subsequent.ai'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/techlabs.png',
				alt: 'techlabs',
				widthMd: '200',
				widthLg: '300',
				height: '32',
				url: 'https://www.techlabs.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_kn.svg',
				alt: 'uni_kn',
				widthMd: '180',
				widthLg: '280',
				height: '32',
				url: 'https://www.uni-konstanz.de/en/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/naklario.png',
				alt: 'naklario',
				widthMd: '160',
				widthLg: '280',
				height: '32',
				url: 'https://naklar.io/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/maroon.png',
				alt: 'maroon',
				widthMd: '80',
				widthLg: '160',
				height: '32',
				url: 'https://loyolamaroon.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/utx.png',
				alt: 'utexas',
				widthMd: '220',
				widthLg: '300',
				height: '40',
				url: 'https://www.mccombs.utexas.edu/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/urbanhive.png',
				alt: 'urbanhive',
				widthMd: '220',
				widthLg: '300',
				height: '32',
				url: 'https://urbanhive.de/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/loyola.png',
				alt: 'loyola',
				widthMd: '200',
				widthLg: '280',
				height: '40',
				url: 'https://www.loyno.edu/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/uni_heidelberg.jpg',
				alt: 'heidelberg',
				widthMd: '160',
				widthLg: '240',
				height: '40',
				url: 'https://www.uni-heidelberg.de/excellenceinitiative/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/kpmg_transparent.png',
				alt: 'kpmg',
				widthMd: '160',
				widthLg: '200',
				height: '26',
				url: 'https://home.kpmg/de/de/home/dienstleistungen/branchen-und-maerkte/financial-services.html'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/partner_logos/correlaid_transparent.png',
				alt: 'correlaid',
				widthMd: '180',
				widthLg: '260',
				height: '26',
				url: 'https://correlaid.org/'
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
				name: 'Dr. Sam Kruger',
				image: process.env.PUBLIC_URL + '/assets/testimonials_images/kruger_bw.png',
				job: 'Professor',
				text: 'Marc conducted research for me during his time as a Ph.D student at UT. While he was exceedingly reliable, proactive and enthusiastic about his assignments, what most stood out was his focus on offering the highest level of work possible. I would hire him again in a heartbeat.'
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
				name: 'Personal CV',
				type: 'both',
				screenshotLink: 'https://i.ibb.co/zS9Kt0z/cv-cropped.jpg',
				github: 'https://github.com/marcluettecke/cv/tree/master',
				websiteLink: 'https://cvmarcluettecke.netlify.app/',
				description:
					'A personal CV as website. The technologies used in this application are vanilla HTML5 and CSS3 with some minor functions in javascript. The website allows for a light and dark theme, and a direct "print to pdf" button, which saves a pdf of the selected theme as a one-pager.',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_CV.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},

			{
				name: 'Portfolio',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/zW37tcB/portfolio-cropped.jpg',
				github: 'https://github.com/marcluettecke/portfolioWebsite',
				websiteLink: 'https://portfoliomarcluettecke.netlify.app/',
				description:
					"This website you are seeing right now. The project leverages React.js's file patterns and component modularization. Distinct packages for slider motions, typing effects, custom alerts, and smooth scrolling combined with Tailwind CSS as backbones of this website.",
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/tailwind.svg',
						alt: 'tailwind',
						documentation: 'https://tailwindcss.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
						alt: 'react',
						documentation: 'https://reactjs.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Naklar.io',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/b68cZBj/naklario-cropped.jpg',
				github: 'https://github.com/naklar-io/naklar.io/tree/develop/frontend',
				websiteLink: 'https://naklar.io/',
				description:
					'A German tutoring NGO, which was build as a support for Corona plagued students, who need help with their schoolwork in homeschool. We helped with a dashboard functionality for the tutors, indicating progress, achievements, etc. The entire app is built in Angular and finds a native translation via Ionic. I am mainly responsible for frontend implementations (Angular + CSS3) for the new data.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: 'https://www.typescriptlang.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'angular',
						documentation: 'https://angular.io/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ionic.png',
						alt: 'ionic',
						documentation: 'https://ionicframework.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'ReactMeals',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/VTDTGdV/reactmeals-cropped.jpg',
				github: 'https://github.com/marcluettecke/ReactMeals',
				websiteLink: 'https://reactmealspractice.netlify.app/',
				description:
					'This website represents an online class project of a React App, which fetches meal data from a Firebase backend. It leverages custom hooks, asynchronous programming, and basic state management via Context API in React.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/react.png',
						alt: 'react',
						documentation: 'https://reactjs.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
						alt: 'firebase',
						documentation: 'https://firebase.google.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Realtor Landing Page',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/c8Bd77j/nexter-cropped.jpg',
				github: 'https://github.com/marcluettecke/nexter',
				websiteLink: 'https://marcluettecke.github.io/nexter/',
				description:
					'A practie website from an advanced CSS3 tutorial. This site uses vanilla HTML5 and CSS3 with object positioning via CSS Grids to mimic a slick layout of a realtor landing page. It is fully responsive for mobile and tablet.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Weather App',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/wSZ4sQ3/weather-App-cropped.jpg',
				github: 'https://github.com/marcluettecke/weatherApp',
				websiteLink: 'https://weather-app-angular11.netlify.app/',
				description:
					'A dummy weather App, fetching weather data from a public weather API, storing marked cities in a firebase backend and presenting the frontend built off an Angular design style. The styling utilizes Angular Material for custom input fields and an extensive data table with sorting, filtering, and pagination functionality.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: 'https://www.typescriptlang.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'angular',
						documentation: 'https://angular.io/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
						alt: 'firebase',
						documentation: 'https://firebase.google.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},

			{
				name: 'Skateshop Landing Page',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/98vyxNN/skate-Shop-cropped.jpg',
				github: 'https://github.com/marcluettecke/skateshopSite',
				websiteLink: 'https://skateshopcss.netlify.app/',
				description:
					'A fake Landing Page of a hypothetical skate shop built in vanilla HTML5 with CSS3. The focus of this project was to practice the placement without CSS techniques as Grid and Flexbox paired with some nice CSS animations.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Memorial App',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/WDvjny8/mamba-Mermories-cropped.jpg',
				github: 'https://github.com/marcluettecke/MambaMemories',
				websiteLink: 'https://mambamemories.herokuapp.com/',
				description:
					'This website mainly aims to practice basic backend (node.js) logic for user authentication, routing, and blog posting. HTML and CSS was used for basic styling, which remained a secondary concern in this project. The page represents a memorial app to post memories of the belated Kobe Bryant, who died in 2020.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
						alt: 'js',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/node.png',
						alt: 'node',
						documentation: 'https://nodejs.org/en/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/mongo.png',
						alt: 'mongodb',
						documentation: 'https://www.mongodb.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/heroku.png',
						alt: 'heroku',
						documentation: 'https://www.heroku.com/home'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},

			{
				name: 'Soccer Formations - Web App',
				type: 'both',
				screenshotLink: 'https://i.ibb.co/txrdXTb/soccer-Formations.jpg',
				github: 'https://github.com/marcluettecke/soccerFormationsFrontend/tree/master',
				websiteLink: 'https://soccerformations.netlify.app/',
				description:
					'The frontend implementation of my Master Thesis to visualize soccer formations. The user can change the visualization granularity over multiple tabs, integrating custom-built visualizations in D3.js. The overall frontend layout was achieved in an Angular App with organic typescript usage.',
				documentDownloadLink:
					process.env.PUBLIC_URL + '/assets/documents/MarcLuettecke_Thesis.pdf',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
						alt: 'ts',
						documentation: 'https://www.typescriptlang.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/d3.png',
						alt: 'angular',
						documentation: 'https://angular.io/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
						alt: 'd3',
						documentation: 'https://d3js.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Business Statscard',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/pjmkD8k/statscard-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/StatsCard',
				websiteLink: 'https://statscard.netlify.app/',
				description:
					"A simple challenge from www.frontendmentor.com, which offers a style and design guide to mimic the developer experience in a business setting. For this beginner's challenge a simple business card with responsive design was implemented in vanilla HTML5 and CSS3.",
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Business Coming Soon',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/kcT5bVv/baseapparel-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/BaseApparelComingSoon',
				websiteLink: 'https://basesapparelcomingsoonsite.netlify.app/',
				description:
					'Yet another challenge from www.frontendmentor.com which illustrates a filler page for a "Business Coming Soon" banner. Vanilla HTML5 and CSS3 achieves the responsive nature as well as simple validation feedback to the user for an email input.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Three Columns',
				type: 'frontend',
				screenshotLink: 'https://i.ibb.co/kgvR0b9/three-Column-Grid-cropped.jpg',
				github: 'https://github.com/marcluettecke/FrontendMentorChallenges/tree/main/ThreeColumnGrid',
				websiteLink: 'https://threecolumngrid.netlify.app/',
				description:
					'A three column layout which serves as basic practice for responsive designs with CSS Flexbox from www.frontendmentor.com. The project was solved in vanilla HTML5 and CSS3.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
						alt: 'html',
						documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
						alt: 'css',
						documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
						alt: 'netlify',
						documentation: 'https://www.netlify.com/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
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
				description:
					"The backend portion of my Master's thesis. It handles the data fetching, cleaning and processingf steps in Python. The database for the large datasets of geospatial data is loaded from a Postgres SQL Database. More details about the implemented calculation logic can be found in the accompanying github repository.",
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: 'https://www.python.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
						alt: 'keras',
						documentation: 'https://keras.io/'
					},

					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/postgres.png',
						alt: 'postgres',
						documentation: 'https://www.postgresql.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
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
				description:
					'A class project which compares different neural network architectures in classification accuracy for single sentence classification tasks. Especially with small input data, the data hungry architectures require a lot of fine-tuning to retrieve the required features to make reasonable assumptions. The classifiers are implemented in Python utilzing Keras or Tensorflow libraries.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: 'https://www.python.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
						alt: 'keras',
						documentation: 'https://keras.io/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/tensorflow.svg',
						alt: 'tensorflow',
						documentation: 'https://www.tensorflow.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
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
				description:
					'This visualization project asks the question "Are the notoriously expensive cities in Germany, really the most expensive ones?". The analysis aligns relative purchasing power and cost of living indicators with scraped rent data (all in Python) to create an interactive map in R\'s leaflet package',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: 'https://www.python.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/R.svg',
						alt: 'R',
						documentation: 'https://www.r-project.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
					}
				]
			},
			{
				name: 'Card mini game',
				type: 'other',
				screenshotLink: 'https://i.ibb.co/nRT9RPq/uno-cropped.jpg',
				github: 'https://github.com/marcluettecke/unoGame',
				description:
					'Toy example of the common card game "Mau Mau" in vanilla Python. The game includes simple computer logic and allows for Computer vs. Computer and Human vs. Computer modes of varying difficulties.',
				technologies: [
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
						alt: 'python',
						documentation: 'https://www.python.org/'
					},
					{
						img: process.env.PUBLIC_URL + '/assets/stack_logos/git.png',
						alt: 'git',
						documentation: 'https://git-scm.com/'
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
				documentation: 'https://git-scm.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/angular.png',
				alt: 'angular',
				documentation: 'https://angular.io/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/postgres.png',
				alt: 'postgres',
				documentation: 'https://www.postgresql.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/html2.png',
				alt: 'html',
				documentation: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/node.png',
				alt: 'node',
				documentation: 'https://nodejs.org/en/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/next.png',
				alt: 'nextjs',
				documentation: 'https://nextjs.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/keras.png',
				alt: 'keras',
				documentation: 'https://keras.io/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/js.png',
				alt: 'js',
				documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/mongo.png',
				alt: 'mongodb',
				documentation: 'https://www.mongodb.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/firebase.png',
				alt: 'firebase',
				documentation: 'https://firebase.google.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tailwind.svg',
				alt: 'tailwind',
				documentation: 'https://tailwindcss.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/netlify.png',
				alt: 'netlify',
				documentation: 'https://www.netlify.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/ts.png',
				alt: 'ts',
				documentation: 'https://www.typescriptlang.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/ionic.png',
				alt: 'ionic',
				documentation: 'https://ionicframework.com/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/python.png',
				alt: 'python',
				documentation: 'https://www.python.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/d3.png',
				alt: 'd3',
				documentation: 'https://d3js.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/css3.png',
				alt: 'css',
				documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/heroku.png',
				alt: 'heroku',
				documentation: 'https://www.heroku.com/home'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/R.svg',
				alt: 'R',
				documentation: 'https://www.r-project.org/'
			},
			{
				img: process.env.PUBLIC_URL + '/assets/stack_logos/tensorflow.svg',
				alt: 'tensorflow',
				documentation: 'https://www.tensorflow.org/'
			}
		],
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`
	},
	footer: {
		buttonText: 'Get in touch',
		buttonTwWidth: '56',
		text: 'This website was built using React.js and Tailwind.css. While inspired by a lot of other websites, it is fully my own work, so any shout out would be highly appreciated if you end up using it or parts of it | Marc Luettecke © 2021'
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
