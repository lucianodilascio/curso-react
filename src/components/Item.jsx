import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Flex, Center, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({ titulo, id }) => {
  return (
    <Center  maxW='full' mb='6' mt='4' >
    <Flex> 
      <Card width='md' boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
          <Stack mt='6' spacing='6'>
            <Heading size='md'>{titulo}</Heading>
      
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