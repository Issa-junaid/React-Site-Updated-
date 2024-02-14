import { Link } from 'react-router-dom';

function Header(){
            
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(
        <div>

            <div className='header'>
                <div className="container">
                    <div className="header-inner">
                        <h1 className="header-heading">SAFETY   READING   GLASSES</h1>
                    
                        <div id="mySidenav" className="sidenav">
                            <a className="closebtn" onClick={closeNav}>&times;</a>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        
                        <span className="_span" style={{display: 'none', fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>

                    
                    </div>
                </div>
            </div>

            <div className='header-nav'>
                        <nav>
                            <ul>
                                <li> <Link to="/"> Home           </Link> </li>
                                <li> <Link to="/about"> About     </Link> </li>
                                <li> <Link to="/contact"> Contact </Link> </li>
                            </ul>
                        </nav>
            </div>
       
        </div>
        )
}

export default Header