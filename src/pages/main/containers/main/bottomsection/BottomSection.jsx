import './bottomsection.css'
import generate from '../../../../../assets/svg/generate.svg'
import answer from '../../../../../assets/svg/answer.svg'
import { ScrollBar, ArcadeButtonLightP, ArcadeButtonDarkP, ArcadeButtonLightB, ArcadeButtonDarkB } from '../../../components/index'

export default function BottomSection({ handleTypeSelection }) {

  return (

  <section className='bottom-grid'>
    <div className="bottom-grid-children grid-arcade-left w-full">
      <div className='svg-btn-container'>
        <img className="-mb-9" src={generate} alt='Generate question button' />
        <ArcadeButtonLightP />
      </div>
    </div>
    <div className="bottom-grid-children grid-arcade-left w-full">
      <div className='svg-btn-container'>
        <img className="-mb-7" src={answer} alt="Answer toggle button" />
        <ArcadeButtonDarkP />
      </div>
    </div>
    <div className='bottom-grid-children grid-scrollbar'>
      <ScrollBar 
        handleTypeSelection={handleTypeSelection}
      />
    </div>
    <div className="bottom-grid-children grid-arcade-right-1 col-start-6">
      <div className='svg-btn-container'>
        <ArcadeButtonLightB />
      </div>
    </div>
    <div className="bottom-grid-children grid-arcade-right-2 col-start-7">
      <div className='svg-btn-container'>
        <ArcadeButtonDarkB />
      </div>
    </div>
  </section>

  )
}