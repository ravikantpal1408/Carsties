import React from 'react'

export default async function Details({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>details page goes here with {id}</div>
    )
}
