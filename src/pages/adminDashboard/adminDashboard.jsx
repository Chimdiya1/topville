import React, { useState,useEffect } from 'react';
import {
    Box,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"
import { Link, Route } from 'react-router-dom'

import { auth } from '../../firebase'
import Login from '../login/login'
import AdminList from '../../components/adminList/adminList'
import AdminBlogList from '../../components/adminBlogList/adminBlogList'
import Hero from '../../components/hero/hero'
import AddListing from '../../components/addListing/addListing'
import AddBlog from '../../components/addBlog/addBlog'

const AdminDashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    let unsubscribeFromAuth = null

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
            }
        })
        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    return ( 
        <Route render={() => (
            currentUser ?
                <Box>
                    <Hero text='Admin' />
                    <Text mt='5' textAlign='center' >Welcome Admin,</Text>
                    <Heading as='h3' textAlign='center' >Add a Lisiting</Heading>
                    <AddListing />
                    <Heading as='h3' textAlign='center' >All Listings</Heading>
                    <AdminList />
                    <Heading as='h3' textAlign='center' >Add Blogpost</Heading>
                    <AddBlog/>
                    <Heading as='h3' textAlign='center' >All Blogposts</Heading>
                    <AdminBlogList />
                    <Box width='100%' d='flex' justifyContent='center' >
                        <Button w='150px' as={Link} to='/' onClick={() => auth.signOut()} mx='auto' alignSelf='center' mb={10} colorScheme='red'  mt={4}>
                            Sign Out
                        </Button>
                    </Box>
                    {/* <Link to='/' onClick={()=>auth.signOut()}>Sign out</Link> */}
                </Box>
            : 
                <Login/>  
        )}
        />
     );
}
 
export default AdminDashboard;