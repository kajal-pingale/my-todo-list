import React from 'react'

const Footer = () => {
  let footerStyle={
    position: "relative",
    top:"100vh",
    width:"100%"
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
    {/* <footer className='bg-dark text-light py-3'> */}
      <p className='text-center'>Copyright &copy;MyTodolist.com</p>
        

    </footer>
  )}


export default Footer;
