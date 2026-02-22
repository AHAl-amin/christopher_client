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

import BucketList from "../Pages/BucketList/BucketList";
import GiftCard from "../Pages/GiftCard/GiftCard";
import QRCode from "../Pages/QRCode/QRCode";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
import Settings from "../Pages/Settings/Settings";
import Rating from "../Pages/Rating/Rating";
import CompleteOrder from "../Pages/PaymentProcess/CompleteOrder/CompleteOrder";
import ChooseDeliveryMethod from "../Pages/PaymentProcess/ChooseDeliveryMethod/ChooseDeliveryMethod";
import PickupDetails from "../Pages/PaymentProcess/PickupDetails/PickupDetails";



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

      { path: '/bucket', element: <BucketList /> },
      { path: '/gift_card', element: <GiftCard /> },
      { path: '/qr_code', element: <QRCode /> },
      { path: '/order_history', element: <OrderHistory /> },
      { path: '/my_rating', element: <Rating /> },
      { path: '/settings', element: <Settings /> },
      { path: '/complete_order', element: <CompleteOrder /> },
      { path: '/choose_delivery_method', element: <ChooseDeliveryMethod /> },
      { path: '/pickup_details', element: <PickupDetails /> },




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