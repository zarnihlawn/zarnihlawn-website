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

</section>

