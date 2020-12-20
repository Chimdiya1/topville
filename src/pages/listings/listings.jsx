import React, { useState } from 'react'
import {
    Flex,
    Box,
    SimpleGrid,
    Heading,
    Spinner
} from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';

import ListingCard from '../../components/listingCard/listingCard'
import dollar from '../../assets/home.jpg'
import Search from '../../components/search/search'
import Pagination from '../../components/pagination/pagination.component'


const Listings = ({ match, history }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)
    const currentListings = useSelector(state => state.listings.searchResult)

    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = currentListings.slice(indexOfFirstPost, indexOfLastPost)

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return ( 
        <Box bg='gray.200' >
            <Flex
                background= "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/home.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                height={['110vh','100vh']}
                align='center'
                justify='center'
                direction='column'
            >
                
                <Search/>
            </Flex>  
            <Heading mt={'24px'} textAlign='center' >
                Listings
            </Heading>
            {
                currentListings.length === 0 ? 
                 (<Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                    mt='50px'
                    mx='auto'
                    />) : (
                        <SimpleGrid minChildWidth="300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%', '80%', null]}>
                            {
                                
                                currentPosts.map((listing) => 
                                    (
                                        <div
                                            className="link"
                                            key={listing.id}
                                            onClick={() => history.push(`${match.path}/${listing.id}`)}
                                        >
                                            <ListingCard listing={listing} />
                                        </div>
                                    )
                                )
                            }
                        </SimpleGrid>
                    )
                }
                {/* <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={currentListings.length}
                    paginate={paginate}
                /> */}
            
            
        </Box>
     );
}
 
export default withRouter(Listings);
