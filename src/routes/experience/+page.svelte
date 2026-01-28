<script lang="ts">
	import { page } from '$app/state';
	import { ExperienceData } from '$lib/model/data/experience.data';
	import { WebRoutesEnum } from '$lib/model/enum/routes.enum';
	import { RouterUtil } from '$lib/util/router.util.svelte';

	const routerUtil = new RouterUtil();

	const currentPage = page.url;

	const tabs = [
		{ id: 'job', label: 'Job' },
		{ id: 'hobby', label: 'Hobby' },
		{ id: 'school', label: 'School' }
	] as const;

	type TabId = (typeof tabs)[number]['id'];

	let selectedTab: TabId = $state('job');
	let filteredExperience = $derived(ExperienceData.filter((e) => e.type === selectedTab));

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
	<h2 class="mb-3 text-xl font-extrabold tracking-widest">
		: : {currentPage.pathname.slice(1).replace('/', ' : : ')}
	</h2>

	<!-- tabs -->
	<div class="mb-5 rounded-xl bg-gray-200 p-1">
		<div class="flex space-x-2">
			{#each tabs as tab}
				<button
					type="button"
					class={`flex-1 rounded-lg px-3 py-1 text-sm font-semibold transition ${
						selectedTab === tab.id
							? 'bg-teal-500 text-white shadow'
							: 'bg-transparent text-gray-700 hover:bg-gray-300'
					}`}
					onclick={() => (selectedTab = tab.id)}
				>
					{tab.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- current -->
	<section id="exp-card-wrapper" class="flex flex-col space-y-3">
		{#each filteredExperience as e}
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
