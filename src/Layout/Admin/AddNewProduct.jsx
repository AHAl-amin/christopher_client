import React, { useState, useRef } from 'react';
import { FiUploadCloud, FiImage, FiX } from 'react-icons/fi';

const AddNewProduct = () => {
    // Array of objects { file, url }
    const [images, setImages] = useState([]);
    // Index of the image currently shown in the large preview
    const [previewIndex, setPreviewIndex] = useState(null);
    // Form state
    const [form, setForm] = useState({
        name: '',
        category: '',
        price: '',
        discount: '',
        description: ''
    });

    const fileInputRef = useRef(null);
    const MAX_IMAGES = 5;

    // Handle drag and drop
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
        addImages(files);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        addImages(files);
    };

    const addImages = (files) => {
        if (!files.length) return;
        setImages(prev => {
            const newImages = [...prev];
            files.forEach(file => {
                if (newImages.length < MAX_IMAGES) {
                    newImages.push({
                        file,
                        url: URL.createObjectURL(file)
                    });
                }
            });
            // Auto-select the first newly added image if no image is currently selected
            if (previewIndex === null && newImages.length > 0) {
                setPreviewIndex(0);
            }
            return newImages;
        });
        // Reset file input
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const removeImage = (index, e) => {
        e.stopPropagation();
        setImages(prev => {
            const newImages = [...prev];
            URL.revokeObjectURL(newImages[index].url);
            newImages.splice(index, 1);

            // Adjust previewIndex
            if (newImages.length === 0) {
                setPreviewIndex(null);
            } else if (previewIndex === index) {
                setPreviewIndex(0); // Show next available or first
            } else if (previewIndex > index) {
                setPreviewIndex(previewIndex - 1); // Shift index left
            }
            return newImages;
        });
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Prepare placeholders for exactly 5 thumbnails
    const thumbnails = Array.from({ length: MAX_IMAGES }, (_, i) => images[i] || null);

    return (
        <div className=" ">
            {/* Title Section */}
            <div className="mb-8">
                <h1 className="luxury text-[40px] font-medium text-[#334155]">Product</h1>
                <p className="text-[#9CA3AF] text-[15px]">Manage your menu items and offerings</p>
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-col xl:flex-row gap-8 items-center pb-10">

                {/* Left Column: Image Upload & Preview */}
                <div className=" flex flex-1 flex-col gap-4 w-[350px] md:w-auto  md:min-h-[66vh] min-h-[50vh]   ">
                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                        className="hidden"
                    />

                    {/* Main Dropzone / Preview Area */}
                    <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className={`w-full  bg-white rounded-2xl border-2 border-dashed h-[53vh] ${previewIndex !== null && images[previewIndex]
                                ? 'border-transparent overflow-hidden object-contain'
                                : 'border-[#D1D5DB] flex flex-col items-center justify-center p-6'
                            } relative group transition-all`}
                    >
                        {previewIndex !== null && images[previewIndex] ? (
                            <>
                                <img
                                    src={images[previewIndex].url}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay to change image via click */}
                                <div
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                                    onClick={openFileDialog}
                                >
                                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                                        Click to Upload More
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="text-center flex flex-col items-center cursor-pointer" onClick={openFileDialog}>
                                <div className="text-[#334155] mb-4">
                                    <FiUploadCloud size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[20px] font-medium text-[#1e293b] mb-2">
                                    Choose a file or drag & drop it here.
                                </h3>
                                <p className="text-[#9CA3AF] text-[13px] mb-6">
                                    JPEG, PNG, and up to 50 MB
                                </p>
                                <button
                                    className="border border-[#D1D5DB] text-[#334155] text-[14px] font-medium px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openFileDialog();
                                    }}
                                >
                                    Browse File
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex items-center gap-3 w-full justify-between">
                        {thumbnails.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => item ? setPreviewIndex(idx) : openFileDialog()}
                                className={`relative w-24 h-24 rounded-lg flex items-center justify-center cursor-pointer transition-all ${item
                                        ? `bg-gray-100 border-2 ${previewIndex === idx ? 'border-[#1A9C9C]' : 'border-transparent'}`
                                        : 'bg-[#d8cdcd2f] border border-transparent hover:border-[#D1D5DB]'
                                    }`}
                            >
                                {item ? (
                                    <>
                                        <img
                                            src={item.url}
                                            alt={`Thumb ${idx}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        <button
                                            onClick={(e) => removeImage(idx, e)}
                                            className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full  flex items-center justify-center border border-gray-200 text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                                        >
                                            <FiX size={10} strokeWidth={3} />
                                        </button>
                                    </>
                                ) : (
                                    <FiImage size={24} className="text-[#94A3B8] " />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className=" bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col flex-1 h-fit ">
                    <h2 className="text-[22px] font-medium text-[#454545] mb-2">Add New Product</h2>
                    <p className="text-[#9CA3AF] text-[14px] mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
                    </p>

                    <form className="space-y-5 flex-1" onSubmit={e => e.preventDefault()}>
                        {/* Product Name */}
                        <div>
                            <label className="block text-[13px] font-bold text-[#334155] mb-2">
                                Product Name
                            </label>
                            <input
                                type="text"
                                placeholder="Input product name"
                                className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-[14px] text-[#334155] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                            />
                        </div>

                        {/* Category & Price */}
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[13px] font-bold text-[#334155] mb-2">
                                    Product Category
                                </label>
                                <select
                                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-[14px] text-[#9CA3AF] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C] appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%209L12%2015L18%209%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center]"
                                    value={form.category}
                                    onChange={e => setForm({ ...form, category: e.target.value })}
                                >
                                    <option value="" disabled>Select product category</option>
                                    <option value="Shakes">Shakes</option>
                                    <option value="Coffee">Coffee</option>
                                    <option value="Smoothies">Smoothies</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold text-[#334155] mb-2">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    placeholder="Input Price"
                                    className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-[14px] text-[#334155] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                    value={form.price}
                                    onChange={e => setForm({ ...form, price: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Discount */}
                        <div>
                            <label className="block text-[13px] font-bold text-[#334155] mb-2">
                                Discount%
                            </label>
                            <input
                                type="text"
                                placeholder="Input discount%"
                                className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-[14px] text-[#334155] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C]"
                                value={form.discount}
                                onChange={e => setForm({ ...form, discount: e.target.value })}
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-[13px] font-bold text-[#334155] mb-2">
                                Product Description
                            </label>
                            <textarea
                                placeholder="input product description"
                                rows={5}
                                className="w-full border border-[#D1D5DB] rounded-lg px-4 py-3 text-[14px] text-[#334155] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1A9C9C] focus:ring-1 focus:ring-[#1A9C9C] resize-none"
                                value={form.description}
                                onChange={e => setForm({ ...form, description: e.target.value })}
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center -mt-2">
                <button className="bg-[#1A9C9C] text-white font-semibold text-[15px] px-16 py-3.5 rounded-lg hover:bg-[#158080] transition-colors shadow-sm cursor-pointer">
                    Save Product
                </button>
            </div>
        </div>
    );
};

export default AddNewProduct;
