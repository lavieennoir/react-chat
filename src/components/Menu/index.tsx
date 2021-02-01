import React, { FC } from 'react'
import { useHistory } from "react-router-dom";

import {auth} from '@/firebase'
import { MenuWrap, Wraper, LogOutBtn } from './style.component'

const Menu: FC = () => {
  let history = useHistory();

  const logOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('accessToken')
      history.push("/log-in");
    }).catch((error) => {
      // An error happened.
    });
  }



  return (
    <MenuWrap>
      <Wraper>
        Menu

        <LogOutBtn onClick={logOut}>Log Out</LogOutBtn>
      </Wraper>
    </MenuWrap>
  )
}

export default Menu