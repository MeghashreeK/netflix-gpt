import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged} from "firebase/auth"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { useEffect } from 'react';

const Header = () => {

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName}=user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
          return ()=>unsubscribe();
    },[])
   
    return (
        <div className='absolute'>
            <div className='flex font-bold p-2 text-red-600 Bebas text-4xl bg-gradient-to-b from-black w-screen relative justify-between'>
                <p>NIRVANA</p>
                {window.location.pathname==="/browse" && (<img className='w-8 h-8 cursor-pointer' onClick={handleSignOut} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/E53E3E/external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo.png" alt="external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo"/>)
                }
            </div>
        </div>
    )
}

export default Header;