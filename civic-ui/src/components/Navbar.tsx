import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Navbar.css' 
import { faBarsStaggered, faCircleUser } from '@fortawesome/free-solid-svg-icons'
  function Navbar(){
    return (
        <div className='nav-bar'> 
        <FontAwesomeIcon className='user-icon' icon={faCircleUser} />
        <div className ="brand-name">
            CIVIC
        </div>   
        <FontAwesomeIcon className='side-bar-icon' icon={faBarsStaggered} />
        </div>
    )
  }

  export default Navbar
