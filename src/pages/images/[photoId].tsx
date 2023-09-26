import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dataSource } from '../../../dataSource';
import Carousel from '../../components/Carousel';
import type { ImageProps } from '../../utils/types';

const ImagePage: NextPage = ({ currentPhoto }: { currentPhoto: ImageProps }) => {
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

// export const getStaticProps: GetStaticProps = async (context) => {
//   const results = await getResults();

//   let reducedResults: ImageProps[] = [];
//   let i = 0;
//   for (let result of results.resources) {
//     reducedResults.push({
//       id: i,
//       height: result.height,
//       width: result.width,
//       public_id: result.public_id,
//       format: result.format,
//     });
//     i++;
//   }

//   const currentPhoto = reducedResults.find(
//     (img) => img.id === Number(context.params.photoId)
//   );
//   currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

//   return {
//     props: {
//       currentPhoto: currentPhoto,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  // ...

  const currentPhoto = dataSource.find(
    (img) => img.id === Number(context.params.photoId)
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

// export async function getStaticPaths() {
//   const results = await cloudinary.v2.search
//     .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by('public_id', 'desc')
//     .max_results(400)
//     .execute();

//   let fullPaths = [];
//   for (let i = 0; i < results.resources.length; i++) {
//     fullPaths.push({ params: { photoId: i.toString() } });
//   }

//   return {
//     paths: fullPaths,
//     fallback: false,
//   };
// }
