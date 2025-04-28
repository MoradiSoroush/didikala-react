import React from "react";

import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail/BlogDetail";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";
import Privacy from "./Pages/Privacy/Privacy";
import ProductComment from "./Pages/ProductComment/ProductComment";
import ProductComparison from "./Pages/ProductComparison/ProductComparison";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import Shopping from "./Pages/Shopping/Shopping";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import VerifyPhoneNumber from "./Pages/VerifyPhoneNumber/VerifyNumber";
import Wellcome from "./Pages/Wellcome/Wellcome";
import MainFAQ from "./Pages/FAQ/Main/MainFAQ"; 
import CategoryFAQ from "./Pages/FAQ/Category/CategoryFAQ"; 
import FAQQuestionPage from "./Pages/FAQ/Question/FAQQuestionPage"; 
import ErrorPage from "./Pages/Error/ErrorPage";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import EditUserInfo from "./Pages/Profile/Components/EditUserInfo/EditUserInfo";
import UserAddresses from "./Pages/Profile/Components/UserAddresses/UserAddresses";
import UserComments from "./Pages/Profile/Components/UserComments/UserComments";
import UserFavorite from "./Pages/Profile/Components/UserFavorites/UserFavorites";
import UserOrderDetails from "./Pages/Profile/Components/UserOrderDetails/UserOrderDetails";
import UserPersonalInfo from "./Pages/Profile/Components/UserPersonalInfo/UserPersonalInfo";
import UserOrderReturns from "./Pages/Profile/Components/UserOrderReturns/UserOrderReturn";
import UserHistory from "./Pages/Profile/Components/UserHistory/UserHistory";
import UserOrders from "./Pages/Profile/Components/UserOrders/UserOrder";


let routes =[
    {path:"/",element:<Home />},
    {path:"/blogs",element:<Blogs/>, children:[
        {path:"/blogs/:id",element:<BlogDetail />}
    ]},
    {path:"/cart",element:<Cart />},
    {path:"/login",element:<Login />},
    {path:"/register",element:<Register />},
    {path:"/privacy",element:<Privacy />},
    {path:"/profile",element:<Profile />,children:[
        {path:"/profile/user-info",element:<UserPersonalInfo />},
        {path:"/profile/edit-info",element:<EditUserInfo />},
        {path:"/profile/addresses",element:<UserAddresses />},
        {path:"/profile/order-returns",element:<UserOrderReturns />},
        {path:"/profile/order-details",element:<UserOrderDetails />},
        {path:"/profile/favorite",element:<UserFavorite />},
        {path:"/profile/history",element:<UserHistory />},
        {path:"/profile/comments",element:<UserComments />},
        {path:"/profile/orders",element:<UserOrders />},
    ]},
    {path:"/search",element:<Search />},
    {path:"/shopping",element:<Shopping />},
    {path:"/single-product",element:<SingleProduct />},
    {path:"/verify-number",element:<VerifyPhoneNumber />},
    {path:"/welcome",element:<Wellcome />},
    {path:"/faq",element:<MainFAQ />},
    {path:"/faq-category",element:<CategoryFAQ />},
    {path:"/fa-question",element:<FAQQuestionPage />},
    {path:"/error-page",element:<ErrorPage />},
    {path:"/change-password",element:<ChangePassword />},
    {path:"*",element:<ErrorPage />},
]

export default routes;