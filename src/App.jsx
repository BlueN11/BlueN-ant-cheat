import React, { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  // Imagens da galeria
  const imagens = ["/assets/projeto1.png", "/assets/projeto2.png"];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bwzlc5n",
        "template_mwr06ko",
        form.current,
        "iHRyxdXXmlC4Ha4mH"
      )
      .then(
        () => {
          alert("Email enviado com sucesso!");
          form.current.reset();
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            BN
          </div>
          <div>
            <h1 className="text-xl font-bold">BlueN Scripts</h1>
            <p className="text-sm text-gray-400">
              Anticheats e sistemas exclusivos para servidores de MTA/FIVEM
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#features" className="hover:text-blue-400">Recursos</a>
          <a href="#projects" className="hover:text-blue-400">Projetos</a>
          <a href="#pricing" className="hover:text-blue-400">Planos</a>
          <a href="#changelog" className="hover:text-blue-400">Changelog</a>
          <a href="#contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-20 px-6">
          <div>
            <h2 className="text-5xl font-extrabold leading-tight text-white">
              BlueN <span className="text-blue-500">Anticheat</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              A solução definitiva contra trapaças no MTA:SA. Segurança avançada, desempenho otimizado e suporte dedicado para manter seu servidor protegido.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#pricing" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Ver Planos
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold">
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.imgur.com/vVAxDhm.png"
              alt="Banner BlueN"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sobre Nossa Plataforma */}
      <section id="sobre" className="py-16 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Sobre Nossa Plataforma</h3>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          O <span className="text-blue-400 font-semibold">BlueN Anticheat</span> é uma solução de segurança avançada desenvolvida especialmente para servidores de Multi Theft Auto (MTA).
          Projetado para combater trapaças e preservar um ambiente de jogo justo e equilibrado, o BlueN é reconhecido por sua eficácia e confiabilidade.
          Entre seus principais recursos está a prevenção contra a decompilação de scripts LUAC, o que impede a manipulação não autorizada de recursos do servidor.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Recursos principais</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow border border-gray-700">
            <h4 className="font-semibold text-white">Detecção avançada</h4>
            <p className="text-sm text-gray-400 mt-2">Identificação de teleporte, noclip, speedhack e mais, em tempo real.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow border border-gray-700">
            <h4 className="font-semibold text-white">Anti-VBR</h4>
            <p className="text-sm text-gray-400 mt-2">Hashes, fake functions e watchdogs contra alterações em funções críticas.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow border border-gray-700">
            <h4 className="font-semibold text-white">Painel moderno</h4>
            <p className="text-sm text-gray-400 mt-2">Gerencie bans, veja logs e exporte relatórios com facilidade.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Meus Projetos</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {imagens.map((img, index) => (
            <div
              key={index}
              className="h-44 rounded-lg overflow-hidden border border-gray-700 cursor-pointer"
              onClick={() => { setSlide(index + 1); setToggler(!toggler); }}
            >
              <img src={img} alt={`Projeto ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <FsLightbox toggler={toggler} sources={imagens} slide={slide} />
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Planos</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow border-2 border-blue-600">
            <div className="text-sm uppercase text-gray-400">Pro</div>
            <div className="mt-4 text-3xl font-extrabold text-blue-400">R$49 / mês</div>
            <p className="text-sm text-gray-400 mt-2">Painel web, logs no Discord, proteções completas e atualizações automáticas.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow border border-gray-700">
            <div className="text-sm uppercase text-gray-400">Enterprise</div>
            <div className="mt-4 text-3xl font-extrabold text-white">R$99 / mês</div>
            <p className="text-sm text-gray-400 mt-2">Tudo do Pro + suporte VIP, consultoria e integração personalizada no servidor.</p>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section id="changelog" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Changelog / Atualizações</h3>
        <ul className="mt-6 list-disc list-inside text-gray-400 space-y-2">
          <li>v1.0 — Lançamento inicial com detecção de teleporte e noclip</li>
          <li>v1.1 — Adicionado Painel Web e logs no Discord</li>
          <li>v1.2 — Proteção anti-VBR reforçada</li>
          <li>v1.3 — Atualizações automáticas e otimizações gerais</li>
          <li>v1.4 — Launcher anti-cheat, verificações de arquivos</li>
        </ul>
      </section>

      {/* Contato */}
      <section id="contact" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white">Contato</h3>
        <p className="text-sm text-gray-400 mt-2">
          Interessado em adquirir ou personalizar scripts BlueN? Entre em contato.
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-6 grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Nome" className="p-3 bg-gray-900 border border-gray-700 rounded text-gray-200" />
          <input name="email" placeholder="Email" className="p-3 bg-gray-900 border border-gray-700 rounded text-gray-200" />
          <input name="subject" placeholder="Assunto" className="p-3 bg-gray-900 border border-gray-700 rounded text-gray-200" />
          <textarea name="message" placeholder="Mensagem" className="p-3 bg-gray-900 border border-gray-700 rounded text-gray-200 md:col-span-2" rows={4} />
          <button type="submit" className="md:col-span-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold">
            Enviar mensagem
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-400 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <p>Email: <a href="mailto:alves04oedro19@gmail.com" className="text-blue-400">alves04oedro19@gmail.com</a></p>
          <p>Discord: <span className="text-blue-400">.bluen_</span></p>
          <a href="https://discord.gg/mG22rmjqfG" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold">
            Entrar no Discord
          </a>
        </div>
      </section>
    </div>
  );
}
