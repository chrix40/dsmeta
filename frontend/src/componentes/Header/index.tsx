import logo from '../../assets/img/logo.png'
import '../Header/styles.css'

function Header() {
    return(
      <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/imchr_s"> Christian Roberto.</a>
            </p>
        </div>
    </header>
    )
  }
  
  export default Header
