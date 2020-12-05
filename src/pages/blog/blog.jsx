import React from 'react';
import Hero from '../../components/hero/hero'
import {
    Box,
    SimpleGrid,
    
} from "@chakra-ui/react"
import BlogCard from '../../components/blogCard/blogCard'
import dollar from '../../assets/home.jpg'

let text = 'Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later  Some vague text about how using our service helps people and some other stuff. TBH this is just to fill up space, content would come much later'

const Blog = () => {
    return ( 
        <Box bg='gray.100' >
            <Hero text="Blog" /> 
            <SimpleGrid minChildWidth= "300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%','80%',null ]}>
                <BlogCard img={dollar} text={text} heading='Affordable'/>
                <BlogCard img={dollar} text={text} heading='Affordable'/>
                <BlogCard img={dollar} text={text} heading='Affordable'/>
                <BlogCard img={dollar} text={text} heading='Affordable'/>
                <BlogCard img={dollar} text={text} heading='Affordable'/>
                <BlogCard img={dollar} text={text} heading='Affordable'/>                
            </SimpleGrid>
            
        </Box>
     );
}
 
export default Blog;