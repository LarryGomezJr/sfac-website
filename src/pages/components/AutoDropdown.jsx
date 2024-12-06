import React, { useState } from 'react';

const AutoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    dropdownToggle: {
      backgroundColor: '#f1f1f1',
      color: '#333',
      padding: '10px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
    },
    arrow: {
      marginLeft: '5px',
      fontSize: '12px',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    dropdownMenuItem: {
      color: '#333',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
  };

  return (
    <div 
                style={styles.dropdown}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                  <p class="flex items-center text-lg text-gray-600 mb-2 group-hover:text-white">
                    <button style={styles.dropdownToggle}>
                      Bachelor of Arts
                      <span style={styles.arrow}>▼</span>
                    </button>
                  </p>
                  {isOpen && (
                <ul style={styles.dropdownMenu}>
                  <div class="lex items-center text-sm">
                    <li><a href="#" style={styles.dropdownMenuItem}>Major in Psychology</a></li>
                  </div>
                </ul>
                )}
    </div>
  );
};

export default AutoDropdown;

