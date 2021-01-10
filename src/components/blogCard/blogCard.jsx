import React from 'react';
import {
    Flex,
    Image,
    Text,
    Heading
    
} from "@chakra-ui/react"


const BlogCard = ({ image, heading, text, date }) => {
    const toDateTime = (secs) => {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
    let blogDate = toDateTime(date.seconds).toDateString()
    return ( 
            <Flex _hover={{ bg: "gray.300", transform:'scale(0.95)' }} transition='all ease-in-out 0.3s' flexDir='column' alignItems='flex-start'  justifyContent='space-between'  bg="white" m='auto' w={['280px','300px']} height="auto" >
                <div className="list-item_image"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center',
                        width: '100%',
                        height: '230px',
                    }}>
                    
                </div>
                <Heading m='20px' marginBottom='0' as="h4" color='brand.bold' size="md">
                    {heading}
                </Heading>
                <Text m='20px' my='0px' fontSize='12px' textAlign='left' color='gray.500'> {blogDate}</Text>
                <p style={{
                    margin: '20px',
                    fontSize:'14px',
                    textAlign: 'left',
                    color:'#2D3748',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitDisplay: '-webkit-box',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '3'
                }} dangerouslySetInnerHTML={{ __html: text }}>
                    
                </p>
            </Flex>
     );
}
 
export default BlogCard;