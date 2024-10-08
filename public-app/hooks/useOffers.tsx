import { useState, useEffect } from 'react';
import { fetchOffers } from '../lib/api';

export interface Offer {
	_id: string;
	title: string;
	description: string;
	company: string;
	contractType: string;
	location: string;
	salary: string;
	requiredSkills: string[];
	startDate: string;
	endDate: string;
	available: boolean;
	created_at: string;
	updated_at: string;
}

export const useOffers = (initialParams: Record<string, any> = {}) => {
	const [offers, setOffers] = useState<Offer[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [params, setParams] = useState(initialParams);

	useEffect(() => {
		const loadOffers = async () => {
			try {
				setLoading(true);
				const data = await fetchOffers(params);
				setOffers(data);
				setError(null);
			} catch (err) {
				setError('Failed to fetch offers');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		loadOffers();
	}, [params]);

	return { offers, loading, error, setParams };
};
