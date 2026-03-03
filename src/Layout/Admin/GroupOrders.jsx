import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiFilter, FiDownload, FiEye, FiTrash2, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import productImage from '../../../public/img/Products/product1.png';

// ── Mock Data ───────────────────────────────────────────────────────────────
const MOCK_GROUP_ORDERS = Array.from({ length: 13 }, (_, i) => ({
  id: i + 1,
  orderId: `#GRD00${i + 1}`,
  name: 'Classic Shake Bundle (2x)',
  host: 'John Smith',
  email: 'john@example.com',
  price: '$21.78',
  date: '04/17/23',
  payment: i === 1 ? 'Unpaid' : 'Paid',
  status: i === 1 ? 'Cancelled' : 'Completed',
  product: 'Almond Joy',
  productImage: productImage,
  quantity: 1,
  hostName: 'Christopher Miller',
  hostEmail: 'christopher@gmail.com',
  participants: 3,
  items: [
    {
      label: 'Participant 1',
      items: ['Large Pepperoni Pizza', 'Garlic Bread', 'Coke 2L'],
      total: 32.50,
    },
    {
      label: 'Participant 2',
      items: ['Large Pepperoni Pizza', 'Garlic Bread'],
      total: 32.50,
    },
    {
      label: 'Participant 3',
      items: ['Large Pepperoni Pizza', 'Garlic Bread'],
      total: 32.50,
    },
  ],
  totalAmount: 140.73,
  orderDate: 'Feb 8, 2026',
}));

const PAGE_SIZE = 10;

// ── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const styles = {
    Completed: 'bg-[#11A231] text-white',
    Cancelled: 'bg-[#FF0000] text-white',
    Pending: 'bg-[#FFC107] text-white',
  };
  return (
    <span className={`text-[12px] font-semibold px-4 py-1 rounded-full ${styles[status] || 'bg-gray-200 text-gray-700'}`}>
      {status}
    </span>
  );
};

const PaymentBadge = ({ payment }) => {
  const style = payment === 'Paid'
    ? 'bg-green-100 text-green-600'
    : 'bg-yellow-100 text-yellow-600';
  return (
    <span className={`text-[12px] font-semibold px-3 py-1 rounded-md ${style}`}>
      {payment}
    </span>
  );
};

// ── Group Order Detail Modal ──────────────────────────────────────────────────
const GroupOrderDetailModal = ({ order, onClose }) => {
  if (!order) return null;
  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center  bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-y-auto no-scrollbar max-h-[90vh] ">
        {/* Header */}
        <div className="p-6 relative">
          <div className="border-b pb-5 border-[#C0C0C0] border-dashed flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[50px]">
                <img src={order.productImage} alt={order.product} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#62748E] lusitana">{order.product}</h3>
                <p className="text-lg text-[#9CA3AF]">Quantity : {order.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#EB2D50] font-bold text-2xl lusitana">${order.totalAmount.toFixed(2)}</span>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer absolute top-2 right-2">
                <FiX size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-5">
          {/* Host & Participants Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#D6E3F0]">
              <p className="text-[11px] font-semibold text-[#1A9C9C] mb-1">Host</p>
              <p className="text-[13px] font-bold text-[#62748E]">{order.hostName}</p>
              <p className="text-[12px] text-[#9CA3AF]">{order.hostEmail}</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#D6E3F0]">
              <p className="text-[11px] font-semibold text-[#1A9C9C] mb-1">Participants</p>
              <p className="text-[22px] font-bold text-[#62748E]">{order.participants}</p>
              <p className="text-[12px] text-[#9CA3AF]">Users invited</p>
            </div>
          </div>

          {/* Items Ordered */}
          <div>
            <h4 className="text-[14px] font-bold text-[#62748E] mb-3">Items Ordered</h4>
            <div className="space-y-3">
              {order.items.map((participant, idx) => (
                <div key={idx} className="border-t border-dashed border-[#C0C0C0] pt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[13px] font-semibold text-[#1A9C9C]">{participant.label}</p>
                    <p className="text-[13px] font-bold text-[#F68528]">${participant.total.toFixed(2)}</p>
                  </div>
                  <ul className="space-y-0.5 pl-1">
                    {participant.items.map((item, i) => (
                      <li key={i} className="text-[12px] text-[#62748E] flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#9CA3AF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Total Amount */}
          <div className="flex items-center justify-between border-t border-[#E9EEF2] pt-3">
            <span className="text-[14px] font-bold text-[#62748E]">Total Amount</span>
            <span className="text-[16px] font-bold text-[#11A231]">${order.totalAmount.toFixed(2)}</span>
          </div>

          {/* Payment Status & Order Date */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#D6E3F0]">
              <p className="text-[11px] font-semibold text-[#9CA3AF] mb-1">Payment Status</p>
              <p className={`text-[14px] font-bold ${order.payment === 'Paid' ? 'text-[#11A231]' : 'text-yellow-500'}`}>
                {order.payment}
              </p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#D6E3F0]">
              <p className="text-[11px] font-semibold text-[#9CA3AF] mb-1">Order Date</p>
              <p className="text-[14px] font-bold text-[#62748E]">{order.orderDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function GroupOrders() {
  const [orders, setOrders] = useState(MOCK_GROUP_ORDERS);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [detailOrder, setDetailOrder] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const filterRef = useRef(null);

  const FILTER_OPTIONS = [
    { label: 'Paid', field: 'payment', value: 'Paid' },
    { label: 'Unpaid', field: 'payment', value: 'Unpaid' },
    { label: 'Completed', field: 'status', value: 'Completed' },
    { label: 'Cancelled', field: 'status', value: 'Cancelled' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (value) => {
    setActiveFilters(prev =>
      prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]
    );
    setPage(1);
    setFilterOpen(false);
  };

  const clearFilters = () => { setActiveFilters([]); setPage(1); };

  // Filter by search + active filters
  const filtered = orders.filter(o => {
    const matchSearch =
      o.orderId.toLowerCase().includes(search.toLowerCase()) ||
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.host.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      activeFilters.length === 0 ||
      activeFilters.some(f => {
        const opt = FILTER_OPTIONS.find(op => op.value === f);
        return opt && o[opt.field] === opt.value;
      });

    return matchSearch && matchFilter;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleSelect = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };
  const toggleAll = () => {
    const ids = paginated.map(o => o.id);
    const allSelected = ids.every(id => selected.includes(id));
    setSelected(prev => allSelected ? prev.filter(id => !ids.includes(id)) : [...new Set([...prev, ...ids])]);
  };

  const handleDelete = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id));
    setSelected(prev => prev.filter(s => s !== id));
  };

  return (
    <div className="bg-[#F3F3F3]">
      {/* Title */}
      <div className="mb-6">
        <h1 className="luxury text-[36px] font-semibold text-[#62748E]">Group Order</h1>
        <p className="text-[#9CA3AF] text-[14px]">Manage and track all customer group orders</p>
      </div>

      {/* Controls */}
      <div className="flex items-center md:flex-row flex-col  justify-between mb-5 gap-4 pl-4">
        {/* Search */}
        <div className="relative flex-1 md:min-w-md w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
          <input
            type="text"
            placeholder="Search for id, name product, or email..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full border border-[#B0B0B0] rounded-lg pl-9 pr-4 py-2.5 text-[13px] text-[#334155] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
          />
        </div>
        <div className="flex items-center md:flex-row flex-col w-full   gap-3">
          {/* Filter Button + Dropdown */}
          <div className="relative w-full" ref={filterRef}>
            <button
              onClick={() => setFilterOpen(prev => !prev)}
              className={`w-full flex items-center gap-2 border text-[13px] font-medium px-4 py-2.5 rounded-lg cursor-pointer transition-colors ${activeFilters.length > 0
                  ? 'border-[#1A9C9C] bg-[#F0FAFA] text-[#1A9C9C]'
                  : 'border-[#B0B0B0] text-[#334155] hover:bg-gray-50'
                }`}
            >
              <FiFilter size={15} />
              Filter
              {activeFilters.length > 0 && (
                <span className="ml-1 bg-[#1A9C9C] text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E8E8E8] rounded-xl shadow-lg z-30 overflow-hidden">
                <div className="px-3 py-2.5 border-b border-[#F0F0F0] flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-[#334155]">Filter by</span>
                  {activeFilters.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-[11px] text-[#1A9C9C] hover:underline cursor-pointer"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Payment group */}
                <div className="px-3 pt-2.5 pb-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1.5">Payment</p>
                  {FILTER_OPTIONS.filter(o => o.field === 'payment').map(opt => (
                    <label key={opt.value} className="flex items-center gap-2.5 py-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(opt.value)}
                        onChange={() => toggleFilter(opt.value)}
                        className="w-3.5 h-3.5 accent-[#1A9C9C] cursor-pointer"
                      />
                      <span className={`text-[13px] ${activeFilters.includes(opt.value) ? 'text-[#1A9C9C] font-semibold' : 'text-[#334155]'}`}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Status group */}
                <div className="px-3 pt-1 pb-3 border-t border-[#F5F5F5]">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1.5 mt-2">Status</p>
                  {FILTER_OPTIONS.filter(o => o.field === 'status').map(opt => (
                    <label key={opt.value} className="flex items-center gap-2.5 py-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(opt.value)}
                        onChange={() => toggleFilter(opt.value)}
                        className="w-3.5 h-3.5 accent-[#1A9C9C] cursor-pointer"
                      />
                      <span className={`text-[13px] ${activeFilters.includes(opt.value) ? 'text-[#1A9C9C] font-semibold' : 'text-[#334155]'}`}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="w-full flex items-center gap-2 border border-[#B0B0B0] text-[#334155] text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
            <FiDownload size={15} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-x-auto border border-[#F0F0F0] shadow-sm overflow-hidden ml-4">
        <table className="w-full text-[13px]">
          <thead className="border-b border-[#F0F0F0] bg-[#F6F6F6]">
            <tr className="text-[#454545] font-semibold">
              <th className="py-3 px-4 text-left w-10">
                <input
                  type="checkbox"
                  checked={paginated.length > 0 && paginated.every(o => selected.includes(o.id))}
                  onChange={toggleAll}
                  className="w-4 h-4 accent-[#1A9C9C] cursor-pointer"
                />
              </th>
              {['Orders', 'Host', 'Price', 'Date', 'Payment', 'Status', 'Action'].map(col => (
                <th key={col} className="py-3 px-4 text-left">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr><td colSpan={8} className="py-10 text-center text-[#9CA3AF]">No group orders found</td></tr>
            ) : paginated.map((order) => (
              <tr key={order.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(order.id)}
                    onChange={() => toggleSelect(order.id)}
                    className="w-4 h-4 accent-[#1A9C9C] cursor-pointer"
                  />
                </td>
                <td className="py-3 px-4">
                  <p className="font-medium text-[#62748E]">{order.name}</p>
                  <p className="text-[#1A9C9C] text-[12px]">{order.orderId}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="font-medium text-[#334155]">{order.host}</p>
                  <p className="text-[#9CA3AF] text-[12px]">{order.email}</p>
                </td>
                <td className="py-3 px-4 text-[#334155]">{order.price}</td>
                <td className="py-3 px-4 text-[#334155]">{order.date}</td>
                <td className="py-3 px-4"><PaymentBadge payment={order.payment} /></td>
                <td className="py-3 px-4"><StatusBadge status={order.status} /></td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setDetailOrder(order)}
                      className="text-[#9CA3AF] hover:text-[#1A9C9C] transition-colors cursor-pointer"
                    >
                      <FiEye size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="text-[#9CA3AF] hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <FiTrash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-[#F0F0F0] text-[13px] text-[#6B7280]">
          <span>{Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)} – {Math.min(page * PAGE_SIZE, filtered.length)} of {totalPages} Pages</span>
          <div className="flex items-center gap-2">
            <span>The page on</span>
            <select
              value={page}
              onChange={e => setPage(Number(e.target.value))}
              className="border border-[#E3E3E3] rounded-md px-2 py-1 text-[13px] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] cursor-pointer"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-md border border-[#E3E3E3] hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-md border border-[#E3E3E3] hover:bg-gray-100 disabled:opacity-40 cursor-pointer"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Group Order Detail Modal */}
      <GroupOrderDetailModal order={detailOrder} onClose={() => setDetailOrder(null)} />
    </div>
  );
}