import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import logo from '../components/img/logo.png';



const NavBar = () => {
    return (
        <div>

            <Flex className='titulo'>
                <Box className='tituloBasquetmania' p='4'>
                    <Link to="/">
                        <img className='logo' src={logo} alt="Basquetmania Logo" />
                    </Link>
                </Box>


                <Spacer />


                <Menu>
                    <MenuButton className='titulo2'>
                        CATEGORIAS
                    </MenuButton>
                    <MenuList>
                        <Link to='category/zapatillas'>
                        <MenuItem className='desplegable'>Zapatillas</MenuItem>
                        </Link>
                        <Link to='category/indumentaria'>
                        <MenuItem className='desplegable'>Indumentaria</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>


                <Spacer />


                <Link to="/cart">
                    <Box className='titulo3' p='20'>

                        <FaShoppingCart size={40} />
                        <CartWidget />
                    </Box>
                </Link>
            </Flex>



        </div>
    )
}

export default NavBar;