"use client";
import { useMemo, useState, useEffect } from "react";
import { BRAND, T, SERVICES } from "../components/brand";

export default function Home(){
  const [lang,setLang]=useState("en");
  const [showBooking,setShowBooking]=useState(false);
  const [selectedService,setSelectedService]=useState(null);
  const t = useMemo(()=>T[lang],[lang]);
  useEffect(()=>{ document.documentElement.lang=lang; },[lang]);

  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container header-in">
          <div className="brand">
            <img src={BRAND.logo} alt="logo" style={{height:36,borderRadius:8}}/>
            <span style={{fontWeight:700}}> {BRAND.name} </span>
          </div>
          <div className="lang-actions">
            <button className="btn" onClick={()=>setLang(lang==="en"?"nl":"en")}>{t.switch}</button>
            <button className="btn btn-primary" onClick={()=>{setSelectedService(null);setShowBooking(true);}}>
              {t.cta}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container">
        <div className="about">
          <div>
            <h1>{t.heroTitle}</h1>
            <p className="muted">{t.heroSubtitle}</p>
            <p className="muted" style={{fontSize:12}}>{t.addressLine(BRAND.address, BRAND.phone)}</p>
            <div className="center-book">
              <button className="btn btn-primary" onClick={()=>{setSelectedService(null);setShowBooking(true);}}>
                {t.cta}
              </button>
            </div>
          </div>
          <div className="card"><img src="/images/lobby.jpg" alt="Salon"/></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 style={{margin:"0 0 12px"}}>{t.services}</h2>
          <div className="grid">
            {SERVICES.map(s=>(
              <div key={s.id} className="card" style={{padding:16}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:8}}>
                  <div style={{fontWeight:600}}>{s.title}</div>
                  <div className="muted" style={{fontSize:12}}>{t.duration}: {s.duration}</div>
                </div>
                {s.desc && <p className="muted" style={{margin:"8px 0 0"}}>{s.desc}</p>}
                <div style={{marginTop:12}}>
                  <button className="btn btn-primary" onClick={()=>{setSelectedService(s.id); setShowBooking(true);}}>
                    {t.bookThis}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section container">
        <h2 style={{margin:"0 0 12px"}}>{t.gallery}</h2>
        <div className="grid">
          <div className="card"><img src="/images/nails1.jpg" alt="Nails 1"/></div>
          <div className="card"><img src="/images/nails2.jpg" alt="Nails 2"/></div>
          <div className="card"><img src="/images/studio.jpg" alt="Studio"/></div>
        </div>
      </section>

      {/* About */}
      <section className="section container">
        <h2 style={{margin:"0 0 12px"}}>{t.about}</h2>
        <p className="muted" style={{margin:0}}>{t.aboutText}</p>
      </section>

      {/* Contact */}
      <section id="contact" className="section container">
        <h2 style={{margin:"0 0 12px"}}>{t.contact}</h2>
        <p className="muted" style={{margin:0}}>{t.address}: {BRAND.address}</p>
        <p className="muted" style={{margin:0}}>{t.phone}: {BRAND.phone}</p>
        <p className="muted" style={{margin:0}}>{t.email}: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
        <p className="muted" style={{margin:0}}>{t.insta}: <a href={BRAND.instagram} target="_blank" rel="noreferrer">@nailbysaharrrr</a></p>
      </section>

      <footer>
        <div className="container" style={{display:"flex",justifyContent:"space-between"}}>
          <div className="muted">© {new Date().getFullYear()} {BRAND.name}</div>
          <div className="muted" style={{display:"flex",gap:12}}>
            <a href="#privacy">{t.footerPrivacy}</a>
            <a href="#terms">{t.footerTerms}</a>
          </div>
        </div>
      </footer>

      {/* Booking Modal (داخل صفحه) */}
      {showBooking && (
        <div className="modal" role="dialog" aria-modal="true" onClick={()=>setShowBooking(false)}>
          <div className="modal-card" onClick={(e)=>e.stopPropagation()}>
            <div className="modal-head">
              <div style={{fontWeight:600}}>{t.cta}{selectedService ? ` — ${selectedService}` : ""}</div>
              <button className="btn" onClick={()=>setShowBooking(false)}>Close</button>
            </div>
            <div className="modal-body">
              {/* توجه: SimplyBook انتخاب سرویس از طریق URL عمومی نمی‌دهد؛
                 بنابراین فرم رسمی رزرو داخل iframe لود می‌شود. */}
              <iframe title="booking" src={BRAND.bookingUrl} style={{width:"100%",height:"100%",border:"none"}} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
