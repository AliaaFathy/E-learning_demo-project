import CardList from "./CardList";
import {Pagination, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import {useFetchFilteredCourseListQuery} from "../../store";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";

function ListWithPagination({totalPagesNumber,pageSize,data}){
    const[pageNumber,setPageNunmer]=useState(1)
    const [currentPageData, setCurrentPageData] = useState([]);

    const handleChange=(e,value)=>{
        setPageNunmer(value);
        window.scrollTo({ top: 250, behavior: 'smooth' });

    }
    console.log(data)
    useEffect(() => {
        if(data) {
            const startIndex = (pageNumber - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const slicedData = data.slice(startIndex, endIndex);
            setCurrentPageData(slicedData)
            console.log(slicedData)
        }
    }, [pageNumber, data]);


    return(
        <Stack>
            <CardList data={currentPageData}></CardList>
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