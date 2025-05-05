import React,{useState} from "react";
import { useNavigate } from "react-router-dom"; // استفاده از useNavigate به جای Link
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LoginPage.css";
import { users } from "../../datas"; // فرض بر این است که این فایل در مسیر درست قرار دارد
import useAuthToken from "../../Hooks/useAuthToken";

const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required("ایمیل یا شماره موبایل الزامی است")
    .test("emailOrPhone", "ایمیل یا شماره موبایل نامعتبر است", (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^09\d{9}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }),
  password: Yup.string()
    .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export default function LoginPage() {
  const navigate = useNavigate(); // هوک برای هدایت برنامه‌ریزی‌شده

  return (
    <div className="wrapper">
      {/* <!-- Start main-content --> */}
      <main className="main-content dt-sl mt-4 mb-3">
        <div className="container main-container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 col-12 mx-auto">
              <div className="logo-area text-center mb-3">
                <a href="#">
                  <img src="./img/logo.png" className="img-fluid" alt="logo" />
                </a>
              </div>
              <div className="auth-wrapper form-ui border pt-4">
                <div className="section-title title-wide mb-1 no-after-title-wide">
                  <h2 className="font-weight-bold">ورود</h2>
                </div>
                <Formik
                  initialValues={{
                    emailOrPhone: "",
                    password: "",
                    rememberMe: false,
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    users.map((user) => {
                      if (
                        user.email ||
                        (user.phone === values.emailOrPhone &&
                          user.password === values.password)
                      ) {
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "ورود با موفقیت انجام شد",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        window.localStorage.setItem("token" , user.token)
                        console.log("user token : " + user.token)
                        navigate("/"); // تغییر مسیر به لینک دلخواه
                        setSubmitting(false);
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "خطا",
                          text: "ایمیل یا شماره موبایل و رمز عبور نادرست است!",
                        });
                      }
                    });
                  }}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form>
                      <div className="from-guide">
                        <div className="text-center">
                          <p> تستی اکانت</p> 
                          
                           <span>ایمیل: ali.rezaei@example.com</span> <br/>
                           <span> رمز عبور : hashed_password_123</span> 
                            
                         
                        </div>
                      </div>
                      <div className="form-row-title">
                        <h3>ایمیل یا شماره موبایل</h3>
                      </div>
                      <div className="form-row with-icon">
                        <Field
                          type="text"
                          name="emailOrPhone"
                          className="input-ui pr-2"
                          placeholder="ایمیل یا شماره موبایل خود را وارد نمایید"
                        />
                        <i className="mdi mdi-account-circle-outline"></i>
                        <ErrorMessage
                          name="emailOrPhone"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-row-title">
                        <h3>رمز عبور</h3>
                      </div>
                      <div className="form-row with-icon">
                        <Field
                          type="password"
                          name="password"
                          className="input-ui pr-2"
                          placeholder="رمز عبور خود را وارد نمایید"
                        />
                        <i className="mdi mdi-lock-open-variant-outline"></i>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-row mt-2">
                        <div className="custom-control custom-checkbox float-right mt-2">
                          <Field
                            type="checkbox"
                            name="rememberMe"
                            className="custom-control-input"
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            مرا به خاطر بسپار
                          </label>
                        </div>
                      </div>
                      <div className="form-row mt-3">
                        <button
                          type="submit"
                          className="btn-primary-cm btn-with-icon mx-auto w-100"
                          disabled={isSubmitting || !isValid} // غیرفعال اگر فرم معتبر نباشد یا در حال ارسال باشد
                        >
                          <i className="mdi mdi-login-variant"></i>
                          ورود به دیدیکالا
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="form-footer mt-3">
                  <div>
                    <span className="font-weight-bold">کاربر جدید هستید؟</span>
                    <a href="#" className="mr-3 mt-2">
                      ثبت نام در دیدیکالا
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- End main-content --> */}
      <footer className="mini-footer dt-sl">
        <div className="container main-container">
          <div className="row">
            <div className="col-12">
              <ul className="mini-footer-menu">
                <li>
                  <a href="#">درباره دیدیکالا</a>
                </li>
                <li>
                  <a href="#">فرصت های شغلی</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="#">همکاری با سازمان ها</a>
                </li>
              </ul>
            </div>
            <div className="col-12 mt-2 mb-3">
              <div className="footer-light-text">
                استفاده از مطالب فروشگاه اینترنتی دیدیکالا فقط برای مقاصد
                غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به
                (فروشگاه آنلاین دیدیکالا) می‌باشد.
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="copy-right-mini-footer">
                Copyright © 2019 Didikala
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End mini-footer --> */}
    </div>
  );
}
