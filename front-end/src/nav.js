import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();
    const auth = localStorage.getItem('userdetail');


    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }


    return (
        <div>
          
            <img alt="logo" className='logo' src="https://cdn-icons-png.flaticon.com/512/2415/2415292.png"/>
            
           
            {auth ? <ul className="nav-ul">
                
                <li> <Link to="/">profile</Link></li>
                <li> <Link to="/about">about</Link></li>
                <li><Link onClick={logout} to="/signup">logout({JSON.parse(auth).name})</Link></li>
                {/* <li> {auth ? <Link onClick={logout} to="/signup">logout</Link>:
                <Link to="/signup">signup</Link>}</li>
                <li> <Link to="/login">login</Link></li> */}
              </ul>
                :
                <ul className="nav-ul nav-right" >
                    <li><Link to="/signup">signup</Link></li>
                    <li> <Link to="/login">login</Link></li>
                </ul>
            }
            
        </div>
    )
}

export default Nav;