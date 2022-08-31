import React, {useEffect ,useRef, useState} from 'react'

function NavItem2(props) {
    const ref = useRef()
    const [open, setOpen] =useState(false);
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [open])
      return (
      <li ref={ref} className='item'><a href='#' onClick={() => setOpen(!open)}>{props.item}<img src={open? props.rowup: props.rowdown}/></a>
      {open && props.children}
      </li>
      )
}

export default NavItem2