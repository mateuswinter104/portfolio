import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio | Mateus Winter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/programing.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>
            Seja muito bem-vindo(a) ao meu <span>Portfólio!</span>
          </h1>

          <div className={styles.info}>
            <div className={styles.description}>
              Olá visitante, me chamo Mateus Winter e sou um <span>Desenvolvedor Web!</span>
              <br />
              Tenho conhecimento nas linguagens <span>HTML, CSS, JS, PHP, JAVA e SQL.</span> Não poderia deixar de falar que também sou apaixonado pela criação de sites e aplicações pensados a partir da <span>UX e UI Design Thinking.</span>
              <br />
              Eai, vamos embarcar nessa jornada juntos?
              <br />
              <div className={styles.button}>
                <a href="https://api.whatsapp.com/send?phone=5551981327066" target="_blank"><p>Entrar em Contato</p></a>
              </div>
            </div>
            <div className={styles.illustration}>
              <img src="hello.svg" alt="Seja muito bem-vindo(a)"></img>
            </div>
          </div>
        </div>

        <div className={styles.myJobs}>
          <h1 className={styles.sub1}>Conheça um pouco mais do meu trabalho!</h1>

          <div className={styles.jobs}>
            <a href="https://designagency.vercel.app/" target="_blank">
              <div className={styles.job}>
                <Image
                  src="/agency.svg"
                  alt="Acesse a Desing Agency"
                  width={600}
                  height={600}
                />
              </div>
            </a>
            <div className={styles.card}>
              <h4>← Clique abaixo ou no card ao lado para abrir o site</h4>
              <a href="https://wgdesignagency.netlify.app/" target="_blank">
                <p>Design Agency</p>
              </a>
              <h3>Site Ilustrativo</h3>
              <h5>Aplicação Web desenvolvida para o reconhecimento do trabalho de uma empresa, loja ou próprio cliente</h5>
            </div>
          </div>

          <div className={styles.jobs}>
            <a href="https://designagency.vercel.app/" target="_blank">
              <div className={styles.job}>
                <Image
                  src="/discord.svg"
                  alt="Acesse o clone do aplicativo Discord"
                  width={600}
                  height={600}
                />
              </div>
            </a>
            <div className={styles.card}>
              <h4>← Clique abaixo ou no card ao lado para abrir o site</h4>
              <a href="https://wgdesignagency.netlify.app/" target="_blank">
                <p>Discord Interface Clone</p>
              </a>
              <h3>Site Ilustrativo</h3>
              <h5>Aplicação Web desenvolvida para a comunicação entre usuários por chamadas de áudio e/ou vídeo</h5>
            </div>
          </div>

          <div className={styles.jobs}>
            <a href="https://designagency.vercel.app/" target="_blank">
              <div className={styles.job}>
                <Image
                  src="/twitter.svg"
                  alt="Acesse o clone do Twitter"
                  width={600}
                  height={600}
                />
              </div>
            </a>
            <div className={styles.card}>
              <h4>← Clique abaixo ou no card ao lado para abrir o site</h4>
              <a href="https://wgdesignagency.netlify.app/" target="_blank">
                <p>Twitter Interface Clone</p>
              </a>
              <h3>Site Ilustrativo</h3>
              <h5>Aplicação Web desenvolvida para a comunicação entre usuários | Rede Social</h5>
            </div>
          </div>


        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Desenvolvido por: <span>Mateus Winter</span></p>
        </div>

        <div className={styles.icons}>
          <a href="https://api.whatsapp.com/send?phone=5551981327066&text=Ol%C3%A1%2C%20tudo%20bom%3F%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20portf%C3%B3lio%2C%20vamos%20conversar%20mais%20sobre%3F" target="_blank">
            <Image
              id="socialMedias"
              src="/whatsapp.svg"
              alt="Acesse meu Whatsapp"
              width={100}
              height={100}
            />
          </a>
          <a href="https://www.linkedin.com/in/mateus-winter-da-silva-0591a418b/" target="_blank">
            <Image
              id="socialMedias"
              src="/linkedin.svg"
              alt="Acesse meu Linkedin"
              width={100}
              height={100}
            />
          </a>
          <a href="https://www.instagram.com/mateuswinter_/" target="_blank">
            <Image
              id="socialMedias"
              src="/instagram.svg"
              alt="Acesse meu Instagram"
              width={100}
              height={100}
            />

          </a>
        </div>
      </footer>
    </div>
  )
}
