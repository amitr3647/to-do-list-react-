import React from 'react'

export default function Footer() {
    let footerStyle={
        position: 'relative',
        width: '100vw',
        top: '92vh'
    }
    return (
        <footer className='bg-dark text-light py-1' style={footerStyle}>
            <p>copyright &copy; to-do-application</p>
        </footer>
    )
}
