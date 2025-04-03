import AboutUsSection from '@/components/AboutHero'
import AboutSection from '@/components/AboutSection'
import HowWeWork from '@/components/HowWeWork'
import ImageGallery from '@/components/ImageGallery'
import JoinMovement from '@/components/JoinMovement'
import React from 'react'


const AboutPage = () => {
  return (
    <div>
        <AboutUsSection />
        <AboutSection />
        <HowWeWork />
        <ImageGallery />
        <JoinMovement />
    </div>
  )
}

export default AboutPage