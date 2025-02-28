import styles from "@/componenets/navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <a href="/"><img src="/images/panda.jpg" alt="" className={styles.circle}/></a>
            <ul>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Achievements">Achievements</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <a href="/Resume.pdf" download className={styles.resume}>Resume</a>
        </div>
    )
}