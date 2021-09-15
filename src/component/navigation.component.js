import React, { useEffect, useState } from "react";

const menus = [
  {
    id:'m_0',
    label:'Home',
    className:'bannerSection'
  },
  {
    id:'m_1',
    label:'About',
    className:'aboutus'
  },
  {
    id:'m_2',
    label:'Service',
    className:'services'
  },
  {
    id:'m_3',
    label:'Contact',
    className:'footerBanner'
  }
]

const Navigation = () => {
  const  [selectedMenu, setSelectedMenu] = useState('m_0')
  
  function handleClick(event){
    const menuId = event.target.id;
    setSelectedMenu(menuId);
  }


  function getClasses(menuId){
    if(menuId === selectedMenu){
      return 'active'
    }
    return ''
  }

useEffect(() =>{
  const menu = menus.find((menu)=>{
    return (menu.id === selectedMenu)
  })
  const ele = document.getElementsByClassName(menu.className)[0]
  ele.scrollIntoView({behavior:"smooth"})

},[selectedMenu])



  return (
    
    <div className="container">
    <div className="header-area">
      <div className="navbar-area">
        <nav className="site-navbar">
          <img src="../images/logo.jpg" alt="logo" />

          <ul>
            {
              menus.map((item) => {
                return (
                  <li key={item.id} className={getClasses(item.id)}>
                    <a id={item.id} href="#" onClick={handleClick}>{item.label}</a>
                  </li>
                )
              })
            }
          </ul>

          <button className="nav-toggler">
            <span></span>
          </button>
        </nav>
      </div>
    </div>
    </div>
    
  
  );
};

export default Navigation;
