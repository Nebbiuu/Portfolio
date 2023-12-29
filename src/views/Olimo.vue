<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Olimo',
				singleProjectDate: 'Sept 2022 - Déc 2022',
				singleProjectTag: 'Web Application',
			},
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
			relatedProject: {
				relatedProjectsHeading: '',
				// relatedProjects: [
				// 	{
				// 		id: 1,
				// 		title: 'Mobile UI',
				// 		img: require('@/assets/images/mobile-project-1.jpg'),
				// 	},
				// 	{
				// 		id: 2,
				// 		title: 'Web Application',
				// 		img: require('@/assets/images/web-project-1.jpg'),
				// 	},
				// 	{
				// 		id: 3,
				// 		title: 'UI Design',
				// 		img: require('@/assets/images/ui-project-2.jpg'),
				// 	},
				// 	{
				// 		id: 4,
				// 		title: 'Kabul Mobile App UI',
				// 		img: require('@/assets/images/mobile-project-2.jpg'),
				// 	},
				// ],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
