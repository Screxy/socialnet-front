'use client';

import React from 'react';

import {useEffect} from "react";
import {useRouter} from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { getAccessToken } from '@/utils/helpers'


const UserDataFetcher = () => {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector((state) => state.auth);
    const router = useRouter();
    const token = getAccessToken();

    useEffect(() => {
        if (token && !user.id) {
            // dispatch(fetchUserData());
        } else if (!token) {
            // dispatch(logout());
            router.push("/login");
        }
    }, [user.id, dispatch, router, token]);

    return <></>;

};

export default UserDataFetcher;

