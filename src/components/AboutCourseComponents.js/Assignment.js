import RecursiveList from "../ReusableCompents/RecursiveList";
import {Box} from "@mui/material";
import {useFetchCourseListQuery} from "../../store";
import {useSelector} from "react-redux";
import AssignmentIcon from '../../images/Quiz.jpg'

function Assignment(){
    const Assignmentdata=[{title:'Assignment 1'},
        {title: 'Assignment 2'},{title: 'Assignment 3'},{title: 'Assignment 4'},{title: 'Assignment 5'},{title: 'Assignment 5'}]
    const data=useSelector((state)=>{
        return state.aboutCourse.courseDatails
    })

        const assignments = data.classified_product.assignments
        return (
            <Box id='5'>
                <RecursiveList
                    data={assignments}
                    header='Assignments'
                    type='Assignment'
                    imageSrc={AssignmentIcon}>
                </RecursiveList>
            </Box>
        )

}
export default Assignment