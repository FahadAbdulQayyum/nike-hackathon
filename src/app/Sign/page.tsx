"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import SignComponent from '@/components/Sign';

const Sign = ({ signup = true }) => {

    const router = useRouter();

    useEffect(() => {
        router.push(`/Sign/in`);
    }, [])

    return (
        <SignComponent signup={signup} />
    )
}

export default Sign
