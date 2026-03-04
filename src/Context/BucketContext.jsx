import React, { createContext, useContext, useState } from 'react';

const BucketContext = createContext();

export const BucketProvider = ({ children }) => {
  const [bucketItems, setBucketItems] = useState([]);

  const addToBucket = (product) => {
    setBucketItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (!existingItem) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromBucket = (productId) => {
    setBucketItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const isBucketItem = (productId) => {
    return bucketItems.some((item) => item.id === productId);
  };

  const getBucketCount = () => {
    return bucketItems.length;
  };

  const clearBucket = () => {
    setBucketItems([]);
  };

  const value = {
    bucketItems,
    addToBucket,
    removeFromBucket,
    isBucketItem,
    getBucketCount,
    clearBucket,
  };

  return (
    <BucketContext.Provider value={value}>
      {children}
    </BucketContext.Provider>
  );
};

export const useBucket = () => {
  const context = useContext(BucketContext);
  if (!context) {
    throw new Error('useBucket must be used within BucketProvider');
  }
  return context;
};
