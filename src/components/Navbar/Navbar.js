import { useState, React} from "react";
import { Drawer } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import wander_logo from '../../assets/svg/wanderlust_logo.svg'
import { Link } from "react-router-dom";
import "./Navbar.css";
import axiosInstance from "../../utils/axios";

function Navbar() {
  const [open, setOpen] = useState(false)

   const Logout=()=>{
 	const response = axiosInstance.post('api/token/blacklist/', {
     refresh_token: localStorage.getItem('refresh_token'),
   });
   localStorage.removeItem('access_token');
   localStorage.removeItem('refresh_token');
   axiosInstance.defaults.headers['Authorization'] = null;
   console.log("user logged out")
      
};

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar_1">
      <div className="nav__desktop">
        <Link to="/" className="nav_item">
          <div className="logo">
            <div className="home_logo">
              <img src={wander_logo} alt="" className="home__logo" />
            </div>
            <div className="title">WANDERLUST</div>
          </div>
        </Link>
        <div className="navbar_items">
          <Link to="/" className="nav_item">
            Home
          </Link>
          <Link to="/dashboard" className="nav_item">
            Dashboard
          </Link>
          <Link to="/reviews" className="nav_item">
           Reviews
          </Link>
          {
            (localStorage.getItem('refresh_token'))?((<Link to="/login" className="nav_item" onClick={()=>{Logout()}}>
           Logout
          </Link>  )):(( <Link to="/login" className="nav_item">Login</Link> ))
          }

         
          
        </div>
        
      </div>

      <div className="nav__mob">
        <div className="nav__mob_container">
          <div className="title">WANDERLUST</div>
          <button className="nav_btn" onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className="hamburger" />
          </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className="nav__drawer">
          <div className="nav__drawer_header">
            <div
              className="title_mob"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              WANDERLUST
            </div>
            <div className="navbar_items_mob"  data-aos="fade-right"
              data-aos-duration="600">
              <Link to="/" className="nav_item_mob" onClick={handleDrawerClose}>
                Home
              </Link>
              <Link
                to="/dashboard"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Dashboard
              </Link>
              <Link
                to="/reviews"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Reviews
              </Link>
              <Link
                to="/"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Logout
              </Link>
              
            </div>
          </div>
          <a href="https://www.mec.ac.in/" target="_blank" rel="noreferrer" >
            <img src={wander_logo} alt="" className="meclogo__mob" />
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;