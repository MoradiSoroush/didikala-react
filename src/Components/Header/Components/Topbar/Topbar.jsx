import React from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link,NavLink } from "react-router-dom";



export default function Topbar() {
  return (
    <div class="container main-container">
      <div class="topbar dt-sl">
        <div class="row topbar-wrapper">
          <div class="col-lg-2 col-md-3 col-6">
            <div class="logo-area">
              <a href="/test">
                <img src="./logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-5 hidden-sm">
            <div class="search-area dt-sl">
              <form action="" class="search">
                <input
                  type="text"
                  placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"
                />
                <i class="far fa-search search-icon"></i>
                <button class="close-search-result" type="button">
                  <i class="mdi mdi-close"></i>
                </button>
                <div class="search-result">
                  <ul>
                    <li>
                      <a href="/test">موبایل</a>
                    </li>
                    <li>
                      <a href="/test">مد و پوشاک</a>
                    </li>
                    <li>
                      <a href="/test">میکروفن</a>
                    </li>
                    <li>
                      <a href="/test">میز تلویزیون</a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-4 col-6 topbar-left">
            <ul class="nav float-left">
              <li class="nav-item account dropdown">
                <Link to=""
                  class="nav-link"
                  href="/"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="label-dropdown">حساب کاربری</span>
                  <AccountCircleIcon />
                </Link>
                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-left">
                  <Link to="/pofile" class="dropdown-item" href="/test">
                    <PersonOutlinedIcon /> پروفایل
                  </Link>
                  <Link to="/messages" class="dropdown-item message-item" href="/test">
                   
                    <div className="message">
                      
                    <EmailOutlinedIcon />
                       
                    </div>
                     <span class="float-left badge badge-light message-badge" >4</span>  
                    پیغام ها 
                  </Link >
                  <Link to="/edit-user-info" class="dropdown-item" href="/test">
                    <EditOutlinedIcon /> ویرایش حساب کاربری
                  </Link >
                  <div class="dropdown-divider" role="presentation"></div>
                  <Link  class="dropdown-item" href="/test">
                    <LogoutOutlinedIcon />
                    خروج
                  </Link >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
