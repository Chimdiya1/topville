import React, { useState } from 'react'
// import './pagination.styles.scss'
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
        <div className='pagination'>
            <FontAwesomeIcon className='page-icon' onClick={() => move('prev')} icon={faAngleLeft} />
            {
                pageNumbers.map((number) => (
                    <p key={number}
                        onClick={() => {
                            paginate(number)
                            setcurr(number)
                        }} className={`page-link ${curr === number?  'curr' : ''}`}>
                        {number}
                    </p>
                ))
            }
            <FontAwesomeIcon className='page-icon' onClick={() => move('next')} icon={faAngleRight} />
        </div>
    )
}

export default Pagination
