import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import { config } from '../theme.config'

// Email address to use for contact
const EMAIL_ADDRESS = "mack@mackgrissom.io"

const Contact01 = ({ main = {} }) => {
  return (
    <div className="my-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-invert items-start lg:flex">
        <Reveal
          animation="fade-in slide-in-right"
          className="prose prose-invert basis-1/3 lg:mr-14"
        >
          <ContentRenderer source={main} />
        </Reveal>
        <Reveal
          animation="fade-in zoom-in"
          className="md:with-back-plate max-w-3xl w-full border border-omega-700 md:before:bg-omega-700"
        >
          <div className="relative overflow-hidden shadow bg-gradient-omega-900 p-0">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSccC5bVvZp0Nw0_INHSU7lD0Yt1_6JTgah-M7ZVm-A6F0AgZA/viewform?embedded=true" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="bg-transparent w-full"
              style={{ minWidth: '320px' }}
            >
              Loading…
            </iframe>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Contact01
