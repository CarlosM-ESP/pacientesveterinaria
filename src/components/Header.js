import React from 'react';
import Proptypes from 'prop-types';

const Header = ({titulo}) => (
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>    
);
Header.propTypes = {
    titulo : Proptypes.string.isRequired
} 

export default Header;