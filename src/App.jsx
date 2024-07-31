import { useState } from 'react' 
import './App.css'
function App() {
    const [color, setColor] = useState('black')
    return ( 
        <>
        <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}> 
           <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={() => setColor('red')}>RED</button>
             <button onClick={()=> setColor('yellow')}>YELLOW</button>
             <button onClick={() => setColor('blue')}>BLUE</button> 
             <button onClick={() => setColor('green')}>green</button> 
             <button onClick={() => setColor('violet')}>VIOLET</button> 
            </div>
            </div> 
            </div> 
        </>
    )

}
export default App;