'use client'
import React, { useEffect } from 'react'
import AuctionCard from './AuctionCard'
import AppPagination from '../components/AppPagination'
import { Auction } from '@/types'
import { getData } from '../actions/actionAuctions'


export default function Listings() {
    const [auctions, setAuctions] = React.useState<Auction[]>([])
    const [pageCount, setPageCount] = React.useState(0);
    const [pageNumber, setPageNumber] = React.useState(1);

    useEffect(() => {
        getData(pageNumber).then(data => {
            setAuctions(data.results);
            setPageCount(data.pageCount);
        }).catch(error => {
            console.error('Error fetching auctions:', error);
        });
    }, [pageNumber])

    if (auctions.length === 0) {
        return <h3>Loading....</h3>
    }

    return (
        <>
            <div className='grid grid-cols-4 gap-6'>
                {auctions && auctions.map(auction => (
                    <AuctionCard
                        key={auction.id}
                        auction={auction}
                    />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                <AppPagination pageChanged={setPageNumber} currentPage={pageNumber} pageCount={pageCount} />
            </div>
        </>

    )
}
