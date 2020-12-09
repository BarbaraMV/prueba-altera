import React from 'react'

export const IndicatorContext = React.createContext()

const IndicatorsProvider = (props) => {
    return (
        <IndicatorContext.Provider>
            {props.children}
            
        </IndicatorContext.Provider>
    )
}

export default IndicatorsProvider

