import React from 'react';
import {
    Flex,
    Image,
    Text,
    Heading,
    Badge,
    Box,
    useToast,
    Button
    
} from "@chakra-ui/react"
import { firestore,storage } from '../../firebase'
import { Link } from 'react-router-dom';


const AdminBlogCard = ({blog}) => {
    const toast = useToast()
    const deleteDocument = (doc,image) => {
        firestore.collection("blogs").doc(doc).delete().then(function () {
            toast({
                title: "Deleted",
                description: "Blog deleted successfully",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        }).catch(function (error) {
            toast({
                title: "An error has occured",
                description: "Please try again",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        })
        // storage.ref().child(image).delete()
        storage.refFromURL(image).delete()
    };

    const toDateTime = (secs) => {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
    return ( 
            <Flex _hover={{ bg: "gray.300", transform:'scale(0.95)' }} transition='all ease-in-out 0.3s' flexDir='column' alignItems='flex-start'  justifyContent='space-between'  bg="white" m='auto' w={['280px','300px']} height="auto" >
                <div className="list-item_image"
                    style={{
                        backgroundImage: `url(${blog.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center',
                        width: '100%',
                        height: '230px',
                    }}>
                    
                </div>
                <Heading m='20px' marginBottom='0' as="h4" color='brand.bold' size="md">
                    {blog.title}
                </Heading>
                {/* <Text m='20px' my='0px' fontSize='12px' textAlign='left' color='gray.500'> {toDateTime(date.seconds).toDateString()}</Text> */}
                <Text m='20px' noOfLines={3} fontSize='14px' textAlign='left' color='gray.700'>
                    <p  dangerouslySetInnerHTML={{ __html: text }}>                    
                    </p>
                </Text>
                 <Flex w='100%' justifyContent='space-around' mb='1rem'>
                    <Button as={Link} to={`/editblog/${blog.id}`} mx='auto' alignSelf='center' colorScheme='teal'>
                        Edit
                    </Button>
                    <Button onClick={()=>deleteDocument(blog.id,blog.image)} mx='auto' alignSelf='center' colorScheme='red'>
                        Delete
                    </Button>
                </Flex>
            </Flex>               
     );
}
 
export default AdminBlogCard;