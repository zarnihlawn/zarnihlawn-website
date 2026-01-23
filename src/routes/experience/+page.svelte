<script lang="ts">
	import { page } from '$app/state';
	import { WebRoutesEnum } from '$lib/model/enum/routes.enum';
	import type { ExperienceInterface } from '$lib/model/interface/experience.interface';
	import { RouterUtil } from '$lib/util/router.util.svelte';

	const routerUtil = new RouterUtil();

	const experienceCards: ExperienceInterface[] = [
		{
			name: 'Pun Hlaing Hospitals',
			description: 'a hospital',
			position: 'junior data & software engineer',
			link: 'https://punhlainghospitals.com/',
			detailLink:
				'pun-hlaing-hospitals-junior-data-&-software-engineer',
			joinedAt: new Date('2025-7-1'),
			latestAt: new Date()
		},
		{
			name: 'mari.software',
			description: 'indie software development (side project)',
			position: 'software engineer',
			link: 'https://github.com/mari-software',
			detailLink: 'mari-software-software-engineer',
			joinedAt: new Date('2025-12-23'),
			latestAt: new Date()
		},
		{
			name: 'Pun Hlaing Hospitals',
			description: 'a hospital',
			position: 'intern software developer',
			link: 'https://punhlainghospitals.com/',
			detailLink: 'pun-hlaing-hospitals-intern-software-developer',
			joinedAt: new Date('2024-10-01'),
			latestAt: new Date('2025-7-1')
		}
	];

	const currentPage = page.url;

	function isCurrent(date: Date) {
		const now = new Date();

		return (
			date.getFullYear() === now.getFullYear() &&
			date.getMonth() === now.getMonth() &&
			date.getDate() === now.getDate()
		);
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: '2-digit',
			year: 'numeric'
		});
	}
</script>

<section
	id="card"
	class="h-203.75 overflow-y-auto rounded-lg bg-gray-100 px-5 py-3"
>
	<h2 class="mb-5 text-xl font-extrabold tracking-widest">
		: : {currentPage.pathname.slice(1).replace('/', ' : : ')}
	</h2>

	<!-- current -->
	<section id="exp-card-wrapper" class="flex flex-col space-y-3">
		{#each experienceCards as e}
			<section
				id="exp-card"
				class="flex flex-col space-y-5 rounded-xl bg-gray-50 px-3 py-4"
			>
				<div>
					<h1 class="text-lg font-bold">
						{e.name}
					</h1>
					<p>
						{formatDate(e.joinedAt)} –
						{#if isCurrent(e.latestAt)}
							<span class="text-teal-500"> Current </span>
						{:else}
							<span class="text-red-500">
								{formatDate(e.latestAt)}
							</span>
						{/if}
					</p>
				</div>
				<p class="text-sm italic opacity-70">
					{e.description}
				</p>
				<p class="">
					position: {e.position}
				</p>
				<button
					class="cursor-pointer rounded-lg border-2 bg-teal-200 px-3 py-1"
					onclick={() =>
						routerUtil.goToRoute(
							`${WebRoutesEnum.EXPERIENCE}/${e.detailLink}`
						)}
				>
					View My Works
				</button>
			</section>
		{/each}
	</section>
</section>
