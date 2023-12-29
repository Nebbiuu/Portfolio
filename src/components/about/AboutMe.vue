<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'👋 Bonjour ! Je m\'appelle Boris Theron, et je suis un passionné de développement web en 3ème année de BUT Informatique à l\'IUT de Montpellier, avec un parcours axé sur la Réalisation d\'Application Conception Développement Validation (RACDV).',
				},
				{
					id: 2,
					bio:
						'🚀 Mon voyage dans le monde de la programmation a commencé avec une curiosité insatiable pour les technologies web et la création d\'applications innovantes. Au fil de mes études, j`\'ai acquis une solide compréhension des principes fondamentaux du développement et j\'ai perfectionné mes compétences dans des langages tels que HTML, CSS, JavaScript, et bien d\'autres.',
				},
				{
					id: 3,
					bio:
						'💡 Ce qui me passionne vraiment, c\'est concevoir des solutions informatiques robustes et élégantes qui répondent aux besoins concrets des utilisateurs. Mon parcours académique m\'a permis de me plonger dans des projets variés, de la conception initiale à la validation finale, en passant par le développement agile.',
				},
				{
					id: 4,
					bio:
						'🌐 En dehors des cours, je suis constamment à l\'affût des dernières tendances technologiques et des bonnes pratiques de développement. J\'aime collaborer avec des esprits créatifs pour créer des expériences utilisateur exceptionnelles et des applications performantes.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
