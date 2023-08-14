import {Skeleton, Stack} from "@mui/material";

function LoadingSkeleton({count,width,height}){
    const skeletons = Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} variant="rectangular" width={width} height={height} />))
    return(
        <Stack spacing={10} direction={'row'} sx={{ml:10,mb:2}}>
            {skeletons}
        </Stack>
    )
}
export default LoadingSkeleton