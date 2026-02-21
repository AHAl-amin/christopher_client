import React, { useState } from 'react';
import { FiUser, FiUsers, FiShoppingBag, FiEdit, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import product1 from '../../../public/img/Products/product1.png';
import product2 from '../../../public/img/Products/product2.png';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

function MyAndGroupCart() {
  const [activeTab, setActiveTab] = useState('my-cart');
  const navigate = useNavigate();

  const [myCartItems, setMyCartItems] = useState([
    { id: 1, name: "Almond Joy", image: product1, price: 6.79, qty: 1, options: "Medium, Dry Free, Almond Milk, Oreo, Browne" }
  ]);

  const [groupCartData, setGroupCartData] = useState([
    {
      user: "You (Host)", initial: "Y", isHost: true,
      items: [
        { id: 1, name: "Almond Joy", image: product1, price: 6.79, qty: 1, options: "Medium, Dry Free, Almond Milk, Oreo, Browne" },
        { id: 2, name: "Apple Cinnamon Cheesecake", image: product2, price: 6.79, qty: 1, options: "Medium, Dry Free, Almond Milk" }
      ]
    },
    {
      user: "Rahim", initial: "R", isHost: false,
      items: [
        { id: 3, name: "Almond Joy", image: product1, price: 6.79, qty: 1, options: "Medium, Dry Free, Almond Milk, Oreo, Browne" }
      ]
    },
    {
      user: "Rehman", initial: "R", isHost: false,
      items: [
        { id: 4, name: "Almond Joy", image: product1, price: 6.79, qty: 1, options: "Medium, Dry Free, Almond Milk, Oreo, Browne" },
        { id: 5, name: "Apple Cinnamon Cheesecake", image: product2, price: 6.79, qty: 2, options: "Medium, Dry Free, Almond Milk" }
      ]
    }
  ]);

  const updateMyCartItemQty = (id, change) => {
    setMyCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + change);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const updateGroupCartItemQty = (groupIndex, itemId, change) => {
    setGroupCartData(prevData => {
      const newData = [...prevData];
      const group = { ...newData[groupIndex] };
      group.items = group.items.map(item => {
        if (item.id === itemId) {
          const newQty = Math.max(1, item.qty + change);
          return { ...item, qty: newQty };
        }
        return item;
      });
      newData[groupIndex] = group;
      return newData;
    });
  };

  const calculateSubtotal = () => {
    let total = 0;
    if (activeTab === 'my-cart') {
      myCartItems.forEach(item => {
        total += item.price * item.qty;
      });
    } else {
      groupCartData.forEach(group => {
        group.items.forEach(item => {
          total += item.price * item.qty;
        });
      });
    }
    return total;
  };

  const getGroupItemCount = (group) => {
    return group.items.reduce((sum, item) => sum + item.qty, 0);
  };

  const currentSubtotal = calculateSubtotal();
  const taxAmount = currentSubtotal * 0.08; // 8% tax
  const finalTotal = currentSubtotal + taxAmount;

  return (
    <div className='py-12 bg-[#B6DDE1]/20 min-h-screen'>
      <div className="max-w-7xl mx-auto px-6 lg:px-0">

        {/* Toggle Button */}
        <div className="flex bg-white rounded-md p-1 w-fit mb-8 shadow-sm">
          <button
            onClick={() => setActiveTab('my-cart')}
            className={`flex items-center gap-2 px-6 py-2 rounded-md text-[14px] font-medium transition-colors cursor-pointer ${activeTab === 'my-cart' ? 'bg-[#F68528] text-white' : 'text-[#62748E] hover:bg-gray-50'}`}
          >
            My Cart <FiUser size={16} />
          </button>
          <button
            onClick={() => setActiveTab('group-cart')}
            className={`flex items-center gap-2 px-6 py-2 rounded-md text-[14px] font-medium transition-colors cursor-pointer ${activeTab === 'group-cart' ? 'bg-[#F68528] text-white' : 'text-[#62748E] hover:bg-gray-50'}`}
          >
            Group Cart <FiUsers size={16} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === 'my-cart' ? (
              <div className="bg-white rounded-[20px] p-8 shadow-sm w-full font-sans">
                <div className="grid grid-cols-12 text-[#62748E] font-medium text-[15px] border-b border-dashed border-gray-200 pb-4 mb-6">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                {myCartItems.map(item => (
                  <div key={item.id} className="grid grid-cols-12 items-center mb-6">
                    <div className="col-span-6 flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-[80px] h-[80px] object-cover rounded-lg bg-[#F8FBFC] border border-gray-100 p-2 mix-blend-multiply" />
                      <div>
                        <h4 className="lusitana text-[18px] text-[#221E1F] font-bold mb-1">{item.name}</h4>
                        <p className="text-[#62748E] text-[13px] leading-relaxed max-w-[200px]">{item.options}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-center text-[#EB2D50] font-semibold">${item.price.toFixed(2)}</div>
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center bg-[#F4F6F8] rounded-full px-1 py-1">
                        <button
                          onClick={() => updateMyCartItemQty(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-[#4A5565] text-white flex items-center justify-center hover:bg-gray-700 cursor-pointer"
                        >
                          <FiMinus size={12} />
                        </button>
                        <span className="w-8 text-center text-[14px] font-medium text-[#221E1F]">{item.qty}</span>
                        <button
                          onClick={() => updateMyCartItemQty(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-[#EB2D50] text-white flex items-center justify-center hover:bg-red-600 cursor-pointer"
                        >
                          <FiPlus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-end items-center gap-4">
                      <span className="text-[#F68528] font-bold">${(item.price * item.qty).toFixed(2)}</span>
                      <div className="flex gap-2">
                        <button className="text-[#899AB1] hover:text-[#1A9C9C] cursor-pointer"><FiEdit size={16} /></button>
                        <button className="text-[#EB2D50] hover:text-red-700 cursor-pointer"><FiTrash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {groupCartData.map((group, index) => (
                  <div key={index} className="bg-white rounded-[20px] shadow-sm w-full overflow-hidden font-sans">
                    <div className="bg-[#eff1f3] px-6 py-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1A9C9C] text-white flex items-center justify-center font-bold text-[14px]">{group.initial}</div>
                        <span className="font-bold text-[#221E1F] text-[16px]">{group.user}</span>
                      </div>
                      <span className="bg-white px-4 py-1.5 rounded-full text-[#62748E] text-[13px] font-medium shadow-sm">{getGroupItemCount(group)} Items</span>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-12 text-[#62748E] font-medium text-[14px] border-b border-dashed border-gray-200 pb-3 mb-5">
                        <div className="col-span-6">Product</div>
                        <div className="col-span-2 text-center">Price</div>
                        <div className="col-span-2 text-center">Quantity</div>
                        <div className="col-span-2 text-center">Total</div>
                      </div>

                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={`grid grid-cols-12 items-center ${itemIndex !== group.items.length - 1 ? 'mb-6' : ''}`}>
                          <div className="col-span-6 flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-[65px] h-[65px] object-cover rounded-lg bg-[#F8FBFC] border border-gray-100 p-1.5 mix-blend-multiply" />
                            <div>
                              <h4 className="lusitana text-[16px] text-[#221E1F] font-bold mb-1">{item.name}</h4>
                              <p className="text-[#899AB1] text-[12px] leading-relaxed max-w-[200px]">{item.options}</p>
                            </div>
                          </div>
                          <div className="col-span-2 text-center text-[#EB2D50] font-semibold text-[14px]">${item.price.toFixed(2)}</div>

                          <div className="col-span-2 flex justify-center items-center">
                            {group.isHost ? (
                              <div className="flex items-center bg-[#F4F6F8] rounded-full px-1 py-1">
                                <button
                                  onClick={() => updateGroupCartItemQty(index, item.id, -1)}
                                  className="w-6 h-6 rounded-full bg-[#4A5565] text-white flex items-center justify-center hover:bg-gray-700 cursor-pointer"
                                >
                                  <FiMinus size={12} />
                                </button>
                                <span className="w-8 text-center text-[13px] font-medium text-[#221E1F]">{item.qty}</span>
                                <button
                                  onClick={() => updateGroupCartItemQty(index, item.id, 1)}
                                  className="w-6 h-6 rounded-full bg-[#EB2D50] text-white flex items-center justify-center hover:bg-red-600 cursor-pointer"
                                >
                                  <FiPlus size={12} />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 text-[#899AB1] text-[14px] font-medium">
                                <FiShoppingBag size={14} /> {item.qty}
                              </div>
                            )}
                          </div>

                          <div className="col-span-2 flex justify-end items-center gap-3">
                            <span className="text-[#F68528] font-bold text-[14px]">${(item.price * item.qty).toFixed(2)}</span>
                            {group.isHost && (
                              <div className="flex gap-2">
                                <button className="text-[#899AB1] hover:text-[#1A9C9C] cursor-pointer"><FiEdit size={14} /></button>
                                <button className="text-[#EB2D50] hover:text-red-700 cursor-pointer"><FiTrash2 size={14} /></button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-white rounded-[20px] p-6 shadow-sm sticky top-24 font-sans">
              <h3 className="lusitana text-[22px] text-[#221E1F] font-bold mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[#899AB1] text-[15px] font-medium">
                  <span>Subtotal {activeTab === 'group-cart' ? `(${groupCartData.reduce((acc, g) => acc + getGroupItemCount(g), 0)} items)` : ''}</span>
                  <span className="font-bold text-[#221E1F]">${currentSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#899AB1] text-[15px] font-medium">
                  <span>Tax (8%)</span>
                  <span className="font-bold text-[#221E1F]">${taxAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 my-5"></div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-[#1A9C9C] font-semibold text-[18px]">Total</span>
                <span className="text-[#F68528] font-bold text-[22px]">${finalTotal.toFixed(2)}</span>
              </div>

              <div className="mb-8">
                <label className="text-[#62748E] font-medium text-[14px] block mb-3">Have a Gift Card?</label>
                <div className="flex h-[46px]">
                  <input type="text" placeholder="Enter gift card code" className="flex-1 border border-gray-200 rounded-l-md px-4 text-[14px] focus:outline-none focus:border-[#1A9C9C] placeholder-[#A0ABC0]" />
                  <button className="bg-[#FCE7E7] text-[#EB2D50] px-6 rounded-r-md font-medium text-[14px] hover:bg-pink-100 transition-colors cursor-pointer">Apply</button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-[#1A9C9C] text-[#1A9C9C] h-[46px] rounded-md font-medium flex items-center justify-center gap-2 hover:bg-teal-50 transition-colors text-[13px] cursor-pointer">
                  Add More Items <FiShoppingBag size={15} />
                </button>
                <button className="flex-1 bg-[#1A9C9C] text-white h-[46px] rounded-md font-medium flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors text-[13px] cursor-pointer"
                onClick={() => navigate('/payment_process')}
                >
                  Proceed to Checkout <CiMoneyCheck1 size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyAndGroupCart