"use client";
import { useMemo, useState, useEffect } from "react";
import { BRAND, T } from "@/components/brand";

export default function Home(){
  const [lang,setLang]=useState("en"); // default English
  const t = useMemo(()=>T[lang],[lang]);
  useEffect(()=>{ document.documentElement.lang=lang; },[lang]);

  return (
    <main>
      <header className="header">
        <div className="container header-in">
          <div className="brand">
            <img src={BRAND.logo} alt="logo"/>
            <span>{BRAND.name}</span>
          </div>
          <div className="lang-actions">
            <button className="btn" onClick={()=>setLang(lang==='en'?'nl':'en')}>{t.switch}</button>
            <a className="btn btn-primary" href={BRAND.bookingUrl} target="_blank" rel="noreferrer">{t.cta}</a>
          </div>
        </div>
      </header>

      <section className="hero container">
        <div className="about">
          <div>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSubtitle}</p>
            <p className="muted" style={{fontSize:12}}>{t.addressLine(BRAND.address, BRAND.phone)}</p>
            <div className="center-book">
              <a className="btn btn-primary" href={BRAND.bookingUrl} target="_blank" rel="noreferrer" style={{padding:'14px 22px', fontWeight:600}}>
                {t.cta}
              </a>
            </div>
          </div>
          <div className="card"><img src="/images/lobby.jpg" alt="Salon lobby"/></div>
        </div>
      </section>

      <section className="section container">
        <h2 style={{margin:'0 0 12px'}}>{t.gallery}</h2>
        <div className="grid">
          <div className="card"><img src="/images/nails1.jpg" alt="Nails 1"/></div>
          <div className="card"><img src="/images/nails2.jpg" alt="Nails 2"/></div>
          <div className="card"><img src="/images/studio.jpg" alt="Studio"/></div>
        </div>
      </section>

      <section className="section container">
        <h2 style={{margin:'0 0 12px'}}>{t.about}</h2>
        <p className="muted" style={{margin:0}}>{t.aboutText}</p>
      </section>

      <section className="section container">
        <h2 style={{margin:'0 0 12px'}}>{t.contact}</h2>
        <p className="muted" style={{margin:0}}>{t.address}: {BRAND.address}</p>
        <p className="muted" style={{margin:0}}>{t.phone}: {BRAND.phone}</p>
        <p className="muted" style={{margin:0}}>{t.insta}: <a href={BRAND.instagram} target="_blank" rel="noreferrer">@nailbysahar</a></p>
      </section>

      <footer>
        <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
          <div className="muted">© {new Date().getFullYear()} {BRAND.name}</div>
          <div className="muted" style={{display:'flex',gap:12}}>
            <a href="#privacy">{t.footerPrivacy}</a>
            <a href="#terms">{t.footerTerms}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
