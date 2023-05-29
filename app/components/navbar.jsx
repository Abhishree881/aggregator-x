import React, {useEffect, useState} from "react";
import "../styles/navbar.css";
import Button from "../components/button";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1000;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const [cartCount, setCartCount] = useState(0);
  const [showMobileMenu, setShowMobileMenu] =  useState(false);
  return (
    <nav className="bg-white my-8">
      <div className="max-w-7xl m-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="nav flex items-center gap-12">
            <a href="#" className="text-black jump font-bold logo-div"></a>
            {width>breakpoint? (
            <div className="flex">

              <a
                href="/"
                className="text-black px-3 py-2 rounded-md text-smm font-medium menu-item"
              >
                Home
              </a>

              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-smm font-medium menu-item"
              >
                Products
              </a>
              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-smm font-medium flex flex-row menu-item items-start pages"
              >
                Pages
                <span className="hover-arrow">
                  <KeyboardArrowUpOutlinedIcon
                    sx={{ marginBottom: "-0.05em" }}
                  />
                </span>
              </a>
              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-smm font-medium menu-item"
              >
                Contacts
              </a>
              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-smm font-medium menu-item"
              >
                Cart({cartCount})
              </a>
            </div>
            ):(
                <><a
                href="#"
                className="text-black px-3 py-2 rounded-md text-smm font-medium menu-item"
            >
              Cart({cartCount})
            </a>
              <span className='three-bar' onClick={() => setShowMobileMenu(true)}>{!showMobileMenu && <MenuIcon fontSize="large" />}</span>
              <span className='three-bar' onClick={() => setShowMobileMenu(false)}>{showMobileMenu && <CloseIcon fontSize="large" />}</span>
                </>
            )}
          </div>
          {width>breakpoint? (
          <div className="flex flex-row gap-4">
            <Button text={"Post a free product"} type={"secondary"} icon={0} />
            <Button
              text={"Post a featured product"}
              type={"primary"}
              icon={1}
            />
          </div>
          ):""}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
