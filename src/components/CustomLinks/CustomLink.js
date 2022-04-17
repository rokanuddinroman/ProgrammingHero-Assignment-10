import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div style={{ display: 'inline' }}>
            <Link
                style={{ backgroundColor: match ? "#DEF437" : "transparent", padding: match ? "4px 15px" : "15px 15px", color: match ? "#000" : "#000", borderRadius: match ? "100vw" : "0px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;