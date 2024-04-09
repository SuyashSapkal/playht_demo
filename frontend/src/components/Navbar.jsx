import logoSvg from '../assets/playCube-DarkMode.svg';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import HamburgerMenu from './HamburgerMenu';
import { useRecoilState } from 'recoil';
import { userStateAtom } from '../App'
import { useEffect } from 'react';

export default function Navbar() {
    const navigate = useNavigate();

    const routeToMainPage = () => {
        navigate("/");
    }

    const routeToSignInPage = () => {
        navigate("/signin")
    }
    // const routeToSignUpPage = () => {
    //     navigate("/signup")
    // }

    const [userName, setUserName] = useRecoilState(userStateAtom);

    useEffect(() => {
        if (userName === "") {
            setUserName("Sign in");
        }
    })


    return (
        <div className='navbar row'>
            <HamburgerMenu></HamburgerMenu>
            <div className='logo'>
                <img className="logoSvg" src={logoSvg} onClick={routeToMainPage} />
                <p className='logoText' onClick={routeToMainPage}> PlayHT </p>
            </div>
            <div className='buttons font'>
                <button className='bttn' id='auth' onClick={routeToSignInPage}>{userName}</button>
                {/* <button className='bttn' id='auth' onClick={routeToSignUpPage}>Sign up</button> */}
            </div>
        </div>
    )
}