<script setup lang="ts">
import PostListContent from './components/PostListContent.vue'
import ProfileContent from './components/ProfileContent.vue'
import SettingsContent from './components/SettingsContent.vue'
</script>
<template>
	<div class="container">
		<div class="row">
			<!-- Left Column -->
			<ProfileContent />

			<!-- Middle Column (Scrollable) -->
			<PostListContent />

			<!-- Right Column -->
			<SettingsContent />
		</div>
	</div>
</template>