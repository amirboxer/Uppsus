
export function Home() {
    return <section className="home">
        <div className="main-img-container">

            <img className="home-img" src="./assets/img/home-img.png" alt="" />
        </div>
        <Footer />
        <script></script>
    </section>
}
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f1f1f1', borderTop: '1px solid #ccc' }}>
            <p>&copy; {currentYear} Appsus. All rights reserved.</p>
            <p className="footer-names">Designed and developed by Adir Gamil, and Amir Boxer.</p>
        </footer>
    );
};

export default Footer;