<script lang="ts">
	import { AchievementData } from '$lib/model/data/achievement.data';

	const tabs = [
		{ id: 'career', label: 'Career' },
		{ id: 'language', label: 'Language' },
		{ id: 'other', label: 'Other' }
	] as const;

	type TabId = (typeof tabs)[number]['id'];

	let selectedTab: TabId = $state('career');
	let filteredAchievements = $derived(AchievementData.filter((a) => a.type === selectedTab));
</script>

<section
	id="card"
	class="h-203.75 overflow-y-auto rounded-lg bg-gray-100 px-5 py-3"
>
	<h2 class="mb-3 text-xl font-extrabold tracking-widest">
		: : achievement
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

	<!-- content per tab -->
	<section id="exp-card-wrapper" class="flex flex-col space-y-3">
		{#if filteredAchievements.length === 0}
			<section
				id="exp-card"
				class="flex flex-col space-y-5 rounded-xl bg-gray-50 px-3 py-4"
			>
				<p class="text-sm italic opacity-70">
					No achievements in this category yet.
				</p>
			</section>
		{:else}
			{#each filteredAchievements as a}
				<section
					id="exp-card"
					class="flex flex-col space-y-5 rounded-xl bg-gray-50 px-3 py-4"
				>
					<div>
						<h1 class="text-lg font-bold">
							{a.name}
						</h1>
						<p class="text-sm text-gray-600">
							{a.issuer} ・ {a.month} {a.year}
						</p>
					</div>
					<p class="text-sm italic opacity-70">
						{a.description}
					</p>
					{#if a.images && a.images.length > 0}
						<div class="mt-1 flex flex-wrap gap-2">
							{#each a.images as img}
								<a
									class="cursor-pointer rounded-lg border-2 bg-teal-200 px-3 py-1"
									href={img.src}
									target="_blank"
									rel="noreferrer"
								>
									{a.images.length === 1 ? 'View certificate' : `View ${img.order}`}
								</a>
							{/each}
						</div>
					{/if}
				</section>
			{/each}
		{/if}
	</section>
</section>
