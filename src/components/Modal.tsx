import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import type { ImageProps } from '../utils/types';
import SharedModal from './SharedModal';

export default function Modal({
  images,
  index,
  onClose,
}: {
  images: ImageProps[];
  index: number;
  onClose?: () => void;
}) {
  let overlayRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const { photoId } = router.query;
  // let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    setIsOpen(false);
    router.push('/gallery', undefined, { shallow: true });
    onClose?.();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(
      {
        query: { photoId: newVal },
      },
      `/images/${newVal}`,
      { shallow: true }
    );
  }

  // Add event listeners for the arrow keys
  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (index + 1 < images.length) {
        changePhotoId(index + 1);
      }
    } else if (event.key === 'ArrowLeft') {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    }
  });

  return (
    <Dialog
      static
      open={isOpen}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
