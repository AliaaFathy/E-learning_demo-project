import MenuSlider from "../ReusableCompents/MenuSlider";
import {certificateList} from "../../staticData";
import {useDispatch, useSelector} from "react-redux";
import {selectCertificateIndex, selectSubjectIndex} from "../../store";
import {useEffect} from "react";

function CertificateSlider(){
    const dispatch=useDispatch();
    const certificate=useSelector((state)=>{
        return {
            certificateIndex:state.certificates.certificateIndex,
            certificateName:state.certificates.certificateName
        }
    })
    useEffect(() => {
        if (!certificate.certificateIndex) {
            dispatch(
                selectCertificateIndex({
                    id:certificateList[0].id,
                    name:certificateList[0].name,
                })
            );
        }
    }, [certificate.certificateIndex, dispatch])

    const handleSelection=(option)=>{
        dispatch(selectCertificateIndex({id:option.id,name:option.name}))
    }
    return(
        <MenuSlider data={certificateList} itemsNumber={4} id={certificate.certificateIndex} handleSelection={handleSelection}></MenuSlider>
    )
}
export default CertificateSlider