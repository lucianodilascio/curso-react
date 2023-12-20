import React from 'react'
import CartWidget from './CartWidget'
import { FaShoppingCart } from "react-icons/fa";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import logo from '../components/img/logo.png';


const NavBar = () => {
    return (
        <div>

            <Flex className='titulo'>
                <Box className='tituloBasquetmania' p='4'>
                    <img className='logo' src={logo} alt="Basquetmania Logo" />


                </Box>



                <Spacer />



                <Menu>
                    <MenuButton className='titulo2'>
                        CATEGORIAS
                    </MenuButton>
                    <MenuList>
                        <MenuItem className='desplegable'>Zapatillas</MenuItem>
                        <MenuItem className='desplegable'>Indumentaria</MenuItem>

                    </MenuList>
                </Menu>


                <Spacer />


                <Box className='titulo3' p='20'>
                    <FaShoppingCart size={40} />
                    <CartWidget />
                </Box>
            </Flex>



        </div>
    )
}

export default NavBar