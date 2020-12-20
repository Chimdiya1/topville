import React from 'react'
import { useSelector } from 'react-redux'
import {SimpleGrid} from "@chakra-ui/react"
import AdminBlogCard from '../adminBlogCard/adminBlogCard' 
const AdminBlogList = () => {
    const blogs = useSelector(state => state.blogs)
    return (
        <SimpleGrid minChildWidth="300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%', '80%', null]}>
            {
                blogs.blogs.map(blog => <AdminBlogCard key={blog.id} blog={blog} />)
            }
        </SimpleGrid>
    );
}

export default AdminBlogList;