const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='img-div'>
                <a href='/'>
                    <img className='logo' src='/assets/img/pfp.png' alt='logo' />
                </a>
            </div>
            <div className='links'>
                <a href='https://github.com/TSezariKV' target='_blank'>
                    <img src='/assets/img/github.png' alt='github' />
                </a>
                <a href='https://www.facebook.com/Cez3x' target='_blank'>
                    <img className='facebook' src='/assets/img/facebook.png' alt='facebook' />
                </a>
                <a href='https://www.linkedin.com/in/tsezari-kvelashvili-2654a1281/' target='_blank'>
                    <img src='/assets/img/linkedin.png' alt='linkedin' />
                </a>
            </div>
        </div>
    )
}

export default Sidebar