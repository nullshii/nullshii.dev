<script setup lang='ts'>
	import '~/assets/css/blogs.css';
	import CodeBlock from '~/components/blog/code-block.vue';
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
				{{ $t('blog.github-ssh-config.warning.os') }}
			</div>
			<div class='note-container'>
				<div class='note'>
					{{ $t('blog.note') }}
				</div>
				<p v-for="(item, index) in $t('blog.github-ssh-config.note.home-folder-location').split('\n')"
					 :key='index'>
					{{ item }}
				</p>
			</div>
			{{ $t('blog.github-ssh-config.create-necessary-files') }}
			<code-block>
				<p>
					$HOME/.ssh/ <span class='text-accent'>- {{ $t('blog.github-ssh-config.folder.base') }}</span>
				</p>
				<p>
					$HOME/.ssh/keys <span class='text-accent'>- {{ $t('blog.github-ssh-config.folder.keys') }}</span>
				</p>
				<p>
					$HOME/.ssh/config <span class='text-accent'>- {{ $t('blog.github-ssh-config.file.config') }}</span>
				</p>
			</code-block>
		</center-container>
		<blog-back-to-index />
	</div>
</template>