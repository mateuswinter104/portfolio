import Head from 'next/head'
import styles from '../styles/Home.module.scss'

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
              Tenho conhecimento nas linguagens <span>HTML, CSS, JS, PHP, JAVA e MySQL.</span> Não poderia deixar de falar que também sou apaixonado pela criação de sites e aplicações pensados a partir da <span>UX e UI Design Thinking.</span>
              <br />
              Eai, vamos embarcar nessa jornada juntos?
              <br />
              <div className={styles.button}>
                <a href="https://api.whatsapp.com/send?phone=5551981327066&text=Que%20bom%20te%20ver%20por%20aqui!%20Agora%2C%20clique%20em%20%22Iniciar%20Conversa%22%20e%20ser%C3%A1%20redirecionado%20ao%20seu%20Whatsapp!" target="_blank"><p>Entrar em Contato</p></a>
              </div>
            </div>
            <div className={styles.illustration}>
              <img src="/hello.svg" alt="Hello" />
            </div>
          </div>
        </div>

        <div className={styles.myJobs}>
          <h1 className={styles.sub1}>Conheça um pouco mais do meu trabalho!</h1>

          <div className={styles.jobs}>
            <a href="https://wgdesignagency.netlify.app/" target="_blank">
              <div className={styles.job}>
                <img src="/agency.svg" />
              </div>
            </a>
            <div className={styles.card}>
              <h4>← Clique abaixo ou no card ao lado para abrir o site</h4>
              <a href="https://wgdesignagency.netlify.app/" target="_blank">
                <p>Design Agency</p>
              </a>
              <h5>Site desenvolvido para o reconhecimento do trabalho de uma empresa, loja ou próprio cliente</h5>
            </div>
          </div>

          <div className={styles.jobs}>
            <a href="" target="_blank">
              <div className={styles.job}>
                <img src="/podcast.svg" />
              </div>
            </a>
            <div className={styles.card}>
              <h4>← Clique abaixo ou no card ao lado para abrir o site</h4>
              <a href="" target="_blank">
                <p>Podcastr</p>
              </a>
              <h5>Site desenvolvido para a reprodução de Podcasts criados pelo cliente</h5>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Desenvolvido por: <span>Mateus Winter</span></p>
        </div>

        <div className={styles.icons}>
          <a href="https://api.whatsapp.com/send?phone=5551981327066&text=Que%20bom%20te%20ver%20por%20aqui!%20Agora%2C%20clique%20em%20%22Iniciar%20Conversa%22%20e%20ser%C3%A1%20redirecionado%20ao%20seu%20Whatsapp!" target="_blank">
            <img id="socialMedias" src="whatsapp.svg" alt="Entrar em contato" />
          </a>
          <a href="https://www.linkedin.com/in/mateus-winter-da-silva-0591a418b/" target="_blank">
            <img id="socialMedias" src="linkedin.svg" alt="Me siga no Linkedin" />
          </a>
          <a href="https://www.instagram.com/mateuswinter_/" target="_blank">
            <img id="socialMedias" src="instagram.svg" alt="Me siga no Instagram" />
          </a>
        </div>
      </footer>
    </div>
  )
}
