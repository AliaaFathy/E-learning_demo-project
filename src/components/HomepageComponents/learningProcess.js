import './styles/learningProcess.css'
import chooseCourse from '../../images/Group 1094.png'
import startLearning from '../../images/Group 1095.png'
import whatsappIcon from '../../images/Group 1164.png'
import Header from "./header";
function learningProcess(){
   return(
       <div>
           <Header  header="Learning Process" details='Learn the latest skills to reach your professional goals'></Header>
    <div className='container'>
        <div className='chooseCourse'>
            <img className='chooseCourse-icons' src={chooseCourse}/>
            <span className='chooseCourse-text'>Choose course</span>
        </div>
        <div className='startLearning'>
            <img className='startLearning-icons' src={startLearning}/>
            <span className='startLearning-text'>Start learning</span>

        </div>
        <div className='getCertificate'>
            <img className='getCertificate-icons' src={startLearning}/>
            <span className='getCertificate-text'>Get Certificate</span>

        </div>

    </div>
    </div>

   )
}
export default learningProcess;