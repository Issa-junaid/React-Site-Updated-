import Header from '../Components/header.jsx'
import Info from '../Components/Home/info.jsx'
import Cards from '../Components/Home/cards.jsx'
import Footer from '../Components/footer.jsx'

function Home(){

    return(
        <>
            <Header />
            <Cards />
            <Info />
            <Footer title='Home Page' />
        </>
    )
}

export default Home