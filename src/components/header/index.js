import React, { useState } from 'react';
import './style.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  Container,
  Card,
  List,
  ListItem,
  ListItemIcon,
  Dialog,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MessageIcon from '@material-ui/icons/Message';
import Login from '../Login';
import Signup from '../Signup';
import { useSelector, useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from '../../redux/actions/auth';

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { user, authenticated } = useSelector((state) => state.auth);

  const handleOpenLogin = () => {
    if (location.pathname === '/login') return;
    if (location.pathname === '/signup') return history.push('/login?from=/');
    setOpenLogin(true);
  };

  return (
    <div style={{ height: '56px' }}>
      <section className='header'>
        <Container
          style={{
            padding: '0 170px',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className='header__logo'>
            <Link to='/'>
              <img src='/images/logo.png' alt='' />
              <span className='header__logo__text'>
                Explore
                <span>Plus</span>
                <img src='/images/plus_aef861.png' alt='' />
              </span>
            </Link>
          </div>
          <div className='header__search'>
            <input
              type='text'
              placeholder='Search for products, brands and more'
            />
            <button>
              <SearchIcon
                style={{
                  color: '#2874F0',
                }}
              />
            </button>
          </div>
          <div className='header__login'>
            {authenticated ? (
              <p
                style={{
                  padding: '7px',
                  fontWeight: '500',
                  color: '#fff',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
              >
                {user.username}
              </p>
            ) : (
              <button onClick={handleOpenLogin}>Login</button>
            )}
            <div className='header__login__menu'>
              <Card>
                {!authenticated && (
                  <div className='header__login__signup'>
                    <strong>New user?</strong>
                    <Link
                      to=''
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenSignup(true);
                      }}
                    >
                      Signup
                    </Link>
                  </div>
                )}
                <List>
                  <ListItem
                    style={{ padding: '12px' }}
                    button
                    divider
                    onClick={() => history.push('/profile')}
                  >
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <AccountCircleIcon
                        fontSize='small'
                        style={{ color: 'rgb(40, 116, 240)' }}
                      />
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      My profile
                    </span>
                  </ListItem>
                  <ListItem style={{ padding: '12px' }} button divider>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <svg
                        width='16'
                        height='16'
                        className=''
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g
                          id='Desktop_VIP'
                          stroke='none'
                          strokeWidth='1'
                          fillRule='evenodd'
                        >
                          <g transform='translate(7.873 .143)'>
                            <path
                              d='M6.484 4.94s2.476 1.227 3.698 1.748c1.188.506 1.323 2.4.016 3.04-1.307.64-1.67.744-1.67.744s.208-.53.178-1.044c-.085-.914-2.787-1.656-4.576-2.094 0 0-1.375-4.311-1.995-5.512C1.509.612.242.11.242.11l2.995.04s1.03-.05 1.488 1.055c.456 1.106 1.76 3.734 1.76 3.734'
                              fill='#2873F0'
                              mask='url(#b)'
                            ></path>
                          </g>
                          <g transform='translate(8.635 8.27)'>
                            <path
                              d='M5.547 6.265S4.334 8.713 3.8 9.965c-.507 1.187-2.44 1.322-3.079.015C.081 8.673.015 8.44.015 8.44s.387.076 1 .048c.915-.084 1.7-2.786 2.138-4.575 0 0 4.311-1.377 5.513-1.997 1.21-.624 1.71-1.892 1.71-1.892l-.04 3.44s.05.587-1.055 1.044c-1.105.455-3.734 1.757-3.734 1.757'
                              fill='#2873F0'
                              mask='url(#d)'
                            ></path>
                          </g>
                          <g transform='translate(0 8.778)'>
                            <path
                              d='M4.655 5.573S2.193 4.353.956 3.826C-.232 3.32-.367 1.423.94.786 2.248.145 2.774.026 2.774.026s-.34.545-.255 1.157C2.606 2.1 5.22 2.74 7.008 3.179c0 0 1.427 4.287 1.997 5.513.695 1.493 1.848 1.72 1.848 1.72l-3.396-.05s-.585.05-1.042-1.055c-.458-1.106-1.76-3.734-1.76-3.734'
                              fill='#2873F0'
                              mask='url(#f)'
                            ></path>
                          </g>
                          <g transform='translate(0 .143)'>
                            <path
                              d='M4.857 4.754s1.219-2.46 1.747-3.699c.506-1.188 2.4-1.321 3.04-.016.64 1.308.701 1.544.701 1.544s-.482.007-.993.035c-.916.087-1.663 2.702-2.101 4.49 0 0-4.296 1.405-5.513 1.996C.066 9.916 0 10.957 0 10.957l.068-3.4s-.05-.586 1.055-1.043c1.105-.457 3.734-1.76 3.734-1.76'
                              fill='#2873F0'
                              mask='url(#h)'
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      Flipcart Plus Zone
                    </span>
                  </ListItem>
                  <ListItem style={{ padding: '12px' }} button divider>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='12'
                        className=''
                        viewBox='0 0 16 12'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path
                            fill='#2874F1'
                            d='M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z'
                          ></path>
                        </g>
                      </svg>
                    </ListItemIcon>
                    <span className='header__login__menu__text'>Orders</span>
                  </ListItem>
                  <ListItem
                    style={{ padding: '12px' }}
                    button
                    divider={authenticated}
                  >
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <FavoriteIcon
                        fontSize='small'
                        style={{ color: 'rgb(40, 116, 240)' }}
                      />
                    </ListItemIcon>
                    <span className='header__login__menu__text'>Wishlist</span>
                  </ListItem>
                  {authenticated && (
                    <>
                      <ListItem style={{ padding: '12px' }} button divider>
                        <ListItemIcon style={{ minWidth: '30px' }}>
                          <MessageIcon
                            fontSize='small'
                            style={{ color: 'rgb(40, 116, 240)' }}
                          />
                        </ListItemIcon>
                        <span className='header__login__menu__text'>
                          My Chats
                        </span>
                      </ListItem>
                      <ListItem style={{ padding: '12px' }} button divider>
                        <ListItemIcon style={{ minWidth: '30px' }}>
                          <NotificationsIcon
                            fontSize='small'
                            style={{ color: 'rgb(40, 116, 240)' }}
                          />
                        </ListItemIcon>
                        <span className='header__login__menu__text'>
                          Notifications
                        </span>
                      </ListItem>
                      <ListItem
                        style={{ padding: '12px' }}
                        button
                        onClick={() => {
                          localStorage.removeItem('token');
                          dispatch(logout());
                        }}
                      >
                        <ListItemIcon style={{ minWidth: '30px' }}>
                          <ExitToAppIcon
                            fontSize='small'
                            style={{ color: 'rgb(40, 116, 240)' }}
                          />
                        </ListItemIcon>
                        <span className='header__login__menu__text'>
                          Logout
                        </span>
                      </ListItem>
                    </>
                  )}
                </List>
              </Card>
            </div>
          </div>

          <div className='header__login' style={{ marginLeft: '25px' }}>
            <button className='more'>More</button>
            <div className='header__login__menu'>
              <Card>
                <List>
                  <ListItem style={{ padding: '12px' }} button divider>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <NotificationsIcon
                        fontSize='small'
                        style={{ color: 'rgb(40, 116, 240)' }}
                      />
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      Notification Preferences
                    </span>
                  </ListItem>
                  <ListItem style={{ padding: '12px' }} button divider>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='12'
                        className=''
                        viewBox='0 0 16 14'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path d='M-2-3h20v20H-2V-3zm8.333 4.167h3.334v1.666H6.333V1.167zm0 0h3.334v1.666H6.333V1.167z'></path>
                          <path
                            fill='#2874F0'
                            fillRule='nonzero'
                            d='M6.467 10.067V9.3h-5.36L1.1 12.367c0 .85.682 1.533 1.533 1.533h10.734c.85 0 1.533-.682 1.533-1.533V9.3H9.533v.767H6.467zm7.666-6.9H11.06V1.633L9.526.1H6.459L4.926 1.633v1.534h-3.06c-.843 0-1.533.69-1.533 1.533V7c0 .851.683 1.533 1.534 1.533h4.6V7h3.066v1.533h4.6c.844 0 1.534-.69 1.534-1.533V4.7c0-.843-.69-1.533-1.534-1.533zm-4.6 0H6.467V1.633h3.066v1.534z'
                          ></path>
                        </g>
                      </svg>
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      Sell on Flipcart
                    </span>
                  </ListItem>
                  <ListItem style={{ padding: '12px' }} button divider>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <HelpIcon
                        fontSize='small'
                        style={{ color: 'rgb(40, 116, 240)' }}
                      />
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      24x7 Customer Care
                    </span>
                  </ListItem>
                  <ListItem style={{ padding: '12px' }} button>
                    <ListItemIcon style={{ minWidth: '30px' }}>
                      <GetAppIcon
                        fontSize='small'
                        style={{ color: 'rgb(40, 116, 240)' }}
                      />
                    </ListItemIcon>
                    <span className='header__login__menu__text'>
                      Dowload App
                    </span>
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
          <div className='header__login' style={{ marginLeft: '25px' }}>
            <button className='more cart'>
              <ShoppingCartIcon style={{ marginRight: '5px' }} />
              Cart
            </button>
          </div>
          <Dialog
            maxWidth='lg'
            open={openLogin}
            onClose={() => setOpenLogin(false)}
          >
            <Login
              redirectPath={`${location.pathname}${location.search}`}
              handleClose={() => setOpenLogin(false)}
              handleOpenSignup={() => setOpenSignup(true)}
              width={55}
            />
          </Dialog>
          <Dialog
            maxWidth='lg'
            open={openSignup}
            onClose={() => setOpenSignup(false)}
          >
            <Signup
              handleClose={() => setOpenSignup(false)}
              handleOpenLogin={() => setOpenLogin(true)}
              width={55}
            />
          </Dialog>
        </Container>
      </section>
    </div>
  );
};

export default Header;
