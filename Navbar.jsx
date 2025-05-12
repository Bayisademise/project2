import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { AppContext } from '../../Context/AppContext'
const Navbar = () => {
const {navigate, isEducator}=useContext(AppContext)

  const isCourseListPage=location.pathname.includes('/Course-list');

  const {openSignIn}=useClerk()
  const {user}=useUser()
  return (

<div
      className={`flex w-full items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}
    >    <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
    <div className='hidden md:flex items-center gap-5 text-gray-500' >
      <div className='flex items-center gap-5'>
        {user && 
        <>
          <button  onClick={()=>{navigate('/educator')}}>{isEducator? 'Dashbord' : 'Become educator'}</button>
          <Link to='/my-enrollment'>My enrollement</Link>
          </>
          }
      </div>
      { user ? <UserButton /> :
        <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
      }
    </div>
    {/*fo phone scren */}
    <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
<div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
{user && 
         <>
          <button  onClick={()=>{navigate('/educator')}}> {isEducator ? 'Dashbord' : 'Become educator'} </button>
          <Link to='/my-enrollment'>My enrollement</Link>
          </>
          }
</div>

{
user ? <UserButton />
: <button onClick={()=> openSignIn()}> <img src={assets.user_icon} alt="user_icon" /></button>
  }

    </div>
   </div>
  
  )
}

export default Navbar