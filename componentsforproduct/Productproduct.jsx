import styles from "./Productproduct.module.css";


export default function Productproduct() {
    return (
<header className={styles.header}>
<div className={styles.firsttext}>
    <h2>Coffee Products</h2>
</div>
    <section class="product1" id="product">
    <div className={styles.firstalign}>
    <h2>Coffee Products</h2>
         <div class={styles.box}>
         <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="latte.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>LATTE</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
        

        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="mocha.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>MOCHA</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="americano.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i className={styles.bxbxsstar}></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
            </div>
            <h2>AMERICANO</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
    </div>
    </div>
    
    <div className={styles.secondtalign}>
    <div class={styles.box}>
        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="Rectangle 8.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i className='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>MAZAGRA</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="caraaa.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>CARAMEL</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
        <div className={styles.shop}>
            <div className={styles.shopimg}>
               <img src="vanii.png" alt=""/>
            </div>
            <div className={styles.stars}>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
            </div>
            <h2>VANILLA</h2>
            <span>70 pesos</span>
            <a href="#" class="btn">ORDER NOW</a>       
        </div>
    </div> 
    </div>



</section>
        
            
   
        </header>
      

      
    );
  }