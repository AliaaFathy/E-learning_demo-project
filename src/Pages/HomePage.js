import Intro from "../components/HomepageComponents/Intro";
import LearningProcess from "../components/HomepageComponents/learningProcess";
import TopCategory from "../components/HomepageComponents/TopCategory";
import EdugramBenefits from "../components/HomepageComponents/EdugramBenefits";
import MostPopularList from "../components/HomepageComponents/MostPopularList";
import OurClients from "../components/HomepageComponents/OurClients";
import PopularCertificate from "../components/HomepageComponents/popularCertificate";
function HomePage(){
    return(<div >
        <Intro></Intro>
        <LearningProcess></LearningProcess>
        <TopCategory ></TopCategory>
        <EdugramBenefits></EdugramBenefits>
        <MostPopularList></MostPopularList>
        <OurClients></OurClients>
        <PopularCertificate></PopularCertificate>

    </div>)
}
export default HomePage;