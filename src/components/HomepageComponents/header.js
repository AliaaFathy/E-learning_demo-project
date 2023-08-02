import './styles/header.css'
function Header({header,details}){
    console.log(header)
    return(
    <div className='text-container'>
           <span className='header'>{header}</span>
        <span className='detail'>{details}</span>
    </div>
    )
}
export default Header;