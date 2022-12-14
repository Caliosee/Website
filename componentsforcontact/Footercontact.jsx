import styles from "./Footercontact.module.css";

export default function Footercontact(){
    return(
<footer className={styles.footer}>
        
        <div className={styles.align}>
            <div className={styles.firstalign}>
            <ul>
                <h2>Contact us</h2>
                <h3> 09xx xxx xxxx </h3>
                <h3> Isog@business.com</h3>
            </ul>
            </div>
    
            <div className={styles.secondalign}>
            <ul>
                <h2>About Us</h2>
                <h3> Our Company</h3>
                <h3> Customer Service</h3>
                <h3> Careers</h3>   
            </ul>
            </div>
            <div className={styles.thirdalign}>
            <ul>
                <h2> Order Online</h2>
                <h3> Onder on the Site</h3>
                <h3> Delivery</h3>
                <h3> Send eGifts</h3>
            </ul>
            </div>
        </div>
        <div className={styles.thick}>
        <hr className="styles.line" style={{width:'100%', textalign:'center', height:'100%', background:'#000000',border:'solid', marginBottom:'5%', marginTop:'5%'}}></hr>
        </div>
        
        <div className = {styles.lastalign}>
            <img src ="Logos.png" style={{width:'10%', textalign:'center',}}></img>
            <h3>© 2022 Isog Coffee Company. All right Reserve.</h3>
        </div>
            
        </footer>
    );
}