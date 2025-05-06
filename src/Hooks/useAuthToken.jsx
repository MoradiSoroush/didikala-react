import { useState, useCallback, useEffect } from 'react';

function useAuthToken() {

  const authToken = localStorage.getItem("token")

  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

 
  
  return {
    authToken, // مقدار توکن فعلی
    isAuthenticated, // وضعیت احراز هویت (true اگر توکن وجود داشته باشد)
  };
}

export default useAuthToken;