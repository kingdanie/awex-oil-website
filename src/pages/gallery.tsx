// Import the dataImages array at the beginning of your Home component file
import { dataSource } from './../../dataSource';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Modal from '../components/Modal';
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto';
import Layout from '@/components/layout';


const Gallery: NextPage = () => {
  

     const router = useRouter();
    //  const { photoId } = router.query;
    const [photoId, setPhotoId] = useState<null | string>(null)
     const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

     const [isModalOpen, setIsModalOpen] = useState(false);


     const lastViewedPhotoRef = useRef<HTMLDivElement>(null);

       const openModal = (photoId: string) => {
         setPhotoId(photoId);
         setIsModalOpen(true);
       };

       const closeModal = () => {
         setIsModalOpen(false);
         setPhotoId(null);
       };

     useEffect(() => {
       // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
       if (lastViewedPhoto && !photoId) {
         lastViewedPhotoRef?.current?.scrollIntoView({ block: 'center' });
         setLastViewedPhoto(null);
       }
     }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Layout>
        {/* ... */}
        <main className="mx-auto max-w-[1960px] p-4">
          {isModalOpen && (
            <Modal
              index={Number(photoId)}
              images={dataSource}
              onClose={closeModal}
            />
          )}
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {dataSource.map(({ id, public_id, format }) => (
              <div
                key={id}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Awex Industries Ltd photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  placeholder="blur"
                  blurDataURL={`data:image/jpeg;base64,PLACEHOLDER_BASE64_DATA`} // Replace with your placeholder data URL
                  src={`/${public_id}.${format}`} // Updated image source
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                  onClick={() => openModal(`${id}`)}
                />
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Gallery;
