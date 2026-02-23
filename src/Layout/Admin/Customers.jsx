import React, { useState } from 'react';
import { FiSearch, FiDownload, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const INITIAL_CUSTOMERS = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    customerId: 'ID12451',
    name: 'Leslie Alexander',
    email: 'georgia@example.com',
    phone: '+62 819 1314 1435',
    totalPurchases: 21.78,
    orderQty: 30,
}));

const PAGE_SIZE = 10;

export default function Customers() {
    const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);

    const filtered = customers.filter(c =>
        c.customerId.toLowerCase().includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search)
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const toggleSelect = (id) => {
        setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };

    const toggleAll = () => {
        const ids = paginated.map(p => p.id);
        const allSelected = ids.every(id => selected.includes(id));
        setSelected(prev => allSelected ? prev.filter(id => !ids.includes(id)) : [...new Set([...prev, ...ids])]);
    };

    const handleDelete = (id) => {
        setCustomers(prev => prev.filter(c => c.id !== id));
        setSelected(prev => prev.filter(s => s !== id));
    };

    return (
        <div className="bg-[#F3F3F3] ">
            {/* Title */}
            <div className="mb-6">
                <h1 className="luxury text-[36px] font-semibold text-[#221e1fd7]">Customer</h1>
                <p className="text-[#9CA3AF] text-[14px]">Manage customer relationships and loyalty programs</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm ml-6">
                {/* Controls */}
                <div className="flex items-center justify-between mb-5">
                    {/* Search */}
                    <div className="relative min-w-xl">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                        <input
                            type="text"
                            placeholder="Search for id, name Customer"
                            value={search}
                            onChange={e => { setSearch(e.target.value); setPage(1); }}
                            className="w-full border border-[#D1D5DB] rounded-lg pl-9 pr-4 py-2 text-[13px] text-[#334155] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                        />
                    </div>

                    {/* Export */}
                    <button className="flex items-center gap-2 border border-[#D1D5DB] text-[#334155] text-[13px] font-medium px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        Export <FiDownload size={14} />
                    </button>
                </div>

                {/* Table */}
                <div className="border border-[#F0F0F0] rounded-xl overflow-hidden">
                    <table className="w-full text-[13px]">
                        <thead className="bg-[#F9FAFB] border-b border-[#F0F0F0]">
                            <tr className="text-[#64748B] font-semibold">
                                <th className="py-3.5 px-4 text-left w-12">
                                    <input
                                        type="checkbox"
                                        checked={paginated.length > 0 && paginated.every(c => selected.includes(c.id))}
                                        onChange={toggleAll}
                                        className="w-4 h-4 accent-[#1A9C9C] cursor-pointer rounded border-gray-300"
                                    />
                                </th>
                                <th className="py-3.5 px-4 text-left font-semibold text-base">Name Customer</th>
                                <th className="py-3.5 px-4 text-left font-semibold text-base">Contact</th>
                                <th className="py-3.5 px-4 text-left font-semibold text-base">Total Purchases</th>
                                <th className="py-3.5 px-4 text-left font-semibold text-base">Order QTY</th>
                                <th className="py-3.5 px-4 text-left font-semibold text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-10 text-center text-[#9CA3AF]">
                                        No customers found
                                    </td>
                                </tr>
                            ) : (
                                paginated.map(customer => (
                                    <tr key={customer.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors group">
                                        <td className="py-3 px-4">
                                            <input
                                                type="checkbox"
                                                checked={selected.includes(customer.id)}
                                                onChange={() => toggleSelect(customer.id)}
                                                className="w-4 h-4 accent-[#1A9C9C] cursor-pointer rounded border-gray-300"
                                            />
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-[12px] font-semibold text-[#1A9C9C] mb-0.5">{customer.customerId}</p>
                                            <p className="font-semibold text-[#334155]">{customer.name}</p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-[#64748B] mb-0.5">{customer.email}</p>
                                            <p className="text-[#64748B]">{customer.phone}</p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="font-bold text-[#334155]">${customer.totalPurchases.toFixed(2)}</span>
                                        </td>
                                        <td className="py-3 px-4 text-[#64748B]">
                                            {customer.orderQty} Order
                                        </td>
                                        <td className="py-3 px-4">
                                            <button
                                                onClick={() => handleDelete(customer.id)}
                                                className="text-[#9CA3AF] hover:text-red-500 transition-colors p-1 rounded-md hover:bg-red-50 cursor-pointer"
                                                title="Delete"
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-5 py-4 border-t border-[#F0F0F0] text-[13px] text-[#64748B] bg-white">
                        <span className="font-medium text-[#1A9C9C]">
                            {filtered.length === 0 ? '0' : Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}
                            <span className="text-[#64748B] font-normal"> - {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} Pages</span>
                        </span>

                        <div className="flex items-center gap-2">
                            <span>The page on</span>
                            <select
                                value={page}
                                onChange={e => setPage(Number(e.target.value))}
                                className="border border-[#E2E8F0] rounded-md px-2.5 py-1 text-[13px] focus:outline-none focus:border-[#1A9C9C] cursor-pointer"
                            >
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="p-1.5 rounded-md border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50 hover:text-[#334155] disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-colors"
                            >
                                <FiChevronLeft size={16} />
                            </button>
                            <button
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="p-1.5 rounded-md border border-[#E2E8F0] text-[#64748B] hover:bg-gray-50 hover:text-[#334155] disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer transition-colors"
                            >
                                <FiChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}