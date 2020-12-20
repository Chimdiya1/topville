import React, { useState,useEffect } from 'react';
import { Link, Route,useParams } from 'react-router-dom'
import {
    Flex,
    Heading,
    Box,
    Button,
    
} from "@chakra-ui/react"

import { auth } from '../../firebase'
import Login from '../login/login'
import Hero from '../../components/hero/hero'
import EditListingForm from '../../components/editListing/editListing'

function EditListing() {
    const [currentUser, setCurrentUser] = useState(null);
    let unsubscribeFromAuth = null
    let { id } = useParams();
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
                    <Hero text='Edit Listing' />
                    <EditListingForm id={id} />
                </Box>
            : 
                <Login/>  
        )}
        />
        
    )
}

export default EditListing
