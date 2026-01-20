import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function TechFlow() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const elements = document.querySelectorAll(".stat, .service, .portfolio-item, .testimonial");

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
        * { margin:0; padding:0; box-sizing:border-box }
        body { background:#0a0a0a; color:#fff; font-family:system-ui,-apple-system,sans-serif; line-height:1.5 }
        
        .container { max-width:1200px; margin:0 auto; padding:0 1rem }
        
        .nav { position:fixed; top:0; width:100%; padding:1rem 0; background:rgba(10,10,10,0.95); z-index:1000; border-bottom:1px solid #333 }
        .nav-content { display:flex; justify-content:space-between; align-items:center }
        .logo { font-size:1.5rem; font-weight:700; color:#4da6ff }
        .back-btn { color:#888; text-decoration:none; font-size:0.9rem }
        
        .hero { min-height:100vh; display:flex; align-items:center; padding-top:80px; background:linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); position:relative }
        .hero::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200') center/cover; opacity:0.1; z-index:1 }
        .hero-content { position:relative; z-index:2; text-align:center; padding:2rem 0 }
        .hero-subtitle { font-size:1.2rem; color:#00d4ff; margin-bottom:1rem; font-weight:500 }
        .hero h1 { font-size:clamp(2.5rem, 8vw, 4rem); line-height:1.1; margin-bottom:1.5rem; color:#4da6ff; font-weight:700 }
        .hero p { font-size:clamp(1rem, 4vw, 1.3rem); color:#ccc; margin-bottom:2rem; max-width:600px; margin-left:auto; margin-right:auto }
        .cta-group { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap }
        .cta-primary { background:#4da6ff; color:#000; padding:1rem 2rem; border-radius:8px; text-decoration:none; font-weight:600; font-size:1.1rem; transition:all 0.3s }
        .cta-secondary { border:2px solid #4da6ff; color:#4da6ff; padding:0.8rem 2rem; border-radius:8px; text-decoration:none; font-weight:600; font-size:1.1rem; transition:all 0.3s }
        .cta-primary:hover { background:#00d4ff; transform:translateY(-2px) }
        .cta-secondary:hover { background:#4da6ff; color:#000 }
        
        .stats { padding:4rem 0; background:#111 }
        .stats-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:2rem; text-align:center }
        .stat { opacity:0; transform:translateY(30px); transition:all 0.8s ease }
        .stat.show { opacity:1; transform:translateY(0) }
        .stat h3 { font-size:clamp(2rem, 6vw, 3rem); color:#4da6ff; margin-bottom:0.5rem; font-weight:700 }
        .stat p { color:#aaa; font-size:0.9rem; text-transform:uppercase }
        
        .services { padding:6rem 0; background:#0a0a0a }
        .section-header { text-align:center; margin-bottom:4rem }
        .section-header h2 { font-size:clamp(2rem, 6vw, 3rem); color:#4da6ff; margin-bottom:1rem; font-weight:700 }
        .section-header p { font-size:1.1rem; color:#888; max-width:600px; margin:0 auto }
        .services-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:2rem }
        .service { background:#1a1a1a; padding:2rem; border-radius:12px; text-align:center; border:1px solid #333; transition:all 0.3s; position:relative; overflow:hidden; opacity:0; transform:translateY(30px) }
        .service.show { opacity:1; transform:translateY(0) }
        .service::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:#4da6ff; transform:scaleX(0); transition:transform 0.3s }
        .service:hover::before { transform:scaleX(1) }
        .service:hover { transform:translateY(-5px); border-color:#4da6ff }
        .service-icon { width:60px; height:60px; margin:0 auto 1rem; border-radius:50%; background:#4da6ff; display:flex; align-items:center; justify-content:center; font-size:1.5rem }
        .service h3 { font-size:1.3rem; margin-bottom:1rem; color:#fff; font-weight:600 }
        .service p { color:#aaa; line-height:1.6 }
        
        .portfolio { padding:6rem 0; background:#111 }
        .portfolio-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem; margin-top:3rem }
        .portfolio-item { position:relative; border-radius:12px; overflow:hidden; height:250px; opacity:0; transform:translateY(30px); transition:all 0.8s ease }
        .portfolio-item.show { opacity:1; transform:translateY(0) }
        .portfolio-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.3s }
        .portfolio-overlay { position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s }
        .portfolio-item:hover .portfolio-overlay { opacity:1 }
        .portfolio-item:hover img { transform:scale(1.05) }
        .portfolio-content { text-align:center; color:#fff }
        .portfolio-content h4 { font-size:1.2rem; margin-bottom:0.5rem; color:#4da6ff }
        .portfolio-content p { font-size:0.9rem; color:#ccc }
        
        .testimonials { padding:6rem 0; background:#0a0a0a }
        .testimonials-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem; margin-top:3rem }
        .testimonial { background:#1a1a1a; padding:2rem; border-radius:12px; border-left:4px solid #4da6ff; opacity:0; transform:translateY(30px); transition:all 0.8s ease }
        .testimonial.show { opacity:1; transform:translateY(0) }
        .testimonial-text { font-size:1rem; color:#ccc; margin-bottom:1.5rem; font-style:italic }
        .testimonial-author { display:flex; align-items:center; gap:1rem }
        .author-info h5 { color:#fff; font-size:1rem; margin-bottom:0.3rem }
        .author-info p { color:#888; font-size:0.85rem }
        
        .cta-section { padding:5rem 0; background:#1a1a2e; text-align:center }
        .cta-section h2 { font-size:clamp(2rem, 6vw, 3rem); color:#4da6ff; margin-bottom:1rem; font-weight:700 }
        .cta-section p { font-size:1.2rem; color:#ccc; margin-bottom:2rem }
        .final-cta { background:#4da6ff; color:#000; padding:1.2rem 3rem; border-radius:8px; text-decoration:none; font-weight:700; font-size:1.2rem; display:inline-block; transition:all 0.3s }
        .final-cta:hover { background:#00d4ff; transform:translateY(-2px) }
        
        @media (max-width:768px) {
          .container { padding:0 0.5rem }
          .hero { padding-top:100px }
          .hero-content { padding:1rem 0 }
          .cta-group { flex-direction:column; align-items:center }
          .cta-primary, .cta-secondary { width:100%; max-width:280px; text-align:center }
          .stats { padding:3rem 0 }
          .services { padding:4rem 0 }
          .portfolio { padding:4rem 0 }
          .testimonials { padding:4rem 0 }
          .cta-section { padding:4rem 0 }
        }
      `}</style>

      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">TechFlow</div>
            <Link to="/" className="back-btn">← Voltar</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-subtitle">Desenvolvimento de Software</div>
            <h1>Sistemas que escalam seu negócio</h1>
            <p>Desenvolvemos soluções digitais robustas e escaláveis usando as mais modernas tecnologias do mercado. Nossa expertise transforma ideias em sistemas que geram resultados reais.</p>
            <div className="cta-group">
              <a href="https://wa.me/5511965526709" className="cta-primary">Iniciar Projeto</a>
              <a href="#portfolio" className="cta-secondary">Ver Trabalhos</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>150+</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat">
              <h3>99.9%</h3>
              <p>Uptime Garantido</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Suporte Técnico</p>
            </div>
            <div className="stat">
              <h3>5x</h3>
              <p>ROI Médio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas em tecnologia para impulsionar seu negócio ao próximo nível</p>
          </div>
          <div className="services-grid">
            <div className="service">
              <div className="service-icon">⚡</div>
              <h3>Desenvolvimento Web</h3>
              <p>Aplicações web modernas, responsivas e de alta performance usando React, Node.js e tecnologias cloud.</p>
            </div>
            <div className="service">
              <div className="service-icon">📱</div>
              <h3>Apps Mobile</h3>
              <p>Aplicativos nativos e híbridos para iOS e Android com foco em experiência do usuário.</p>
            </div>
            <div className="service">
              <div className="service-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>Infraestrutura escalável na nuvem com deploy automatizado e monitoramento 24/7.</p>
            </div>
            <div className="service">
              <div className="service-icon">🔒</div>
              <h3>Segurança Digital</h3>
              <p>Proteção avançada contra ameaças com conformidade LGPD e melhores práticas de segurança.</p>
            </div>
            <div className="service">
              <div className="service-icon">🤖</div>
              <h3>IA & Automação</h3>
              <p>Inteligência artificial e automação de processos para otimizar operações e reduzir custos.</p>
            </div>
            <div className="service">
              <div className="service-icon">📊</div>
              <h3>Analytics & BI</h3>
              <p>Dashboards inteligentes e análise de dados para tomada de decisões estratégicas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <p>Conheça alguns dos sistemas que desenvolvemos e os resultados alcançados</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600" alt="E-commerce Platform" />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h4>Plataforma E-commerce</h4>
                  <p>Sistema completo com +300% aumento nas vendas</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" alt="CRM System" />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h4>Sistema CRM</h4>
                  <p>Gestão de clientes com 50% mais eficiência</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600" alt="Mobile App" />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h4>App Financeiro</h4>
                  <p>+100k downloads em 6 meses</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600" alt="Dashboard" />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h4>Dashboard Analytics</h4>
                  <p>BI em tempo real para tomada de decisões</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>O que nossos clientes dizem</h2>
            <p>Depoimentos reais de empresas que transformaram seus negócios conosco</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-text">
                "O sistema desenvolvido pela TechFlow revolucionou nossa operação. Aumentamos a produtividade em 200% e reduzimos custos significativamente."
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>Carlos Silva</h5>
                  <p>CEO, InnovaCorp</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                "Profissionalismo excepcional. Entregaram exatamente o que prometeram, no prazo e com qualidade superior. Recomendo fortemente."
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>Ana Costa</h5>
                  <p>CTO, TechStart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Pronto para transformar seu negócio?</h2>
          <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar o próximo nível com tecnologia de ponta.</p>
          <a href="https://wa.me/5511965526709" className="final-cta">Falar com Especialista</a>
        </div>
      </section>
    </>
  )
}