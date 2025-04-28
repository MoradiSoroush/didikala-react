import React,{useState,useEffect} from "react";
import "./Navbar.css"
import ShoppingCart from "../../../ShoppingCart/ShoppingCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {

    const HandleScroll =() => {
      if(window.scrollY > 50){
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll",HandleScroll)

    return() => {
      window.removeEventListener("scroll",HandleScroll)
    }

  },[])



  return (
    <div class={isScrolled ? "bottom-header dt-sl mb-sm-bottom-header scrolled" : "bottom-header dt-sl mb-sm-bottom-header" }>
      <div class="container main-container">
        <nav class="main-menu ">
          <ul class="list nav hidden-sm">
            <li class="list-item category-list">
              <a href="/test">
                <BarChartIcon className="category-icon" />
                <span class="category-name">دسته بندی کالاها</span>
              </a>
              <ul>
                <li class="active">
                  <a href="/test">کالای دیجیتال</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">اسپیکر بلوتوث و با سیم</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هارد، فلش و SSD</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">دوربین</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دوربین عکاسی دیجیتال</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دوربین‌ ورزشی و فیلم برداری</a>
                    </li>
                 
                
                  </ul>
                </li>
                <li>
                  <a href="/test">خودرو، ابزار و تجهیزات صنعتی</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">مد و پوشاک</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">زیبایی و سلامت</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">خانه و آشپزخانه</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">لنز</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کارت حافظه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کاغذ چاپ عکس</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دوربین دوچشمی و شکاری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">کتاب، لوازم تحریر و هنر</a>
                  <ul class="row">
                    <li class="sublist--item">
                      <a href="/test">کارت حافظه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کاغذ چاپ عکس</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دوربین دوچشمی و شکاری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">اسباب بازی، کودک و نوزاد</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">لنز</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کارت حافظه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کاغذ چاپ عکس</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دوربین دوچشمی و شکاری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">واقعیت مجازی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">مچ‌بند و ساعت هوشمند</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">ورزش و سفر</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پایه نگهدارنده گوشی</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">گوشی موبایل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سامسونگ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هوآوی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">اپل</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شیائومی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">آنر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">نوکیا</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">هدفون، هدست، هندزفری</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/test">خوردنی و آشامیدنی</a>
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کیف و کاور گوشی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پاور بانک (شارژر همراه)</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="list-item list-item-has-children mega-menu mega-menu-col-3">
              <a class="nav-link" href="/test">
                بهداشت و سلامت
              </a>
              <ul class="sub-menu nav">
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو چهار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو پنج
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو شش
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو هفت
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو چهار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو پنج
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو شش
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        زیر منو هفت
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item">
                  <a href="/test">
                    <img src="./img/theme/mega-menu.jpg" style={{height:"100%"}} alt="" />
                  </a>
                </li>
              </ul>
            </li>

            <li class="list-item list-item-has-children mega-menu mega-menu-col-4">
              <a class="nav-link" href="/test">
                ابزار و اداری
              </a>
              <ul class="sub-menu nav">
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو چهار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو پنج
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو شش
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو هفت
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو هشت
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو نه
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو چهار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو پنج
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو شش
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو هفت
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو چهار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو پنج
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو شش
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عنوان دسته
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو چهار
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="list-item list-item-has-children menu-col-1">
              <a class="nav-link" href="/test">
                خانه و آشپزخانه
              </a>
              <ul class="sub-menu nav">
                <li class="list-item">
                  <a class="nav-link" href="/test">
                    زیر منو یک
                  </a>
                </li>
                <li class="list-item">
                  <a class="nav-link" href="/test">
                    زیر منو دو
                  </a>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    زیر منو سه
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه - یک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه - دو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        زیر منو سه - سه
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="list-item">
              <a class="nav-link" href="/test">
                ورزش و سفر
              </a>
            </li>
          </ul>
          <div class="nav mr-auto">
            <div class="nav-item cart--wrapper">
              <a class="nav-link" href="/test">
                <span class="label-dropdown">سبد خرید</span>
                <ShoppingCartIcon/>
                <span class="count">3</span>
              </a>
               <ShoppingCart />
             
            </div>
          </div>
          <button class="btn-menu">
            <div class="align align__justify">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div class="side-menu">
            <div class="logo-nav-res dt-sl text-center">
              <a href="/test">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            <div class="search-box-side-menu dt-sl text-center mt-2 mb-3">
              <form action="">
                <input type="text" name="s" placeholder="جستجو کنید..." />
                <i class="mdi mdi-magnify"></i>
              </form>
            </div>
            <ul class="navbar-nav dt-sl">
              <li class="sub-menu">
                <a href="/test">کالای دیجیتال</a>
                <ul>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="sub-menu">
                <a href="/test">بهداشت و سلامت</a>
                <ul>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="sub-menu">
                <a href="/test">ابزار و اداری</a>
                <ul>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li>
                    <a href="/test">عنوان دسته</a>
                  </li>
                  <li class="sub-menu">
                    <a href="/test">عنوان دسته</a>
                    <ul>
                      <li>
                        <a href="/test">زیر منو یک</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو دو</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو سه</a>
                      </li>
                      <li>
                        <a href="/test">زیر منو چهار</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/test">مد و پوشاک</a>
              </li>
              <li>
                <a href="/test">خانه و آشپزخانه</a>
              </li>
              <li>
                <a href="/test">ورزش و سفر</a>
              </li>
            </ul>
          </div>
          <div class="overlay-side-menu"></div>
        </nav>
      </div>
    </div>
  );
}


