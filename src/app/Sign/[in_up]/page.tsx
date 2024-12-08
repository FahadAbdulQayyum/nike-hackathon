"use client"

import { useParams } from 'next/navigation';

import SignComponent from '@/components/Sign'

const Sign = () => {
    const params = useParams();
    const { in_up
    } = params; // Access the product ID from the route

    return (
        <SignComponent signup={in_up === 'up' ? true : false} />
    )
}

export default Sign
