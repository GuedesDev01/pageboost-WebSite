import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function AutoPrime() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box }
        body { background:#0d0d0d; color:#fff; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; line-height:1.6 }
        
        .header { position:fixed; top:0; width:100%; padding:20px 5%; background:rgba(13,13,13,0.98); z-index:1000; border-bottom:2px solid #dc2626 }
        .header-content { display:flex; justify-content:space-between; align-items:center; max-width:1200px; margin:0 auto }
        .logo { font-size:2rem; font-weight:300; color:#dc2626; letter-spacing:2px; font-style:italic }
        .nav-links { display:flex; gap:35px }
        .nav-links a { color:#ccc; text-decoration:none; font-size:0.95rem; font-weight:400; transition:color 0.3s; letter-spacing:1px }
        .nav-links a:hover { color:#dc2626 }
        .back-nav { color:#999; text-decoration:none; font-size:0.9rem }
        
        .hero { min-height:100vh; background:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200') center/cover; display:flex; align-items:center; padding:0 5%; position:relative }
        .hero::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:linear-gradient(45deg, rgba(220,38,38,0.1), transparent 60%) }
        
        .hero-container { position:relative; z-index:2; max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center }
        .hero-text { padding-right:40px }
        .hero-badge { display:inline-block; background:rgba(220,38,38,0.2); color:#dc2626; padding:8px 20px; border-radius:25px; font-size:0.9rem; font-weight:500; margin-bottom:20px; border:1px solid #dc2626; letter-spacing:1px }
        .hero-text h1 { font-size:4.2rem; line-height:1.1; margin-bottom:25px; font-weight:300; color:#dc2626; letter-spacing:1px }
        .hero-text .subtitle { font-size:1.5rem; color:#ccc; margin-bottom:30px; font-style:italic; font-weight:300 }
        .hero-text p { font-size:1.2rem; color:#aaa; line-height:1.7; margin-bottom:45px }
        .hero-cta-group { display:flex; gap:20px }
        .premium-btn { background:#dc2626; color:#fff; padding:18px 40px; border-radius:6px; text-decoration:none; font-weight:600; font-size:1.1rem; text-transform:uppercase; letter-spacing:1px; transition:all 0.3s }
        .premium-btn:hover { background:#b91c1c; transform:translateY(-2px) }
        .secondary-btn { border:2px solid #dc2626; color:#dc2626; padding:16px 40px; border-radius:6px; text-decoration:none; font-weight:600; font-size:1.1rem; text-transform:uppercase; letter-spacing:1px; transition:all 0.3s }
        .secondary-btn:hover { background:#dc2626; color:#fff }
        
        .hero-visual { position:relative }
        .hero-visual img { width:100%; height:450px; object-fit:cover; border-radius:10px; box-shadow:0 25px 60px rgba(0,0,0,0.4) }
        .luxury-badge { position:absolute; top:25px; right:25px; background:#dc2626; color:#fff; padding:12px 24px; border-radius:30px; font-size:0.85rem; font-weight:700; text-transform:uppercase; letter-spacing:1px }
        
        .stats { padding:100px 5%; background:#111; border-top:3px solid #dc2626 }
        .stats-container { max-width:1000px; margin:0 auto }
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:50px; text-align:center }
        .stat { padding:30px 20px }
        .stat h3 { font-size:3rem; color:#dc2626; margin-bottom:15px; font-weight:300 }
        .stat p { color:#ccc; font-size:1rem; text-transform:uppercase; letter-spacing:1px; font-weight:400 }
        
        .services { padding:120px 5%; background:#0d0d0d }
        .services-container { max-width:1200px; margin:0 auto }
        .section-header { text-align:center; margin-bottom:80px }
        .section-header h2 { font-size:3rem; color:#dc2626; margin-bottom:20px; font-weight:300; letter-spacing:1px }
        .section-header p { font-size:1.2rem; color:#888; max-width:600px; margin:0 auto; line-height:1.6; font-style:italic }
        .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:40px }
        .service { background:#1a1a1a; padding:40px 30px; border-radius:12px; text-align:center; border:1px solid #333; transition:all 0.3s; position:relative }
        .service::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:#dc2626; transform:scaleX(0); transition:transform 0.3s }
        .service:hover::before { transform:scaleX(1) }
        .service:hover { transform:translateY(-5px); border-color:#dc2626 }
        .service-icon { font-size:3rem; margin-bottom:25px }
        .service h3 { font-size:1.4rem; margin-bottom:15px; color:#dc2626; font-weight:400; letter-spacing:1px }
        .service p { color:#bbb; line-height:1.6; font-size:0.95rem }
        
        .gallery { padding:120px 5%; background:#111 }
        .gallery-container { max-width:1200px; margin:0 auto }
        .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; margin-top:60px }
        .gallery-item { position:relative; border-radius:12px; overflow:hidden; height:300px }
        .gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.3s }
        .gallery-overlay { position:absolute; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s }
        .gallery-item:hover .gallery-overlay { opacity:1 }
        .gallery-item:hover img { transform:scale(1.05) }
        .gallery-content { text-align:center; color:#fff }
        .gallery-content h4 { font-size:1.3rem; margin-bottom:10px; color:#dc2626 }
        .gallery-content p { font-size:0.95rem; color:#ccc }
        
        .testimonials { padding:120px 5%; background:#0d0d0d }
        .testimonials-container { max-width:1000px; margin:0 auto }
        .testimonials-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:40px; margin-top:60px }
        .testimonial { background:#1a1a1a; padding:40px; border-radius:12px; border-left:4px solid #dc2626; position:relative }
        .testimonial::before { content:'"'; position:absolute; top:10px; left:20px; font-size:4rem; color:#dc2626; opacity:0.2; font-style:italic }
        .testimonial-text { font-size:1.1rem; color:#ccc; margin-bottom:25px; font-style:italic; line-height:1.7; position:relative; z-index:1 }
        .testimonial-author { display:flex; align-items:center; gap:15px }
        .author-avatar { width:60px; height:60px; border-radius:50%; background:url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100') center/cover; border:2px solid #dc2626 }
        .author-info h5 { color:#fff; font-size:1.1rem; margin-bottom:5px; font-weight:500 }
        .author-info p { color:#888; font-size:0.9rem; font-style:italic }
        .service-info { color:#dc2626; font-size:0.85rem; font-weight:500; margin-top:5px }
        
        .cta-section { padding:120px 5%; background:linear-gradient(135deg, #dc2626, #b91c1c); text-align:center }
        .cta-container { max-width:800px; margin:0 auto }
        .cta-section h2 { font-size:3.2rem; color:#fff; margin-bottom:25px; font-weight:300; letter-spacing:1px }
        .cta-section p { font-size:1.3rem; color:#fff; margin-bottom:45px; line-height:1.6; opacity:0.9; font-style:italic }
        .final-cta { background:#fff; color:#dc2626; padding:25px 60px; border-radius:6px; text-decoration:none; font-weight:600; font-size:1.3rem; display:inline-block; transition:all 0.3s; text-transform:uppercase; letter-spacing:1px; border:3px solid #fff }
        .final-cta:hover { background:#dc2626; color:#fff; transform:translateY(-3px) }
        
        @media (max-width:768px) {
          .hero-container { grid-template-columns:1fr; gap:40px; text-align:center }
          .hero-text { padding-right:0 }
          .hero-text h1 { font-size:3rem }
          .hero-cta-group { flex-direction:column; align-items:center }
          .stats-grid { grid-template-columns:repeat(2,1fr) }
          .services-grid { grid-template-columns:1fr }
          .gallery-grid { grid-template-columns:1fr }
          .testimonials-grid { grid-template-columns:1fr }
          .nav-links { display:none }
        }
      `}</style>

      <header className="header">
        <div className="header-content">
          <div className="logo">AutoPrime</div>
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
          <Link to="/" className="back-nav">← Portfólio</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-badge">Estética Automotiva Premium</div>
            <h1>Seu carro impecável</h1>
            <div className="subtitle">Cuidado profissional que seu veículo merece</div>
            <p>Especializados em estética automotiva de alto padrão. Oferecemos serviços completos de lavagem, enceramento, vitrificação e detalhamento para manter seu veículo sempre perfeito.</p>
            <div className="hero-cta-group">
              <a href="https://wa.me/5511965526709" className="premium-btn">Agendar Serviço</a>
              <a href="#servicos" className="secondary-btn">Ver Serviços</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600" alt="Estética Automotiva" />
            <div className="luxury-badge">Premium</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat">
              <h3>2000+</h3>
              <p>Carros Atendidos</p>
            </div>
            <div className="stat">
              <h3>8</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfação Garantida</p>
            </div>
            <div className="stat">
              <h3>24h</h3>
              <p>Agendamento Rápido</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="services-container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Tratamentos especializados para manter seu veículo sempre impecável</p>
          </div>
          <div className="services-grid">
            <div className="service">
              <div className="service-icon">💧</div>
              <h3>Lavagem Completa</h3>
              <p>Lavagem externa e interna com produtos premium, incluindo pneus, rodas e acabamentos especiais para um resultado impecável.</p>
            </div>
            <div className="service">
              <div className="service-icon">✨</div>
              <h3>Enceramento Premium</h3>
              <p>Aplicação de cera de carnauba ou sintética de alta qualidade para proteção e brilho duradouro da pintura.</p>
            </div>
            <div className="service">
              <div className="service-icon">🕰️</div>
              <h3>Vitrificação</h3>
              <p>Tratamento de vitrificação cerâmica para proteção máxima contra riscos, UV e intemperies por até 2 anos.</p>
            </div>
            <div className="service">
              <div className="service-icon">🧩</div>
              <h3>Detalhamento Interno</h3>
              <p>Limpeza profunda de bancos, painel, carpetes e acabamentos internos com produtos específicos para cada material.</p>
            </div>
            <div className="service">
              <div className="service-icon">🔧</div>
              <h3>Polimento Técnico</h3>
              <p>Remoção de riscos, hologramas e imperfeicões da pintura com equipamentos profissionais e compostos de alta qualidade.</p>
            </div>
            <div className="service">
              <div className="service-icon">🚗</div>
              <h3>Proteção Completa</h3>
              <p>Pacote completo incluindo PPF, vitrificação, tratamento de couro e proteção de rodas para máxima durabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="galeria">
        <div className="gallery-container">
          <div className="section-header">
            <h2>Nossos Trabalhos</h2>
            <p>Veja a qualidade e perfeição dos nossos serviços em ação</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400" alt="Lavagem Premium" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Lavagem Premium</h4>
                  <p>Resultado impecável com produtos de alta qualidade</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt="Enceramento" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Enceramento</h4>
                  <p>Brilho e proteção duradoura para sua pintura</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" alt="Detalhamento" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Detalhamento</h4>
                  <p>Cuidado nos mínimos detalhes para perfeição total</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400" alt="Vitrificação" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Vitrificação</h4>
                  <p>Proteção cerâmica de última geração</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400" alt="Polimento" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Polimento</h4>
                  <p>Remoção de riscos e restauração do brilho original</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400" alt="Acabamento" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <h4>Acabamento</h4>
                  <p>Finalização perfeita em todos os detalhes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="depoimentos">
        <div className="testimonials-container">
          <div className="section-header">
            <h2>Clientes Satisfeitos</h2>
            <p>Veja o que nossos clientes falam sobre nossos serviços</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-text">
                Serviço excepcional! Meu carro ficou como novo após a vitrificação. A equipe é muito profissional e o resultado superou minhas expectativas. Recomendo sem hesitar!
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h5>Carlos Mendes</h5>
                  <p>Empresário</p>
                  <div className="service-info">Vitrificação Premium</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                Atendimento impecável e resultado incrível! Faço a manutenção do meu carro aqui há 2 anos e sempre saio satisfeita. Vale cada centavo investido!
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: "url('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100') center/cover"}}></div>
                <div className="author-info">
                  <h5>Ana Silva</h5>
                  <p>Advogada</p>
                  <div className="service-info">Cliente Fidelizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="cta-container">
          <h2>Agende seu horário</h2>
          <p>Deixe seu veículo nas mãos de especialistas. Entre em contato e agende seu serviço de estética automotiva premium.</p>
          <a href="https://wa.me/5511965526709" className="final-cta">Agendar Agora</a>
        </div>
      </section>
    </>
  )
}
