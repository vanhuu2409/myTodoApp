import React from 'react'

const NavItem = ({name}) => {
    // #EA5959
    return (
            <button
                className="font-['Lato'] font-thin text-[22px] leading-[26.4px]"
            >
                {name}
            </button>
    )
}

export default NavItem