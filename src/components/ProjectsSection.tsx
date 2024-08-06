"use client";

import { Card, CardProps } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProjectsSection = () => {
  const [repositories, setRepositories] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/D4SiLv4/repos');
        const repos = response.data;

        const reposWithLanguages = await Promise.all(repos.map(async (repo: CardProps) => {
          const languagesResponse = await axios.get(`https://api.github.com/repos/D4SiLv4/${repo.name}/languages`);
          return {
            ...repo,
            languages: Object.keys(languagesResponse.data)
          };
        }));

        setRepositories(reposWithLanguages);
        setLoading(false);

      } catch (error) {
        console.error("Houve um erro na requisição dos dados: ", error);
      }
    };
    fetchRepositories();
  }, []);

  return (
    <>
      <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4" data-aos="zoom-in-up">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] text-center pb-12 max400:text-[2.5rem]">Projetos</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {loading && <p>Carregando projetos...</p>}
          {repositories && repositories.length > 0 ? 
            (repositories.map((r) => (
              <Card
                key={r.name}
                name={r.name}
                description={r.description}
                html_url={r.html_url}
                languages={r.languages}
              />
            )))
            : null}
          <Card
            key="python_project"
            name="Projeto de Automação com Python"
            description="Este projeto implementa uma shell reversa avançada com diversas funcionalidades, incluindo captura de tela, keylogging, monitoramento de processos, e integração com Discord para controle remoto e envio de notificações."
            html_url="https://github.com/D4SiLv4/R3verse-Sh3ll"
            languages={["Python"]}
          />
        </div>
      </section>

      <section id="certificados" className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4" data-aos="zoom-in-up">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] text-center pb-12 max400:text-[2.5rem]">Certificados</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <Card
            name="Profissional certificado em segurança de rede (CNSP)"
            description="Certificado em segurança de rede"
            html_url="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXRH2ruQprmRC0VWnqVuRzbPafzxA+eigDxSD4RVYQ+ZtnfIctzjRm6BMPZvo+uXAjQpbPaRLVgCDa0ZdkLiXFrY="
            languages={[]}
          />
          <Card
            name="Pentester"
            description="Certificado de Pentester"
            html_url="https://certs.ibsec.com.br/?cert_hash=f23830802373bd2b"
            languages={[]}
          />
          <Card
            name="Hacker Ético"
            description="Certificado de Hacker Ético"
            html_url="https://certs.ibsec.com.br/?cert_hash=43066cc7a40eb9d0"
            languages={[]}
          />
          <Card
            name="ISC2 Candidate"
            description="Certificado ISC2 Candidate"
            html_url="https://www.credly.com/badges/f3874cc6-04a6-4a45-9458-f6c3d8fffedb/linked_in_profile"
            languages={[]}
          />
        </div>
      </section>
    </>
  );
};
