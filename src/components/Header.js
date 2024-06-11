import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { removeUser } from '../utils/UserSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOutEvent = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            navigate("/error");
          });
      };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, [])

  
    return (
        <div className='absolute z-10 w-full'>
            <h1 className='font-bold p-2 text-red-600 Bebas text-4xl bg-gradient-to-b from-black relative'>NIRVANA</h1>
            <div className='flex p-2 gap-4 absolute top-0 sm:left-[93%] left-[75%]'>
          {/* <img className='w-8 h-8' alt="profile-pic" src={picURL} /> */}
          <img className='w-8 h-8 cursor-pointer' onClick={handleSignOutEvent()} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/c53030/external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo.png" alt="external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo" />
        </div>
        </div>
    )
}

export default Header;