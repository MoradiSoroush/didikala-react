import React from 'react'
import "./ProfileMenu.css"
import { Link } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

export default function ProfileMenu() {




  const activeElemHandler = (e) => {
     e.preventDefault()

   let sideItems =  document.querySelectorAll(".profile-side-menu__item")


   sideItems.forEach(item => {
    item.classList.remove("active")

    
   })

   e.target.classList.add("active")

  }



  return (
    <div class="profile-menu-section dt-sl">
    <div class="label-profile-menu mt-2 mb-2">
      <span>حساب کاربری شما</span>
    </div>
    <div class="profile-menu">
      <ul>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile" className="profile-side-menu__item active" >
            <AccountCircleIcon />
            پروفایل
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/orders" className="profile-side-menu__item" >
            <ShoppingCartOutlinedIcon />
            همه سفارش ها
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/order-returns" class="profile-side-menu__item" >
            <KeyboardReturnOutlinedIcon />
            درخواست مرجوعی
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/favorite" className="profile-side-menu__item" >
            <FavoriteBorderOutlinedIcon />
            لیست علاقمندی ها
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/comments" className="profile-side-menu__item" >
            <ReplyAllOutlinedIcon />
            نقد و نظرات
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/addresses" className="profile-side-menu__item" >
            <LocationOnOutlinedIcon />
            آدرس ها
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/history" className="profile-side-menu__item" >
            <RemoveRedEyeOutlinedIcon />
            بازدیدهای اخیر
          </Link>
        </li>
        <li onClick={e => activeElemHandler(e)}>
          <Link to="/profile/user-info" className="profile-side-menu__item" >
            <EditOutlinedIcon />
            اطلاعات شخصی
          </Link>
        </li>
      </ul>
    </div>
  </div>
  )
}
