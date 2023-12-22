import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text, Flex } from '@chakra-ui/react';


const Item = ({ titulo, descripcion, precio, categoria }) => {
  return (
    <Flex  maxW='sm' mb='6' mt='4'> 
      <Card width='100%' boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
          <Stack mt='6' spacing='6'>
            <Heading size='md'>{titulo}</Heading>
      
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' >
            <Button>ver detalles</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default Item;