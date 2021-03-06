import Header from '../components/Header/Header'
import LandingPage from '../components/LandingPage/LandingPage'
import MainPage from '../components/MainPage/MainPage'

function HomePage() {

    return (
        <>
        <Header shadow={false}/>
        <LandingPage />
        <MainPage />
        </>
    )
}

export default HomePage