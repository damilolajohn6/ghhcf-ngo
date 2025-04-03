import GalleryHero from '@/components/GalleryHero'
import ImageGallery from '@/components/ImageGallery';
import JoinMovement from '@/components/JoinMovement';
import React from 'react'


const GalleryPage = () => {
  return (
    <div>
      <GalleryHero />
      <div className="flex flex-col items-center justify-center my-6 mx-auto">
        <h1 className="text-pink-500 font-semibold text-4xl">
          Our Top Categories
        </h1>
        <p className="my-4 text-lg   md:text-xl leading-relaxed">
          We are focusing on Nurturing the Less Fortunate, The Needy, and The
          Youth
        </p>
      </div>
      <ImageGallery />
      <JoinMovement />
    </div>
  );
}

export default GalleryPage