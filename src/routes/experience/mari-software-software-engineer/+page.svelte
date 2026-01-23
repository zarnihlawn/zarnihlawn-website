<script lang="ts">
	import { page } from '$app/state';
	import type {
		ExperienceDetailInteface,
		ExperienceInterface
	} from '$lib/model/interface/experience.interface';

	let { data } = $props<{ data: ExperienceInterface }>();

	const currentPage = page.url;

	const marisoftwareCards: ExperienceDetailInteface[] = [
		{
			projectName: 'mari-records',
			projectAbout: 'main server for our whole infrastructure',
			isProvidingMaintenance: true,
			projectTimeStart: new Date('2026-01-02'),
			projectTimeEnd: new Date(),
			...data
		}
	];
</script>

<section
	id="card"
	class="h-203.75 overflow-y-auto rounded-lg bg-gray-100 px-5 py-3"
>
	<h2 class="mb-5 text-xl font-extrabold tracking-widest">
		: : {currentPage.pathname.slice(1).replace('/', ' : : ')}
	</h2>

	<section id="mari-card-wrapper"></section>
</section>
