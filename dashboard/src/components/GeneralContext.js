import React, { useState } from 'react'
import BuyActionWindow from './BuyActionWindow'

const GeneralContext = React.createContext({
    openBuyWindow:(uid) =>{},
    closeBuyWindow:() => {}
})

export const GeneralContextProvider = (props) =>{
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false)
    const [selectedStockUID,setSelectedStockUID] = useState("")

    const handelOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handelCloseBuyWindow = ()=>{
        setIsBuyWindowOpen(false)
        setSelectedStockUID("")
    }

    return (
        <GeneralContext.Provider
        value={{
            openBuyWindow:handelOpenBuyWindow,
            closeBuyWindow: handelCloseBuyWindow,
        }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    )
}

export default GeneralContext