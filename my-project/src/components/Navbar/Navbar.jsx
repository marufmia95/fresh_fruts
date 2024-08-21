import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'Products',
        link: '#',
    },
    {
        id: 3,
        title: 'About',
        link: '#',
    },
    {
        id: 4,
        title: 'Shop',
        link: '#',
    },
    {
        id: 5,
        title: 'Contacts',
        link: '#',
    }
];

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className='container mx-auto flex justify-between items-center p-4'>
                {/* Logo section */}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-500' />
                </div>

                {/* Menu section */}
              <div>
              <ul className='flex space-x-8'>
                    {NavbarMenu.map((menuItem) => (
                        <li key={menuItem.id}>
                            <a href={menuItem.link} 
                          className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold '>
                                {menuItem.title}
                            </a>
                        </li>
                    ))}
                    <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 '>
                    <MdOutlineShoppingCart />
                    </button>
                </ul>
              </div>
            </div>
        </nav>
    );
};

export default Navbar;
