import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Flex, Center, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({  id, imagen,descripcion, nombre}) => {
  return (
    <Center  maxW='full' mb='6' mt='4' >
    <Flex> 
      <Card width='md' boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Text textAlign="center" fontWeight="bold" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" mb="10px">{nombre}</Text>
        <Image src={imagen}/>
        <CardBody>
          <Stack mt='6' spacing='6'>
            
      
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter  ml='32' >
          <ButtonGroup spacing='2' >
          <Link to={`/producto/${id}`}>
           <Button>Ver detalle</Button>
           </Link>
            
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
    </Center>
  );
}

export default Item;