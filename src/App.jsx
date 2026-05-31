import React from "react";

function Icon({ type, className = "" }) {
  const common = "h-6 w-6 " + className;

  const icons = {
    home: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 10.8 12 3l9 7.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 9.8V21h13V9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 21v-6h5v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heart: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.8 5.6a5.1 5.1 0 0 0-7.2 0L12 7.2l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8.2a5.1 5.1 0 0 0 0-7.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h4l2-4 3 8 2-4h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    shield: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 20 6v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m8.8 12 2.1 2.1 4.6-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    user: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    phone: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    whatsapp: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5.4 18.7 4 22l3.5-1.3A9 9 0 1 0 3 13a8.9 8.9 0 0 0 2.4 5.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.8 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.8 1.8c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.4.8 1 1.5 1.7 2 .8.6 1.5.8 1.8.9.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.7-.1l1.7.8c.3.1.5.3.5.5 0 .3-.2 1.3-.9 1.8-.5.4-1.2.5-2 .4-1.2-.2-2.7-.8-4.4-2.3-1.7-1.5-2.7-3.3-3.1-4.5-.3-.9-.2-1.6.1-2Z" fill="currentColor" />
      </svg>
    ),
    globe: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M3 12h18M12 3c2.2 2.4 3.2 5.4 3.2 9S14.2 18.6 12 21c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    instagram: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.8" cy="7.2" r=".8" fill="currentColor" />
      </svg>
    ),
    pin: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    syringe: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m18 3 3 3M10 11l7-7 3 3-7 7M7 14l3 3M5 19l4-4M3 21l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    flask: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 17h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    stethoscope: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4v5a4 4 0 0 0 8 0V4M4 4h4M12 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 13v2a5 5 0 0 0 10 0v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    clock: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bag: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 7V6a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10v7M8.5 13.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    pulse: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h4l2-5 4 10 3-5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    check: (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="m8 12 2.6 2.6L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return icons[type] || icons.heart;
}

export default function PortalEvdeSaglikWebsite() {
  const phoneNumber = "0546 258 23 03";
  const phoneHref = "tel:05462582303";
  const whatsappLink = "https://wa.me/905462582303?text=Merhaba%2C%20Portal%20Evde%20Sa%C4%9Fl%C4%B1k%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  const services = [
    { icon: "bag", title: "Serum Takma ve Takibi", text: "Ev konforunda kontrollü serum uygulaması ve süreç takibi." },
    { icon: "syringe", title: "Enjeksiyon ve Pansuman", text: "İğne, pansuman ve temel bakım işlemlerinde profesyonel destek." },
    { icon: "flask", title: "Kan Alma / Laboratuvar", text: "Numune alma ve laboratuvar süreçleri için güvenilir hizmet." },
    { icon: "stethoscope", title: "Sonda Takma / Değiştirme", text: "Hasta mahremiyetine dikkat edilerek sonda uygulama hizmeti." },
    { icon: "pulse", title: "EKG Çekimi", text: "Evde EKG çekimi ile hızlı ve pratik sağlık kontrolü." },
  ];

  const features = [
    { icon: "heart", title: "Güvenilir Sağlık Hizmeti" },
    { icon: "home", title: "Evinizde Profesyonel Bakım" },
    { icon: "shield", title: "Tecrübeli Uzman Kadro" },
  ];

  const checks = [
    "Hasta odaklı ve güvenilir yaklaşım",
    "Profesyonel sağlık personeli desteği",
    "Ev konforunda hızlı hizmet",
    "7/24 ulaşılabilir iletişim",
  ];

  console.assert(services.length === 5, "Hizmet sayısı 5 olmalı");
  console.assert(features.length === 3, "Öne çıkan özellik sayısı 3 olmalı");
  console.assert(checks.includes("7/24 ulaşılabilir iletişim"), "7/24 iletişim maddesi bulunmalı");
  console.assert(phoneHref === "tel:05462582303", "Telefon linki 0546 258 23 03 numarasına gitmeli");
  console.assert(whatsappLink.includes("905462582303"), "WhatsApp linki Türkiye ülke koduyla doğru numaraya gitmeli");
  console.assert(typeof Icon === "function", "Icon component tanımlı olmalı");

  return (
    <main className="min-h-screen bg-slate-50 text-[#071a46]">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#007f86]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-br from-[#e9fbff] via-white to-[#007f86]/10" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2 lg:px-10 lg:py-16">
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#002d68] to-[#007f86] shadow-lg">
                <Icon type="home" className="h-11 w-11 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-wide text-[#061747] md:text-6xl">PORTAL</h1>
                <p className="text-lg font-semibold tracking-[0.18em] text-[#006b75]">EVDE SAĞLIK HİZMETLERİ</p>
              </div>
            </div>

            <p className="mb-8 max-w-xl text-xl italic leading-relaxed text-slate-700">
              “Sağlığınız için, her zaman yanınızdayız.”
            </p>

            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-white/85 p-5 text-center shadow-sm backdrop-blur">
                  <Icon type={item.icon} className="mx-auto mb-3 h-9 w-9 text-[#007f86]" />
                  <p className="text-sm font-bold uppercase tracking-wide text-[#071a46]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="mb-6 grid grid-cols-2 gap-4 border-b border-slate-200 pb-5">
              <div className="text-center">
                <Icon type="user" className="mx-auto mb-2 h-10 w-10 text-[#007f86]" />
                <h2 className="text-2xl font-extrabold">Soner T.</h2>
                <p className="font-medium text-[#006b75]">Sağlık Teknikeri</p>
              </div>
              <div className="text-center">
                <Icon type="user" className="mx-auto mb-2 h-10 w-10 text-[#007f86]" />
                <h2 className="text-2xl font-extrabold">Özlem K.</h2>
                <p className="font-medium text-[#006b75]">Hemşire</p>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <a href={phoneHref} className="flex items-center gap-4 rounded-2xl bg-[#061747] p-4 font-black tracking-wider text-white transition hover:bg-[#007f86]">
                <Icon type="phone" className="h-6 w-6" />
                {phoneNumber}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-[#1fbf75] p-4 font-black tracking-wide text-white transition hover:bg-[#15975c]">
                <Icon type="whatsapp" className="h-6 w-6" />
                WhatsApp ile İletişime Geç
              </a>
              <div className="flex items-center gap-4 px-2 text-slate-700">
                <Icon type="globe" className="h-6 w-6 text-[#007f86]" />
                <span>www.portalevdesaglik.com</span>
              </div>
              <div className="flex items-center gap-4 px-2 text-slate-700">
                <Icon type="instagram" className="h-6 w-6 text-[#007f86]" />
                <span>@portalevdesaglik</span>
              </div>
              <div className="flex items-start gap-4 px-2 text-slate-700">
                <Icon type="pin" className="mt-1 h-6 w-6 text-[#007f86]" />
                <span>Hizmet verdiğimiz tüm bölgelere 7/24 ulaşım sağlıyoruz.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#061747] via-[#08245f] to-[#001c46] px-6 py-16 text-white lg:px-10">
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#00a7a5]/25 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-2xl bg-[#007f86] px-7 py-3 text-xl font-black tracking-[0.18em]">HİZMETLERİMİZ</div>
              <h2 className="max-w-3xl text-3xl font-black md:text-5xl">Evde sağlık desteği, bir telefon kadar yakınınızda.</h2>
            </div>
            <div className="rounded-3xl bg-white px-7 py-5 text-[#061747] shadow-xl">
              <div className="flex items-center gap-4">
                <Icon type="clock" className="h-10 w-10 text-[#007f86]" />
                <div>
                  <p className="text-4xl font-black">7/24</p>
                  <p className="font-bold uppercase tracking-widest text-[#007f86]">Hizmetinizdeyiz</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <Icon type={service.icon} className="mb-5 h-11 w-11 text-[#7de0dc]" />
                <h3 className="mb-3 text-xl font-extrabold">{service.title}</h3>
                <p className="leading-relaxed text-slate-200">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 rounded-[2rem] border border-slate-100 bg-slate-50 p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div>
            <h2 className="mb-4 text-3xl font-black md:text-4xl">Neden Portal Evde Sağlık?</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
              Sağlık hizmetini hastanın bulunduğu ortama taşıyarak daha konforlu, hızlı ve güvenilir bir deneyim sunuyoruz. Uzman ekibimizle ihtiyaçlarınıza uygun destek sağlıyoruz.
            </p>
          </div>
          <div className="space-y-4">
            {checks.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <Icon type="check" className="h-6 w-6 text-[#007f86]" />
                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-[#007f86] to-[#061747] p-8 text-white shadow-xl md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#bff8f5]">Acil Yardım / 7/24 Hizmet</p>
              <h2 className="mb-4 text-3xl font-black md:text-5xl">Sağlığınız bizim önceliğimiz, güveniniz en büyük motivasyonumuz.</h2>
              <p className="text-lg text-slate-100">İhtiyacınız olduğunda bize ulaşın, uygun sağlık hizmeti için yönlendirme sağlayalım.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={phoneHref} className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-xl font-black text-[#061747] shadow-lg transition hover:scale-[1.02]">
                <Icon type="phone" className="h-6 w-6 text-[#007f86]" />
                Hemen Ara
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-[#1fbf75] px-6 py-5 text-xl font-black text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#15975c]">
                <Icon type="whatsapp" className="h-6 w-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
