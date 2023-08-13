import {Skeleton, Stack} from "@mui/material";

function MenuSliderSkeleton(){
    return(
        <Stack spacing={15} direction={'row'} sx={{ml:15,mb:2}}>
            <Skeleton variant="rectangular" width={150} height={54} />
            <Skeleton variant="rectangular" width={150} height={54} />
            <Skeleton variant="rectangular" width={150} height={54} />
            <Skeleton variant="rectangular" width={150} height={54} />
        </Stack>
    )
}
export default MenuSliderSkeleton;