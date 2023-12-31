import React,{createContext,useContext,useState} from "react";

const StateContext=createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider=({children})=>{
    
    const [activeMenue, setActiveMenue] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [profile, setProfile] = useState(false)

    const setMode=(e)=>{
        console.log('e',e.target.value)
        setCurrentMode(e.target.value)
        console.log(currentMode)

        localStorage.setItem('themeMode',e.target.value)
    }

    const setColor=(color)=>{
        setCurrentColor(color)

        localStorage.setItem('colorMode',color)
    }
    const handelClick=(clicked)=>{
        console.log('context',clicked)
        setIsClicked({...initialState,[clicked]:true});
    }

    // const handelClic=(clicked)=>{
    //     console.log('context fasle',clicked)
    //     setIsClicked({...initialState,[clicked]:false});
    // }
    
    return (
        <StateContext.Provider
        value={{
            activeMenue,setActiveMenue,
            isClicked,setIsClicked,
            handelClick,
            screenSize,setScreenSize,
            currentColor,
            currentMode,
            themeSettings, setThemeSettings,
            setMode,setColor,
            profile, setProfile
        }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext=()=>useContext(StateContext)
