import {useDispatch, useSelector} from "react-redux";
import {selectSubjectIndex, useFetchSubjectQuery} from "../../store";
import React, {useEffect} from "react";
import MenuSlider from "../ReusableCompents/MenuSlider";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";


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
    useEffect(() => {
        if (!subject.subjectIndex && data) {
            dispatch(
                selectSubjectIndex({
                    id: data.data.subjects[0].id,
                    name: data.data.subjects[0].name,
                })
            );
        }
    }, [subject.subjectIndex, data, dispatch]);
    if(error){
        return <div>Erorr..</div>
    }
    else if(isFetching){
        return <LoadingSkeleton width={250} height={54} count={4}></LoadingSkeleton>
    }
    return (  <MenuSlider id={subject.subjectIndex} data={data.data.subjects} itemsNumber={4} handleSelection={handleClick}></MenuSlider>
    )
}
export default SubjectMenuBar;