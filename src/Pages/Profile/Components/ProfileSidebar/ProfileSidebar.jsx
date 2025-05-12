import React from 'react'
import { Link } from 'react-router-dom'
import ProfileMenu from '../ProfileMenuSection/ProfileMenu'



export default function ProfileSidebar() {

  



  
  return (
    <div class="profile-sidebar dt-sl">
    <div class="dt-sl dt-sn border mb-3">
      <div class="profile-sidebar-header dt-sl">
        <div class="d-flex align-items-center">
          <div class="profile-avatar">
            <img src="./img/profile-pic/1.png" alt="" />
          </div>
          <div class="profile-header-content mr-3 mt-2">
            <span class="d-block profile-username">
              جلال بهرامی راد
            </span>
            <span class="d-block profile-phone">09xxxxxxxxx</span>
          </div>
        </div>
        <div class="profile-point mt-3 mb-2 dt-sl">
          <span class="label-profile-point">امتیاز شما:</span>
          <span class="float-left value-profile-point">120</span>
        </div>
        <div class="profile-link mt-2 dt-sl">
          <div class="row">
            <div class="col-6 text-center">
              <Link to="">
                <i class="mdi mdi-lock-reset"></i>
                <span class="d-block">تغییر رمز</span>
              </Link>
            </div>
            <div class="col-6 text-center">
        

              <Link to="">
                <i class="mdi mdi-logout-variant"></i>
                <span class="d-block">خروج از حساب</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dt-sl dt-sn mb-3 text-center">
      <Link to="">
        <img
          src="./img/banner/sidebar-banner-3.jpg"
          class="img-fluid"
          alt=""
        />
      </Link>
    </div>
    <div class="dt-sl dt-sn border mb-3">
        <ProfileMenu />
    </div>
  </div>
  )
}
