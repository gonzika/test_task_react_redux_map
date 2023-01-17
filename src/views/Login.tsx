import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../app/routes";
import { RootState } from "../app/store";
import { LoginBackground } from "../components/LoginBackground";
import { LoginForm } from "../components/LoginForm";
import { LoginSidebar } from "../components/LoginSidebar";

export const Login = () => {
  const location = useLocation();
  const sessionKey = useSelector((state: RootState) => state.global.sessionKey)

  if (sessionKey) {
    return <Navigate to={ROUTES.home} state={{ from: location }} replace />;
  };

  return (
    <>
      <LoginSidebar>
        <LoginForm />
      </LoginSidebar>
      <LoginBackground />
    </>
  )
};
