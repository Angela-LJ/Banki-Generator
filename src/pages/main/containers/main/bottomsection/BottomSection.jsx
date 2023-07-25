import './bottomsection.css'
import generate from '../../../../../assets/svg/generate.svg'
import answer from '../../../../../assets/svg/answer.svg'
import { ScrollBar, ArcadeBtn } from '../../../components/index'
import { useCardTextContext } from "../../../hooks/CardTextContext"

export default function BottomSection({ }) {

  const cardTextContext = useCardTextContext();
  const { handleTypeSelection } = cardTextContext;
  
  return (

  <section className='bottom-grid'>
    <div className="bottom-grid-children grid-arcade-left w-full">
      <div className='svg-btn-container'>
        <img className="-mb-9" src={generate} alt='Generate question button' />
        <ArcadeBtn variant='lightPurple' size='default' ></ArcadeBtn>
      </div>
    </div>
    <div className="bottom-grid-children grid-arcade-left w-full">
      <div className='svg-btn-container'>
        <img className="-mb-7" src={answer} alt="Answer toggle button" />
        <ArcadeBtn variant='darkPurple' size='default'></ArcadeBtn>
      </div>
    </div>
    <div className='bottom-grid-children grid-scrollbar'>
      <ScrollBar 
        handleTypeSelection={handleTypeSelection}
      />
    </div>
    <div className="bottom-grid-children grid-arcade-right-1 col-start-6">
      <div className='svg-btn-container'>
        <ArcadeBtn variant='lightBlue' size='default' />
      </div>
    </div>
    <div className="bottom-grid-children grid-arcade-right-2 col-start-7">
      <div className='svg-btn-container'>
        <ArcadeBtn variant='darkBlue' size='default' />
      </div>
    </div>
  </section>

  )
}