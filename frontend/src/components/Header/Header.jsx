import Logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/patient-avatar.png"
import { NavLink, Link } from "react-router-dom"
import { BiMenu } from 'react-icons/bi'
import { useRef, useEffect, useContext } from "react"
import { authContext } from "../../context/AuthContext.jsx"
const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, role, token } = useContext(authContext)

  const HandleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(() => {
    HandleStickyHeader()
    return () => window.removeEventListener('scroll', HandleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  const navlinks = [
    {
      path: "/home",
      display: "Home"
    },
    {
      path: "/doctors",
      display: "Find a Doctor"
    },
    {
      path: "/contact",
      display: "Contact"
    },
    {
      path: "/services",
      display: "services"
    },
  ]

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* --------------------------logo--------------------------- */}
          <div>
            <img src={Logo} alt="" />
          </div>
          {/* --------------------------logo--------------------------- */}
          {/* --------------------------Navigation--------------------------- */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[3rem]">
              {
                navlinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]" :
                    "text-text-color text-[16px] leading-7 font-[500] hover:text-primaryColor"}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>
          {/* --------------------------Navigation ends--------------------------- */}
          {/* --------------------------Navigaton right--------------------------- */}
          <div className="flex items-center gap-5">
  {token && user ? (
    <div className="flex items-center"> {/* Add this container */}
      <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`} className="flex">
        <figure className="w-[35px] h-[35px] rounder-full cursor-pointer mt-[30px]">
          <img src={user?.photo} className="w-full rounded-full" alt="" />
        </figure>
        <h1 className="ml-2">{user?.name}</h1>
      </Link>
    </div>
  ) : (
    <Link to="/login">
      <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
      justify-center rounded-[50px]">Login</button>
    </Link>
  )}

  <span className="md:hidden" onClick={toggleMenu}>
    <BiMenu className="w-6 h-6 cursor-pointer" />
  </span>
</div>




        </div>
      </div>

    </header>
  )
}

export default Header