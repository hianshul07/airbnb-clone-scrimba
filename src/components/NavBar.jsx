import airbnbLogo from '../images/airbnb-logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='navbar--logo' src={airbnbLogo} alt="" />
    </div>
  )
}
export default NavBar