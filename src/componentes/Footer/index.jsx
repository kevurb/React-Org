import "./Footer.css"

const Footer =()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="content">
        <a href="https://www.fb.com/kostone1">
            <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.x.com/kurbinam">
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/four_n4mes">
        <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        
        <strong>Desarrollado por Kevin Urbina</strong>
        </footer>

}
export default Footer