import {Skeleton, Stack} from "@mui/material";

function CardSkeleton(){
    return(
        <Stack spacing={10} direction={'row'} sx={{ml:10}}>
            <Skeleton variant="rectangular" width={272} height={400} />
            <Skeleton variant="rectangular" width={272} height={400} />
            <Skeleton variant="rectangular" width={272} height={400} />
            <Skeleton variant="rectangular" width={272} height={400} />
        </Stack>
    )
}
export default CardSkeleton