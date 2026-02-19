import React from 'react'
import MissionSection from '../AboutUs/MissionSection'
import ValuesSection from '../AboutUs/ValuesSection'
import ImpactSection from '../AboutUs/ImpactSection'
import WhyNexasoftSection from '../AboutUs/WhyNexasoftSection'
import TestimonialsSection from './hero/TestimonialsSection'
import TechnologiesSection from './hero/TechnologiesSection'
import WorkShowcaseSection from '../AboutUs/WorkShowcaseSection'
import FinalCTASection from '../AboutUs/FinalCTASection'

const AboutUs = () => {
  return (
    <div>
      <MissionSection/>
      <ImpactSection/>
      <WhyNexasoftSection/>
      <TestimonialsSection/>
      <TechnologiesSection/>
      <WorkShowcaseSection/>
      <FinalCTASection/>
    </div>
  )
}

export default AboutUs
