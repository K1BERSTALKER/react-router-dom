import {menu} from '../data/data';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <header className='header'>
            <ul className='header__menu'>
                {menu.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.url} className='header__menu__link'>
                            {item.text}
                        </Link>
                        <span>
                            {item.icon}
                        </span>
                    </li>
                ))}
            </ul>
        </header>
    </>
  )
}

export default Header