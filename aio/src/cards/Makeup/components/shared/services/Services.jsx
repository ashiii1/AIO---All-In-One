import styles from "./Services.module.css";
import { motion } from "framer-motion";
import { serviceData } from "../../../data/serviceData";
import Container from "../contentContainer/Container";

const Services = () => {
  
  return (
    <section className={styles.services}>
      <Container >
        <div className={styles.services_box}>
          {serviceData.map((item, index) => (
            <motion.div whileHover={{scale: 1.1}} className={styles.service_item} key={index} style={{background: item.bg}}>
              <span>
                {item.icon}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
          
        </div>
        
      </Container>
    </section>
  );
}

export default Services;