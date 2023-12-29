<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';


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
			singleProjectHeader: {}, // Initialize with an empty object
			projectImages: [],
			projectInfo: {},
			relatedProject: {},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	// Use the beforeRouteUpdate hook to fetch data when the route changes
	beforeRouteUpdate(to, from, next) {
		// Assuming you have a method to fetch project details by ID
		this.fetchProjectDetails(to.params.projectId, next);
	},
	created() {
		// Fetch project details based on the initial route
		const projectId = this.$route.params.projectId;
		this.fetchProjectDetails(projectId);
	},
	methods: {
		async fetchProjectDetails(projectId, next) {
			try {
				// Assuming you have a method to fetch project details by ID
				// Example:
				const projectDetails = projects[projectId - 1];

				// Assign the fetched project details to the data properties
				this.singleProjectHeader = {
					singleProjectTitle: projectDetails.title,
					singleProjectDate: projectDetails.date,
					singleProjectTag: projectDetails.category,
				};

				this.projectImages = projectDetails.projectImages;
				this.projectInfo = projectDetails.projectInfo;

				// Call next to indicate that the navigation can proceed
				if (next) {
					next();
				}
			} catch (error) {
				console.error('Error fetching project details:', error);
			}
		},
	},
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
