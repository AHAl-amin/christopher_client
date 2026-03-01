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
import Orders from "../Layout/Admin/Orders";
import GroupOrders from "../Layout/Admin/GroupOrders";
import Product from "../Layout/Admin/Product";
import AddNewProduct from "../Layout/Admin/AddNewProduct";
import ManageAddOns from "../Layout/Admin/ManageAddOns";
import AddOns from "../Layout/Admin/AddOns";
import Customers from "../Layout/Admin/Customers";
import AccountAndSettings from "../Layout/Admin/AccountAndSettings";
import EmailOtpVerify from "../Pages/Authentication/EmailOtpVerify";
import GuestLogin from "../Pages/Authentication/GuestLogin";
import GuestRegistration from "../Pages/Authentication/GuestRegistration";



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
      { path: 'admin_home', element: <Admin_Home /> },
      { path: '/dashboard/orders', element: <Orders /> },
      { path: '/dashboard/orders/group_orders', element: <GroupOrders /> },
      { path: '/dashboard/products', element: <Product /> },
      { path: '/dashboard/products/add_new_product', element: <AddNewProduct /> },
      { path: '/dashboard/products/manage_add_ons', element: <ManageAddOns /> },
      { path: '/dashboard/products/add_ons', element: <AddOns /> },
      { path: '/dashboard/customers', element: <Customers /> },
      { path: '/dashboard/account_and_settings', element: <AccountAndSettings /> },
    ]
  },

  { path: '/sign_up', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/verify', element: <EmailVerification /> },
  { path: '/otp_verify', element: <OTP_Verification /> },
  { path: '/email_otp_verify', element: <EmailOtpVerify /> },
  { path: '/reset_password', element: <ResetPassword /> },
  { path: '/guest_login', element: <GuestLogin /> },
  { path: '/guest_registration', element: <GuestRegistration /> },
]);