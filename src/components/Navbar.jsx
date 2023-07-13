import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import pic1 from '../data/pic1.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'


const NavButton = ({ title, customFunc, icon,
  color, dotcolor }) => (
  <TooltipComponent content={title}
    position='BottomCenter'>
    <button type='button' onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3
    hover:bg-light-gray'>
      <span style={{ background: dotcolor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2
        top-2'/>
        {icon}
      

    </button>
  </TooltipComponent>
)


const Navbar = () => {

  const { activeMenue, setActiveMenue,isClicked,setIsClicked,handelClick,screenSize,setScreenSize,currentColor
  ,userProfile, setUserProfile } = useStateContext();
  useEffect(()=>{
    const handelResize=()=>setScreenSize
    (window.innerWidth)
    window.addEventListener('resize',handelResize)

    handelResize(); 
    return ()=>window.removeEventListener('resize',handelResize)
  },[])
  
  useEffect(()=>{
    if(screenSize<900){
      setActiveMenue(false)
    }
    else{
      setActiveMenue(true)
    }
  },[screenSize])
  return (
    <>
      <div className='flex justify-between p-2
    md:mx-6 relative'>
        <NavButton title='Menue' customFunc={() => setActiveMenue((prevActiveMenue) =>
          !prevActiveMenue)} color={currentColor} icon={<AiOutlineMenu />} />


<div className='flex'>
          <NavButton title='Cart'  color={currentColor} customFunc={() => handelClick('cart')} icon={<FiShoppingCart />} />
          <NavButton title='Chat' dotcolor='#03C9DF' customFunc={() => handelClick('chat')}  color={currentColor} icon={<BsChatLeft />} />
          <NavButton title='Notifications' dotcolor='#03C9DF' customFunc={() => handelClick('notification')}  color={currentColor}icon={<RiNotification3Line />} />
       

        <TooltipComponent
        content='Profile'
        position='BottomCenter'>
          <div
          className='flex gap-2 items-center cursor-pointer p-1
          hover:bg-light-gray rounded-lg'
          onClick={()=>handelClick('userProfile')}>
            <img 
            className='rounded-full w-8 h-8'
            src={pic1}/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>
              <span className='text-gray-400 font-bold ml-1 text-14'>Moheen</span>
            </p>
            <MdKeyboardArrowDown
            className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart&&<Cart/>}
        {isClicked.chat&&<Chat/>}
        {isClicked.notification&&<Notification/>}
        {isClicked.userProfile&&<UserProfile/>}
        </div>
      </div>
      



      
      



    </>
  )
}

export default Navbar