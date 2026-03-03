


import { useState, useEffect, useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { ChevronDown, Menu, X } from "lucide-react";

import { FaHome, FaRegFileAlt, FaUserFriends } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { CiShop } from "react-icons/ci";
import { FiSettings, FiUsers, FiChevronDown } from "react-icons/fi";

export default function DashboardLayout() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = useMemo(() => [
    {
      items: [
        { name: "GENERAL" },
        { name: "Dashboard", icon: <GrHomeRounded size={20} />, path: "/dashboard" },
        {
          name: "Orders",
          icon: <FaRegFileAlt size={20} />,
          path: "/dashboard/orders",
          children: [
            { name: "Group Orders", path: "/dashboard/orders/group_orders", icon: <FaUserFriends size={18} /> },
          ],
        },
        { name: "Product ", icon: <CiShop size={22} />, path: "/dashboard/products" },
        { name: "Customers", icon: <FiUsers size={20} />, path: "/dashboard/customers" },
        { name: "TOOLS" },
        { name: "Account & Settings", icon: <FiSettings size={20} />, path: "/dashboard/account_and_settings" },

      ],
    },
  ], []);


  useEffect(() => {
    const currentItem = menuItems[0].items.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname, menuItems]);

  const handleItemClick = (itemName, path) => {
    setSelectedItem(itemName); // Update the selected item on click
    navigate(path); // Navigate to the clicked item's path
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`w-68 bg-white border-r border-gray-200 transition-all duration-500 ease-in-out fixed xl:relative h-full xl:h-auto z-40 xl:z-auto ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
          }`}
      >
        {/* Logo */}
        <div className="h-16  flex items-center px-4 ">
          <div className="flex items-center justify-center w-full relative ">
            <Link to="/">
              <p className='text-3xl lusitana mt-10'>Jone's <span className='text-[#F68528]'>Sheks</span> </p>
            </Link>
            {/* Close button for mobile */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="xl:hidden p-2 absolute -top-0 -right-4  hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 mt-6 ">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-8">
              <ul className="space-y-1">
                {section.items.map((item, itemIdx) => {
                  // Section label (no path, no icon)
                  if (!item.path && !item.children) {
                    return (
                      <li key={itemIdx} className="px-3 pt-3 pb-1">
                        <span className=" font-medium text-gray-400 tracking-widest uppercase">{item.name}</span>
                      </li>
                    );
                  }

                  // Dropdown item
                  if (item.children) {
                    const isOpen = openDropdown === item.name;
                    return (
                      <li key={itemIdx}>
                        <div
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${item.children.some(c => selectedItem === c.name) || selectedItem === item.name
                            ? 'bg-[#E8F7F7] text-[#1A9C9C] font-medium'
                            : 'text-gray-700 hover:bg-[#1A9C9C]/20'
                            }`}
                        >
                          {/* Icon + label navigate to parent path */}
                          <Link
                            to={item.path || '#'}
                            onClick={() => item.path && handleItemClick(item.name, item.path)}
                            className="flex items-center gap-3 flex-1"
                          >
                            <span className={`transition-colors duration-300 ${item.children.some(c => selectedItem === c.name) || selectedItem === item.name
                              ? 'text-[#1A9C9C]' : 'text-gray-500'
                              }`}>{item.icon}</span>
                            <span className="flex-1 whitespace-nowrap">{item.name}</span>
                          </Link>
                          {/* Chevron toggles dropdown */}
                          <button
                            onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                            className="p-1 cursor-pointer"
                          >
                            <FiChevronDown
                              size={14}
                              className={`transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180' : ''
                                }`}
                            />
                          </button>
                        </div>

                        {/* Sub-items */}
                        {isOpen && (
                          <ul className="mt-1 ml-4 space-y-1 border-l-2 border-[#E9F7F7] pl-4">
                            {item.children.map((child, ci) => (
                              <li key={ci}>
                                <Link
                                  to={child.path}
                                  onClick={() => handleItemClick(child.name, child.path)}
                                  className={`flex items-center gap-2 text-[13px] px-2 py-2 rounded-md transition-colors ${selectedItem === child.name
                                    ? 'bg-[#1A9C9C] text-white font-medium'
                                    : 'text-gray-600 hover:bg-[#1A9C9C]/50 hover:text-[#1A9C9C]'
                                    }`}
                                >
                                  {child.icon && (
                                    <span className={selectedItem === child.name ? 'text-white' : 'text-gray-400'}>
                                      {child.icon}
                                    </span>
                                  )}
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  // Regular nav item
                  return (
                    <li key={itemIdx}>
                      <Link
                        to={item.path}
                        onClick={() => handleItemClick(item.name, item.path)}
                        className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-[#1A9C9C]/50 transition-colors ${selectedItem === item.name ? "bg-[#1A9C9C] text-white font-medium" : ""
                          }`}
                      >
                        <span className={`transition-colors duration-300 ${selectedItem === item.name ? "text-white" : "text-gray-500"
                          }`}>
                          {item.icon}
                        </span>
                        <span className="whitespace-nowrap">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-22 bg-white border-b border-gray-200 ">
          <div className="h-full md:px-4 flex items-center justify-between  gap-4">
            <div className="flex items-center gap-4">
             
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={24} className="text-gray-700" />
              </button>

              <div className="flex flex-col xl:min-w-3xl md:min-w-md">

                <input type="text" placeholder="Search" className="input input-bordered focus:border-[#1A9C9C] focus-within:border-2 focus:outline-none  rounded-md " />
              </div>
            </div>
            <div className="flex items-center gap-4 me-10  ">

              <div className="flex items-center justify-center gap-2">
                <div className="w-12">
                  <img
                    src="https://i.ibb.co/60hvPZRS/bannerimg-01.png"
                    className="rounded-full"
                    alt="Admin Avatar"
                  />
                </div>
                <div className="hidden md:block ">
                  <h2 className="font-bold">Admin</h2>
                  <p className="text-gray-900">admin@hn.com</p>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    <ChevronDown size={20} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-4 menu bg-base-200 rounded-box z-50 w-32 p-2 shadow-md border border-gray-400"
                  >
                    <li>
                      <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" className="text-gray-700 hover:text-gray-900">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto md:p-12 p-5  bg-[#F5F5F6]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

