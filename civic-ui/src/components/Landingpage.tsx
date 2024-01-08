
import '../styles/Landingpage.css'
import hero from '../assets/images/igor-rand-Y5AvIS752zU-unsplash.jpg'
function LandingPage() {

    const category = [
        {
            name: 'men',
            image:
                'https://urbanmatter.com/wp-content/uploads/2023/10/majid-akbari-Egj4Dg107kc-unsplash-1600x2000.jpg.webp',
        },
        {
            name: 'women',
            image:
                'https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            name: 'kids',
            image:
                'https://images.unsplash.com/photo-1700751615432-a25dc6c43e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjk2NHwwfDF8c2VhcmNofDIzOHx8a2lkJTIwJTIwb3V0Zml0fGVufDB8fHx8MTcwNDYyNjI5OXww&ixlib=rb-4.0.3&q=80&w=1080&dl=unsplash-image-5H4p2FEBmf4',
        },
    ]
    return (
        <>
            <div className='main-hero-section'>
                <img className='hero-img opacity-70' src={hero} alt="hero" />
            </div>
        </>
    )
}

export default LandingPage