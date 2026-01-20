import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoPageBoost (2).png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const elements = document.querySelectorAll(".project, .service, .stat");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          background: #000; 
          color: #fff; 
          line-height: 1.6; 
          overflow-x: hidden;
        }
        
        /* Header */
        .header { 
          position: fixed; 
          top: 0; 
          width: 100%; 
          padding: 15px 5%; 
          background: rgba(0,0,0,0.95); 
          backdrop-filter: blur(10px); 
          z-index: 1000; 
          border-bottom: 1px solid #333; 
          height: 90px; 
          display: flex; 
          align-items: center;
        }
        
        .header-content { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          max-width: 1200px; 
          margin: 0 auto; 
          width: 100%; 
          height: 100%;
        }
        
        .logo { 
          height: 60px; 
          width: auto;
        }
        
        .nav-links { 
          display: flex; 
          gap: 35px;
        }
        
        .nav-links a { 
          color: #ccc; 
          text-decoration: none; 
          font-size: 0.95rem; 
          font-weight: 500; 
          transition: color 0.3s;
        }
        
        .nav-links a:hover { 
          color: #FFD700;
        }
        
        .contact-btn { 
          background: #FFD700; 
          color: #000; 
          padding: 12px 25px; 
          border-radius: 6px; 
          text-decoration: none; 
          font-weight: 600; 
          font-size: 0.9rem; 
          transition: all 0.3s;
        }
        
        .contact-btn:hover { 
          background: #FFA500; 
          transform: translateY(-2px);
        }
        
        /* Hero Section */
        .hero { 
          min-height: 100vh; 
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200') center/cover; 
          display: flex; 
          align-items: center; 
          padding: 0 5%; 
          position: relative;
        }
        
        .hero::before { 
          content: ''; 
          position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          background: radial-gradient(circle at center, rgba(255,215,0,0.15), transparent 70%);
        }
        
        .hero-content { 
          position: relative; 
          z-index: 2; 
          max-width: 1200px; 
          margin: 0 auto; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 80px; 
          align-items: center;
        }
        
        .hero-text { 
          padding-right: 40px;
        }
        
        .hero-badge { 
          display: inline-block; 
          background: rgba(255,215,0,0.2); 
          color: #FFD700; 
          padding: 8px 20px; 
          border-radius: 25px; 
          font-size: 0.9rem; 
          font-weight: 600; 
          margin-bottom: 20px; 
          border: 1px solid #FFD700;
        }
        
        .hero-text h1 { 
          font-size: 4.2rem; 
          line-height: 1.1; 
          margin-bottom: 25px; 
          color: #fff; 
          font-weight: 800;
        }
        
        .hero-text .highlight { 
          color: #FFD700;
        }
        
        .hero-text p { 
          font-size: 1.3rem; 
          color: #ddd; 
          margin-bottom: 40px; 
          line-height: 1.7;
        }
        
        .hero-cta-group { 
          display: flex; 
          gap: 20px; 
          margin-bottom: 40px;
        }
        
        .cta-primary { 
          background: #FFD700; 
          color: #000; 
          padding: 18px 35px; 
          border-radius: 8px; 
          text-decoration: none; 
          font-weight: 700; 
          font-size: 1.1rem; 
          transition: all 0.3s;
        }
        
        .cta-secondary { 
          border: 2px solid #FFD700; 
          color: #FFD700; 
          padding: 16px 35px; 
          border-radius: 8px; 
          text-decoration: none; 
          font-weight: 700; 
          font-size: 1.1rem; 
          transition: all 0.3s;
        }
        
        .cta-primary:hover { 
          background: #FFA500; 
          transform: translateY(-2px);
        }
        
        .cta-secondary:hover { 
          background: #FFD700; 
          color: #000;
        }
        
        .hero-visual { 
          position: relative;
        }
        
        .hero-visual img { 
          width: 100%; 
          height: 450px; 
          object-fit: cover; 
          border-radius: 15px; 
          box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        }
        
        .hero-badge-visual { 
          position: absolute; 
          top: 25px; 
          right: 25px; 
          background: #FFD700; 
          color: #000; 
          padding: 10px 20px; 
          border-radius: 25px; 
          font-size: 0.8rem; 
          font-weight: 700; 
          text-transform: uppercase;
        }
        
        /* Stats Section */
        .stats { 
          padding: 100px 5%; 
          background: #111; 
          border-top: 3px solid #FFD700;
        }
        
        .stats-container { 
          max-width: 1000px; 
          margin: 0 auto;
        }
        
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 50px; 
          text-align: center;
        }
        
        .stat { 
          padding: 30px 20px; 
          opacity: 0; 
          transform: translateY(30px); 
          transition: all 0.8s ease;
        }
        
        .stat.show { 
          opacity: 1; 
          transform: translateY(0);
        }
        
        .stat h3 { 
          font-size: 3.2rem; 
          color: #FFD700; 
          margin-bottom: 15px; 
          font-weight: 800;
        }
        
        .stat p { 
          color: #ccc; 
          font-size: 1rem; 
          text-transform: uppercase; 
          letter-spacing: 1px; 
          font-weight: 500;
        }
        
        /* Services Section */
        .services { 
          padding: 120px 5%; 
          background: #000;
        }
        
        .services-container { 
          max-width: 1200px; 
          margin: 0 auto;
        }
        
        .section-header { 
          text-align: center; 
          margin-bottom: 80px;
        }
        
        .section-header h2 { 
          font-size: 3.2rem; 
          color: #FFD700; 
          margin-bottom: 20px; 
          font-weight: 800;
        }
        
        .section-header p { 
          font-size: 1.2rem; 
          color: #888; 
          max-width: 600px; 
          margin: 0 auto; 
          line-height: 1.6;
        }
        
        .services-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 40px;
        }
        
        .service { 
          background: #1a1a1a; 
          padding: 40px 30px; 
          border-radius: 15px; 
          text-align: center; 
          border: 1px solid #333; 
          transition: all 0.4s; 
          opacity: 0; 
          transform: translateY(30px);
        }
        
        .service.show { 
          opacity: 1; 
          transform: translateY(0);
        }
        
        .service:hover { 
          transform: translateY(-8px); 
          border-color: #FFD700; 
          box-shadow: 0 20px 40px rgba(255,215,0,0.1);
        }
        
        .service-icon { 
          width: 80px; 
          height: 80px; 
          margin: 0 auto 25px; 
          border-radius: 50%; 
          background: #FFD700; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 2rem; 
          color: #000;
        }
        
        .service h3 { 
          font-size: 1.4rem; 
          margin-bottom: 15px; 
          color: #fff; 
          font-weight: 600;
        }
        
        .service p { 
          color: #aaa; 
          line-height: 1.6; 
          margin-bottom: 20px;
        }
        
        .service-link { 
          color: #FFD700; 
          text-decoration: none; 
          font-weight: 600; 
          font-size: 0.9rem;
        }
        
        /* Projects Section */
        .projects { 
          padding: 120px 5%; 
          background: #111;
        }
        
        .projects-container { 
          max-width: 1200px; 
          margin: 0 auto;
        }
        
        .projects-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 40px; 
          margin-top: 60px;
        }
        
        .project { 
          background: #1a1a1a; 
          border-radius: 15px; 
          overflow: hidden; 
          transition: all 0.4s; 
          border: 1px solid #333; 
          opacity: 0; 
          transform: translateY(30px); 
          text-decoration: none;
        }
        
        .project.show { 
          opacity: 1; 
          transform: translateY(0);
        }
        
        .project:hover { 
          transform: translateY(-10px); 
          border-color: #FFD700; 
          box-shadow: 0 20px 40px rgba(255,215,0,0.1);
        }
        
        .project-image { 
          height: 220px; 
          overflow: hidden; 
          position: relative;
        }
        
        .project-image img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.4s;
        }
        
        .project:hover .project-image img { 
          transform: scale(1.1);
        }
        
        .project-tag { 
          position: absolute; 
          top: 15px; 
          left: 15px; 
          background: #FFD700; 
          color: #000; 
          padding: 6px 12px; 
          border-radius: 15px; 
          font-size: 0.8rem; 
          font-weight: 700; 
          text-transform: uppercase;
        }
        
        .project-content { 
          padding: 30px;
        }
        
        .project h3 { 
          font-size: 1.5rem; 
          margin-bottom: 15px; 
          color: #FFD700; 
          font-weight: 700;
        }
        
        .project p { 
          color: #aaa; 
          line-height: 1.6; 
          margin-bottom: 25px;
        }
        
        .project-cta { 
          display: inline-block; 
          background: #FFD700; 
          color: #000; 
          padding: 12px 25px; 
          border-radius: 6px; 
          text-decoration: none; 
          font-weight: 600; 
          font-size: 0.9rem; 
          transition: all 0.3s;
        }
        
        .project-cta:hover { 
          background: #FFA500; 
          transform: translateY(-2px);
        }
        
        /* Testimonials Section */
        .testimonials { 
          padding: 120px 5%; 
          background: #000;
        }
        
        .testimonials-container { 
          max-width: 1000px; 
          margin: 0 auto;
        }
        
        .testimonials-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 40px; 
          margin-top: 60px;
        }
        
        .testimonial { 
          background: #1a1a1a; 
          padding: 40px; 
          border-radius: 15px; 
          border-left: 5px solid #FFD700; 
          position: relative;
        }
        
        .testimonial::before { 
          content: '"'; 
          position: absolute; 
          top: 10px; 
          left: 20px; 
          font-size: 4rem; 
          color: #FFD700; 
          opacity: 0.3;
        }
        
        .testimonial-text { 
          font-size: 1.1rem; 
          color: #ccc; 
          margin-bottom: 25px; 
          font-style: italic; 
          line-height: 1.7; 
          position: relative; 
          z-index: 1;
        }
        
        .testimonial-author { 
          display: flex; 
          align-items: center; 
          gap: 15px;
        }
        
        .author-avatar { 
          width: 60px; 
          height: 60px; 
          border-radius: 50%; 
          background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100') center/cover; 
          border: 2px solid #FFD700;
        }
        
        .author-info h5 { 
          color: #fff; 
          font-size: 1.1rem; 
          margin-bottom: 5px; 
          font-weight: 600;
        }
        
        .author-info p { 
          color: #888; 
          font-size: 0.9rem;
        }
        
        .project-info { 
          color: #FFD700; 
          font-size: 0.85rem; 
          font-weight: 600; 
          margin-top: 5px;
        }
        
        /* CTA Section */
        .cta-section { 
          padding: 120px 5%; 
          background: linear-gradient(135deg, #FFD700, #FFA500); 
          text-align: center;
        }
        
        .cta-container { 
          max-width: 800px; 
          margin: 0 auto;
        }
        
        .cta-section h2 { 
          font-size: 3.5rem; 
          color: #000; 
          margin-bottom: 25px; 
          font-weight: 900;
        }
        
        .cta-section p { 
          font-size: 1.3rem; 
          color: #000; 
          margin-bottom: 45px; 
          line-height: 1.6; 
          opacity: 0.8;
        }
        
        .final-cta { 
          background: #000; 
          color: #FFD700; 
          padding: 25px 60px; 
          border-radius: 8px; 
          text-decoration: none; 
          font-weight: 800; 
          font-size: 1.3rem; 
          display: inline-block; 
          transition: all 0.3s; 
          border: 3px solid #000;
        }
        
        .final-cta:hover { 
          background: #FFD700; 
          color: #000; 
          transform: translateY(-3px);
        }
        
        /* Footer */
        .footer { 
          padding: 60px 5% 40px; 
          background: #0a0a0a; 
          border-top: 1px solid #333;
        }
        
        .footer-container { 
          max-width: 1200px; 
          margin: 0 auto; 
          text-align: center;
        }
        
        .footer-content { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 40px; 
          margin-bottom: 40px;
        }
        
        .footer-section h4 { 
          color: #FFD700; 
          margin-bottom: 20px; 
          font-size: 1.2rem; 
          font-weight: 600;
        }
        
        .footer-section p, .footer-section a { 
          color: #aaa; 
          text-decoration: none; 
          line-height: 1.6; 
          font-size: 0.95rem;
        }
        
        .footer-section a:hover { 
          color: #FFD700;
        }
        
        .footer-bottom { 
          border-top: 1px solid #333; 
          padding-top: 30px; 
          color: #666; 
          font-size: 0.9rem;
        }
        
        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            gap: 60px;
          }
          
          .hero-text h1 {
            font-size: 3.5rem;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 15px 3%;
            height: 70px;
          }
          
          .logo {
            height: 45px;
          }
          
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .contact-btn {
            padding: 10px 20px;
            font-size: 0.8rem;
          }
          
          .hero {
            padding: 0 3%;
            min-height: 90vh;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .hero-text {
            padding-right: 0;
          }
          
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .hero-text p {
            font-size: 1.1rem;
          }
          
          .hero-cta-group {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .cta-primary, .cta-secondary {
            padding: 15px 30px;
            font-size: 1rem;
            width: 100%;
            max-width: 280px;
            text-align: center;
          }
          
          .hero-visual img {
            height: 300px;
          }
          
          .stats {
            padding: 80px 3%;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .stat h3 {
            font-size: 2.5rem;
          }
          
          .services, .projects, .testimonials {
            padding: 80px 3%;
          }
          
          .section-header h2 {
            font-size: 2.5rem;
          }
          
          .section-header p {
            font-size: 1.1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .testimonial {
            padding: 30px;
          }
          
          .cta-section {
            padding: 80px 3%;
          }
          
          .cta-section h2 {
            font-size: 2.5rem;
          }
          
          .cta-section p {
            font-size: 1.1rem;
          }
          
          .final-cta {
            padding: 20px 40px;
            font-size: 1.1rem;
          }
          
          .footer {
            padding: 50px 3% 30px;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: left;
          }
        }
        
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2rem;
          }
          
          .hero-text p {
            font-size: 1rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .stat h3 {
            font-size: 2rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .cta-section h2 {
            font-size: 2rem;
          }
          
          .final-cta {
            padding: 18px 30px;
            font-size: 1rem;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-content">
          <img src={logo} alt="PageBoost" className="logo" />
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <a href="https://wa.me/5511965526709" className="contact-btn">Falar Conosco</a>
            <button className="mobile-menu-btn">☰</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Agência Digital Premium</div>
            <h1>Landing Pages que <span className="highlight">convertem</span></h1>
            <p>Criamos landing pages de alta performance, otimizadas para conversão e focadas em resultados reais. Transformamos visitantes em clientes com design profissional e estratégia comprovada.</p>
            <div className="hero-cta-group">
              <a href="https://wa.me/5511965526709" className="cta-primary">Solicitar Orçamento</a>
              <a href="#projetos" className="cta-secondary">Ver Projetos</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" alt="Landing Pages Profissionais" />
            <div className="hero-badge-visual">Premium</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat">
              <h3>200+</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat">
              <h3>350%</h3>
              <p>Aumento Médio em Conversões</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="stat">
              <h3>24h</h3>
              <p>Tempo de Resposta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="services-container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas em marketing digital para impulsionar seu negócio online</p>
          </div>
          <div className="services-grid">
            <div className="service">
              <div className="service-icon">🚀</div>
              <h3>Landing Pages</h3>
              <p>Páginas de alta conversão otimizadas para capturar leads e gerar vendas com design responsivo e carregamento rápido.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
            <div className="service">
              <div className="service-icon">📱</div>
              <h3>Design Responsivo</h3>
              <p>Layouts que se adaptam perfeitamente a todos os dispositivos, garantindo experiência excepcional em mobile e desktop.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
            <div className="service">
              <div className="service-icon">⚡</div>
              <h3>Otimização SEO</h3>
              <p>Páginas otimizadas para mecanismos de busca, aumentando visibilidade e tráfego orgânico qualificado.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
            <div className="service">
              <div className="service-icon">📊</div>
              <h3>Analytics Avançado</h3>
              <p>Monitoramento detalhado de performance com relatórios completos sobre conversões e comportamento do usuário.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
            <div className="service">
              <div className="service-icon">🎯</div>
              <h3>Estratégia de Conversão</h3>
              <p>Aplicamos técnicas comprovadas de CRO para maximizar taxa de conversão e ROI do seu investimento.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
            <div className="service">
              <div className="service-icon">🔧</div>
              <h3>Suporte Contínuo</h3>
              <p>Manutenção, atualizações e suporte técnico especializado para garantir performance constante.</p>
              <a href="#" className="service-link">Saiba mais →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projetos">
        <div className="projects-container">
          <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <p>Conheça alguns dos nossos trabalhos e os resultados alcançados para nossos clientes</p>
          </div>
          <div className="projects-grid">
            <Link to="/projetos/fitlive" className="project">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" alt="FitLife" />
                <div className="project-tag">FITNESS</div>
              </div>
              <div className="project-content">
                <h3>FitLife</h3>
                <p>Landing page focada em transformação corporal com programas personalizados, resultando em +400% de conversões.</p>
                <div className="project-cta">Ver Projeto</div>
              </div>
            </Link>

            <Link to="/projetos/autoprime" className="project">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" alt="AutoPrime" />
                <div className="project-tag">ESTÉTICA AUTOMOTIVA</div>
              </div>
              <div className="project-content">
                <h3>AutoPrime</h3>
                <p>Estética automotiva premium com serviços completos de lavagem, enceramento e vitrificação, aumentando satisfação em 100%.</p>
                <div className="project-cta">Ver Projeto</div>
              </div>
            </Link>

            <Link to="/projetos/techflow" className="project">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400" alt="TechFlow" />
                <div className="project-tag">TECNOLOGIA</div>
              </div>
              <div className="project-content">
                <h3>TechFlow</h3>
                <p>Plataforma de desenvolvimento de software com portfólio completo e cases de sucesso, gerando +300% leads.</p>
                <div className="project-cta">Ver Projeto</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials" id="depoimentos">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>O que nossos clientes dizem</h2>
            <p>Depoimentos reais de empresas que transformaram seus resultados conosco</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-text">
                A PageBoost transformou completamente nossos resultados online. Em 3 meses, aumentamos nossas conversões em 400% e o ROI superou todas as expectativas. Profissionalismo excepcional!
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h5>Marina Santos</h5>
                  <p>CEO, FitLife Academy</p>
                  <div className="project-info">+400% conversões</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                Trabalho impecável do início ao fim. A landing page criada pela PageBoost não só ficou linda, mas principalmente, está convertendo muito bem. Recomendo sem hesitar!
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100') center/cover"}}></div>
                <div className="author-info">
                  <h5>Roberto Silva</h5>
                  <p>Diretor, AutoPrime</p>
                  <div className="project-info">+250% vendas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="cta-container">
          <h2>Pronto para aumentar suas conversões?</h2>
          <p>Entre em contato conosco e descubra como podemos transformar seu negócio com landing pages de alta performance que realmente convertem.</p>
          <a href="https://wa.me/5511965526709" className="final-cta">Solicitar Orçamento Gratuito</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>PageBoost</h4>
              <p>Agência especializada em landing pages de alta conversão. Transformamos visitantes em clientes com design profissional e estratégia comprovada.</p>
            </div>
            <div className="footer-section">
              <h4>Serviços</h4>
              <p><a href="#">Landing Pages</a></p>
              <p><a href="#">Design Responsivo</a></p>
              <p><a href="#">Otimização SEO</a></p>
              <p><a href="#">Analytics</a></p>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>WhatsApp: (11) 96552-6709</p>
              <p>Email: contato.pageboost@gmail.com</p>
              <p>Atendimento: Seg-Sex 9h-18h</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PageBoost. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
