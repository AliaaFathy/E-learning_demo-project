import {useSelector} from "react-redux";
import {Pagination, Stack, Typography} from "@mui/material";
import CardList from "../ReusableCompents/CardList";
import {useState} from "react";
import {useFetchFilteredCourseListQuery} from "../../store";
import CardSkeleton from "../loadingSkeleton/CardSkeleton";

function MoreCourses(){
    const[pageNumber,setPageNunmer]=useState(1)
    const subject=useSelector((state)=>{
        return{
            subjectIndex:state.subjects.subjectIndex,
            subjectName:state.subjects.subjectName
        }
    })
    const allcourses=useSelector((state)=>{
        return state.courses.courseList
    })
    const selectedSubjectName=subject.subjectName

    const totalItems=allcourses[selectedSubjectName].length
    const totalPagesNumber=Math.ceil(totalItems/8)
    const handleChange=(e,value)=>{
        setPageNunmer(value);
    }

    const request = {subject_id: subject.subjectIndex, pageNumber: pageNumber, pageSize: 8}

    const {data,error,isFetching}=useFetchFilteredCourseListQuery(request);
    if(error){
        return <div>Error...</div>
    }
    else if(isFetching){
        return <CardSkeleton></CardSkeleton>
    }
    const courses=data.data.courses
    console.log(data)

    return(<Stack>
        <CardList data={courses}></CardList>
        <Pagination justifyContent={'center'}
                    count={totalPagesNumber}
                    page={pageNumber}
                    sx={{mt:10,fontSize:28,height:35, display:'flex',justifyContent:'center',
                        '& .MuiPaginationItem-icon':{color:'#28A19C',fontSize:28,fontWeight:400},
                        '& .MuiPaginationItem-root':{ fontSize:28,fontWeight:400,color:'#707070',opacity:'80%'},
                        '& .MuiPaginationItem-root.Mui-selected':{fontSize:28,fontWeight:400,color:'black',background:'transparent'}}}
                    onChange={handleChange}/>
    </Stack>)
}
export default MoreCourses;