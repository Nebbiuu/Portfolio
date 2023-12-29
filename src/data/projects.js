// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Olimo',
		date: 'Sept 2022 - Déc 2022',
		category: 'Web Application',
		img: require('@/assets/images/logo-Olimo.svg'),
		projectImages: [
			{
				id: 3,
				title: 'Logo',
				img: require('@/assets/images/logo-Olimo.svg'),
			},
			{
				id: 1,
				title: 'Page d\'inscription',
				img: require('@/assets/images/olimo1.png'),
			},
			{
				id: 2,
				title: 'Accueil',
				img: require('@/assets/images/olimo4.png'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Le projet vise à créer un site web communautaire qui offre aux utilisateurs la possibilité de poser des questions sur n’importe quels sujets et de recevoir des réponses de la part d\'autres utilisateurs qu\'ils auront choisi lors de la création de leur question.Ils choisissent aussi les personnes qui vont voter sur ces réponses afin d\'élire la meilleure.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'PHP',
						'JavaScript',
						'SQL (phpMyAdmin)',
						'Gitlab'
					],
				},
			],
			projectDetailsHeading: 'Apprentissages',
			projectDetails: [
				{
					id: 1,
					details:
						'Développer un site web utilisant PHP m\'a permis de développer des compétences de base en programmation, ainsi que de comprendre comment les sites web fonctionnent côté serveur. Voici mes apprentissages principaux en ce qui concerne PHP :'
						+ ' \u000A Les structures de base de la programmation comme les boucles et les conditions.'
						+ '\n La manipulation des variables et des types de données.'
						+ '\n La compréhension du modèle MVC.'
						+ '\n La manipulation des formulaires.'
						+ '\n La gestion des sessions et des cookies.'
						+ '\n L\'interaction avec une base de données utilisant SQL pour stocker et récupérer des données.',
				},
				{
					id: 2,
					details:
						'Dans les autres langages, j\'ai énormement renforcé mes connaissances et mes apprentissages vu en première année :'
						+ 'Utiliser les balises HTML pour structurer le contenu'
						+ 'Appliquer des styles CSS pour améliorer l\'apparence du site',
				},
				{
					id: 3,
					details:
						'En ce qui concerne le SQL, le fait d\'utiliser PHP pour développer ce site m\'a aidé à renforcer mes compétences en matière de manipulation de bases de données.'
				},
				{
					id: 3,
					details:
						'Nous avons appliqué en situation réelle la méthode SCRUM, ce qui je pense était une très bonne expérience de travail en collaboration. J’ai pu jouer le rôle de ScrumMaster durant 2 sprints. Ce rôle a pour but de faciliter le travail de l\'équipe. J\'ai utilisé l\'application Trello pour organiser les tâches à faire pendant les sprints. '
				},

			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/nebbiuu',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/boris-theron-42033b231/',
				},
			],
		},
	},
	{
		id: 2,
		title: 'Olimap',
		date: 'Janv 2023 - Mars 2023',
		category: 'Web Application',
		img: require('@/assets/images/logo-Olimap.svg'),
		projectImages: [
			{
				id: 3,
				title: 'Logo',
				img: require('@/assets/images/logo-Olimap.svg'),
			},
			{
				id: 1,
				title: 'Page d\'inscription',
				img: require('@/assets/images/AStar.png'),
			},
			{
				id: 2,
				title: 'Accueil',
				img: require('@/assets/images/Olimap-Home.png'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Le projet Olimap visait à améliorer une application web calculant la distance la plus courte entre deux communes françaises. Pour optimiser un code préexistant, notre équipe a entrepris une analyse approfondie pour identifier les points d\'amélioration potentiels. Les requêtes à la base de données ont été identifiées comme la principale source de ralentissement, et nous avons appliqué des solutions telles que l\'utilisation d\'une vue matérialisée, la création d\'index, et l\'amélioration de l\'ergonomie du site. De plus, nous avons optimisé l\'algorithme du site en adoptant l\'algorithme A*, en éliminant les redondances de code et en optimisant les requêtes SQL.',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'PHP',
						'JavaScript',
						'SQL',
						'PLSQL',
						'DBeaver',
						'Gitlab'
					],
				},
			],
			projectDetailsHeading: 'Apprentissages',
			projectDetails: [
				{
					id: 1,
					details:
						'Notre groupe se voit fournir une application web qui calcule la plus courte distance entre deux communes françaises. Pour effectuer ce calcul, l’application web utilise l’algorithme de Dijkstra, calculant le plus court chemin entre deux points dans un graphe, et les données de toutes les communes et routes de France représentées sous la forme d’un graphe.',
				},
				{
					id: 2,
					details:
						'La problématique de ce projet est la faible vitesse d’exécution pour effectuer ce calcul. Il faut une quinzaine de secondes pour déterminer une distance de seulement trente mètres. Plus cette distance est grande et plus le calcul prendra du temps. De plusieurs minutes à plusieurs heures. D’un point de vue pratique, l’application n’est donc pas utilisable en l’état.',
				},
				{
					id: 3,
					details:
						'Tout d’abord, le premier objectif consiste à évaluer puis à optimiser les performances de l’application concernant le temps d’exécution et la mémoire qu’elle utilise. Nous pourrons améliorer la vitesse de calcul et alléger la charge de données à traiter.'
				},
				{
					id: 3,
					details:
						'Par la suite, le second objectif est l’évaluation de la qualité logicielle de l’application en nous basant sur des points tels que les tests, l’ organisation et les commentaires.						'
				},
				{
					id: 4,
					details:
						'Le troisième objectif concerne l’aspect visuel de l’application, son ergonomie. 						'
				},

			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/nebbiuu',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/boris-theron-42033b231/',
				},
			],
		},
	},
	{
		id: 3,
		title: 'MyScrabble',
		date: 'Janv 2022 - Janv 2022',
		category: 'CLI Application',
		img: require('@/assets/images/MyScrabble.png'),
		projectImages: [
			{
				id: 3,
				title: 'Logo',
				img: require('@/assets/images/MyScrabble.png'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Le projet vise à recréer le jeu du scrabble en java dans le terminal. Il peut y avoir entre 2 et 4 joueurs, Il y a deux dossier, un pour la version de base et un pour la version avec des extensions. Vous trouverez dans ces dossiers les classes créées pour la SAE Scrabble.'
				+ 'Les différentes classes sont : Plateau.java, MEE.java, Joueur.java, Scrabble.java, Case.java, MainScrabble.java, Ut.java. Vous devez exécuté MainScrabble.java pour lancer le programme. ',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'Gitlab'
					],
				},
			],
			projectDetailsHeading: 'Apprentissages',
			projectDetails: [
				{
					id: 1,
					details:
						'Programmation en Java : Le projet offre une occasion d\'approfondir les compétences en programmation Java, en utilisant des classes telles que Plateau, MEE, Joueur, Scrabble, Case, MainScrabble, et Ut.',
				},
				{
					id: 2,
					details:
						'Conception logicielle : La création des différentes classes (Plateau, MEE, Joueur, etc.) suggère une approche orientée objet. Les apprenants peuvent acquérir une expérience précieuse dans la conception logicielle modulaire et la structuration du code.',
				},
				{
					id: 3,
					details:
						'Interaction avec le terminal : La mise en œuvre dans le terminal nécessite la compréhension et l\'utilisation des entrées/sorties du terminal en Java. Cela permet d\'apprendre comment les programmes interagissent avec l\'utilisateur dans un environnement de ligne de commande.'
				},
				{
					id: 4,
					details:
						'Gestion des joueurs : Implémenter une logique pour gérer entre 2 et 4 joueurs dans le jeu du Scrabble peut enseigner des concepts liés à la gestion des états, des tours de jeu et des interactions entre les joueurs.'
				},
				{
					id: 5,
					details:
						'Réflexion sur l\'expérience utilisateur : L\'interaction avec le terminal implique une réflexion sur l\'expérience utilisateur. Comment l\'utilisateur interagit-il avec le jeu, quelles informations sont fournies, etc. Cette réflexion peut conduire à des améliorations ergonomiques.'
				},

			],
			socialSharingsHeading: 'Lien vers le projet ',
			socialSharings: [
				{
					id: 1,
					name: 'Lien',
					icon: 'github',
					url: 'https://github.com/Nebbiuu/MyScrabble/',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Les Aventuriers du Rail',
		date: 'Fev 2022 - Mai 2022',
		category: 'JavaFX Application',
		img: require('@/assets/images/AventuriersDuRail.png'),
		projectImages: [
			{
				id: 3,
				title: 'Logo',
				img: require('@/assets/images/AventuriersDuRail.png'),
			},
			{
				id: 1,
				title: 'Page d\'inscription',
				img: require('@/assets/images/ADR-plateau.png'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Le projet vise à programmer la mécanique du jeu Aventuriers du Rail (Europe) ainsi qu\'une interface graphique en JavaFX',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'JAVA',
						'JAVAFX',
						'XML',
						'SceneBuilder',
						'JUnit',		
					],
				},
			],
			projectDetailsHeading: 'Apprentissages',
			projectDetails: [
				{
					id: 1,
					details:
						'Développement Orienté Objets (OO) :'
						+ 'Modélisation des Entités : Dans le contexte des Aventuriers du Rail, les différentes entités du jeu (cartes, joueurs, itinéraires, etc.) peuvent être modélisées sous forme de classes Java.'
						+ 'Encapsulation et Polymorphisme : L\'encapsulation peut être utilisée pour masquer les détails d\'implémentation des classes, tandis que le polymorphisme permet de traiter différentes entités de manière uniforme'
				},
				{
					id: 2,
					details:
						'Notions de Qualité de Développement :'
						+ 'Tests Unitaires : Des tests unitaires peuvent être implémentés pour vérifier le bon fonctionnement des classes individuelles du jeu, assurant ainsi une base solide et stable.'
						+ 'Gestion de Version : L\'utilisation d\'un système de gestion de version comme Git facilite le suivi des modifications apportées au code source du jeu, la collaboration entre les membres de l\'équipe et la gestion des versions du logiciel.',
				},
				{
					id: 3,
					details:
						'Interfaces Homme-Machine (IHM) en JavaFX :'
						+ 'Création d\'Écrans et de Fenêtres : JavaFX permet de créer des interfaces graphiques pour le jeu, avec des fenêtres pour afficher le plateau de jeu, les cartes des joueurs, etc.'
						+ 'Gestion des Événements : Les interactions utilisateur, telles que le clic sur une carte ou la sélection d\'un itinéraire, peuvent être gérées à l\'aide de JavaFX pour assurer une expérience utilisateur fluide.'
						+ 'Styles et Mises en Page : JavaFX offre des fonctionnalités pour styliser l\'IHM, améliorant ainsi l\'esthétique du jeu. La gestion des mises en page peut être utilisée pour organiser visuellement les éléments de l\'interface.',
				},

			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/nebbiuu',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/boris-theron-42033b231/',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Chocominer',
		date: 'En cours',
		category: 'Web Application',
		img: require('@/assets/images/Chocominer-logo.jpg'),
		projectImages: [
			{
				id: 3,
				title: 'Logo',
				img: require('@/assets/images/Chocominer-logo.jpg'),
			},
			{
				id: 1,
				title: 'Page d\'inscription',
				img: require('@/assets/images/Chocominer-home.png'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Objective',
			objectivesDetails:
				'Le projet vise à Développer une API et un Outil de Visualisation Web pour la Fouille de Données Déclarative avec ChocoMiner',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'VueJS',
						'TypeScript',
						'Java',
						'JavaSpring',
						'Gitlab'
					],
				},
			],
			projectDetailsHeading: 'Apprentissages',
			projectDetails: [
				{
					id: 1,
					details:
						'L\'objectif principal de ce projet est de permettre aux utilisateurs d\'exploiter les capacités puissantes de ChocoMiner en vue de la fouille de données déclarative, tout en facilitant la visualisation et l\'interprétation des résultats de manière conviviale via une interface web.'
				},
				{
					id: 2,
					details:
						'Développement de l\'API ChocoMiner : '
						+ 'Création d\'une API robuste et intuitive qui interagit avec ChocoMiner.'
						+ 'Intégration des fonctionnalités de fouille de données déclaratives fournies par ChocoMiner.'
						+ 'Gestion de l\'accès aux données et des requêtes de l\'utilisateur.',
				},
				{
					id: 3,
					details:
						'Conception de l\'Outil de Visualisation Web : '
						+ 'Création d\'une interface web conviviale permettant aux utilisateurs de soumettre des requêtes de fouille de données.'
						+ 'Affichage clair des résultats de la fouille de données, y compris les schémas, les tendances et les modèles identifiés.'
						+ 'Utilisation de graphiques interactifs et de visualisations avancées pour représenter les données.',
				},
				{
					id: 4,
					details:
						'Intégration et Tests : '
						+ 'Intégration de l\'API ChocoMiner avec l\'outil de visualisation web.'
						+ 'Tests rigoureux pour s\'assurer du bon fonctionnement de l\'ensemble du système.'
						+ 'Gestion des erreurs et des exceptions pour une expérience utilisateur fluide.',
				},
				{
					id: 5,
					details:
						'Documentation et Présentation : '
						+ 'Rédaction d\'une documentation détaillée pour l\'API et l\'outil de visualisation.'
						+ 'Préparation d\'une présentation finale du projet pour démontrer ses fonctionnalités et ses avantages',
				},

			],
			socialSharingsHeading: 'Share This',
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/nebbiuu',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/boris-theron-42033b231/',
				},
			],
		},
	},
];

export default projects;
