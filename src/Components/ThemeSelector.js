import { useTheme } from '../Hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from '../assets/brightness.svg'

export default function ThemeSelector() {

    const {color,mode , changeColor , changeMode}= useTheme()

    const Colors = ['#3227c9', '#ce0b9b', '#19d299' , "#52087c"]

    const toggleMode =()=>{
        changeMode(mode ==='dark'? 'light' : 'dark')
    }
    
    
    return (
        <div className='theme'>
            <div className='toggleMode'>
                <img
                onClick={toggleMode}
                src={modeIcon}
                style={{filter : 'light'===mode? 'invert(100%)':'invert(20%)'}}
                />
            </div>
            <div className='selectColor'>
                { Colors.map((e)=>{
                    return(
                    <button
                    style={{backgroundColor: e}}
                    key={e}
                    onClick={()=> changeColor(e)}
                    />)
                })}

                <input
                 className='makeColor'
                 type='color'
                 onChange={(e)=>{changeColor(e.target.value)}}
                 ></input>
                 
           </div>
        </div>
    )
}





