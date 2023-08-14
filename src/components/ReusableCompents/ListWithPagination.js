import CardList from "./CardList";
import {Pagination, Stack} from "@mui/material";
import {useState} from "react";
import {useFetchFilteredCourseListQuery} from "../../store";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";

function ListWithPagination({useFetchDataQuery,dataPath,totalPagesNumber,pageSize,addtionalRequestParams}){
    const[pageNumber,setPageNunmer]=useState(1)
    const handleChange=(e,value)=>{
        setPageNunmer(value);
    }
    const request = {...addtionalRequestParams, pageNumber: pageNumber, pageSize: pageSize}

    const {data,error,isFetching}=useFetchDataQuery(request);


    if(error){
        return <div>Error...</div>
    }
    else if(isFetching){
        return <LoadingSkeleton></LoadingSkeleton>
    }
    const actualData=data.data[dataPath]
    return(
        <Stack>
            <CardList data={actualData}></CardList>
            <Pagination
                        count={totalPagesNumber}
                        page={pageNumber}
                        sx={{mt:10,fontSize:28,height:35, display:'flex',justifyContent:'center',
                            '& .MuiPaginationItem-icon':{color:'#28A19C',fontSize:28,fontWeight:400},
                            '& .MuiPaginationItem-root':{ fontSize:28,fontWeight:400,color:'#707070',opacity:'80%'},
                            '& .MuiPaginationItem-root.Mui-selected':{fontSize:28,fontWeight:400,color:'black',background:'transparent'}}}
                        onChange={handleChange}/>
        </Stack>
    )
}
export default ListWithPagination