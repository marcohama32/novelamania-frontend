<template>
  <div>
    <!-- newsletter-area -->
    <section
      class="newsletter-area newsletter-bg"
      data-background="img/bg/newsletter_bg.jpg"
    >
      <div class="container">
        <div class="newsletter-inner-wrap">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="newsletter-content">
                <h4>Fique Por Dentro das Últimas Novidades!</h4>
                <p>Não perca nenhuma novidade! Assine nossa newsletter e receba as últimas atualizações em primeira mão.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <form action="#" class="newsletter-form">
                <input type="email" required placeholder="Enter your email" />
                <button class="btn">Subscrever</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- newsletter-area-end -->
    <!-- footer-area -->
    <footer>
      <div class="footer-top-wrap">
        <div class="container">
          <div class="footer-menu-wrap">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <div class="footer-logo">
                  <a href="#"><img src="img/logo/logo.png" alt="" /></a>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="footer-menu">
                  <nav>
                    <ul class="navigation">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/novelas">Novelas</router-link></li>
                      <li><router-link to="/doramas">Doramas</router-link></li>
                      <li><router-link to="/pacotes">Pacotes</router-link></li>
                    </ul>
                    <!-- <div class="footer-search">
                      <form action="#">
                        <input type="text" placeholder="Encontre as melhores" />
                        <button><i class="fas fa-search"></i></button>
                      </form>
                    </div> -->
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-quick-link-wrap">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div class="quick-link-list">
                  <ul>
                    <li><router-link to="/contactos">FAQ</router-link></li>
                    <li><router-link to="/contactos">Contactos</router-link></li>
                    <li><router-link to="/contactos">Termos de uso</router-link></li>
                    <li><router-link to="/contactos">Privacidade</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-5">
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2024. Todos direitos reservados por
                  <a href="#">NovelaMania</a>
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="payment-method-img text-center text-md-right">
                <!-- <img src="img/images/card_img.png" alt="img" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer-area-end -->
  </div>
</template>


<style>
.newsletter-area {
  background-image: url("./../../../public/img/bg/newsletter_bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>