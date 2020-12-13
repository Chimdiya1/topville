import React from 'react'
import { useSelector } from 'react-redux'
import {SimpleGrid} from "@chakra-ui/react"
import AdminCard from '../adminCard/adminCard' 
const AdminList = () => {
    const listings = useSelector(state => state.listings)
    return (
        <SimpleGrid minChildWidth="300px" paddingY='50px' spacing="40px" m='auto' justifyContent='space-between' width={['90%', '80%', null]}>
            {
                listings.listings.map(listing => <AdminCard key={listing.id} listing={listing} />)
            }
        </SimpleGrid>
    );
}

export default AdminList;