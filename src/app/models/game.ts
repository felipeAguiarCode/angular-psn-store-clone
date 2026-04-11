export interface Game {
	id: number;
	cover: string;
	label: string;
	type: string;
	price: string;
	title: string;
	category: 'PS4' | 'PS5' | 'Exclusive' | 'All';
}
