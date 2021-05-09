import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const user = JSON.parse(localStorage.getItem('userkey'));
    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/patient/doctors">E-Health Care Management System</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    
                    { localStorage.getItem('userkey') ?
                    <> 
                        <Link to='/patient/doctors'>Doctors</Link>
                        <Link to='/patient/appointments'>Appointmetns</Link>  
                    </> : 
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/patient/registration'>Registration</Link>
                    </>
                    }     
                </Nav>
                {localStorage.getItem('userkey') && <Nav>
                    <NavDropdown className='logout-dropdown' title= { user.name }>
                        <NavDropdown.Item onClick={ logout }> Logout </NavDropdown.Item>
                    </NavDropdown>
                </Nav>}
            </Navbar>
        </div>
    )
}

export default Header
