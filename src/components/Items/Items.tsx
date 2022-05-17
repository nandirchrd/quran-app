import React, { useEffect, useState } from 'react';
import api, { getQuran } from '../../api';
import Item from '../Item/Item';

interface IState {
	datas: {
		asma: {
			ar: { short: string; long: string };
			en: { short: string; long: string };
			id: { short: string; long: string };
			translation: { en: string; id: string };
		};
		ayahCount: number;
		number: number;
		preBismillah: { text: string; translation: string };
		recitation: { full: string };
		squence: number;
		tafsir: { id: string; en: null | string };
		type: { ar: string; id: string; en: string };
	}[];
}

const Lists = () => {
	const [datas, setDatas] = useState<IState['datas'] | null>();
	const [isLoading, setLoading] = useState<boolean>(false);
	const [isError, setError] = useState<string | null>();

	console.log(datas);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data } = await api.get('/quran');
				setDatas(data.data);
			} catch (err: any) {
				setError('ERROR');
			}
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<section>
			<div className='container flex mx-auto flex-col gap-1 px-4 text-xs'>
				{datas?.map((item) => (
					<Item
						key={item.number}
						asma={item.asma}
						ayahCount={item.ayahCount}
						number={item.number}
						type={item.type.en}
					/>
				))}
			</div>
		</section>
	);
};

export default Lists;
