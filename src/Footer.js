import React from 'react';
import { useParams } from 'react-router-dom';

export default function Footer() {
    const { color } = useParams();
    return <footer className={color}>footer logo</footer>;
}
