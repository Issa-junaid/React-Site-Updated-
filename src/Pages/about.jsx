import Header from '../Components/header.jsx'
import Info from '../Components/About/info.jsx'
import Detail from '../Components/About/detail.jsx'
import Footer from '../Components/footer.jsx'

function About(){

    return(
        <div>
            <Header />
            <Info title="About Page" />
            <Detail />
            <Footer title="About Page" />
        </div>
    )
}

export default About