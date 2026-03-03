import React, { useState, useRef, useEffect } from 'react';
import {
    FiSearch, FiFilter, FiDownload, FiEye, FiTrash2,
    FiChevronLeft, FiChevronRight, FiX, FiEdit2, FiPlus,
    FiEdit,
} from 'react-icons/fi';
import product1 from '../../../public/img/Products/product1.png';
import product2 from '../../../public/img/Products/product2.png';
import product3 from '../../../public/img/Products/product3.png';
import { useNavigate } from 'react-router-dom';

// ── Mock Data ─────────────────────────────────────────────────────────────────
const INITIAL_PRODUCTS = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    name: 'Beigi Coffe (Navy)',
    category: 'Shakes',
    sku: i === 0 ? '' : 'CCS-001',
    price: 6.99,
    stock: 145,
    status: i === 0 || i === 6 ? 'Inactive ' : 'Active',
    image: i % 3 === 0 ? product1 : i % 3 === 1 ? product2 : product3,
    description: 'A delicious blend of premium coffee and milk.',
}));

const PAGE_SIZE = 10;
const CATEGORIES = ['Shakes', 'Coffee', 'Smoothies', 'Juices', 'Snacks'];

// ── Status Badge ──────────────────────────────────────────────────────────────
const StatusPill = ({ status }) => (
    <span
        className={`inline-block w-16 h-7 rounded-full ${status === 'Active' ? 'bg-[#11A231]' : 'bg-[#FF0000]'}`}
    />
);

// ── View Modal ────────────────────────────────────────────────────────────────
const ViewModal = ({ product, onClose }) => {
    if (!product) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-y-auto no-scrollbar max-h-[90vh]">
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <FiX size={20} />
                    </button>
                    <div className="flex items-center gap-5 border-b border-dashed border-[#C0C0C0] pb-5 mb-5">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-xl" />
                        <div>
                            <h3 className="text-xl font-bold text-[#221E1F] lusitana">{product.name}</h3>
                            <p className="text-[13px] text-[#9CA3AF]">{product.category}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-[13px]">
                        {[
                            { label: 'SKU', value: product.sku || '—' },
                            { label: 'Price', value: `$${product.price.toFixed(2)}` },
                            { label: 'Stock', value: product.stock },
                            { label: 'Status', value: product.status },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-[#F8FAFC] rounded-xl p-3 border border-[#D6E3F0]">
                                <p className="text-[11px] font-semibold text-[#9CA3AF] mb-1">{label}</p>
                                <p className="font-semibold text-[#334155]">{value}</p>
                            </div>
                        ))}
                    </div>
                    {product.description && (
                        <div className="mt-4 bg-[#F8FAFC] rounded-xl p-3 border border-[#D6E3F0]">
                            <p className="text-[11px] font-semibold text-[#9CA3AF] mb-1">Description</p>
                            <p className="text-[13px] text-[#334155]">{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ── Edit / New Product Modal ──────────────────────────────────────────────────
const EditModal = ({ product, onClose, onSave, isNew }) => {
    const [form, setForm] = useState(
        product
            ? { ...product }
            : { name: '', category: 'Shakes', sku: '', price: '', stock: '', status: 'Active', description: '', image: product1 }
    );
    const [errors, setErrors] = useState({});

    const set = (field, value) => setForm(f => ({ ...f, [field]: value }));

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Product name is required';
        if (!form.price || isNaN(form.price) || Number(form.price) < 0) e.price = 'Valid price required';
        if (!form.stock || isNaN(form.stock) || Number(form.stock) < 0) e.stock = 'Valid stock required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSave = () => {
        if (!validate()) return;
        onSave({ ...form, price: Number(form.price), stock: Number(form.stock) });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-y-auto no-scrollbar max-h-[90vh]">
                <div className="p-6 ">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#221E1F] lusitana">
                            {isNew ? 'New Product' : 'Edit Product'}
                        </h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <FiX size={20} />
                        </button>
                    </div>

                    {/* Image preview */}
                    <div className="flex items-center gap-4 mb-6">
                        <img src={form.image} alt="preview" className="w-16 h-16 object-cover rounded-xl border border-[#E3E3E3]" />
                        <div>
                            <p className="text-[12px] text-[#9CA3AF] mb-1">Product Image</p>
                            <label className="flex items-center gap-1.5 text-[12px] text-[#1A9C9C] font-medium cursor-pointer hover:underline">
                                <FiPlus size={13} /> Change Image
                                <input type="file" accept="image/*" className="hidden" onChange={e => {
                                    if (e.target.files[0]) {
                                        const url = URL.createObjectURL(e.target.files[0]);
                                        set('image', url);
                                    }
                                }} />
                            </label>
                        </div>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-[12px] font-semibold text-[#334155] mb-1">Product Name *</label>
                            <input
                                value={form.name}
                                onChange={e => set('name', e.target.value)}
                                placeholder="e.g. Beigi Coffee (Navy)"
                                className={`w-full border rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] ${errors.name ? 'border-red-400' : 'border-[#D1D5DB]'}`}
                            />
                            {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        {/* Category + SKU */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[12px] font-semibold text-[#334155] mb-1">Category</label>
                                <select
                                    value={form.category}
                                    onChange={e => set('category', e.target.value)}
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] cursor-pointer"
                                >
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-[#334155] mb-1">SKU</label>
                                <input
                                    value={form.sku}
                                    onChange={e => set('sku', e.target.value)}
                                    placeholder="e.g. CCS-001"
                                    className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                                />
                            </div>
                        </div>

                        {/* Price + Stock */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[12px] font-semibold text-[#334155] mb-1">Price ($) *</label>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={form.price}
                                    onChange={e => set('price', e.target.value)}
                                    placeholder="0.00"
                                    className={`w-full border rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] ${errors.price ? 'border-red-400' : 'border-[#D1D5DB]'}`}
                                />
                                {errors.price && <p className="text-[11px] text-red-500 mt-1">{errors.price}</p>}
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-[#334155] mb-1">Stock *</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={form.stock}
                                    onChange={e => set('stock', e.target.value)}
                                    placeholder="0"
                                    className={`w-full border rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] ${errors.stock ? 'border-red-400' : 'border-[#D1D5DB]'}`}
                                />
                                {errors.stock && <p className="text-[11px] text-red-500 mt-1">{errors.stock}</p>}
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-[12px] font-semibold text-[#334155] mb-1">Status</label>
                            <div className="flex items-center gap-4">
                                {['Active', 'Inactive'].map(s => (
                                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="status"
                                            value={s}
                                            checked={form.status === s}
                                            onChange={() => set('status', s)}
                                            className="accent-[#1A9C9C] cursor-pointer"
                                        />
                                        <span className={`text-[13px] font-medium ${form.status === s ? 'text-[#1A9C9C]' : 'text-[#334155]'}`}>{s}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-[12px] font-semibold text-[#334155] mb-1">Description</label>
                            <textarea
                                value={form.description}
                                onChange={e => set('description', e.target.value)}
                                placeholder="Short product description..."
                                rows={3}
                                className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C] resize-none"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 mt-6 pt-5 border-t border-[#F0F0F0]">
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 text-[13px] font-medium text-[#334155] border border-[#D1D5DB] rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-5 py-2.5 text-[13px] font-medium text-white bg-[#1A9C9C] rounded-lg hover:bg-[#158080] cursor-pointer transition-colors"
                        >
                            {isNew ? 'Add Product' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Product() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [viewProduct, setViewProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const [showNew, setShowNew] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);
    const filterRef = useRef(null);

    const FILTER_OPTIONS = [
        { label: 'Active', field: 'status', value: 'Active' },
        { label: 'Inactive', field: 'status', value: 'Inactive' },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) setFilterOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleFilter = (value) => {
        setActiveFilters(prev => prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]);
        setPage(1);
        setFilterOpen(false);
    };
    const clearFilters = () => { setActiveFilters([]); setPage(1); };

    const filtered = products.filter(p => {
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.category.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase());
        const matchFilter =
            activeFilters.length === 0 ||
            activeFilters.some(f => {
                const opt = FILTER_OPTIONS.find(o => o.value === f);
                return opt && p[opt.field] === opt.value;
            });
        return matchSearch && matchFilter;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const toggleSelect = (id) => setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    const toggleAll = () => {
        const ids = paginated.map(p => p.id);
        const allSelected = ids.every(id => selected.includes(id));
        setSelected(prev => allSelected ? prev.filter(id => !ids.includes(id)) : [...new Set([...prev, ...ids])]);
    };

    const handleDelete = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
        setSelected(prev => prev.filter(s => s !== id));
    };

    const handleSaveEdit = (updated) => {
        setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
        setEditProduct(null);
    };

    const handleAddNew = (newProduct) => {
        const id = Date.now();
        setProducts(prev => [{ ...newProduct, id }, ...prev]);
        setShowNew(false);
    };

    const navigate = useNavigate();

    return (
        <div className="bg-[#F3F3F3] ">
            {/* Title */}
            <div className="mb-6 flex md:items-start justify-between">
                <div>
                    <h1 className="luxury md:text-[36px] text-3xl font-semibold text-[#221E1F]">Product</h1>
                    <p className="text-[#9CA3AF] md:text-[14px] text-[10px]">Manage your menu items and offerings</p>
                </div>
                <button className="text-[#F68528] md:text-xl  hover:underline cursor-pointer mt-2 underline"
                onClick={() => navigate('/dashboard/products/manage_add_ons')}
                >
                    Manage Add - Ons
                </button>
            </div>

          <div className='border border-[#E7E7E7] rounded-2xl p-6'>
              {/* Controls */}
            <div className="flex items-center md:flex-row flex-col justify-between mb-5 gap-4  ">
                {/* Search */}
                <div className="relative flex-1 md:max-w-lg w-full">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={16} />
                    <input
                        type="text"
                        placeholder="Search for id, name product..."
                        value={search}
                        onChange={e => { setSearch(e.target.value); setPage(1); }}
                        className="w-full border border-[#B0B0B0] rounded-lg pl-9 pr-4 py-2.5 text-[13px] text-[#334155] placeholder:text-[#C5D0DC] focus:outline-none focus:ring-1 focus:ring-[#1A9C9C]"
                    />
                </div>

                <div className="flex items-center gap-3">
                    {/* Filter */}
                    <div className="relative" ref={filterRef}>
                        <button
                            onClick={() => setFilterOpen(p => !p)}
                            className={`flex items-center gap-2 border md:text-[13px] text-[10px] font-medium px-4 py-2.5 rounded-lg cursor-pointer transition-colors ${activeFilters.length > 0
                                    ? 'border-[#1A9C9C] bg-[#F0FAFA] text-[#1A9C9C]'
                                    : 'border-[#B0B0B0] text-[#334155] hover:bg-gray-50'
                                }`}
                        >
                            <FiFilter size={15} /> Filter
                            {activeFilters.length > 0 && (
                                <span className="ml-1 bg-[#1A9C9C] text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                    {activeFilters.length}
                                </span>
                            )}
                        </button>
                        {filterOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-white border border-[#E8E8E8] rounded-xl shadow-lg z-30 overflow-hidden">
                                <div className="px-3 py-2.5 border-b border-[#F0F0F0] flex items-center justify-between">
                                    <span className="text-[12px] font-semibold text-[#334155]">Filter by Status</span>
                                    {activeFilters.length > 0 && (
                                        <button onClick={clearFilters} className="text-[11px] text-[#1A9C9C] hover:underline cursor-pointer">Clear</button>
                                    )}
                                </div>
                                <div className="px-3 py-2">
                                    {FILTER_OPTIONS.map(opt => (
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

                    {/* Export */}
                    <button className="flex items-center gap-2 border border-[#B0B0B0] text-[#334155] md:text-[13px] text-[10px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FiDownload size={15} /> Export
                    </button>

                    {/* New Product */}
                    <button
                        onClick={() => navigate('/dashboard/products/add_new_product')}
                        className="flex items-center gap-2 bg-[#1A9C9C] text-white md:text-[13px] text-[10px] font-semibold px-4 py-2.5 rounded-lg hover:bg-[#158080] cursor-pointer transition-colors"
                    >
                        <FiPlus size={15} /> New Product
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border overflow-x-auto  border-[#F0F0F0] shadow-sm overflow-hidden">
                <table className="w-full text-[13px]">
                    <thead className="border-b border-[#F0F0F0] bg-[#F6F6F6]">
                        <tr className="text-[#454545] font-medium text-sm">
                            <th className="py-3 px-4 text-left w-10">
                                <input
                                    type="checkbox"
                                    checked={paginated.length > 0 && paginated.every(p => selected.includes(p.id))}
                                    onChange={toggleAll}
                                    className="w-4 h-4 accent-[#1A9C9C] cursor-pointer"
                                />
                            </th>
                            {['Product', 'Category', 'SKU', 'Price', 'Stock', 'Status', 'Action'].map(col => (
                                <th key={col} className="py-3 px-4 text-left">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.length === 0 ? (
                            <tr><td colSpan={8} className="py-10 text-center text-[#9CA3AF]">No products found</td></tr>
                        ) : paginated.map(product => (
                            <tr key={product.id} className="border-b border-[#F9FAFB] hover:bg-[#FAFAFA] transition-colors">
                                <td className="py-3 px-4">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(product.id)}
                                        onChange={() => toggleSelect(product.id)}
                                        className="w-4 h-4 accent-[#1A9C9C] cursor-pointer"
                                    />
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        
                                        <span className="font-medium text-[#334155]">{product.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-[#62748E]">{product.category}</td>
                                <td className="py-3 px-4 text-[#62748E]">{product.sku || '—'}</td>
                                <td className="py-3 px-4 text-[#62748E]">${product.price.toFixed(2)}</td>
                                <td className="py-3 px-4 text-[#62748E]">{product.stock}</td>
                                <td className={`py-3 px-4`}>
                                    <p className={`px-2 py-1 rounded-full w-fit text-[#ffffff] ${product.status.trim() === "Inactive" ? "bg-[#E4002A] " : "bg-[#11A231]"}`}>
                                        {product.status.trim() === "Inactive" ? "Incomplete" : "Complete"}
                                    </p>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setViewProduct(product)}
                                            className="text-[#9CA3AF] hover:text-[#1A9C9C] transition-colors cursor-pointer"
                                            title="View"
                                        >
                                            <FiEye size={17} />
                                        </button>
                                        <button
                                            onClick={() => setEditProduct(product)}
                                            className="text-[#9CA3AF] hover:text-[#F68528] transition-colors cursor-pointer"
                                            title="Edit"
                                        >
                                           <FiEdit size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-[#9CA3AF] hover:text-red-500 transition-colors cursor-pointer"
                                            title="Delete"
                                        >
                                            <FiTrash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-5 py-4 border-t border-[#F0F0F0] text-[13px] text-[#6B7280]">
                    <span>
                        {filtered.length === 0 ? '0' : Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)} – {Math.min(page * PAGE_SIZE, filtered.length)} of {totalPages} Pages
                    </span>
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
          </div>

            {/* Modals */}
            <ViewModal product={viewProduct} onClose={() => setViewProduct(null)} />
            {editProduct && (
                <EditModal product={editProduct} onClose={() => setEditProduct(null)} onSave={handleSaveEdit} isNew={false} />
            )}
            {showNew && (
                <EditModal product={null} onClose={() => setShowNew(false)} onSave={handleAddNew} isNew={true} />
            )}
        </div>
    );
}