import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>

            <Flex>
                <Box p='4'>
                    Basquetmania
                </Box>


                <Spacer />



                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Zapatillas</MenuItem>
                        <MenuItem>Indumentaria</MenuItem>

                    </MenuList>
                </Menu>


                <Spacer />


                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>



        </div>
    )
}

export default Navbar