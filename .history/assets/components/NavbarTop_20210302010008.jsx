import React from 'react'

const NavbarTop = (props) => {
       return(
              <div>
                     <div x-data="setup()" x-init="$refs.loading.classList.add('hidden');" :class="{ 'dark': isDark}"></
              </div>
       )
}

export default NavbarTop;