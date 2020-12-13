import React from 'react';

import {
    Flex,
    Box,
    Heading,
    Divider,
    Skeleton,
    Image,
    Link,
    Text,
    Button
} from "@chakra-ui/react"
import { useParams, Link as rrdLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pic from '../../assets/home.jpg'

const BlogPage = ({ match, history }) => {
    let { id } = useParams();
    const blogs = useSelector(state => state.blogs.blogs)
    const item = blogs.filter(item => item.id === id)
    const {
        image,
        title,
        date,
        content
    } = item[0] || {}

  if (item.length===0)  {
    return <Skeleton/>
  }
  return (
    <Flex flexDir='column'>
        <Box height='80px' w='100%' backgroundColor='black'/>
          <Flex width={['100%', null, '80%', null, '60%']} flexDir='column' mx='auto' alignItems='center' >
              <Image boxSize={['100%', null, null, '80%']} src={image} alt="Blog Image" />
              <Flex padding={['1rem',null]} w={['100%', null, null, '80%']} flexDir='column' alignItems='baseline' textAlign='lefts'>
                <Heading mt="24px" mb='12px' as='h2' fontSize={['24px','28px',null,'32px']} >
                      {title}
                </Heading> 
                <Heading mb='24px' as='h6' fontSize='16px' color='gray.400' fontWeight='300'>
                    {date}
                </Heading>
                <Divider />
                <Text my='24px' textAlign='justify' lineHeight='33px'>
                    {content} 
                </Text>
                <Flex my='24px' w='100%' alignItems='flex-start'>
                <Link as={rrdLink} to='/blog'>                    
                    <Button colorScheme='green' variant='outline'>
                        Read more
                    </Button>
                </Link>
                </Flex>
              </Flex>    
        </Flex>
    </Flex>
    );
}

export default BlogPage;
