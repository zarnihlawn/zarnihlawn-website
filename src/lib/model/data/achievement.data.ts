import type { AchievementInterface } from '../interface/achievement.interface';

import BachelorHonours from "$lib/asset/image/webp/achievement/career/Bachelor of Science Second Class Honours First Division (July, 2025) [University of Sunderland].webp";
import HigherDiploma from "$lib/asset/image/webp/achievement/career/Higher Diploma in Information Technology (August, 2024) [TMC Academy]].webp";
import BtecFoundation from "$lib/asset/image/webp/achievement/career/Pearson BTEC International Level 3 Foundation Diploma (October, 2023) [GUSTO University].webp";

import TegLevel4Page1 from "$lib/asset/image/webp/achievement/language/Certificate in General English and English for Academic Purposes Level 4 (June, 2024) [TEG INNTERNATIONAL COLLEGE].webp";
import TegLevel4Page2 from "$lib/asset/image/webp/achievement/language/Certificate in General English and English for Academic Purposes Level 41 (June, 2024) [TEG INNTERNATIONAL COLLEGE].webp";

import FirstAidBasic from "$lib/asset/image/webp/achievement/other/First AID - Basic (Jan, 2020) [Myanmar Red Cross Society].webp";
import GustoFootball from "$lib/asset/image/webp/achievement/other/GUSTO's Football Championship 2023 (Feb, 2023) [GUSTO University].webp";
import GustoDebate from "$lib/asset/image/webp/achievement/other/University's Debating Competion 2023 (2023) [GUSTO University].webp";

export const AchievementData: AchievementInterface[] = [
	{
		name: 'BSc (Hons) Computer Science',
		description: 'Bachelor of Science Second Class Honours First Division in Computer Science.',
		issuer: 'University of Sunderland',
		type: 'career',
		images: [
			{
				src: BachelorHonours,
				order: 1,
				provider: 'University of Sunderland'
			}
		]
	},
	{
		name: 'Higher Diploma in Information Technology',
		description: 'Higher Diploma in Information Technology.',
		issuer: 'TMC Academy',
		type: 'career',
		images: [
			{
				src: HigherDiploma,
				order: 1,
				provider: 'TMC Academy'
			}
		]
	},
	{
		name: 'Pearson BTEC International Level 3 Foundation Diploma',
		description: 'Foundation diploma in information technology from GUSTO University.',
		issuer: 'GUSTO University',
		type: 'career',
		images: [
			{
				src: BtecFoundation,
				order: 1,
				provider: 'GUSTO University'
			}
		]
	},
	{
		name: 'Certificate in General English and English for Academic Purposes Level 4',
		description:
			'Completion of General English and English for Academic Purposes Level 4.',
		issuer: 'TEG International College',
		type: 'language',
		images: [
			{
				src: TegLevel4Page1,
				order: 1,
				provider: 'TEG International College'
			},
			{
				src: TegLevel4Page2,
				order: 2,
				provider: 'TEG International College'
			}
		]
	},
	{
		name: 'First Aid – Basic',
		description: 'Basic first aid training.',
		issuer: 'Myanmar Red Cross Society',
		type: 'other',
		images: [
			{
				src: FirstAidBasic,
				order: 1,
				provider: 'Myanmar Red Cross Society'
			}
		]
	},
	{
		name: "GUSTO's Football Championship 2023",
		description: 'Participation in GUSTO’s Football Championship 2023.',
		issuer: 'GUSTO University',
		type: 'other',
		images: [
			{
				src: GustoFootball,
				order: 1,
				provider: 'GUSTO University'
			}
		]
	},
	{
		name: "University's Debating Competition 2023",
		description: 'Participation in the university debating competition 2023.',
		issuer: 'GUSTO University',
		type: 'other',
		images: [
			{
				src: GustoDebate,
				order: 1,
				provider: 'GUSTO University'
			}
		]
	}
];

