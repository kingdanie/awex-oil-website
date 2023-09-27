import Image from 'next/image';
import { useRouter } from 'next/router';
// import useKeypress from 'react-use-keypress';
import { dataSource } from '../../dataSource';
import type { ImageProps } from '../utils/types';
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto';
import SharedModal from './SharedModal';
import { useEffect } from 'react';

export default function Carousel({
  index,
  currentPhoto,
  path,
}: {
  index: number;
  currentPhoto: ImageProps;
  path: string;
}) {
  const router = useRouter();
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  function closeModal() {
    setLastViewedPhoto(currentPhoto?.id);
    router.push('/gallery', undefined, { shallow: true });
  }

  function changePhotoId(newVal: number) {
    return newVal;
  }

  // useKeypress('Escape', () => {
  //   closeModal();
  // });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Add event listener only when window is available (in the browser)
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        <Image
          src={path}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          fill
          priority={true}
        />
      </button>
      <SharedModal
        index={index}
        images={dataSource}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={true}
      />
    </div>
  );
}
