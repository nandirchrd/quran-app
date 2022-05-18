import React from 'react';
import useFetch from '../../hooks/useFetch';
import Item from '../Item/Item';
import { IState } from '../../types/intefaces';

const Lists = () => {
	const [datas, isLoading, error] = useFetch<IState['datas']>('/quran');

	console.log(datas);

	return (
		<section>
			<div className='container flex mx-auto flex-col gap-1 px-4 text-xs'>
				{isLoading ? (
					<h1 className='text-center'>Loading ...</h1>
				) : error ? (
					<h1 className='text-center'>{error}</h1>
				) : (
					datas?.map((item) => (
						<Item
							key={item.number}
							asma={item.asma}
							ayahCount={item.ayahCount}
							number={item.number}
							type={item.type.en}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Lists;
