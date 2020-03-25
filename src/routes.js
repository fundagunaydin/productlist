import Vue from 'vue';
import ProductList from './components/products/ProductList';
import AddProduct from './components/products/AddProduct';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes=[
    {
    path:'/',
    component:ProductList
    },
    {
        path:'/addproduct',
        component:AddProduct
    },
    {
        path:'*',
        redirect:'/'
    }
];

export const router=new VueRouter({
    mode:'history',
    routes

});
