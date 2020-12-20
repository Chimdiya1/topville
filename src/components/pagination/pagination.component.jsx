import React, { useState } from 'react'
import {
    Flex,
    Box,
    SimpleGrid,
    Heading,
    Text,
    Spinner
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const [curr, setcurr] = useState(1)
    const move = (type) => {
        if (type === 'prev' && curr !== 1) {
            paginate(curr - 1)
            setcurr(curr - 1)
        }
        if (type === 'next' && curr !== pageNumbers[pageNumbers.length - 1]) {
            paginate(curr + 1)
            setcurr(curr + 1)
        }
    }
    return (
        <Flex marginX='auto' fontSize='40px' alignItems='center' width='100%' justifyContent='center'>
            <FontAwesomeIcon  color='#48BB78' className='page-icon' onClick={() => move('prev')} icon={faAngleLeft} />
            {
                pageNumbers.map((number) => (
                    <Flex key={number}
                        fontSize='1rem'
                        marginX='.7rem'
                        w='30px'
                        h='30px'
                        alignItems='center'
                        justifyContent='center'
                        bgColor='brand.primary'
                        color='white'
                        borderRadius='5px'
                        onClick={() => {
                            paginate(number)
                            setcurr(number)
                        }} className={`page-link ${curr === number?  'curr' : ''}`}>
                        {number}
                    </Flex>
                ))
            }
            <FontAwesomeIcon fontSize='1.7rem' color='#48BB78' className='page-icon' onClick={() => move('next')} icon={faAngleRight} />
        </Flex>
    )
}

export default Pagination
