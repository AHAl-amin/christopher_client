import React from 'react';
import { FiArrowUpRight, FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2';

// ─── Mock Data ────────────────────────────────────────────────────────────────
const topOrders = [
  { rank: 1, name: 'Classic chocolate Shake', sub: '346 orders', amount: '$2450' },
  { rank: 2, name: 'Strawberry Dream', sub: '346 orders', amount: '$2000' },
  { rank: 3, name: 'Mango Lassi', sub: '246 orders', amount: '$2000' },
  { rank: 4, name: 'Cookies & Cream', sub: '246 orders', amount: '$2000' },
];

const recentOrders = [
  { name: 'Classic Shake Bundle (2x)', id: '#ORD001', price: '$20.00', customer: 'Pappu', status: 'Completed' },
  { name: 'Premium Protein Shake', id: '#ORD001', price: '$20.00', customer: 'pappu', status: 'Pending' },
  { name: 'Tropical Smoothie Set', id: '#ORD001', price: '$20.00', customer: 'pappu', status: 'Completed' },
  { name: 'Premium Protein Shake', id: '#ORD001', price: '$20.00', customer: 'pappu', status: 'Completed' },
  { name: 'Tropical Smoothie Set', id: '#ORD001', price: '$20.00', customer: 'pappu', status: 'Completed' },
];

const barHeights = [80, 95, 55, 40, 40, 75, 90];
const barLabels = ['Mo\nn', 'Tu\ne', 'We\nd', 'Th\nu', 'Fr\ni', 'Sa\nt', 'Su\nn'];

// Simple SVG line chart points (normalized 0-100 y scale for viewBox 0 0 400 100)
const lineData1 = [10, 40, 30, 60, 35, 70, 45, 80, 55, 65, 50, 60];
const lineData2 = [50, 35, 55, 25, 60, 30, 65, 40, 70, 35, 60, 45];

function toSvgPoints(data) {
  return data
    .map((y, i) => `${(i / (data.length - 1)) * 380 + 10},${100 - y}`)
    .join(' ');
}

const StatusBadge = ({ status }) => {
  const style = status === 'Completed'
    ? 'bg-[#DCFCE7] text-[#16A34A]'
    : 'bg-[#FEF3C7] text-[#D97706]';
  return (
    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${style}`}>
      {status}
    </span>
  );
};

const StatCard = ({ label, value, change, up }) => (
  <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 flex flex-col gap-2 shadow-sm">
    <div className="flex items-center justify-between">
      <span className="text-[13px] text-[#6B7280] font-medium">{label}</span>
      <FiArrowUpRight size={16} className="text-[#9CA3AF]" />
    </div>
    <p className="text-[28px] font-bold text-[#221E1F]">{value}</p>
    <div className={`flex items-center gap-1 text-[12px] font-medium ${up ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
      {up ? <HiArrowTrendingUp size={14} /> : <HiArrowTrendingDown size={14} />}
      {change} <span className="text-[#9CA3AF] font-normal">From last week</span>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Admin_Home = () => {
  const progress = (231032444 / 500000000) * 100;

  return (
    <div className="p-6 bg-[#F8FAFC] min-h-screen">
      <h1 className="lusitana text-[30px] font-semibold text-[#221E1F] mb-6">Dashboard</h1>

      {/* ── Row 1 ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">

        {/* Sales Target card */}
        <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px] font-semibold text-[#221E1F]">Sales Target</span>
            <button className="text-[#1A9C9C] text-[12px] font-medium flex items-center gap-1 hover:underline cursor-pointer">
              + Set Target
            </button>
          </div>
          <div className="flex justify-between text-[12px] mb-2">
            <div>
              <p className="text-[#9CA3AF]">In Progress</p>
              <p className="text-[#E97034] font-bold text-[15px]">$231,032,444</p>
            </div>
            <div className="text-right">
              <p className="text-[#9CA3AF]">Sales Target</p>
              <p className="text-[#1A9C9C] font-bold text-[15px]">$500,000.00</p>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-3 bg-[#E9F7F7] rounded-full relative overflow-visible">
            <div
              className="h-3 bg-[#1A9C9C] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-4 border-[#1A9C9C] rounded-full shadow"></div>
            </div>
          </div>
        </div>

        {/* Total Revenue (teal) */}
        <div className="bg-[#1A9C9C] rounded-xl p-5 shadow-sm text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center justify-between mb-2 relative z-10">
            <span className="text-[13px] font-medium opacity-90">Total Revenue</span>
            <FiArrowUpRight size={16} className="opacity-80" />
          </div>
          <p className="text-[34px] font-bold relative z-10">$1,500</p>
          <div className="flex items-center gap-1 text-[12px] mt-1 relative z-10 opacity-90">
            <HiArrowTrendingUp size={14} />
            <span className="font-semibold">1.5%</span>
            <span className="opacity-70">From last week</span>
          </div>
        </div>

        {/* Right: Total Orders + Active Customers + Group Orders */}
        <div className="grid grid-rows-2 gap-4">
          <StatCard label="Total Orders" value="5,000" change="↑ 1.5%" up={true} />
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Active customers" value="842" change="↑ 3.6%" up={true} />
            <StatCard label="Group Orders" value="20" change="↓ 1.5%" up={false} />
          </div>
        </div>
      </div>

      {/* ── Row 2 ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

        {/* Revenue Trend - Line Chart */}
        <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
          <h3 className="text-[14px] font-semibold text-[#221E1F] mb-4">Revenue Trend</h3>
          <div className="relative">
            {/* Tooltip */}
            <div className="absolute" style={{ left: '52%', top: '8px' }}>
              <div className="bg-[#A8D400] text-white text-[10px] px-2 py-1 rounded-md font-semibold whitespace-nowrap shadow">
                Average year value<br />$ 339,091,888
              </div>
              <div className="w-px h-28 bg-[#b0b0b0] mx-auto mt-1"></div>
            </div>
            {/* SVG Chart */}
            <svg viewBox="0 0 400 110" className="w-full h-36" preserveAspectRatio="none">
              {/* Grid lines */}
              {[20, 40, 60, 80].map(y => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#F3F4F6" strokeWidth="1" />
              ))}
              {/* Orange line */}
              <polyline
                points={toSvgPoints(lineData1)}
                fill="none"
                stroke="#E97034"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Teal dashed line */}
              <polyline
                points={toSvgPoints(lineData2)}
                fill="none"
                stroke="#1A9C9C"
                strokeWidth="2"
                strokeDasharray="5 3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* X-axis labels */}
            <div className="flex justify-between px-1 text-[11px] text-[#9CA3AF] mt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Top Orders */}
        <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
          <h3 className="text-[14px] font-semibold text-[#221E1F] mb-4">Top Orders</h3>
          <div className="space-y-4">
            {topOrders.map((order) => (
              <div key={order.rank} className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-[13px] font-semibold text-[#6B7280] w-4">{order.rank}.</span>
                  <div>
                    <p className="text-[13px] font-medium text-[#221E1F]">{order.name}</p>
                    <p className="text-[11px] text-[#9CA3AF]">{order.sub}</p>
                  </div>
                </div>
                <span className="text-[13px] font-semibold text-[#221E1F]">{order.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Row 3 ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Revenue Trend - Bar Chart */}
        <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
          <h3 className="text-[14px] font-semibold text-[#221E1F] mb-4">Revenue Trend</h3>
          <div className="flex items-end justify-between gap-2 h-36">
            {barHeights.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full rounded-t-md bg-[#1A9C9C] transition-all"
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[10px] text-[#9CA3AF] text-center leading-tight">{barLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-semibold text-[#E97034]">Recent Orders</h3>
            <div className="grid grid-cols-3 gap-6 text-[12px] font-semibold text-[#6B7280] pr-2">
              <span>Price</span>
              <span>Customer</span>
              <span>Status</span>
            </div>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-medium text-[#221E1F]">{order.name}</p>
                  <p className="text-[11px] text-[#9CA3AF]">{order.id}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 items-center">
                  <span className="text-[12px] font-medium text-[#221E1F]">{order.price}</span>
                  <span className="text-[12px] text-[#6B7280]">{order.customer}</span>
                  <StatusBadge status={order.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Home;
