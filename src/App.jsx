import header from "./assets/logo header.png";
import activity from "./assets/activity.jpg";
import data from "./assets/data.png";
import video from "./assets/video.png";
import hat from "./assets/hat.png";
import doctorHat from "./assets/doctorHat.png";
import monitor from "./assets/monitor.png";
import teeth from "./assets/teeth.png";
import tool from "./assets/tool.png";
import shield from "./assets/shield-tick.png";
import connection from "./assets/cloud-connection.png";
import teacher from "./assets/teacher.png";
import smilingDentist from "./assets/smilingDentist.png";
import team from "./assets/team.png";
import notebook from "./assets/notebook.png";
import doctorOk from './assets/doctorOk.png'
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col bg-[#EEEEEE] items-center justify-center">
        <header className="flex flex-col rounded-xl justify-evenly items-center gap-1 bg-[#F7F7F7] mt-5 w-3/4">
          <span>Nossa proposta</span>
          <span>Nossos valores</span>
          <img src={header} className="w-1/2"></img>
          <span>Nosso time</span>
          <span>Nossas soluções</span>
        </header>
        <div className="flex">
          <div className="flex flex-col items-center ">
            <div className="pb-5 pt-5 flex flex-col">
              <h1 className="text-3xl">A primeira plataforma</h1>
              <h1 className="text-3xl">de conexão e colaboração</h1>
              <h1 className="text-3xl">para dentistas do Brasil!</h1>
            </div>
            <button className="bg-[#845DDE] w-3/4 rounded-lg text-white">
              Cadastre-se agora
            </button>
            <div className="flex flex-col bg-[#FFFFFF] rounded-xl mt-5">
              <div className="pt-5 pb-5">
                <h2 className="text-2xl">Acesse a comunidade Hub2G</h2>
                <p>
                  Cadastre-se e seja um dos primeiros a fazer parte do futuro da
                  odontologia
                </p>
              </div>
              <form className="flex flex-col justify-evenly gap-2 pl-1 pr-2 bg-[#FFFFFF] ">
                <input className="bg-[#BCBCBC] rounded-md"></input>
                <input className="bg-[#BCBCBC] rounded-md"></input>
                <input className="bg-[#BCBCBC] rounded-md"></input>
                <input className="bg-[#BCBCBC] rounded-md"></input>
                <button className="bg-[#845DDE] rounded-md text-white mt-5">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#845DDE] flex flex-col items-center justify-center mt-20 gap-8 pt-4 pb-4 h-[800px]">
        <h2 className="color-[#FFFFFF] text-white">Nossa Proposta</h2>
        <h3 className="color-[#FFFFFF] text-white">
          A Hub2G é um movimento que busca transformar a odontologia por meio da
          excelência, inovação e colaboração. Criamos uma comunidade para romper
          fronteiras e impulsionar o crescimento coletivo, onde mentores ajudam
          dentistas a alcançar melhores resultados clínicos, proporcionando
          tratamentos de excelência para a sociedade e elevando seu
          reconhecimento no mercado.
        </h3>
      </section>
      <section className="bg-[#EEEEEE] flex">
        <div className="border-r border-black w-1/2 ">
          <div className="bg-[#FFFFFF] rounded-lg mt-10">
            <div className="flex flex-row-reverse">
              <img src={activity} className="self-end"></img>
            </div>
            <h2>Problema Identificado</h2>
            <p>
              A odontologia enfrenta dois grandes desafios: a ausência de uma
              rede de apoio exclusiva e segura, onde dentistas possam se
              conectar, trocar experiências e acessar conteúdos científicos de
              qualidade, e a carência de caminhos mais práticos e direcionados
              para o aprimoramento profissional, que realmente impulsionem o
              crescimento e o desenvolvimento ao longo da carreira.
            </p>
          </div>
        </div>
        <div className="border-l border-black w-1/2">
          <div className="bg-[#FFFFFF] rounded-lg mt-56">
            <img src={data}></img>
            <h2>Nossa Solução</h2>
            <p>
              A Hub2G surge como respostas a esses desafios, somos uma
              plataforma inovadora que reúne, em um único espaço, tudo o que o
              dentista precisa para se desenvolver profissionalmente. Oferecemos
              mentorias exclusivas, cursos de alta qualidade, acesso à conteúdo
              ciêntifico, suporte em gestão, e serviços. Pensada para a
              odontologia, a Hub2G é o ambiente ideal para crescer de forma
              consistente, incorporar inovações e elevar a prática clínica.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Membros</h2>
        <div className="flex flex-col md:flex-row md:gap-10">
          <div>
            <img src={video}></img>
          </div>
          <div className="">
            <h2>Conectamos profissionais em um ambiente colaborativo</h2>
            <div className="md:gap-2 flex flex-col">
              <div className="flex gap-5">
                <img src={teeth} className="w-[50px] h-[50px]"></img>
                <div>
                  <h3>Dentistas</h3>
                  <p>
                    Faça parte de uma rede exclusiva de especialistas e
                    professores. Enriquecer sua prática nunca foi tão fácil!
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={monitor} className="w-[50px] h-[50px]"></img>
                <div>
                  <h3>Laboratório de prótese</h3>
                  <p>
                    Laboratorios selecionados pelo time da HubeG2 provendo
                    serviços de excelencia
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={doctorHat} className="w-[50px] h-[50px]"></img>
                <div>
                  <h3>Empresas de materiais odontológicos</h3>
                  <p>
                    Empresas selecionados pelo time da HubeG2 oferecendo
                    produtos qualificados e beneficios competitivo
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={doctorHat} className="w-[50px] h-[50px]"></img>
                <div>
                  <h3>Consultores de marketing e gestão financeira</h3>
                  <p>
                    Consultores para ajudar no planejamento estratégico de
                    marketing, fortalecer sua presença nas redes, impulsionar
                    sua divulgação e organizar sua gestão financeira, incluindo
                    contabilidade e precificação.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src={hat} className="w-[50px] h-[50px]"></img>
                <div>
                  <h3>Mentores</h3>
                  <p>
                    Professores renomados que irão guiar os dentistas de forma
                    individualizada, oferecendo suporte estratégico para
                    diagnósticos e planejamento de casos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EEEEEE] w-full flex flex-col items-center gap-10 pb-10 pt-10">
        <h2>Nossos valores</h2>
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="bg-[#FFFFFF] p-8 w-[355px] h-[488px] gap-5 flex flex-col text-left rounded-[35px]">
            <img src={connection} className="w-[64px] h-[64px]"></img>
            <h2>Conexão e Colaboração</h2>
            <p>
              Proporcionamos uma rede de apoio, permitindo que profissionais
              consultem especialistas, compartilhem casos e busquem soluções
              conjuntas para desafios complexos.
            </p>
          </div>
        
        <div className="bg-[#FFFFFF] p-8 w-[355px] h-[488px] gap-5 flex flex-col text-left rounded-[35px]">
          <img src={teacher} className="w-[64px] h-[64px]"></img>
          <h2>Inovação e Atualização</h2>
          <p>
            Oferecemos acesso contínuo a novas tecnologias, estudos de caso,
            artigos e pesquisas, garantindo que nossos usuários se mantenham
            sempre à frente no mercado.
          </p>
        </div>
        <div className="bg-[#FFFFFF] p-8 w-[355px] h-[488px] gap-5 flex flex-col text-left rounded-[35px]">
          <img src={tool} className="w-[33px] h-[53px]"></img>
          <h2>Empoderamento Profissional</h2>
          <p>
            Facilitamos o crescimento dos profissionais, ajudando-os a se
            tornarem mais capacitados, aumentando seu reconhecimento e
            lucratividade.
          </p>
        </div>
        <div className="bg-[#FFFFFF] p-8 w-[355px] h-[488px] gap-5 flex flex-col text-left rounded-[35px]">
          <img src={shield} className="w-[64px] h-[64px]"></img>
          <h2>Ambiente Seguro e Confiável</h2>
          <p>
            Criamos um ecossistema digital seguro, onde a confidencialidade dos
            dados é garantida, permitindo a troca de informações com
            tranquilidade.
          </p>
        </div></div>
      </section>
      <section className="flex relative items-center justify-center flex-col">
        <img src={smilingDentist} className="w-full relative"></img>
        <div className="absolute text-white">
          <h2>Conectando aprendizado ao seu sucesso</h2>
          <p>
            Mais do que uma comunidade, Hub2G é o parceirro estratégico para seu
            crescimento pessoal e profissional
          </p>
        </div>
      </section>
      <section className="flex relative flex-col items-center justify-center pt-10 pb-10">
        <div className="relative w-3/4 ">
          <img src={team} className="w-full rounded-3xl"></img>
          <div className="absolute rounded-3xl bg-[#ffffff88] left-0 top-[40%] group">
            <h2>André Guelfi</h2>
            <span>Co-Fundador e CFO</span>
            <p className="hidden group-hover:block">
              Especialista em gestão de negócios com grande experiência em
              alinhamento estratégico, desenho de modelos de gestão e
              transformação organizacional.Exposição a diversas áreas funcionais
              (estratégia, operações, finanças, marketing, riscos, pessoas) e
              segmentos de mercado, durante mais de 25 anos de experiência, como
              executivo e como consultor, em uma grande variedade de negócios.
            </p>
          </div>
          <div className="absolute rounded-3xl bg-[#ffffff88] left-[26%] top-[50%] group">
            <h2>Carla Tonicelo</h2>
            <span>Co-Fundadora e COO/CTO</span>
            <p className="hidden group-hover:block">
              Com 21 anos de experiência em tecnologia, sendo 12 dedicados a
              Produtos Digitais, Carla Tonicelo construiu uma trajetória sólida
              e diversificada, com passagem em empresas de e-commerce, como Raia
              Drogasil e Walmart. Foi Head de Produtos do Mercado Pago e Head
              Brasil da Stratio, uma AiTech espanhola especializada em soluções
              de inteligência artificial. Sua última atuação foi como Diretora
              Sênior de Produtos na BDev Ventures, uma Venture Capital que
              investe em startups nos segmentos de AiTech, ProductivityTech,
              FinTech e HRTech.
            </p>
          </div>
          <div className="absolute rounded-3xl bg-[#ffffff88] left-[60%] top-[60%] group">
            <h2>Lígia Brissi</h2>
            <span>Fundadora e CEO</span>
            <p className="hidden group-hover:block">
              Dra. Lígia Brissi Cardozo é uma empreendedora determinada a
              transformar a odontologia. Com 16 anos de experiência como
              especialista em Endodontia e Implantodontia, alia conhecimento
              técnico à inovação para criar soluções que impactam toda a
              profissão. Fundadora e CEO da Hub2G, idealizou uma plataforma
              revolucionária que conecta e capacita dentistas, promovendo a
              educação contínua, a colaboração e o crescimento coletivo. À
              frente da Clínica Brissi há mais de uma década, aplica visão
              estratégica e excelência clínica para inspirar outros
              profissionais. Com uma mentalidade disruptiva, seu propósito é
              elevar a odontologia a novos patamares, unindo tecnologia,
              conhecimento e uma comunidade forte para deixar um legado
              transformador.
            </p>
          </div>
          <div className="absolute rounded-3xl bg-[#ffffff88] top-[45%] right-[-5%] group">
            <h2>Fernando Kassardjian</h2>
            <span>Co Fundador e CDDO</span>
            <p className="hidden group-hover:block">
              Especialista em Implantodontia e Periodontia, o Dr. Fernando
              Kassardjian é referência em odontologia digital e educação
              continuada. Com quase duas décadas de experiência, ele combina uma
              sólida formação acadêmica, que inclui pós-graduações e um mestrado
              em andamento, com sua atuação como professor, mentor e speaker
              reconhecido por empresas como Straumann.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col relative justify-center items-center w-full">
        <img src={notebook} className="w-1/2"></img>
        <div className="flex flex-col absolute">
          <div className="bg-[#FFFFFF] rounded-3xl">
            <h2>Assinatura Premium</h2>
            <p>
              Assinaturas premium com serviços adicionais, suporte prioritárrio
              e acesso a materiais exclusivos.
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl">
            <h2>Plano Gratuito</h2>
            <p>Acesso limitado aos recursos básicos da plataforma.</p>
            <h2>Mentorias</h2>
            <p>
              Sessões de mentoria, individuais ou em grupo, pensadas para
              oferecer aprendizado prático e acessível, com aplicação imediata
              no dia a dia.
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl">
            <h2>Cursos</h2>
            <p>
              Vídeos e conteúdos educativos oferecidos por grandes empresas de
              materiais odontológicos
            </p>
            <div className="bg-[#FFFFFF] rounded-3xl">
              <h2>Odontologia Digital</h2>
              <p>
                Um espaço para guiar você rumo à inovação e excelência. Aqui,
                você encontra cursos, mentorias e dicas, que facilitam a
                integração das tecnologias digitais à sua rotina clínica.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <div className="flex items-center justify-center">
          <div className="w-1/2 flex items-center justify-center">
            <img src={doctorOk}></img>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h2>A transformação da odontologia já começou na Hub2G</h2>
            <button className="bg-[#845DDE] p-2 rounded-2xl text-white">Cadastre-se agora</button>
          </div>
          <footer className="flex justify-around absolute bottom-[5%]">
          <div>©2024 HuB2G, Todos os direitos reservados</div>
          <div>
            <img src={header}></img>
          </div>
          <div>
            <span>Termos e condições</span>
            <span>Política de privacidade</span>
          </div>
        </footer>
        </div>

      </section>
    </div>
  );
}

export default App;
