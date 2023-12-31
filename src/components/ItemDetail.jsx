import React from 'react'
import { useParams } from 'react-router-dom'
import {Flex,Stack,Heading,Text,Card,CardBody,Divider,ButtonGroup,CardFooter } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

const {id}= useParams()


  return (
    <Flex  maxW='sm' mb='6' mt='4'> 
      <Card width='100%' boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
          <Stack mt='6' spacing='6'>
            <Heading size='md'>{producto.titulo}</Heading>
            <Text>
              {producto.descripcion}.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' >
            <ItemCount />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default ItemDetail