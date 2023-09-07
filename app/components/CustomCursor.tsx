'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');

        const onMouseMove = (event : MouseEvent) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX, y: clientY });
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className='custom-cursor' id='custom-cursor'></div>
    );
};

export default CustomCursor;
