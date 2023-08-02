import Intro from "../components/HomepageComponents/Intro";
import LearningProcess from "../components/HomepageComponents/learningProcess";
import './Hompage.css'
import NavBar from "../components/NavBar";
import TopCategory from "../components/HomepageComponents/TopCategory";
import CardList from "../components/CardList";
import DropDown from "../components/DropDown";
import SlideMenu from "../components/slideMenu";
import EdugramBenefits from "../components/HomepageComponents/EdugramBenefits";
import MostPopularList from "../components/HomepageComponents/MostPopularList";
import OurClients from "../components/HomepageComponents/OurClients";
import PopularCertificate from "../components/HomepageComponents/popularCertificate";
import Footer from "../components/Footer";
function HomePage(){
    return(<div >
        <Intro></Intro>
        <LearningProcess></LearningProcess>
        <TopCategory></TopCategory>
        <EdugramBenefits></EdugramBenefits>
        <MostPopularList></MostPopularList>
        <OurClients></OurClients>
        <PopularCertificate></PopularCertificate>

    </div>)
}
export default HomePage;