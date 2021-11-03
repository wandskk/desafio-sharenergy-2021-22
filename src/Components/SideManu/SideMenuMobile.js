import React from 'react';
import styles from './SideMenuMobile.module.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import Item from './Item';

const SideMenuMobile = () => {
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  return (
    <div className={styles.sideMenuMobile}>
      <div id="mySidenav" className={styles.sidenav}>
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={closeNav}
        >
          <AiOutlineClose />
        </a>
        <NavLink to="/" end>
          <div className={styles.item} onClick={closeNav}>
            <Item>Dashboard</Item>
          </div>
        </NavLink>

        <NavLink to="/customers">
          <div className={styles.item} onClick={closeNav}>
            <Item>Clientes</Item>
          </div>
        </NavLink>
      </div>

      <span onClick={openNav}>
        <GiHamburgerMenu />
      </span>
    </div>
  );
};

export default SideMenuMobile;
