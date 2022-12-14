import styles from "./Aboutextstyle.module.css";

export default function Aboutext() {
    return (
      <section className={styles.content}>


       <div className={styles.maincontent}>

        <h1> Tell us your experience in our shop</h1>
            <h2> Name of the Customer</h2>
        
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>

                    <div className={styles.thickness}>
                         <hr className="styles.lines" style={{width:'100%', textalign:'center', height:'100%', background:'#000000',border:'solid', marginBottom:'5%', marginTop:'5%'}}></hr>
                    </div>

            <h2> Name of the Customer</h2>
        
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
        </div>

        
    </section>
    

      
    );
  }