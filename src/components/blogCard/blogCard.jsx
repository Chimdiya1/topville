import React from 'react';
import {
    Flex,
    Image,
    Text,
    Heading
    
} from "@chakra-ui/react"


const BlogCard = ({img,heading,text,date}) => {
    return ( 
        <a href="">
            <Flex _hover={{ bg: "gray.300", transform:'scale(0.95)' }} transition='all ease-in-out 0.3s' flexDir='column' alignItems='flex-start'  justifyContent='space-between'  bg="white" m='auto' w={['280px','300px']} height="auto" >
                <Image width='100%' src={img} alt='sign' />
                <Heading m='20px' marginBottom='0' as="h4" color='brand.bold' size="md">
                    {heading}
                </Heading>
                <Text m='20px' my='0px' fontSize='12px' textAlign='left' color='gray.500'> {date}</Text>
                <Text m='20px' noOfLines={4}  fontSize='14px' textAlign='left' color='gray.700'>{ text }</Text>
            </Flex>
        </a>
               
     );
}
 
export default BlogCard;