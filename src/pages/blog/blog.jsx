import React from 'react';
import Hero from '../../components/hero/hero'
import {
    Box,
    SimpleGrid,
    
} from "@chakra-ui/react"
import BlogCard from '../../components/blogCard/blogCard'
import dollar from '../../assets/home.jpg'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';

let text = 'Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later  Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later'

const Blog = ({ match, history }) => {
    const currentBlogs = useSelector(state => state.blogs.blogs)
    return ( 
        <Box bg='gray.100' >
            <Hero text="Blog" /> 
            <SimpleGrid minChildWidth="300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%', '80%', null]}>
                {
                    currentBlogs.map(({ id, image, text, timestamp, title }) => (
                        <div
                            className="link"
                            key={id}
                            onClick={() => history.push(`${match.path}/${id}`)}
                        >                            
                            <BlogCard date={timestamp} image={image} text={text} heading={title}/>
                        </div>
                    ))
                }              
            </SimpleGrid>
            
        </Box>
     );
}
 
export default withRouter(Blog);


{/* <div
                                            className="link"
                                            key={listing.id}
                                            onClick={() => history.push(`${match.path}/${listing.id}`)}
                                        >
                                            <ListingCard listing={listing} />
                                        </div> */}