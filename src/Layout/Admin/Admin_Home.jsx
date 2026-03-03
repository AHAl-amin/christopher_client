import React from 'react';
import { FiArrowUpRight, FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { HiArrowTrendingUp, HiArrowTrendingDown } from 'react-icons/hi2';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const barChartData = barLabels.map((label, i) => ({
  name: label.replace('\n', ' '),
  value: barHeights[i],
}));

// Simple SVG line chart points (normalized 0-100 y scale for viewBox 0 0 400 100)
const lineData1 = [10, 40, 30, 60, 35, 70, 45, 80, 55, 65, 50, 60];
const lineData2 = [50, 35, 55, 25, 60, 30, 65, 40, 70, 35, 60, 45];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const chartData = months.map((month, i) => ({
  month,
  line1: lineData1[i],
  line2: lineData2[i],
}));

const statCardsData = [
  { id: 1, label: 'Total Revenue', value: '$1,500', change: '1.5%', isUp: true, isBg: true },
  { id: 2, label: 'Total Orders', value: '5,000', change: '1.5%', isUp: true, isBg: false },
  { id: 3, label: 'Active customers', value: '842', change: '3.6%', isUp: true, isBg: false },
  { id: 4, label: 'Group Orders', value: '20', change: '1.5%', isUp: false, isBg: false, changeColor: '#FF0000' },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const Admin_Home = () => {
  const progress = (231032444 / 500000000) * 100;

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

  const StatCardItem = ({ card }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const bgColor = isHovered ? 'bg-[#1A9C9C]' : (card.isBg ? 'bg-[#1A9C9C]' : 'bg-white');
    const textColor = isHovered || card.isBg ? 'text-white' : 'text-[#1A9C9C]';
    const labelColor = isHovered || card.isBg ? 'text-white' : 'text-[#6B7280]';
    const trendColor = card.isUp ? 'text-[#16A34A]' : 'text-[#DC2626]';

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${bgColor} border ${isHovered || card.isBg ? 'border-[#1A9C9C]' : 'border-[#F0F0F0]'} rounded-xl p-5 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md relative overflow-hidden h-[200px]`}
      >
        {(isHovered || card.isBg) && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        )}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xl font-medium ${labelColor}`}>{card.label}</span>
            <FiArrowUpRight size={16} className={isHovered || card.isBg ? 'opacity-80 text-white' : 'text-[#9CA3AF]'} />
          </div>
          <div className='flex justify-between'>
            <p className={`text-[40px]  font-medium  ${textColor} `}>{card.value}</p>
            <div className={`flex flex-col items-end gap-1 text-[12px] font-medium ${trendColor}`}>
              <div className='flex gap-2 text-lg items-center'>
                {card.isUp ? <HiArrowTrendingUp size={20} className='text-[#09DE13]' /> : <HiArrowTrendingDown size={20} style={{ color: card.changeColor || '#DC2626' }} />}
                <span className="font-semibold" style={{ color: card.changeColor || '#09DE13' }}>{card.change}</span>
              </div>
              <span className={`font-normal text-sm ${isHovered || card.isBg ? 'opacity-80 text-[#F6F6F6]' : 'text-[#9CA3AF]'}`}>From last week</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" min-h-screen ">
      <h1 className="luxury text-[30px] font-semibold text-[#221E1F] mb-6">Dashboard</h1>

      <div className='flex w-full lg:flex-row flex-col-reverse  justify-between gap-10'>
        <div className='w-full flex flex-col gap-5'>
          <div className="bg-white border border-[#F0F0F0] rounded-xl px-5 py-10 shadow-sm  h-fit space-y-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold text-[#45556C]">Sales Target</span>
              <button className="text-[#1A9C9C] text-[12px] font-medium flex items-center gap-1 hover:underline cursor-pointer">
                + Set Target
              </button>
            </div>
            <div className="flex justify-between text-[12px] mb-2">
              <div>
                <p className="text-[#9CA3AF]">In Progress</p>
                <p className="text-[#F68528] font-medium text-[15px]">$231,032,444</p>
              </div>
              <div className="text-right">
                <p className="text-[#9CA3AF]">Sales Target</p>
                <p className="text-[#1A9C9C] font-bold text-[15px]">$500,000.00</p>
              </div>
            </div>

            <div className="w-full h-5 bg-[#E9F7F7] rounded-full relative overflow-visible">
              <div
                className="h-5 bg-[#1A9C9C] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 bg-white border-4 border-[#1A9C9C] rounded-full shadow"></div>
              </div>
            </div>
          </div>


          <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm ">
            <h3 className="text-[14px] font-semibold text-[#221E1F] mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={chartData} margin={{ top: 100, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9CA3AF" />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ backgroundColor: '#A8D400', border: 'none', borderRadius: '6px', color: '#fff' }}
                  formatter={(value) => `$${value}`}
                />
                <Line
                  type="monotone"
                  dataKey="line1"
                  stroke="#E97034"
                  strokeWidth={2.5}
                  dot={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="line2"
                  stroke="#1A9C9C"
                  strokeWidth={2}
                  strokeDasharray="5 3"
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-[#F0F0F0] rounded-xl p-5 shadow-sm">
            <h3 className="text-[14px] font-semibold text-[#221E1F] mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={barChartData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="0" stroke="transparent" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '6px' }}
                  formatter={(value) => `$${value}`}
                />
                <Bar
                  dataKey="value"
                  fill="#1A9C9C"
                  radius={[8, 8, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* ── Row 1 ── */}
        <div className='w-full '>
          <div className=" flex  gap-5 mb-5">


            <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4  w-full ">
              {statCardsData.map((card) => (
                <StatCardItem key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* ── Row 2 ── */}
          <div className=" mb-5  ">


            {/* Top Orders */}
            <div className="bg-white border border-[#E7E7E7] rounded-xl shadow-sm h-fit w-full  ">
              <h3 className="text-lg font-semibold text-[#1A9C9C] mb-4 bg-[#F6F6F6] px-5 py-3 rounded-t-xl border border-[#E7E7E7]">Top Orders</h3>
              <div className="space-y-4 p-5 ">
                {topOrders.map((order) => (
                  <div key={order.rank} className="flex items-center justify-between ">
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
          <div className="gap-5 w-full">


            {/* Recent Orders Table */}
            <div className="bg-white border border-[#F0F0F0] rounded-xl shadow-sm h-fit w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#F6F6F6] px-4 sm:px-5 py-3 rounded-t-xl border border-[#E7E7E7] gap-3">
                <h3 className="text-base sm:text-lg font-medium text-[#E97034]">Recent Orders</h3>
                <div className="hidden sm:flex justify-between gap-4 sm:gap-6 text-[11px] sm:text-[12px] font-semibold text-[#6B7280]">
                  <span className="w-16 text-center">Price</span>
                  <span className="w-20 text-center">Customer</span>
                  <span className="w-24 text-end">Status</span>
                </div>
              </div>
              <div className="divide-y divide-[#F0F0F0]">
                {recentOrders.map((order, i) => (
                  <div key={i} className="p-4 sm:p-5">
                    {/* Mobile View */}
                    <div className="sm:hidden">
                      <div className="mb-3">
                        <p className="text-[12px] font-medium text-[#221E1F]">{order.name}</p>
                        <p className="text-[10px] text-[#9CA3AF]">{order.id}</p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-[#9CA3AF]">Price</span>
                          <span className="text-[12px] font-medium text-[#221E1F]">{order.price}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-[#9CA3AF]">Customer</span>
                          <span className="text-[12px] text-[#6B7280]">{order.customer}</span>
                        </div>


                        
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-[#9CA3AF]">Status</span>
                          <StatusBadge status={order.status} />
                        </div>
                      </div>
                    </div>


                    

                    {/* Desktop View */}
                    <div className="hidden sm:flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-[12px] font-medium text-[#221E1F]">{order.name}</p>
                        <p className="text-[11px] text-[#9CA3AF]">{order.id}</p>
                      </div>
                      <div className="flex items-center justify-end gap-8 w-max">
                        <span className="text-[12px] font-medium text-[#221E1F] w-16 text-center">{order.price}</span>
                        <span className="text-[12px] text-[#6B7280] w-20 text-center">{order.customer}</span>
                        <div className="w-24 text-end">
                          <StatusBadge status={order.status} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Home;
