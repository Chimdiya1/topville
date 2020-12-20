import React, { useState } from 'react';
import {
    Box,
    SimpleGrid,
    FormControl,
    FormLabel,
    Select,
    Input,
    Button,
    Textarea,
    CircularProgress,
    Flex,
    Heading,
    Text
    
} from "@chakra-ui/react"
import {animateScroll as aScroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { loadSearchResult } from '../../redux/listings/listings.actions';

const Search = (props) => {
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [sortby, setSortby] = useState('asc');
    const [purpose, setPurpose] = useState('');
    const [minimum, setMinimum] = useState(0);
    const [maximum, setMaximum] = useState(100000000);

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const listings = props.Applistings.listings
        const {loadSearchResult} = props
        console.log(listings)
        setIsLoading(true);
        const EmptyResultCheckAndLoadListing = (result) => {
            if (sortby === 'desc') {
                result = result.sort(function (a, b) { return b.price - a.price })
            }
            else { result = result.sort(function (a, b) { return a.price - b.price }) }
            if (result.length === 0) {
                loadSearchResult(listings)
            } else { loadSearchResult(result) }
        }
        let result = []



        if (location && type && purpose) {
            result = listings.filter((listing) => listing.location === location)
                .filter((listing) => listing.type === type)
                .filter((listing) => listing.purpose === purpose)
                .filter((listing) => listing.price >= minimum)
                .filter((listing) => listing.price <= maximum)
                EmptyResultCheckAndLoadListing(result)
        } else if (location && type) {
            result = listings.filter((listing) => listing.location === location)
                .filter((listing) => listing.type === type)
                .filter((listing) => listing.price >= minimum)
                .filter((listing) => listing.price <= maximum)
                EmptyResultCheckAndLoadListing(result)
        }else if (location && purpose) {
            result = listings.filter((listing) => listing.location === location)
            result = listings.filter((listing) => listing.purpose === purpose)
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        }else if (location) {
            result = listings.filter((listing) => listing.location === location)
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        }else if (type && purpose) {
            result = listings.filter((listing) => listing.type === type)
            result = listings.filter((listing) => listing.purpose === purpose)
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        }else if (type) {
            result = listings.filter((listing) => listing.type === type)
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        }else if (purpose) {
            result = listings.filter((listing) => listing.purpose === purpose)
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        }else if (minimum || maximum) {
            result = listings
            .filter((listing) => listing.price >= minimum)
            .filter((listing) => listing.price <= maximum)
            EmptyResultCheckAndLoadListing(result)
        } else {
            EmptyResultCheckAndLoadListing(result)
        }
        aScroll.scrollTo(650);
        setIsLoading(false);
    };
    return ( 
        <Box w="80%" bgColor='black' mt='70px' >
            <Heading fontSize={['1.2rem',null,'1.5rem']} my={['1rem',null,'1.4rem']} as='h5' textAlign='center' color='white'>Search for a property</Heading>
            <Flex px={['20px','30px',null,null,'50px']} flexDir={['column',null,'row']} justifyContent="space-between">
                <Box flex='1' marginRight={['0px', null, '20px']}>
                    <form  onSubmit={handleSubmit} >
                        <FormControl mt={['10px',null,'24px']} width='100%' > 
                                <FormLabel color='white'>Location</FormLabel>
                                <Select
                                    bg="white"
                                    borderColor="white"
                                    color="black"
                                    placeholder="Select Location" onChange={event => setLocation(event.currentTarget.value)}>
                                        <option value="Hilltop">Hilltop</option>
                                        <option value="Odenigwe">Odenigwe</option>
                                        <option value="Town">Town</option>
                                        <option value="Odim">Odim</option>
                                        <option value="Campus">Campus</option>
                                        <option value="Behind-FLat">Behind FLat</option>
                                </Select>
                        </FormControl>
                        <Flex mt={['0px',null,'24px']} color='white' flexDir={['column',null,'row']} justifyContent='space-between'>
                            <FormControl mt={['10px',null,'24px']}  width={['100%',null,'24%']} > 
                                <FormLabel>Type</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black" placeholder="Select Type" onChange={event => setType(event.currentTarget.value)}>
                                    <option value="office-space">Office Space</option>
                                    <option value="self-contain">Self Contain</option>
                                    <option value="flat">Flat</option>
                                    <option value="single-room">Single Room</option>
                                    <option value="bq">BQ</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={['10px',null,'24px']} width={['100%',null,'24%']} > 
                                <FormLabel>Purpose</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black"  placeholder="Select Purpose" onChange={event => setPurpose(event.currentTarget.value)}>
                                    <option value="Sale">Sale</option>
                                    <option value="Rent">Rent</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={['10px',null,'24px']} width={['100%',null,'24%']} > 
                                <FormLabel>Minimum</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black"  placeholder="Minimum" onChange={event => setMinimum(event.currentTarget.value)}>
                                        <option value="0">No Minimum</option>
                                        <option value="50000">&#8358; 50,000</option>
                                        <option value="100000">&#8358; 100,000</option>
                                        <option value="200000">&#8358; 200,000</option>
                                        <option value="300000">&#8358; 300,000</option>
                                        <option value="400000">&#8358; 400,000</option>
                                        <option value="500000">&#8358; 500,000</option>
                                        <option value="600000">&#8358; 600,000</option>
                                        <option value="700000">&#8358; 700,000</option>
                                        <option value="800000">&#8358; 800,000</option>
                                        <option value="900000">&#8358; 900,000</option>
                                        <option value="1000000">&#8358; 1 Million</option>
                                        <option value="2000000">&#8358; 2 Million</option>
                                        <option value="3000000">&#8358; 3 Million</option>
                                        <option value="5000000">&#8358; 5 Million</option>
                                        <option value="10000000">&#8358; 10 Million</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={['10px',null,'24px']} width={['100%',null,'24%']} > 
                                <FormLabel>Maximum Price</FormLabel>
                                <Select bg="white"
                                    borderColor="white"
                                    color="black" placeholder="Maximum" onChange={event => setMaximum(event.currentTarget.value)}>
                                    <option value="1000000000000">No max</option>
                                    <option value="50000">&#8358; 50,000</option>
                                    <option value="100000">&#8358; 100,000</option>
                                    <option value="200000">&#8358; 200,000</option>
                                    <option value="300000">&#8358; 300,000</option>
                                    <option value="400000">&#8358; 400,000</option>
                                    <option value="500000">&#8358; 500,000</option>
                                    <option value="600000">&#8358; 600,000</option>
                                    <option value="700000">&#8358; 700,000</option>
                                    <option value="800000">&#8358; 800,000</option>
                                    <option value="900000">&#8358; 900,000</option>
                                    <option value="1000000">&#8358; 1 Million</option>
                                    <option value="2000000">&#8358; 2 Million</option>
                                    <option value="3000000">&#8358; 3 Million</option>
                                    <option value="5000000">&#8358; 5 Million</option>
                                    <option value="10000000">&#8358; 10 Million</option>
                                    <option value="100000000">&#8358; 100 Million</option>
                                    <option value="200000000">&#8358; 200 Million</option>
                                    <option value="500000000">&#8358; 500 Million</option>
                                    <option value="1000000000">&#8358; 1 Billion</option>
                                </Select>
                            </FormControl>
                            
                        </Flex>                                               
                        <FormControl mt={['10px',null,'24px']} color='white' width={['100%',null,'24%']} > 
                            <FormLabel>Sort By</FormLabel>
                            <Select bg="white"
                                borderColor="white"
                                color="black" placeholder="Sort By" onChange={event => setSortby(event.currentTarget.value)}>
                                <option value="asc">Price: low to high</option>
                                <option value="desc">Price: high to low</option>
                            </Select>
                        </FormControl>
                        <Flex justifyContent="center">
                            <Button mx='auto' alignSelf='center' mb={5} colorScheme='green' rightIcon={<FontAwesomeIcon icon={faArrowRight} />} type="submit" width={["200px","250px"]} mt={4}>
                                {isLoading ? (
                                    <CircularProgress isIndeterminate size="24px" color="brand.primary" />
                                ) : (
                                    'Search'
                                )}
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Flex>
        </Box>
     );
}
 
const mapDispatchToProps = (dispatch) => ({
  loadSearchResult: (result) => dispatch(loadSearchResult(result)),
});
const mapStateToProps = (state) => ({
  Applistings: state.listings
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
