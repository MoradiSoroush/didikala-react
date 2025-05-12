import React, { useState } from "react";
import { Button } from "@mui/material";
import EditUserInfoModal from "../../../../Components/Modal/EditUserInfo/EditUserInfoModal";
import "./UserInfo.css"
export default function UserInfo({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const submitUserNewInfo = (formData) => {
    console.log("Submitted data:", formData);
    // اینجا می‌توانید منطق ارسال داده‌ها به سرور را اضافه کنید
  };

  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
        <div className="row">
          <div className="col-12">
            <div className="px-3 ">
              <div className="section-title text-sm-title title-wide mb-1 no-after-title-wide dt-sl mb-2">
                <h2>اطلاعات شخصی</h2>
              </div>
              <div className="profile-section dt-sl">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>نام و نام خانوادگی:</span>
                    </div>
                    <div className="value-info">
                      <span>{user?.name || "جلال بهرامی راد"}</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>پست الکترونیک:</span>
                    </div>
                    <div className="value-info">
                      <span>{user?.email || "info@gmail.com"}</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>شماره تلفن همراه:</span>
                    </div>
                    <div className="value-info">
                      <span>{user?.phone || "09xxxxxxxxx"}</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>کد ملی:</span>
                    </div>
                    <div className="value-info">
                      <span>-</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>دریافت خبرنامه:</span>
                    </div>
                    <div className="value-info">
                      <span>خیر</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="label-info">
                      <span>شماره کارت:</span>
                    </div>
                    <div className="value-info">
                      <span>-</span>
                    </div>
                  </div>
                </div>
                <div className="profile-section-link">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="edit-info__button"
                    sx={{
                      bgcolor: "var(--primary-solid)",
                      color: "var(--text-on-primary)",
                      borderRadius: "var(--radius-md)",
                      px: "var(--spacing-lg)",
                      py: "var(--spacing-sm)",
                      "&:hover": {
                        bgcolor: "var(--primary-dark)",
                      },
                    }}
                  >
                    ویرایش اطلاعات کاربر
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditUserInfoModal
        isOpen={isOpen}
        closeModal={handleCloseModal}
        submitModal={submitUserNewInfo}
      />
    </>
  );
}