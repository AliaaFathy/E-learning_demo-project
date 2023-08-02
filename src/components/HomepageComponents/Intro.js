import './styles/Intro.css'
import  './styles/learningProcess.css'
import background from '../../images/Mask Group 2.png'
import background2 from '../../images/Path 10.png'
import background3 from '../../images/Path 9.png'
import  base from '../../images/Intersection 3.png'
import image from '../../images/Group 12.png'

function Intro(){
    let seconPart=<span className='text-custom-yellow'>Toward Your Success</span>
 return(
     <div className='introDiv'>
         <img className='background' src={background}/>
         <img className='background' src={background2}/>
         <img className='base' src={base}/>
         <img className='image' src={image}/>
     <div className='div'>
     <span className='intro'>Take The Next Step {seconPart} </span>
     </div>
         <div className='detailed-intro'>
             <span className='font-quicksand font-semibold text-s text-custom-black'>Join hundreds of
                 learners from the middle-east alreadylearning
                 on E-learning Platform ! We qualify you to be a highly competent
                 programmer through a myriad of software development
                 courses covering a variety of programming  languages.</span>

     </div>
     </div>
 )
}
export default Intro;