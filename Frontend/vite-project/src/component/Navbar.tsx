import { NavLink, useNavigate } from 'react-router-dom'
import search_icon from "../assets/search_icon.svg"
import cart_icon from "../assets/cart_icon.svg"



const Navbar = () => {
const navigate = useNavigate()


    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' >
                <img src="https://www.elaia.com/wp-content/uploads/2022/09/vibe-logo.jpg" className="h-12"  alt="dummyLogoColored" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>All Product</NavLink>
                <NavLink to='/'>Contact</NavLink>


                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input  className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={search_icon} className='w-4 h-4' />
                </div>


                  <img src={cart_icon} className='w-7' />
                 <button  className="cursor-pointer px-11 py-2 bg-blue-600 active:bg-blue-800 transition text-white rounded-full font-bold" onClick={()=>navigate("/cartDrawer")}>
                    Cart
                </button>       
            </div>
        </nav>
    )
}

export default Navbar