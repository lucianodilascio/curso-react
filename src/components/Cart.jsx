import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Flex, Stack, Heading, Text, Button, ButtonGroup, Card, CardBody, Divider, CardFooter } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';

const Cart = () => {
  const { cart, setCart, agregarAlCarrito } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  const handleAddOne = (productId) => {
    agregarAlCarrito({ id: productId }, 1);
  };

  const handleRemoveOne = (productId) => {
    agregarAlCarrito({ id: productId }, -1);
  };

  return (
    <Flex direction="column" align="center">
      <Text as="h1" mb="4" className='tamañoTitulo'>
        Carrito de Compras
      </Text>
      {cart.length === 0 ? (
        <Text mb="4" className='tamañoTituloCarrito'>El carrito está vacío</Text>
      ) : (
        <Stack spacing="7" width="50%">
          {cart.map((item) => (
            <Card key={item.id} boxShadow="dark-lg" p="6" rounded="md" bg="white" width="100%">
              <CardBody>
                <Stack spacing="6">
                  <Heading size="md" mx="auto">
                    {item.titulo}
                  </Heading>
                  <Text mx="auto">{item.descripcion}</Text>
                  <Text mx="auto" color="blue.600" fontSize="2xl">
                    ${item.precio} x {item.contador}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup margin="auto" spacing="2">
                  <Button
                    onClick={() => handleRemoveOne(item.id)}
                    colorScheme="blue"
                    leftIcon={<MinusIcon />} 
                  >
                    
                  </Button>
                    
                
                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    colorScheme="red"
                    ml="auto"
                  >
                    Eliminar
                  </Button>

                  <Button
                    onClick={() => handleAddOne(item.id)}
                    colorScheme="blue"
                    rightIcon={<AddIcon />} 
                  >
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
          <Button colorScheme="blue" onClick={handleEmptyCart} width="30%" mx="auto">
            Vaciar Carrito
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Cart;

