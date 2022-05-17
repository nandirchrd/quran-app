import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
	asma: {
		ar: { short: string; long: string };
		en: { short: string; long: string };
		id: { short: string; long: string };
	};
	ayahCount: number;
	number: number;
	type: string;
}
const Item: React.FC<IProps> = ({ asma, ayahCount, number, type }) => {
	return (
		<Link to={'/' + number}>
			<div className='cursor-pointer flex  hover:bg-gray-200'>
				<div className='flex min-w-[4em] font-medium p-2 items-center justify-center'>
					{number}
				</div>
				<div className='p-2 flex flex-col w-full'>
					<span className='font-bold text-neutral-700'>
						{asma.en.short}
					</span>
					<span className='text-neutral-500 text-[0.6em]'>
						{type} | {ayahCount}{' '}
						{ayahCount > 0 ? 'verses' : 'verse'}
					</span>
				</div>
				<div className='p-2 min-w-[5em] flex items-center justify-end'>
					{asma.ar.short}
				</div>
			</div>
		</Link>
	);
};

export default Item;
