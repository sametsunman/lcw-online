import React from 'react';
import MainPage from './screens/MainPage';
import ShoppingCart from './screens/ShoppingCart';

export const routes = [{
        path: '/',
        exact: true,
        component: () => <MainPage /> ,
        title: 'Anasayfa'
    },
    {
        path: '/shopping-cart',
        component: () => <ShoppingCart /> ,
        title: 'Alışveriş Sepeti'
    }
]