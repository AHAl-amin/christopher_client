import React, { createContext, useContext, useState } from 'react';

const GroupOrderContext = createContext();

export const GroupOrderProvider = ({ children }) => {
  const [showStartGroupOrderModal, setShowStartGroupOrderModal] = useState(false);
  const [showGroupOrderReadyModal, setShowGroupOrderReadyModal] = useState(false);
  const [isGroupOrderActive, setIsGroupOrderActive] = useState(false);
  const [groupOrderData, setGroupOrderData] = useState({
    groupName: '',
    limitOrderAmount: 20,
    limitOrderAmountEnabled: true,
    separatelyPayingAmountEnabled: true,
    groupLink: 'https://order.jonesshakes.com/p/g/Te6ksDTdah',
    participantCount: 3,
  });

  const openStartGroupOrderModal = () => {
    setShowStartGroupOrderModal(true);
  };

  const closeStartGroupOrderModal = () => {
    setShowStartGroupOrderModal(false);
  };

  const createGroupOrder = (data) => {
    setGroupOrderData({
      ...groupOrderData,
      ...data,
    });
    setShowStartGroupOrderModal(false);
    setShowGroupOrderReadyModal(true);
  };

  const closeGroupOrderReadyModal = () => {
    setShowGroupOrderReadyModal(false);
  };

  const activateGroupOrder = () => {
    setShowGroupOrderReadyModal(false);
    setIsGroupOrderActive(true);
  };

  const deactivateGroupOrder = () => {
    setIsGroupOrderActive(false);
  };

  const value = {
    showStartGroupOrderModal,
    setShowStartGroupOrderModal,
    openStartGroupOrderModal,
    closeStartGroupOrderModal,
    showGroupOrderReadyModal,
    setShowGroupOrderReadyModal,
    closeGroupOrderReadyModal,
    isGroupOrderActive,
    setIsGroupOrderActive,
    activateGroupOrder,
    deactivateGroupOrder,
    groupOrderData,
    setGroupOrderData,
    createGroupOrder,
  };

  return (
    <GroupOrderContext.Provider value={value}>
      {children}
    </GroupOrderContext.Provider>
  );
};

export const useGroupOrder = () => {
  const context = useContext(GroupOrderContext);
  if (!context) {
    throw new Error('useGroupOrder must be used within GroupOrderProvider');
  }
  return context;
};
