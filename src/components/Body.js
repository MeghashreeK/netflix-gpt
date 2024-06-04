import React, { useEffect } from 'react'
import Header from './Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { removeUser } from '../utils/UserSlice'

const Body = () => {
    const dispatch=useDispatch();

    const AppRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           const { uid, email, displayName, photoURL } = auth.currentUser;
    //           dispatch(
    //             addUser({
    //               uid: uid,
    //               email: email,
    //               displayName: displayName,
    //               photoURL: photoURL,
    //             })
    //           );
    //         } else {
    //           dispatch(removeUser());
    //         }
    //       });
    // },[])

  return (
<div>
    <RouterProvider router={AppRouter}/>
</div>
)
}

export default Body