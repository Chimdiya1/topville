import React from 'react';
import {
    Flex,
    Badge,
    Box,
    useToast,
    Button
    
} from "@chakra-ui/react"
import { firestore,storage } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
const AdminCard = ({ listing }) => {
    const toast = useToast()
    const deleteDocument = (doc,images) => {
        firestore.collection("listings").doc(doc).delete().then(function () {
            toast({
                title: "Deleted",
                description: "Listing deleted successfully",
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
        images.forEach((img) => storage.refFromURL(img).delete())
    };
    return ( 
            <Flex _hover={{ bg: "gray.300", transform: 'scale(0.95)' }} transition='all ease-in-out 0.3s' flexDir='column' alignItems='flex-start' justifyContent='space-between' bg="gray.100" m='auto' w={['280px', '300px']} height="auto" >
                <div className="list-item_image"
                    style={{
                        backgroundImage: `url(${listing.images[0]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center',
                        width: '100%',
                        height: '230px',
                    }}>
                    
                </div>
                <Box p="6">
                    <Flex mb='2'>
                        <Badge borderRadius="full" px="2" colorScheme="green">
                            {listing.purpose}
                        </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {listing.bedrooms} beds &bull; {listing.bathrooms} baths &bull; {listing.cars} cars
                        </Box>
                    </Flex>
                    <Box
                        mb='3px'
                        fontSize='20px'
                        fontWeight="500"
                        as="h4"
                        
                    >
                        {listing.title}
                    </Box>
                    <Box
                        fontSize='18px'
                        mb='3px'
                        color='brand.bold'
                    >
                        &#8358;{formatNumber(listing.price)}
                    </Box>
                    <Box color="gray.500">
                        <FontAwesomeIcon style={{marginRight:'5px'}} color="green" icon={faMapMarker} /> {listing.location}
                    </Box>
                </Box>
                <Button onClick={()=>deleteDocument(listing.id,listing.images)} mx='auto' alignSelf='center' colorScheme='red'>
                    Delete
                </Button>
            </Flex>               
     );
}
 
export default AdminCard;