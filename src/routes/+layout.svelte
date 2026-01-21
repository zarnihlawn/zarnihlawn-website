<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import Favicon from '$lib/assets/favicon.ico';
	import Background from '$lib/assets/background.webp';
	import Profile from '$lib/assets/profile.webp';
	import {
		LucideCopyright,
		LucideGithub,
		LucideHouse,
		LucideLanguages,
		LucideMail,
		LucidePalette
	} from '@lucide/svelte';

	let { children } = $props();

	let currentYear = new Date().getFullYear();
	let fullBirthday = new Date('10.Feb.2006');
</script>

<svelte:head><link rel="icon" href={Favicon} /></svelte:head>

<section
	id="background"
	class="
    flex min-h-screen
    w-full items-center justify-center
    bg-[#ecfaf5]
	bg-[radial-gradient(rgba(112,236,173,0.7)_0.9px,transparent_0.9px),radial-gradient(rgba(112,236,173,0.7)_0.9px,#fff_0.9px)]
    bg-size-[36px_36px]
    bg-position-[0_0,18px_18px]
	p-5
  "
>
	<section
		id="card-wrapper"
		class="mx-auto h-300 w-200 rounded-3xl border-8 border-teal-100 bg-gray-50 shadow-2xl"
	>
		<section id="header" class="mx-3 my-2">
			<ul class="flex justify-between">
				<section id="header-left" class="flex list-none gap-5">
					<a href="/" class="rounded-2xl p-2 hover:bg-gray-200">
						<li class="flex items-center gap-3 align-middle">
							<LucideHouse class="size-7 text-teal-300" />
							<span class="text-lg font-bold"> Home </span>
						</li>
					</a>
					<a
						href="https://github.com/zarnihlawn"
						target="_blank"
						class="rounded-2xl p-2 hover:bg-gray-200"
					>
						<li class="flex items-center gap-3 align-middle">
							<LucideGithub class="size-7 text-teal-300" />
							<span class="text-lg font-bold"> GitHub </span>
						</li>
					</a>
					<a
						href="mailto:zarnihlawn@outlook.com?subject=Hello&body=Hi%20there"
						target="_blank"
						class="rounded-2xl p-2 hover:bg-gray-200"
					>
						<li class="flex items-center gap-3 align-middle">
							<LucideMail class="size-7 text-teal-300" />
							<span class="text-lg font-bold"> Mail </span>
						</li>
					</a>
				</section>
				<div id="header-right" class="flex list-none gap-5">
					<a href="/" class="rounded-2xl p-2 hover:bg-gray-200">
						<li class="flex items-center gap-3 align-middle">
							<LucideLanguages class="size-7 text-teal-300" />
						</li>
					</a>
					<a href="/" class="rounded-2xl p-2 hover:bg-gray-200">
						<li class="flex items-center gap-3 align-middle">
							<LucidePalette class="size-7 text-teal-300" />
						</li>
					</a>
				</div>
			</ul>
		</section>

		<section id="background">
			<img
				src={Background}
				alt="background"
				class="h-44 w-full opacity-70"
			/>
		</section>

		<main class="relative flex gap-3">
			<!-- LEFT SIDE -->
			<section
				id="left-side"
				class="relative z-10 -mt-24 w-52 shrink-0"
			>
				<!-- negative margin just on the left side to pull it up -->
				<img
					src={Profile}
					alt="Profile"
					class="w-52 rounded-full border-8 border-gray-50"
				/>
			</section>

			<!-- RIGHT SIDE -->
			<section id="right-side" class="flex-1">
				<!-- Tabs -->
				<section id="tabs" class="mb-4 flex w-full">
					<ul class="flex list-none gap-5">
						<a
							href="https://github.com/zarnihlawn"
							target="_blank"
							class="rounded-2xl p-2 hover:bg-gray-200"
						>
							<li class="flex items-center gap-3 align-middle">
								<span class="text-lg font-bold"> ABOUT </span>
							</li>
						</a>
						<a
							href="mailto:zarnihlawn@outlook.com?subject=Hello&body=Hi%20there"
							target="_blank"
							class="rounded-2xl p-2 hover:bg-gray-200"
						>
							<li class="flex items-center gap-3 align-middle">
								<span class="text-lg font-bold"> POSTS </span>
							</li>
						</a>
						<a
							href="https://github.com/zarnihlawn"
							target="_blank"
							class="rounded-2xl p-2 hover:bg-gray-200"
						>
							<li class="flex items-center gap-3 align-middle">
								<span class="text-lg font-bold"> CLAIMS </span>
							</li>
						</a>
						<a
							href="mailto:zarnihlawn@outlook.com?subject=Hello&body=Hi%20there"
							target="_blank"
							class="rounded-2xl p-2 hover:bg-gray-200"
						>
							<li class="flex items-center gap-3 align-middle">
								<span class="text-lg font-bold"> PORTFOLIO </span>
							</li>
						</a>
					</ul>
				</section>

				<!-- Content -->
				<section id="content">
					<section id="sidebar-left"></section>
					<section id="sidebar-right">
						{@render children()}
					</section>
				</section>
			</section>
		</main>

		<section id="content">
			<section id="sidebar-left"></section>
			<section id="sidebar-right">
				{@render children()}
			</section>
		</section>

		<section
			id="footer"
			class="mt-4 flex items-center justify-center gap-2 text-center opacity-55"
		>
			<LucideCopyright class="size-3" />
			<span class="text-xs"
				>{currentYear} Zarni Hlawn. All rights reserved.</span
			>
		</section>
	</section>
</section>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
