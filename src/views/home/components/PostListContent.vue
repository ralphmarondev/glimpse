<script setup lang="ts">
const post = [
	{
		id: 0,
		title: 'Mountain',
		date: 'March 13, 2025',
		description: 'Mountain image.',
		image: '/glimpse/img_20220913_1.jpg',
		location: 'Earth'
	},
	{
		id: 1,
		title: 'Mountain',
		date: 'March 13, 2025',
		description: 'Mountain image.',
		image: '/glimpse/img_20220919_1.jpg',
		location: 'Earth'
	},
	{
		id: 2,
		title: 'Mountain',
		date: 'March 13, 2025',
		description: 'Mountain image.',
		image: '/glimpse/img_20220920_1.jpg',
		location: 'Earth'
	},
]
</script>

<template>
	<div class="mt-1 col-lg-6 col-md-12 bg-light scrollable-column p-2">
		<div class="mb-3" v-for="item in post" :key="item.id">
			<div class="card px-3 pt-3">
				<img :src="item.image" :alt="item.description" class="post-image">
				<h5 class="text-secondary mt-3">{{ item.location }}</h5>
				<p class="text-secondary" style="font-size: smaller;">{{ item.date }}</p>
				<p class="text-secondary">{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.post-image {
	width: 100%;
	height: auto;
	object-fit: cover;
	border-radius: 4px;
	max-height: 320px;
}
</style>