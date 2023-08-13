import {Box, Button, Typography,Stack} from "@mui/material";
import RecursiveList from "../ReusableCompents/RecursiveList";
import {useSelector} from "react-redux";
import QuizIcon from '../../images/Quiz.jpg'

import useExpansion from "../../hooks/useExpansion";

function Quizzes(){
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })
    if(data) {
        const quizzes = data.classified_product.quizzes
      /*  const Assignmentdata = [{title: 'AssignmentAssignmentAssignmentAssignmentAssignment 1'},
            {title: 'AssignmentAssignmentAssignmentAssignmentAssignment 2'},{title: 'AssignmentAssignmentAssignmentAssignmentAssignment 2'},{title: 'AssignmentAssignmentAssignmentAssignmentAssignment 2'},{title: 'AssignmentAssignmentAssignmentAssignmentAssignment 2'},
            {title: 'AssignmentAssignmentAssignmentAssignmentAssignment 2'}]*/

        return (

            <Box id='4'>
                <RecursiveList data={quizzes} header='Quizzes' type='Quiz' imageSrc={QuizIcon}></RecursiveList>
            </Box>

        )
    }
}
export default Quizzes;