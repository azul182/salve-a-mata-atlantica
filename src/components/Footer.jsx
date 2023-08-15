import '../assets/styles/components/Footer.scss'

const Footer = () => {
  return (
<footer>
        <div className="footer-container">
            <div className="footer-desc-container">
                <h3 className="footer-title">Salve a Mata Atlântica</h3>
                <p>Junte-se a Nós na Luta pela Preservação da Mata Atlântica!

Lembre-se, cada ação conta. Juntos, podemos garantir um futuro sustentável para essa rica e diversificada floresta.</p>
            </div>
            <div className="footer-links-container">
            <div className="footer-links-container-list">
                <p className="footer-title">Links</p>
                <ul>
                    <li>
                        <a href="#">Base de conhecimentos</a>
                    </li>
                    <li>
                        <a href="#">Trabalhe conosco</a>
                    </li>
                    <li>
                        <a href="#">Últimos projetos</a>
                    </li>
                    <li>
                        <a href="#">Politica de privacidade</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </div>

            </div>
            <div className="footer-copy-right-container">
                <p>&copy; 2023 Salve a Mata Atlântica</p>
                <p>Junte-se a Nós na Luta pela Preservação da Mata Atlântica</p>
            </div>
        </div>
    </footer>
      )
}

export default Footer