import CertificateCard from "./CertificateCard";
import {Box, Stack} from "@mui/material";
import google from '../../images/RGBGoogle.png'
import googleCloud from '../../images/googleCloud.png'
import IBM from '../../images/ibm (1).png'

function CertificateList(){
    const certificates=[
        {id:1,owner:'Google',certificateName:'Google IT Support Professional Certificate',imageUrl:google},
        {id:2,owner:'IBM' ,certificateName: 'IBM Cybersecurity Analyst Professional Certificate',imageUrl: googleCloud },
        {id:3,owner:'Google Cloud',certificateName: 'Cloud Security Engineer Professional Certificate',imageUrl: IBM},
        {id:4,owner:'IBM' ,certificateName: 'IBM Cybersecurity Analyst Professional Certificate',imageUrl: googleCloud }]
    const renderedCertificate=certificates.map((certificate)=>{
        return(<CertificateCard certificate={certificate} key={certificate.id}></CertificateCard>)
    })

    return(
        <Stack direction='row'>
            {renderedCertificate}
        </Stack>
    )
}
export default CertificateList;