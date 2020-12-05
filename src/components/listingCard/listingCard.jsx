import React from 'react';
import {
    Flex,
    Image,
    Text,
    Heading,
    Badge,
    Box
    
} from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
const ListingCard = ({listing}) => {
    console.log(listing)
    return ( 
        <a href="">
            <Flex _hover={{ bg: "gray.300", transform:'scale(0.95)' }} transition='all ease-in-out 0.3s' flexDir='column' alignItems='flex-start'  justifyContent='space-between'  bg="white" m='auto' w={['280px','300px']} height="auto" >
                <Image width='100%' src={listing.images[0]} alt='sign' />
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
                {/* <Text m='20px' my='0px' fontSize='12px' textAlign='left' color='gray.500'> 6th Of december 2020</Text>
                <Text m='20px' noOfLines={4}  fontSize='14px' textAlign='left' color='gray.700'>{ text }</Text> */}
            </Flex>
        </a>
               
     );
}
 
export default ListingCard;