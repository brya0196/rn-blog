import React from 'react';
import { SvgFromXml } from 'react-native-svg';

const Camera = () => (
    <SvgFromXml xml={`
        <svg width="32" height="26" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                stroke-width="2"
                d="M6.21171 4.5H7.00363L7.45032 3.84608L8.904 1.71797C8.99717 1.58158 9.15169 1.5 9.31687 1.5H14.6899C14.8561 1.5 15.0114 1.58252 15.1043 1.7202L16.5352 3.83939L16.9813 4.5H17.7784H20C21.3807 4.5 22.5 5.61929 22.5 7V17C22.5 18.3807 21.3807 19.5 20 19.5H4C2.61929 19.5 1.5 18.3807 1.5 17V7C1.5 5.61929 2.61929 4.5 4 4.5H6.21171ZM9.31687 0C8.65615 0 8.03807 0.326316 7.66539 0.871896L6.21171 3H4C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H17.7784L16.3475 0.880809C15.9756 0.330069 15.3545 0 14.6899 0H9.31687ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" 
                fill="black"
            />
        </svg>    
    `} />
);

export default Camera;