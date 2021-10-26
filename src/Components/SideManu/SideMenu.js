import React from 'react';
import styles from './SideMenu.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Logo from '../Logo/Logo';
import logoSrc from '../../Images/logo.png';
import Item from './Item';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="row">
      <div
        className={'col ' + styles.sidemenu}
        style={{ height: window.innerHeight + 200 + 'px' }}
      >
        <div className="row">
          <div className="col ">
            <div className={styles.logo}>
              <Logo src={logoSrc} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className={'col ' + styles.items}>
            <NavLink to="/" end>
              <div className={styles.item}>
                <Item>
                  <BiHomeAlt />
                  Dashboard
                </Item>
              </div>
            </NavLink>

            <NavLink to="/clients">
              <div className={styles.item}>
                <Item>
                  <FiUser />
                  Clientes
                </Item>
              </div>
            </NavLink>
            <NavLink to="/finance">
              <div className={styles.item}>
                <Item>
                  <MdOutlineAttachMoney />
                  Finanças
                </Item>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
