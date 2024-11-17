import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Header = () => {

    const [light, setLight] = useState(true);

    const handleLightMode = () => {
        let mode = !light;
        
        document.body.id = mode? 'light' : 'dark';
        console.log(document.body.id);

        setLight(mode)
    }

    return(
        <header>
            <div className='logo-container'>
                    <FontAwesomeIcon icon={faList} className='fa-4x'/>
                <h1>
                    Todo List
                </h1>
            </div>
            <div>
                <button className='light-mode' onClick={handleLightMode}>{light ? <FontAwesomeIcon icon={faMoon} className='fa-4x'/> : <FontAwesomeIcon icon={faSun} className='fa-4x'/>}</button>
            </div>
        </header>
    )
}

export default Header;