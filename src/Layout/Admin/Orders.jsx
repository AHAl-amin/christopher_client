import React, { useState } from 'react';
import { FiSearch, FiFilter, FiDownload, FiEye, FiTrash2, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import productImage from '../../../public/img/Products/product1.png';

// ── Mock Data ───────────────────────────────────────────────────────────────
const MOCK_ORDERS = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    orderId: `#ORD00${i + 1}`,
    name: i === 1 ? 'Premium Protein Shake' : 'Classic Shake Bundle (2x)',
    customer: 'John Smith',
    email: 'john@example.com',
    price: '$21.78',
    date: '04/17/23',
    payment: i === 1 ? 'Unpaid' : 'Paid',
    status: i === 1 ? 'Cancelled' : 'Completed',
    product: i === 1 ? 'Premium Protein Shake' : 'Almond Joy',
    productImage: productImage,
    quantity: 1,
    addOns: [
        { item: 'Dry Free', qty: '1x', price: 1.99, total: 1.99 },
        { item: 'Almond Milk', qty: '1x', price: 1.99, total: 1.99 },
        { item: 'Browne', qty: '1x', price: 1.99, total: 1.99 },
        { item: 'Oreo', qty: '1x', price: 1.99, total: 1.99 },
    ],
    subtotal: 6.70,
    addOnsTotal: 9.95,
    finalAmount: 16.65,
    datetime: 'February 8, 2026 at 3:45 PM',
    address: '123 Main Street, Apt 4B, New York, NY 10001',
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

// ── Order Detail Modal ────────────────────────────────────────────────────────
const OrderDetailModal = ({ order, onClose }) => {
    if (!order) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-5 border-b border-[#F0F0F0] flex items-start justify-between">
                    <div className="flex items-center gap-6 border">
                        <div className='w-[100px] border'>
                            <img src={order.productImage} alt={order.product} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#221E1F] lusitana">{order.product}</h3>
                            <p className="text-lg text-[#9CA3AF]">Quantity : {order.quantity}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#E97034] font-bold text-[18px]">${order.finalAmount.toFixed(2)}</span>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <FiX size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-5 space-y-5">
                    {/* Add-ons Table */}
                    <div>
                        <h4 className="text-[14px] font-bold text-[#221E1F] mb-3">Add - ons</h4>
                        <div className="grid grid-cols-4 text-[12px] text-[#9CA3AF] font-medium mb-2 px-1">
                            <span>Items</span>
                            <span>Quantity</span>
                            <span>Price</span>
                            <span>Total</span>
                        </div>
                        <div className="space-y-2">
                            {order.addOns.map((addon, i) => (
                                <div key={i} className="grid grid-cols-4 text-[13px] text-[#334155] border-b border-dashed border-[#F0F0F0] pb-2">
                                    <span>{addon.item}</span>
                                    <span>{addon.qty}</span>
                                    <span>{addon.price.toFixed(2)}</span>
                                    <span>{addon.total.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-[#F8FAFC] rounded-xl p-4 space-y-2">
                        <h4 className="text-[13px] font-bold text-[#221E1F] mb-3">Payment Summary</h4>
                        <div className="flex justify-between text-[13px] text-[#62748E]">
                            <span>Subtotal</span>
                            <span>${order.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[13px] text-[#62748E]">
                            <span>Add-ons Total</span>
                            <span>${order.addOnsTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[14px] font-bold text-[#1A9C9C] pt-2 border-t border-[#E9EEF2]">
                            <span>Final Amount</span>
                            <span>${order.finalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Date & Address */}
                    <div className="space-y-3">
                        <div>
                            <p className="text-[12px] font-semibold text-[#334155] mb-1">Date & Time</p>
                            <p className="text-[13px] text-[#62748E]">{order.datetime}</p>
                        </div>
                        <div>
                            <p className="text-[12px] font-semibold text-[#334155] mb-1">Delivery Address</p>
                            <p className="text-[13px] text-[#62748E]">{order.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function Orders() {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [detailOrder, setDetailOrder] = useState(null);

    // Filter by search
    const filtered = orders.filter(o =>
        o.orderId.toLowerCase().includes(search.toLowerCase()) ||
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.email.toLowerCase().includes(search.toLowerCase())
    );

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
                <h1 className="lusitana text-[36px] font-semibold text-[#221E1F]">Order</h1>
                <p className="text-[#9CA3AF] text-[14px]">Manage and track all customer orders</p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-5 gap-4 pl-4 ">
                {/* Search */}
                <div className="relative flex-1 max-w-lg ">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] " size={16} />
                    <input
                        type="text"
                        placeholder="Search for id, name product, or email..."
                        value={search}
                        onChange={e => { setSearch(e.target.value); setPage(1); }}
                        className="w-full border border-[#B0B0B0] rounded-lg pl-9 pr-4 py-2.5 text-[13px] text-[#334155] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 border border-[#B0B0B0]   text-[#334155] text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FiFilter size={15} /> Filter
                    </button>
                    <button className="flex items-center gap-2 border border-[#B0B0B0]   text-[#334155] text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FiDownload size={15} /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-[#F0F0F0] shadow-sm overflow-hidden ml-4">
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
                            {['Orders', 'Customer', 'Price', 'Date', 'Payment', 'Status', 'Action'].map(col => (
                                <th key={col} className="py-3 px-4 text-left">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.length === 0 ? (
                            <tr><td colSpan={8} className="py-10 text-center text-[#9CA3AF]">No orders found</td></tr>
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
                                    <p className="font-medium text-[#221E1F]">{order.name}</p>
                                    <p className="text-[#1A9C9C] text-[12px]">{order.orderId}</p>
                                </td>
                                <td className="py-3 px-4">
                                    <p className="font-medium text-[#334155]">{order.customer}</p>
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

            {/* Order Detail Modal */}
            <OrderDetailModal order={detailOrder} onClose={() => setDetailOrder(null)} />
        </div>
    );
}