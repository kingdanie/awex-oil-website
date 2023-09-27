import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dataSource } from '../../../dataSource';
import Carousel from '../../components/Carousel';
import type { ImageProps } from '../../utils/types';

const ImagePage = ({
  currentPhoto,
}: {
  currentPhoto: ImageProps;
}) => {
  const router = useRouter();
  // console.log(router.query)
  const { photoId } = router.query;
  let index = Number(photoId);

  const currentPhotoUrl = `/${currentPhoto.public_id}.${currentPhoto.format}`;

  return (
    <>
      <div className="mx-auto max-w-[1960px] p-4">
        <Carousel
          path={currentPhotoUrl}
          currentPhoto={currentPhoto}
          index={index}
        />
      </div>
    </>
  );
};

export default ImagePage;


export const getStaticProps: GetStaticProps = async (context) => {
  // ...

  const currentPhoto = dataSource.find(
    (img) => img.id === Number(context?.params?.photoId)
  );

  return {
    props: {
      currentPhoto: currentPhoto,
    },
  };
};

export async function getStaticPaths() {
  const paths = dataSource.map((image) => ({
    params: { photoId: image.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
