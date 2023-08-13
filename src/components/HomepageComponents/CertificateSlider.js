import MenuSlider from "../ReusableCompents/MenuSlider";
import {certificateList} from "../../staticData";
import {useDispatch, useSelector} from "react-redux";
import {selectCertificateIndex, selectSubjectIndex} from "../../store";

function CertificateSlider(){
    const dispatch=useDispatch();
    const certificate=useSelector((state)=>{
        return {
            certificateIndex:state.certificates.certificateIndex,
            certificateName:state.certificates.certificateName
        }
    })
    console.log(certificateList)
    certificate.certificateIndex===null&&
    dispatch(selectCertificateIndex({id:certificateList[0].id,name:certificateList[0].name}))
    const handleSelection=(option)=>{
        dispatch(selectCertificateIndex({id:option.id,name:option.name}))
    }
    return(
        <MenuSlider data={certificateList} itemsNumber={4} id={certificate.certificateIndex} handleSelection={handleSelection}></MenuSlider>
    )
}
export default CertificateSlider