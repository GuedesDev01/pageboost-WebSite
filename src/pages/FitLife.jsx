import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function FitLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const elements = document.querySelectorAll(".stat, .program, .testimonial");

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
        body { background:#000; color:#fff; font-family:system-ui,-apple-system,sans-serif; line-height:1.5 }
        
        .container { max-width:1200px; margin:0 auto; padding:0 1rem }
        
        .nav { position:fixed; top:0; width:100%; padding:1rem 0; background:rgba(0,0,0,0.95); z-index:1000; border-bottom:1px solid #00ff88 }
        .nav-content { display:flex; justify-content:space-between; align-items:center }
        .logo { font-size:1.5rem; font-weight:800; color:#00ff88 }
        .back-btn { color:#888; text-decoration:none; font-size:0.9rem }
        
        .hero { min-height:100vh; background:linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200') center/cover; display:flex; align-items:center; text-align:center; padding-top:80px }
        .hero-content { padding:2rem 0 }
        .hero-badge { display:inline-block; background:rgba(0,255,136,0.2); color:#00ff88; padding:0.5rem 1rem; border-radius:25px; font-size:0.9rem; margin-bottom:1rem; border:1px solid #00ff88 }
        .hero h1 { font-size:clamp(2rem, 8vw, 4rem); font-weight:900; margin-bottom:1rem; color:#fff; text-transform:uppercase }
        .hero .highlight { color:#00ff88 }
        .hero p { font-size:clamp(1rem, 4vw, 1.3rem); margin-bottom:2rem; color:#ddd; max-width:600px; margin-left:auto; margin-right:auto }
        .hero-cta { display:inline-block; background:#00ff88; color:#000; padding:1rem 2rem; border-radius:8px; text-decoration:none; font-weight:800; font-size:1.1rem; text-transform:uppercase; transition:all 0.3s }
        .hero-cta:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(0,255,136,0.3) }
        
        .stats { padding:4rem 0; background:#111 }
        .stats-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:2rem; text-align:center }
        .stat { padding:30px 20px; opacity:0; transform:translateY(30px); transition:all 0.8s ease }
        .stat.show { opacity:1; transform:translateY(0) }
        .stat h3 { font-size:clamp(2rem, 6vw, 3rem); color:#00ff88; margin-bottom:0.5rem; font-weight:900 }
        .stat p { color:#ccc; font-size:0.9rem; text-transform:uppercase }
        
        .programs { padding:6rem 0; background:#000 }
        .section-header { text-align:center; margin-bottom:4rem }
        .section-header h2 { font-size:clamp(2rem, 6vw, 3rem); color:#00ff88; margin-bottom:1rem; font-weight:800 }
        .section-header p { font-size:1.1rem; color:#888; max-width:600px; margin:0 auto }
        .programs-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem }
        .program { background:#1a1a1a; border-radius:15px; overflow:hidden; transition:all 0.3s; border:2px solid transparent; opacity:0; transform:translateY(30px) }
        .program.show { opacity:1; transform:translateY(0) }
        .program:hover { transform:translateY(-5px); border-color:#00ff88 }
        .program-image { height:200px; overflow:hidden }
        .program-image img { width:100%; height:100%; object-fit:cover }
        .program-content { padding:1.5rem }
        .program-badge { display:inline-block; background:#00ff88; color:#000; padding:0.3rem 0.8rem; border-radius:15px; font-size:0.8rem; font-weight:700; margin-bottom:1rem }
        .program h3 { font-size:1.3rem; margin-bottom:1rem; color:#fff }
        .program p { color:#aaa; margin-bottom:1rem }
        .program-features { list-style:none; margin-bottom:1.5rem }
        .program-features li { color:#ccc; margin-bottom:0.5rem; padding-left:1rem; position:relative }
        .program-features li::before { content:'✓'; position:absolute; left:0; color:#00ff88; font-weight:bold }
        .program-price { font-size:1.5rem; color:#00ff88; font-weight:900; margin-bottom:1rem }
        .program-cta { display:block; background:#00ff88; color:#000; padding:0.8rem; text-align:center; text-decoration:none; font-weight:700; border-radius:8px; transition:background 0.3s }
        .program-cta:hover { background:#00cc6a }
        
        .testimonials { padding:6rem 0; background:#111 }
        .testimonials-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:2rem; margin-top:3rem }
        .testimonial { background:#1a1a1a; padding:2rem; border-radius:15px; border-left:5px solid #00ff88; opacity:0; transform:translateY(30px); transition:all 0.8s ease }
        .testimonial.show { opacity:1; transform:translateY(0) }
        .testimonial-text { font-size:1rem; color:#ccc; margin-bottom:1.5rem; font-style:italic }
        .testimonial-author { display:flex; align-items:center; gap:1rem }
        .author-avatar { width:50px; height:50px; border-radius:50%; background:url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100') center/cover }
        .author-info h5 { color:#fff; font-size:1rem; margin-bottom:0.3rem }
        .author-info p { color:#888; font-size:0.9rem }
        .author-result { color:#00ff88; font-size:0.8rem; font-weight:600; margin-top:0.3rem }
        
        .cta-section { padding:5rem 0; background:linear-gradient(135deg, #00ff88, #00cc6a); text-align:center }
        .cta-section h2 { font-size:clamp(2rem, 6vw, 3rem); color:#000; margin-bottom:1rem; font-weight:900 }
        .cta-section p { font-size:1.2rem; color:#000; margin-bottom:2rem; opacity:0.8 }
        .final-cta { background:#000; color:#00ff88; padding:1.2rem 3rem; border-radius:8px; text-decoration:none; font-weight:800; font-size:1.2rem; display:inline-block; transition:all 0.3s; text-transform:uppercase }
        .final-cta:hover { background:#00ff88; color:#000; transform:translateY(-2px) }
        
        @media (max-width:768px) {
          .container { padding:0 0.5rem }
          .hero { padding-top:100px }
          .hero-content { padding:1rem 0 }
          .stats { padding:3rem 0 }
          .programs { padding:4rem 0 }
          .testimonials { padding:4rem 0 }
          .cta-section { padding:4rem 0 }
          .programs-grid { grid-template-columns:1fr }
          .testimonials-grid { grid-template-columns:1fr }
        }
      `}</style>

      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">FitLife</div>
            <Link to="/" className="back-btn">← Voltar</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Transformação Garantida</div>
            <h1>Transforme seu <span className="highlight">corpo</span> em 90 dias</h1>
            <p>Método comprovado que já transformou mais de 2.000 vidas. Acompanhamento profissional personalizado com resultados visíveis em 30 dias.</p>
            <a href="https://wa.me/5511965526709" className="hero-cta">Quero me transformar</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>2000+</h3>
              <p>Vidas Transformadas</p>
            </div>
            <div className="stat">
              <h3>-15kg</h3>
              <p>Média de Perda</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Taxa de Sucesso</p>
            </div>
            <div className="stat">
              <h3>30</h3>
              <p>Dias para Resultados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          <div className="section-header">
            <h2>Programas de Transformação</h2>
            <p>Escolha o programa ideal para seus objetivos e comece sua jornada de transformação hoje mesmo</p>
          </div>
          <div className="programs-grid">
            <div className="program">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" alt="Programa Iniciante" />
              </div>
              <div className="program-content">
                <div className="program-badge">Iniciante</div>
                <h3>FitStart</h3>
                <p>Perfeito para quem está começando a jornada fitness e quer resultados sólidos.</p>
                <ul className="program-features">
                  <li>Treinos 3x por semana</li>
                  <li>Plano alimentar básico</li>
                  <li>Suporte via WhatsApp</li>
                  <li>Acompanhamento mensal</li>
                </ul>
                <div className="program-price">R$ 197/mês</div>
                <a href="https://wa.me/5511965526709" className="program-cta">Escolher Plano</a>
              </div>
            </div>
            <div className="program">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400" alt="Programa Intermediário" />
              </div>
              <div className="program-content">
                <div className="program-badge">Intermediário</div>
                <h3>FitPro</h3>
                <p>Para quem já treina e quer acelerar os resultados com acompanhamento profissional.</p>
                <ul className="program-features">
                  <li>Treinos 5x por semana</li>
                  <li>Nutrição personalizada</li>
                  <li>Suporte diário</li>
                  <li>Avaliações semanais</li>
                  <li>Suplementação inclusa</li>
                </ul>
                <div className="program-price">R$ 397/mês</div>
                <a href="https://wa.me/5511965526709" className="program-cta">Escolher Plano</a>
              </div>
            </div>
            <div className="program">
              <div className="program-image">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" alt="Programa Elite" />
              </div>
              <div className="program-content">
                <div className="program-badge">Elite</div>
                <h3>FitElite</h3>
                <p>Programa premium com acompanhamento 1:1 para resultados extraordinários.</p>
                <ul className="program-features">
                  <li>Personal trainer exclusivo</li>
                  <li>Nutrição + suplementos</li>
                  <li>Suporte 24/7</li>
                  <li>Avaliações diárias</li>
                  <li>Garantia de resultado</li>
                </ul>
                <div className="program-price">R$ 797/mês</div>
                <a href="https://wa.me/5511965526709" className="program-cta">Escolher Plano</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Histórias de Sucesso</h2>
            <p>Veja o que nossos alunos falam sobre sua transformação com o FitLife</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-text">
                Em 90 dias perdi 18kg e ganhei uma nova vida. O acompanhamento é incrível, me senti apoiada em cada passo da jornada. Hoje me olho no espelho e não acredito na transformação!
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h5>Marina Santos</h5>
                  <p>Advogada, 32 anos</p>
                  <div className="author-result">-18kg em 90 dias</div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                Sempre fui sedentário e achei que nunca conseguiria. Com o FitLife descobri que é possível sim! Perdi 22kg, ganhei músculo e principalmente, ganhei saúde e qualidade de vida.
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" style={{background: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100') center/cover"}}></div>
                <div className="author-info">
                  <h5>Roberto Silva</h5>
                  <p>Engenheiro, 45 anos</p>
                  <div className="author-result">-22kg em 120 dias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Sua transformação começa agora!</h2>
          <p>Não deixe para amanhã o que pode mudar sua vida hoje. Junte-se a mais de 2.000 pessoas que já transformaram seus corpos e suas vidas conosco.</p>
          <a href="https://wa.me/5511965526709" className="final-cta">Garantir minha vaga</a>
        </div>
      </section>
    </>
  )
}