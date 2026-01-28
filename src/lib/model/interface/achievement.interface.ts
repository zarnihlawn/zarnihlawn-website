export interface AchievementImageInterface {
	src: string;
	order: number;
	provider: string;
}

export interface AchievementInterface {
	name: string;
	description: string;
	issuer: string;
	type: 'career' | 'language' | 'other';
	month: string;
	year: number;
	images?: AchievementImageInterface[];
}

