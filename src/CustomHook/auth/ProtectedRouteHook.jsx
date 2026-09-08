import { useState } from "react";

const ProtectedRouteHook = () => {
  const [userData] = useState(() => {
    try {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  });

  const isUser = userData?.role === "user";
  const isAdmin = userData?.role === "admin";

  return [userData, isUser, isAdmin];
};

export default ProtectedRouteHook;
