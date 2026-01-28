<script lang="ts">
	import { page } from '$app/state';
	import { formatBreadcrumb } from '$lib/tool/breadcrumb.tool';

	const currentPage = page.url;

	
</script>

<section
	id="card"
	class="h-203.75 overflow-y-auto rounded-lg bg-gray-100 px-5 py-3"
>
	<h2 class="mb-5 text-xl font-extrabold tracking-widest">
		: : {formatBreadcrumb(currentPage.pathname)}
	</h2>

	<section id="exp-card-wrapper" class="flex flex-col space-y-3">
		<section
			id="exp-card"
			class="flex flex-col space-y-5 rounded-xl bg-gray-50 px-3 py-4"
		>
			<div>
				<h1 class="text-lg font-bold">
					Pearson
				</h1>
				<p class="text-sm text-gray-600">
					BTEC International Level-3 Foundation Diploma in Information Technology
				</p>
				<p class="text-xs text-gray-500">
					Aug 2022 – Aug 2023
				</p>
			</div>
			<p class="text-sm italic opacity-70">
				Foundation diploma in Information Technology awarded by Pearson (UK).
			</p>
			<a
				class="w-max cursor-pointer rounded-lg border-2 bg-teal-200 px-3 py-1 text-xs font-semibold"
				href="https://www.pearson.com/"
				target="_blank"
				rel="noreferrer"
			>
				Visit Pearson site
			</a>
		</section>
	</section>
</section>

