import React, { useState } from 'react'
import GiftCardBanner from './GiftCardBanner'
import YourOrder from './YourOrder'
import AddGiftCard from './AddGiftCard'

const GiftCard = () => {
    const [showAddCard, setShowAddCard] = useState(false);

    return (
        <div>
            <GiftCardBanner />
            {showAddCard ? (
                <AddGiftCard onCancel={() => setShowAddCard(false)} />
            ) : (
                <YourOrder onAddClick={() => setShowAddCard(true)} />
            )}
        </div>
    )
}

export default GiftCard