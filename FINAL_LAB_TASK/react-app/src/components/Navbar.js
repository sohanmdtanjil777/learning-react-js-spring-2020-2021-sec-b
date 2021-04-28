import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <Link to='/'>Home</Link> |  
            <Link to='/add_daily_note'>Day Note</Link> | 
            <Link to='/notelist'>Show All Day Note</Link>
        </div>
    );  
}
export default Navbar;