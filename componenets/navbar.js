import styles from "@/componenets/navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src="/images/panda.jpg" alt="" className={styles.circle}/>
            <ul>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Achievements">Achievements</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><a href="#Experience">Experience</a></li>
            </ul>
            <a href="/Resume.pdf" download className={styles.resume}>Resume</a>
        </div>
    )
}