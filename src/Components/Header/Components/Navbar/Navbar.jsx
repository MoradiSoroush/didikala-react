import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ShoppingCart from "../../../ShoppingCart/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import useAuthToken from "../../../../Hooks/useAuthToken";
import { Link } from "react-router-dom";
import { userCart } from "../../../../datas";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
   const[cart,setCart] = useState(userCart)
  let { isAuthenticated } = useAuthToken();

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  const activeListHandler = (event) => {
    event.preventDefault();

    document.querySelectorAll(".sub-list-item").forEach((item) => {
      item.classList.remove("active");
    });

    event.target.classList.add("active");

    console.log(event.target);
  };

  return (
    <div
      class={
        isScrolled
          ? "bottom-header dt-sl mb-sm-bottom-header scrolled"
          : "bottom-header dt-sl mb-sm-bottom-header"
      }
    >
      <div class="container">
        <nav class="main-menu ">
          <ul class="list nav hidden-sm">
            <li class="list-item category-list">
              <a>
                <MenuIcon className="category-icon" />
                <span class="category-name">دسته بندی کالاها</span>
              </a>
              <ul className="sub-list">
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  کالای دیجیتال
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لپتاپ</a>
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
                      <a href="/test">گوشی موبایل </a>
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
                <li
                  className="sub-list-item active"
                  onClick={(event) => activeListHandler(event)}
                >
                  خودرو، ابزار و تجهیزات صنعتی
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم مصرفی خودرو </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> روغن موتور </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">فیلتر ها</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">باتری </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم یدکی خودرو </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">لوازم بدنه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">چراغ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">ایینه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">لوازم مکانیکی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">فن کولر</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم جانبی خودرو </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">روکش</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کف پوش</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">زنجیر چرخ</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">عایق موتور</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پا رکابی</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  مد و پوشاک
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test"> پوشاک مردانه </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> تیشرت </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شلوار </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> کفش </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">پوشاک زنانه </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> تیشرت </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شلوار </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> لباس زیر </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> جوراب </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پوشاک بچگانه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شلوارک </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> دمپایی </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شرت </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> لباس دخترانه </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> لباس پسرانه </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> پوشاک فری سایز </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">برندها</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  زیبایی و سلامت
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">لوازم ارایش </a>
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
                      <a href="/test">لوازم بهداشتی </a>
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
                      <a href="/test"> مراقبت پوست و مو </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> عطر و ادکلن </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">لوازم شخصی برقی</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  خانه و آشپزخانه
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">ظروف پخت و پز </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> حمام</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> سرویس بهداشتی </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دکوراسیون</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  کتاب، لوازم تحریر و هنر
                  <ul class="row">
                    <li class="sublist--item">
                      <a href="/test">کتاب و مجله </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کاغذ چاپ عکس</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> دفترچه </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">محبوب ترین اثار </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> کافکا</a>
                    </li>

                    <li class="sublist--item">
                      <a href="/test"> صادق هدابت</a>
                    </li>

                    <li class="sublist--item">
                      <a href="/test"> شاملو</a>
                    </li>

                    <li class="sublist--item">
                      <a href="/test"> اندره ژید</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">الات موسیقی </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">گیتار</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پیانو</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">سنتور</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">ساکسیفون</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">ساز نقاره</a>
                    </li>

                    <li class="sublist--title">
                      <a href="/test">صنایع دستی </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">فرش ماشینی </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test"> لوازم تحریر </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  اسباب بازی، کودک و نوزاد
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">بهداشت و حمام کودک و نوزاد </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> پوشک</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">وان</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">مینی واش</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> حوله</a>
                    </li>

                    <li class="sublist--title">
                      <a href="/test">اسباب بازی </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> فکری </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">ماشین بازی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">عروسک </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">خواب کودک</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">تخت</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">بالشت</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">پتو</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شبخواب</a>
                    </li>

                    <li class="sublist--title">
                      <a href="/test"> خلاقیت</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">سلامت کودک </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  ورزش و سفر
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test">پوشاک ورزشی مردانه </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کفش کوهنوردی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شلوار کوهنوردی</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">دستکش </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">پوشاک ورزشی زنانه </a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">کفش</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">شلوار</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">روسری</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">هدبند</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test">قمقمه</a>
                    </li>

                    <li class="sublist--title">
                      <a href="/test">ورزش های توپی </a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">اسکوتر برقی</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="sub-list-item"
                  onClick={(event) => activeListHandler(event)}
                >
                  سوپر مارکت انلاین
                  <ul class="row">
                    <li class="sublist--title">
                      <a href="/test"> صبحانه</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> پنیر</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> شیر</a>
                    </li>
                    <li class="sublist--title">
                      <a href="/test">ناهار</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> ساندویج</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> نان</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> سوسیس</a>
                    </li>
                    <li class="sublist--item">
                      <a href="/test"> نوشابه</a>
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
                    مراقبت و زیبایی مو
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        شامپو مو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        نرم کننده مو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        مراقبت مو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        رنگ مو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        تافت
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    عطر و ادکلن
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        تام فورد
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        بلک افغان
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        رویال
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        فارنهایت
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        بلک
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        گوچی
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        <i class="mdi mdi-brightness-percent"></i>
                        دیور
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item">
                  <a href="/test">
                    <img
                      src="./img/theme/mega-menu.jpg"
                      style={{ height: "100%" }}
                      alt=""
                    />
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
                    ابزار برقی
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        فرز
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        موتور برق
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        جارو برقی
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        مکنده-دمنده
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        کارواش
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        هویه
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        مولتی متر
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        کمپرسور
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        ابزار برش{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    ابزار غیر برقی
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        ابزار دستی
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        مجموعه ابزار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        چسب صنعتی
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        نوار برق
                      </a>
                    </li>
                    <li class="list-item">
                      چسب برق <a class="nav-link" href="/test"></a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        جعبه ابزار
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        نظم دهنده
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    حفاظت و امنیت
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        گاوصندوق
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        قفل
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    دکور
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        چوب
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        کناف
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        دامپا
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        متر
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
                    میز ناهار خوری
                  </a>
                </li>
                <li class="list-item">
                  <a class="nav-link" href="/test">
                    ظروف اشپزی
                  </a>
                </li>
                <li class="list-item list-item-has-children">
                  <a class="nav-link" href="/test">
                    وسایل نظافت
                  </a>
                  <ul class="sub-menu nav">
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        تی
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        جارو
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="nav-link" href="/test">
                        جاروبرقی
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
              {isAuthenticated ? (
                <>
                  <Link class="nav-link" to="/cart">
                    <span class="label-dropdown">سبد خرید</span>
                    <ShoppingCartIcon />
                    <span class="count">{cart.length}</span>
                  </Link>
                  <ShoppingCart />
                </>
              ) : (
                <>
                  <Link class="nav-link" to="/error">
                    <span class="label-dropdown">سبد خرید</span>
                    <ShoppingCartIcon />
                  </Link>
                </>
              )}
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
              <Link to="/">
                <img src="assets/img/logo.png" alt="" />
              </Link>
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
