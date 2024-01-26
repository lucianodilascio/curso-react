import { Flex, Stack, Heading, Text, Card, CardBody, Divider, ButtonGroup, CardFooter, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

  
  

  return (

    <Flex maxW='sm' mb='6' mt='4' ml='800' >
      <Card width='100%' boxShadow='dark-lg' p='6' rounded='md' bg='white'>
      <Image src={producto.imagen}/>
        <CardBody>  
          <Stack mt='6' spacing='6'>
            <Heading size='md' >{producto.titulo}</Heading>
            <Text textAlign="center" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
              {producto.descripcion}.
            </Text>
            <Text color='blue.600' fontSize='2xl' textAlign="center" fontWeight="bold">
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' >
          <ItemCount producto={producto} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default ItemDetail