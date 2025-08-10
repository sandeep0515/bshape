import React from 'react';
import Menu from '../Menu/Menu.component';

interface HeaderProps {
    headerName: string;
}

const Header: React.FC<HeaderProps> = ({ headerName }) => (
    <header
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            background: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0',
        }}
    >
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{headerName}</div>
        <Menu />
    </header>
);

export default Header;