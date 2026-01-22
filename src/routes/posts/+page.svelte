<script>
	import { LucideCircleFadingPlus, LucidePlus } from '@lucide/svelte';
</script>

<section id="card" class="rounded-lg bg-gray-100 px-5 py-3">
	<h2 class="mb-5 text-xl font-extrabold tracking-widest">
		: : posts
	</h2>

	<div id="search-and-add" class="flex justify-between">
		<input
			type="text"
			name=""
			id=""
			placeholder="Search ..."
			class="rounded-lg border-2"
		/>
		<button
			class=" flex cursor-pointer items-center gap-2 rounded-lg border-2 bg-teal-200 px-5 text-lg"
		>
			<LucideCircleFadingPlus class="size-7 rotate-y-180" />
			<span> Create </span>
		</button>
	</div>
</section>
