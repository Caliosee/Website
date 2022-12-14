import styles from "./Navigationproduct.module.css";

export default function Navigationproduct() {
    return (
       
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img src="LOGO.jpg "/>
            </div>
            <ul className={styles.navbar}>
                <li><a href="/index.js">HOME</a></li>
                <li><a href="#product">PRODUCT</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>            
            </ul>
            
        
        
        </header>
   
        
      

        
    );
  }