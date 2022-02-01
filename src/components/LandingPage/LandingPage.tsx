import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landing-page'>
            <div className="headerTitles">
                <span className="headerTitleSm">Learn Some Cool Stuffs in</span>
                <span className='title-underline cursive title'>Python</span>
            </div>
            <img 
            className='headerImg'
            alt='Python'
            src="https://img.icons8.com/fluency/300/000000/python.png"/>
        </div>
    )
}

export default LandingPage