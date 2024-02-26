import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
      <h3 className='nav-title'>ReactFacts</h3>
      <h4 className='nav-text'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar