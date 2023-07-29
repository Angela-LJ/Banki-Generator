import React from 'react'

import './mainsection.css'
import { DisplaySection } from '../../../components/index.js'
import { QuestionCardShape } from '../../index';


export default function Main({ }) {

  return (
    <>
      <div className='main-section'>
        <section className="card-grid">
          <QuestionCardShape />
        </section>
        <section className="display-container justify-self-center">
          <div className="display-type-section bg-black">
            <DisplaySection />
          </div>
        </section>
      </div>         
    </>
  )
}

