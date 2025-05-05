import { useState, useCallback, useEffect } from 'react';
// import useLocalStorage from './useLocalStorage'; // فرضاً هوک useLocalStorage موجود است

function useAuthToken() {
  // استفاده از useLocalStorage برای مدیریت توکن
//   const [authToken, setAuthToken, removeAuthToken] = useLocalStorage('token', null);
// console.log(authToken)

  let authToken = localStorage.getItem("token")

  // وضعیت احراز هویت (وجود توکن)
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  // به‌روزرسانی isAuthenticated هنگام تغییر authToken
  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  // تابع برای تنظیم توکن
  // const setToken = useCallback(
  //   (token) => {
  //     if (token) {
  //       setAuthToken(token); // ذخیره توکن در localStorage
  //     }
  //   },
  //   [setAuthToken]
  // );

  // تابع برای حذف توکن (خروج)
  // const clearToken = useCallback(() => {
  //   removeAuthToken(); // حذف توکن از localStorage
  // }, [removeAuthToken]);

  return {
    authToken, // مقدار توکن فعلی
    isAuthenticated, // وضعیت احراز هویت (true اگر توکن وجود داشته باشد)
    // setToken, // تابع برای تنظیم توکن جدید
    // clearToken, // تابع برای حذف توکن
  };
}

export default useAuthToken;