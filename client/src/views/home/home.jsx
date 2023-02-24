import CardsContainer from "../../components/cardsContainer/cardsContainer";
import Style from "./home.module.css"
import Filter from "../../components/filters/filters";
import Footer from "../../components/footer/footer"

const Home = () => {
    return (
        <div className={Style.cointainer}>
            <div className={Style.divs}>
                <Filter />
            </div >
            <div className={Style.divs}>
                <CardsContainer />
            </div>
            <div className={Style.divs}>
                <Footer />
            </div>
        </div>
    )
};

export default Home;