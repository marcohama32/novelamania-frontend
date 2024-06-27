<template>
  <div>
    <!-- breadcrumb-area -->
    <section
      class="breadcrumb-area breadcrumb-bg"
      data-background="img/bg/breadcrumb_bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">Contate-nos</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Contacto
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->

    <!-- contact-area -->
    <section
      class="contact-area contact-bg"
      data-background="img/bg/contact_bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="contact-form-wrap">
              <div class="widget-title mb-50">
                <h5 class="title">Formulário de Contato</h5>
              </div>
              <div class="contact-form">
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <input type="text" placeholder="Nome *" />
                    </div>
                    <div class="col-md-6">
                      <input type="email" placeholder="Email *" />
                    </div>
                  </div>
                  <input type="text" placeholder="Assunto *" />
                  <textarea name="message" placeholder="Mensagem..."></textarea>
                  <button class="btn">Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="widget-title mb-50">
              <h5 class="title">Information</h5>
            </div>
            <div class="contact-info-wrap">
              <p>
                <span>Encontre soluções :</span> consulte o agente de suporte.
              </p>

              <div class="contact-info-list">
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fab fa-whatsapp-square myicon"></i>
                    </div>
                    <p>
                      <span>WhatsApp :</span>
                      <a href="https://wa.me/+258863881425" target="_blank"
                        >86 38 81 425</a
                      >
                    </p>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <p>
                      <span>Email :</span>
                      <a href="mailto:yaracumbula@gmail.com"
                        >yaracumbula@gmail.com</a
                      >
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-area-end -->
  </div>
</template>
<style>
.contact-area {
  background-image: url("./../../public/img/bg/contact_bg.jpg");
  background-size: cover;
  background-position: center;
}
.myicon {
  font-size: 20px;
  color: rgb(0, 0, 0);
  padding-top:13px;
}
</style>
