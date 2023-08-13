import {useDispatch, useSelector} from "react-redux";
import {selectSubjectIndex, useFetchSubjectQuery} from "../../store";
import MenuSliderSkeleton from "../loadingSkeleton/menuSliderSkeleton";
import React from "react";
import MenuSlider from "../ReusableCompents/MenuSlider";


function SubjectMenuBar(){
    const dispatch=useDispatch();
    const subject=useSelector((state)=>{
        return {
            subjectIndex:state.subjects.subjectIndex,
            subjectName:state.subjects.subjectName
        }
    })
    const{data,error,isFetching}=useFetchSubjectQuery(80);
    const handleClick=(option)=>{
        dispatch(selectSubjectIndex({id:option.id,name:option.name}))
    }
    if(error){
        return <div>Erorr..</div>
    }
    else if(isFetching){
        return <MenuSliderSkeleton></MenuSliderSkeleton>
    }

    subject.subjectIndex===null&&
    dispatch(selectSubjectIndex({id:data.data.subjects[0].id,name:data.data.subjects[0].name}))
    return (  <MenuSlider id={subject.subjectIndex} data={data.data.subjects} itemsNumber={4} handleSelection={handleClick}></MenuSlider>
    )
}
export default SubjectMenuBar;