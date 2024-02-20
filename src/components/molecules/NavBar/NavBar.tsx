import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {
  const [click, setClick] = useState<boolean>(false)

  const content = <>
    <div className="lg:hidden block absolute top-14 w-full left-0 rigth-0 transition" style={{ backgroundColor: '#393f4b', color: '#ffffff' }}>
      <ul className="text-center text-xl p-2">
        <li className="p-3"><Link to={'/'}>Home</Link></li>
        <li className="p-3 mb-3"><Link to={'/dashboard'}>Dashboard</Link></li>
      </ul>
    </div>
  </>

  const handleClick = () => setClick(!click)

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 py-4">

        <div className="flex items-center flex-1 md:ml-16 ml-6">
          <span className="text-3x1 font-bold">Logo</span>
        </div>

        <div className="lg:flex md:flex lg:felx-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className=""><Link to={'/'}>Home</Link></li>
              <li className=""><Link to={'/dashboard'}>Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>

        <button className="block md:hidden transition mr-6" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries /> }
        </button>

      </div>
    </nav>
  );
};

export default NavBar;
