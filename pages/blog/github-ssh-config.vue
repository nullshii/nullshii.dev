<script setup lang='ts'>
	import '~/assets/css/blogs.css';
</script>

<template>
	<div class='w-fill flex flex-col gap-2 items-center'>
		<center-container class='gap-4 !items-start'>
			<h1 class='header-1'>
				{{ $t('blog.github-ssh-config.header') }}
			</h1>
			<div class='flex flex-col gap-6'>
				<p v-for="(item, index) in $t('blog.github-ssh-config.description').split('\n')"
					 :key='index'>
					{{ item }}
				</p>
			</div>
			<div class='disclaimer-container'>
				{{ $t('blog.github-ssh-config.disclaimer.os') }}
			</div>
			<ol>
				<li>
					{{ $t('blog.github-ssh-config.create-necessary-files') }}
				</li>
			</ol>
		</center-container>
		<blog-back-to-index />
	</div>
</template>