import React from 'react';
import {
    Flex,
    Box,
    SimpleGrid,
    Heading,
    Divider,
    Skeleton,
    Text,
    Button
} from "@chakra-ui/react"
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed,faBath,faCar,faMapMarkerAlt,faHome } from '@fortawesome/free-solid-svg-icons'

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

const ListingPage = ({ match, history }) => {

    let { id } = useParams();
    const listings = useSelector(state => state.listings.listings)
    const item = listings.filter(item => item.id === id)
    
    const {
        images,
        title,
        price,
        purpose,
        type,
        bedrooms,
        bathrooms,
        cars,
        location,
        address,
        video,
        description
    } = item[0] || {}

    const images2 = images?  images.map((img) => ({
      original:img
    })) : []
  if (item.length===0)  {
    return <Skeleton/>
  }
  return (
    <Flex flexDir='column'>

    
      <Box height='80px' w='100%' backgroundColor='black'/>
    <Flex width={['100%', null, '80%', null, '60%']} flexDir='column' mx='auto' alignItems='center' >
      <Skeleton isLoaded={images?true:false}>
        <ImageGallery
        items={images2}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
      />
      </Skeleton>
      <Flex flexDir='column' my='24px' alignItems='center' height='180px' justifyContent='space-between'>
        <Heading as='h6' fontSize='20px' color='brand.secondary' fontWeight='600'>
          {location}
          &bull;
          {type}
        </Heading>
        <Heading as='h2' fontSize={['24px','28px',null,'32px']} >
            {title}
        </Heading>
        <Heading as='h6' fontSize='20px' color='gray.500'>
          {address}
        </Heading>
        <Box textAlign='center'>
          <Text >
            For {purpose}
          </Text>
            
          <Heading fontWeight='700' color='brand.primary'>
            &#8358;{formatNumber(price)}
          </Heading>
        </Box>
      </Flex>
      <Divider />
      <Flex paddingX={['20px',null,'0px']} my='24px' w='100%' justifyContent='space-around'>
        <Flex flexDir='column' alignItems='flex-start'>
          <Text>Rooms</Text>
          <Flex alignItems='center'>
            <FontAwesomeIcon color="green" style={{marginRight:'12px'}} icon={faBed} size='2x' />
            {bedrooms}
          </Flex>
        </Flex>
        <Flex flexDir='column' alignItems='flex-start'>
          <Text>Baths</Text>
          <Flex alignItems='center'>
            <FontAwesomeIcon color="green" style={{marginRight:'12px'}} icon={faBath} size='2x' />
            {bathrooms}
          </Flex>
        </Flex>
        <Flex flexDir='column' alignItems='flex-start'>
          <Text>Cars</Text>
          <Flex alignItems='center'>
            <FontAwesomeIcon color="green" style={{marginRight:'12px'}} icon={faCar} size='2x' />
            {cars}
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Flex paddingX={['20px', null, '0px']} flexDir='column' mt='24px'>
        <Heading mb='24px' as='h4' fontSize={['18px','20px',null,'24px']} color='brand.secondary'>Description</Heading>
        <Text lineHeight='32px' color='gray.600'>{description}</Text>
      </Flex>
      <Flex paddingX={['20px',null,'0px']} my='24px' w='100%' alignItems='flex-start'>
        <Button colorScheme='green' mr='16px'>
          Watch Tour Here
        </Button>
        <Button colorScheme='green' variant='outline'>
          View More Listings
        </Button>
      </Flex>

      </Flex>
      </Flex>
    );
}

export default ListingPage;
