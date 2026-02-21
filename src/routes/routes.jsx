import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import DashboardLayout from "../Layout/Admin/DashboardLayout";
import EmailVerification from "../Pages/Authentication/EmailVerification";
import OTP_Verification from "../Pages/Authentication/OTP_Verification";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import Admin_Home from "../Layout/Admin/Admin_Home";
import AboutPages from "../Pages/AboutPages/AboutPages";
import Menu from "../Pages/Menu/Menu";
import MenuDettails from "../Pages/Menu/MenuDettails";
import Cart from "../Pages/Cart/Cart";
import PaymentProcess from "../Pages/PaymentProcess/PaymentProcess";
import BucketList from "../Pages/BucketList/BucketList";
import GiftCard from "../Pages/GiftCard/GiftCard";
import QRCode from "../Pages/QRCode/QRCode";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutPages /> },
      { path: '/menu', element: <Menu /> },
      { path: '/menu/:id', element: <MenuDettails /> },
      { path: '/cart', element: <Cart /> },
      { path: '/payment_process', element: <PaymentProcess /> },
      { path: '/bucket', element: <BucketList /> },
      { path: '/gift_card', element: <GiftCard /> },
      { path: '/qr_code', element: <QRCode /> },
      { path: '/order_history', element: <OrderHistory /> },
   



    ]
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Admin_Home /> },
      { path: 'admin_home', element: <Admin_Home /> }
    ]
  },

  { path: '/sign_up', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/verify', element: <EmailVerification /> },
  { path: '/otp_verify', element: <OTP_Verification /> },
  { path: '/reset_password', element: <ResetPassword /> },
]);