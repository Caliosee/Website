import styles from "./Navigationstyle.module.css";

export default function Navigation() {
    return (
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img src="LOGO.jpg "/>
            </div>
            <ul className={styles.navbar}>
                <li><a href="#home">HOME</a></li>
                <li><a href="#product">PRODUCT</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>            
            </ul>
            
        
        
            
   
        </header>
      

      
    );
  }