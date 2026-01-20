import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function FitLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box }
        body { background:#000; color:#fff; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; line-height:1.6 }
        
        .nav { position:fixed; top:0; width:100%; padding:15px 5%; background:rgba(0,0,0,0.95); z-index:1000; border-bottom:1px solid #00ff88 }
        .nav-content { display:flex; justify-content:space-between; align-items:center; max-width:1200px; margin:0 auto }
        .logo { font-size:1.8rem; font-weight:800; color:#00ff88; text-transform:uppercase }
        .nav-links { display:flex; gap:30px }
        .nav-links a { color:#ccc; text-decoration:none; font-size:0.95rem; font-weight:500; transition:color 0.3s }
        .nav-links a:hover { color:#00ff88 }
        .back-btn { color:#888; text-decoration:none; font-size:0.9rem }
        
        .hero { min-height:100vh; background:linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200') center/cover; display:flex; align-items:center; justify-content:center; text-align:center; position:relative }
        .hero::before { content:''; position:absolute; top:0; left:0; right:0; bottom:0; background:radial-gradient(circle at center, rgba(0,255,136,0.2), transparent 70%) }
        
        .hero-content { position:relative; z-index:2; max-width:800px; padding:0 20px }
        .hero-badge { display:inline-block; background:rgba(0,255,136,0.2); color:#00ff88; padding:8px 20px; border-radius:25px; font-size:0.9rem; font-weight:600; margin-bottom:20px; border:1px solid #00ff88 }
        .hero h1 { font-size:4.5rem; font-weight:900; margin-bottom:25px; color:#fff; text-transform:uppercase; letter-spacing:2px; text-shadow:2px 2px 4px rgba(0,0,0,0.5) }
        .hero .highlight { color:#00ff88 }
        .hero p { font-size:1.4rem; margin-bottom:40px; color:#ddd; line-height:1.6; max-width:600px; margin-left:auto; margin-right:auto }
        .hero-cta { display:inline-block; background:#00ff88; color:#000; padding:20px 50px; border-radius:8px; text-decoration:none; font-weight:800; font-size:1.3rem; text-transform:uppercase; transition:all 0.3s; box-shadow:0 0 30px rgba(0,255,136,0.3) }
        .hero-cta:hover { transform:translateY(-3px); box-shadow:0 0 50px rgba(0,255,136,0.5) }
        
        .stats { padding:80px 5%; background:#111; border-top:3px solid #00ff88 }
        .stats-container { max-width:1000px; margin:0 auto }
        .stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:40px; text-align:center }
        .stat { padding:30px 20px }
        .stat h3 { font-size:3.2rem; color:#00ff88; margin-bottom:10px; font-weight:900 }
        .stat p { color:#ccc; font-size:1rem; text-transform:uppercase; letter-spacing:1px; font-weight:500 }
        
        .programs { padding:120px 5%; background:#000 }
        .programs-container { max-width:1200px; margin:0 auto }
        .section-header { text-align:center; margin-bottom:80px }
        .section-header h2 { font-size:3rem; color:#00ff88; margin-bottom:20px; font-weight:800; text-transform:uppercase }
        .section-header p { font-size:1.2rem; color:#888; max-width:600px; margin:0 auto; line-height:1.6 }
        .programs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:40px }
        .program { background:#1a1a1a; border-radius:15px; overflow:hidden; transition:all 0.3s; border:2px solid transparent }
        .program:hover { transform:translateY(-10px); border-color:#00ff88; box-shadow:0 20px 40px rgba(0,255,136,0.1) }
        .program-image { height:200px; overflow:hidden }
        .program-image img { width:100%; height:100%; object-fit:cover; transition:transform 0.3s }
        .program:hover .program-image img { transform:scale(1.1) }
        .program-content { padding:30px }
        .program-badge { display:inline-block; background:#00ff88; color:#000; padding:5px 12px; border-radius:15px; font-size:0.8rem; font-weight:700; margin-bottom:15px; text-transform:uppercase }
        .program h3 { font-size:1.5rem; margin-bottom:15px; color:#fff; font-weight:700 }
        .program p { color:#aaa; line-height:1.6; margin-bottom:20px }
        .program-features { list-style:none; margin-bottom:25px }
        .program-features li { color:#ccc; margin-bottom:8px; padding-left:20px; position:relative }
        .program-features li::before { content:'✓'; position:absolute; left:0; color:#00ff88; font-weight:bold }
        .program-price { font-size:1.8rem; color:#00ff88; font-weight:900; margin-bottom:20px }
        .program-cta { display:block; background:#00ff88; color:#000; padding:15px; text-align:center; text-decoration:none; font-weight:700; border-radius:8px; transition:all 0.3s }
        .program-cta:hover { background:#00cc6a }
        
        .transformation { padding:120px 5%; background:#111 }
        .transformation-container { max-width:1200px; margin:0 auto }
        .transformation-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center }
        .transformation-content h2 { font-size:2.8rem; color:#00ff88; margin-bottom:25px; font-weight:800 }
        .transformation-content p { font-size:1.2rem; color:#ccc; line-height:1.7; margin-bottom:30px }
        .transformation-list { list-style:none; margin-bottom:40px }
        .transformation-list li { color:#fff; margin-bottom:15px; padding-left:30px; position:relative; font-size:1.1rem }
        .transformation-list li::before { content:'🔥'; position:absolute; left:0; font-size:1.2rem }
        .transformation-cta { display:inline-block; background:#00ff88; color:#000; padding:18px 40px; border-radius:8px; text-decoration:none; font-weight:700; font-size:1.1rem; transition:all 0.3s }
        .transformation-cta:hover { transform:translateY(-2px) }
        .transformation-image img { width:100%; height:400px; object-fit:cover; border-radius:15px; box-shadow:0 20px 40px rgba(0,0,0,0.3) }
        
        .testimonials { padding:120px 5%; background:#000 }
        .testimonials-container { max-width:1000px; margin:0 auto }
        .testimonials-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:40px; margin-top:60px }
        .testimonial { background:#1a1a1a; padding:40px; border-radius:15px; border-left:5px solid #00ff88; position:relative }
        .testimonial::before { content:'"'; position:absolute; top:10px; left:20px; font-size:4rem; color:#00ff88; opacity:0.3 }
        .testimonial-text { font-size:1.1rem; color:#ccc; margin-bottom:25px; font-style:italic; line-height:1.7; position:relative; z-index:1 }
        .testimonial-author { display:flex; align-items:center; gap:15px }
        .author-avatar { width:60px; height:60px; border-radius:50%; background:url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100') center/cover }
        .author-info h5 { color:#fff; font-size:1.1rem; margin-bottom:5px; font-weight:600 }
        .author-info p { color:#888; font-size:0.9rem }
        .author-result { color:#00ff88; font-size:0.9rem; font-weight:600; margin-top:5px }
        
        .cta-section { padding:100px 5%; background:linear-gradient(135deg, #00ff88, #00cc6a); text-align:center }
        .cta-container { max-width:800px; margin:0 auto }
        .cta-section h2 { font-size:3rem; color:#000; margin-bottom:20px; font-weight:900; text-transform:uppercase }
        .cta-section p { font-size:1.3rem; color:#000; margin-bottom:40px; line-height:1.6; opacity:0.8 }
        .final-cta { background:#000; color:#00ff88; padding:25px 60px; border-radius:8px; text-decoration:none; font-weight:800; font-size:1.3rem; display:inline-block; transition:all 0.3s; text-transform:uppercase; border:3px solid #000 }
        .final-cta:hover { background:#00ff88; color:#000; transform:translateY(-3px) }
        
        @media (max-width:768px) {
          .hero h1 { font-size:3rem }
          .stats-grid { grid-template-columns:repeat(2,1fr) }
          .programs-grid { grid-template-columns:1fr }
          .transformation-grid { grid-template-columns:1fr; gap:40px }
          .testimonials-grid { grid-template-columns:1fr }
          .nav-links { display:none }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-content">
          <div className="logo">FitLife</div>
          <div className="nav-links">
            <a href="#programas">Programas</a>
            <a href="#resultados">Resultados</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
          <Link to="/" className="back-btn">← Portfólio</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Transformação Garantida</div>
          <h1>Transforme seu <span className="highlight">corpo</span> em 90 dias</h1>
          <p>Método comprovado que já transformou mais de 2.000 vidas. Acompanhamento profissional personalizado com resultados visíveis em 30 dias ou seu dinheiro de volta.</p>
          <a href="https://wa.me/5511965526709" className="hero-cta">Quero me transformar</a>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
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

      <section className="programs" id="programas">
        <div className="programs-container">
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

      <section className="transformation" id="resultados">
        <div className="transformation-container">
          <div className="transformation-grid">
            <div className="transformation-content">
              <h2>Resultados Comprovados</h2>
              <p>Nosso método exclusivo combina ciência, tecnologia e acompanhamento humano para garantir sua transformação física e mental.</p>
              <ul className="transformation-list">
                <li>Perda de gordura acelerada e sustentável</li>
                <li>Ganho de massa muscular definida</li>
                <li>Aumento da energia e disposição</li>
                <li>Melhora da autoestima e confiança</li>
                <li>Hábitos saudáveis para toda vida</li>
              </ul>
              <a href="https://wa.me/5511965526709" className="transformation-cta">Ver Mais Resultados</a>
            </div>
            <div className="transformation-image">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600" alt="Transformação FitLife" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="depoimentos">
        <div className="testimonials-container">
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

      <section className="cta-section" id="contato">
        <div className="cta-container">
          <h2>Sua transformação começa agora!</h2>
          <p>Não deixe para amanhã o que pode mudar sua vida hoje. Junte-se a mais de 2.000 pessoas que já transformaram seus corpos e suas vidas conosco.</p>
          <a href="https://wa.me/5511965526709" className="final-cta">Garantir minha vaga</a>
        </div>
      </section>
    </>
  )
}
