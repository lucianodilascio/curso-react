import React from 'react'
import CartWidget from './CartWidget'
import { FaShoppingCart } from "react-icons/fa";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <div>

            <Flex className='titulo'>
                <Box p='4'>
                    Basquetmania
                </Box>


                <Spacer />



                <Menu>
                    <MenuButton>
                        CATEGORIAS
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Zapatillas</MenuItem>
                        <MenuItem>Indumentaria</MenuItem>

                    </MenuList>
                </Menu>


                <Spacer />


                <Box p='4'>
                    <FaShoppingCart size={30}/> 
                    <CartWidget />
                </Box>
            </Flex>



        </div>
    )
}

export default NavBar