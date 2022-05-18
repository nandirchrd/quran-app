import React, { useEffect, useState } from 'react';
import { getQuran } from '../../api';
import useFetch from '../../hooks/useFetch';
import { IState } from '../../types/intefaces';
import { BsPlay, BsFillPlayFill } from 'react-icons/bs';
import Playing from '../../assets/gif/playing.gif';

interface IProps {
	surah: string | number | undefined;
}

const Surah: React.FC<IProps> = ({ surah }) => {
	const [data, isLoading, error] = useFetch<IState['data']>(
		getQuran({ surat: surah })
	);
	const [prevURL, setPrevURL] = useState('');
	const [prevAudio, setPrevAudio] = useState<HTMLAudioElement>();
	const [toggleAudio, setToggleAudio] = useState<boolean>(true);
	const [audioEnded, setAudioEnded] = useState<boolean | undefined>(false);
	// BUGS AUDIO ENDED

	const playAudio = (url: string) => {
		setPrevURL(url);
		if (url !== prevURL) {
			prevAudio?.pause();
			const audio = new Audio(url);
			audio?.play();

			setToggleAudio(true);
			setPrevAudio(audio);
			return;
		}

		setToggleAudio(!toggleAudio);
		if (toggleAudio) {
			prevAudio?.pause();
		} else {
			prevAudio?.play();
		}
	};
	return (
		<section>
			<div className='container mx-auto p-4'>
				{isLoading ? (
					<h1>Loading ...</h1>
				) : error ? (
					<h1>{error}</h1>
				) : (
					<section>
						<header className='text-netral text-center bg-primary p-4 rounded-md'>
							<div className='text-xl font-medium'>
								<h1>{data?.number}</h1>
								<h1>{data?.asma.en.short}</h1>
								<span className='text-sm'>
									{data?.asma.translation.en}
								</span>
							</div>
							<div className='text-xs'>
								<span>
									{data?.type.en} - {data?.ayahCount}{' '}
									{data?.ayahCount === 1 ? 'verse' : 'verses'}
								</span>
							</div>
						</header>
						<div>
							{data?.ayahs.map((ayah) => (
								<div
									className='flex flex-col'
									key={ayah.number.insurah}>
									<span className='text-right mb-5'>
										{ayah.text.ar}
									</span>
									<div>
										<p className='text-xs'>
											{ayah.text.read}
										</p>
									</div>
									<div className='flex items-center border border-primary justify-between h-10'>
										<div className='flex ml-1 items-center justify-center bg-primary w-6 h-6 text-netral text-[0.5em] font-medium p-2 rounded-full'>
											{ayah.number.insurah}
										</div>
										<div>
											<span>
												{!audioEnded &&
												!toggleAudio &&
												prevURL === ayah.audio.url ? (
													'Paused'
												) : prevAudio &&
												  prevURL === ayah.audio.url &&
												  !audioEnded ? (
													<img
														alt='loading gif'
														width={50}
														style={{
															mixBlendMode:
																'multiply',
														}}
														src={Playing}
													/>
												) : (
													''
												)}
											</span>
										</div>
										<div className='flex items-center'>
											{!toggleAudio &&
											prevURL === ayah.audio.url ? (
												<BsFillPlayFill
													onClick={() =>
														playAudio(
															ayah.audio.url
														)
													}
													size={40}
													cursor={'pointer'}
												/>
											) : (
												<BsPlay
													onClick={() =>
														playAudio(
															ayah.audio.url
														)
													}
													size={40}
													cursor={'pointer'}
												/>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				)}
			</div>
		</section>
	);
};

export default Surah;
