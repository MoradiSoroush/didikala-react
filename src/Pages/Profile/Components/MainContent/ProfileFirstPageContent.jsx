import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Table from "./../../../../Components/Table/Table"
import { userOrders } from '../../../../datas';
import Button from '@mui/material/Button';
import "./ProfileFirstPageContent.css"
export default function ProfileFirstPageContent() {
  return (
    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12">
            <div class="row">
              <div class="col-xl-6 col-lg-12">
                <div class="px-3">
                  <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2">
                    <h2>اطلاعات شخصی</h2>
                  </div>
                  <div class="profile-section dt-sl">
                    <div class="row">
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>نام و نام خانوادگی:</span>
                        </div>
                        <div class="value-info">
                          <span>جلال بهرامی راد</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>پست الکترونیک:</span>
                        </div>
                        <div class="value-info">
                          <span>info@gmail.com</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>شماره تلفن همراه:</span>
                        </div>
                        <div class="value-info">
                          <span>09xxxxxxxxx</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>کد ملی:</span>
                        </div>
                        <div class="value-info">
                          <span>-</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>دریافت خبرنامه:</span>
                        </div>
                        <div class="value-info">
                          <span>خیر</span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-12">
                        <div class="label-info">
                          <span>شماره کارت:</span>
                        </div>
                        <div class="value-info">
                          <span>-</span>
                        </div>
                      </div>
                    </div>
                    <div class="profile-section-link">
                      <Link to="/profile/edit-info" class="border-bottom-dt">
                        <EditIcon />
                        ویرایش اطلاعات شخصی
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12">
                <div class="px-3">
                  <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2">
                    <h2>لیست آخرین علاقه‌مندی‌ها</h2>
                  </div>
                  <div class="profile-section dt-sl">
                    <ul class="list-favorites">
                      <li>
                        <Link to="">
                          <img src="./img/products/016.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5500</span>
                        </Link>
                        <button>
                          <DeleteOutlineIcon />
                        </button>
                      </li>
                      <li>
                        <Link to="">
                          <img src="./img/products/020.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5640</span>
                        </Link>
                        <button>
                          <DeleteOutlineIcon />
                        </button>
                      </li>
                      <li>
                        <Link to="">
                          <img src="./img/products/017.jpg" alt="" />
                          <span>کت مردانه مجلسی مدل k-m-5110</span>
                        </Link>
                        <button>
                          <DeleteOutlineIcon />
                        </button>
                      </li>
                    </ul>
                    <div class="profile-section-link">
                      <Link href="/tests">
                        <EditIcon />
                        مشاهده و ویرایش لیست مورد علاقه
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <div class="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2 px-res-1">
                  <h2>آخرین سفارش‌ها</h2>
                </div>
                <Table orders={userOrders} rowsPerPage={3} showPagination ={ false}/>
                <div className='orders-button-container' style={{margin:"10px 0"}}>
                <Button className='orders-table-button' variant="outlined"  >
                  <Link to="/profile/orders">مشاهده همه سفارشات</Link>
                  
                  </Button> 
                </div>
                
              </div>
            </div>
          </div>
  )
}
