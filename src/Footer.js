import React from 'react';
import { useParams } from 'react-router-dom';

export default function Footer() {
    const { color } = useParams();
    return <footer className={color}><img alt="footer logo" width="200px" src=""/></footer>;
}
