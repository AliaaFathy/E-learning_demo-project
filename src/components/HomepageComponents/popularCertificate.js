import Header from "./header";
import MenuSlider from "../ReusableCompents/MenuSlider";
import CardList from "../ReusableCompents/CardList";
import {Box, Button} from "@mui/material";
import CertificateList from "../ReusableCompents/CertificateList";
import MultipleItems from "../ReusableCompents/MultipleItemSlider";
import CertificateCard from "../ReusableCompents/CertificateCard";
import CustomButton from "../ReusableCompents/CustomButton";
import CertificateSlider from "./CertificateSlider";

function PopularCertificate(){
    const certificate=['Master Track Certificates',
                               'IT Certificates',
                                'University Certificates',
                                 'Master Certificates']
    return(
        <div>
            <Header header='Popular Certificates' details='Break into a new field. No prior experience necessary to get started'></Header>
            <CertificateSlider></CertificateSlider>
               <CertificateList></CertificateList>
            <CustomButton
                buttonText='View More Certificates' variant='contained'>
            </CustomButton>
        </div>

    )

}
export default PopularCertificate;