import {useSelector} from "react-redux";
import {useFetchFilteredCourseListQuery} from "../../store";
import ListWithPagination from "../ReusableCompents/ListWithPagination";

function MoreCourses(){
    const subject=useSelector((state)=>{
        return{
            subjectIndex:state.subjects.subjectIndex,
            subjectName:state.subjects.subjectName
        }
    })
    const allcourses=useSelector((state)=>{
        return state.coursesList.flattenCoursesList
    })
    const selectedSubjectName=subject.subjectName
    const totalItems=allcourses.length
    const totalPagesNumber=Math.ceil(totalItems/8)


    return(<ListWithPagination
        totalPagesNumber={totalPagesNumber}
        addtionalRequestParams={{subject_id: subject.subjectIndex}}
        pageSize={8} dataPath='courses'
        useFetchDataQuery={useFetchFilteredCourseListQuery} data={allcourses}/>)
}
export default MoreCourses;