import React,{ useState } from 'react';
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [ ...new Set(Menu.map( (currEle) => {
    return currEle.category;
}) 
), "All"];
console.log('uniqueList =>', uniqueList);

const Resturant = () => {
    const [menuData, setMenuData ] = useState(Menu);
    const [menuList, setMenuList ] = useState(uniqueList);

    const filter = (category) => {
        if( category === "All" ){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter( (currEle) => {
            return currEle.category === category;
        });
        setMenuData(updatedList);
    } 
    
    return (
        <>
        <Navbar filter={ filter } menuList={ menuList }/>
        <MenuCard menuData={ menuData } />
        </>
    )
}

export default Resturant;
