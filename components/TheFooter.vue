<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row m-0 footer_row">
        <div class="col-10 col-sm-10 col-md-10 col-lg-2 mx-2 p-0 mt-1 ">
          <div class="social">
            <div class="logotip1 w-100">
              <nuxt-link to="/" class="w-100">
                <img src="../static/assets/images/log.svg" alt="Logo" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-5 col-lg-2 mx-2 p-0 mt-1">
          <div class="social">
            <div class="footer_text">
              <h2>Kompaniya</h2>
            </div>
            <div class="social_btn1">
              <div class="call">
                <!-- <a href="#"><span>Biz haqimizda</span></a> -->
                <nuxt-link to="#">Biz haqimizda</nuxt-link>
              </div>
              <div class="call df_none">
                <nuxt-link to="#">Dostavka</nuxt-link>
                <!-- <a href="#"><span>Aloqa</span></a> -->
              </div>
              <div class="call">
                <nuxt-link to="contact">Kontakt</nuxt-link>
                <!-- <a href="#"><span>Aloqa</span></a> -->
              </div>
              <div>
                <nuxt-link to="#">Hamkorlarimiz</nuxt-link>
                <!-- <a href="#"><span>Hamkorlar</span></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-5 col-lg-2 mx-2 p-0 mt-1">
          <div class="social">
            <div class="footer_text">
              <h2>To'lov turlari</h2>
            </div>
            <div class="social_btn0">
              <div>
                <nuxt-link to="#"><img src="../static/assets/images/uzcard.svg" alt="Uzcard" /></nuxt-link>
              </div>
              <div>
                <nuxt-link to="#"><img src="../static/assets/images/click.svg" alt="Click" /></nuxt-link>
                <!-- <a href="#"><img src="@/assets/click.png"></a> -->
              </div>
            </div>
            <div class="social_btn0">
              <div>
                <!-- <a href="#"><img src="@/assets/visa.png"></a> -->
                <nuxt-link to="#"><img src="../static/assets/images/visa.svg" alt="Visa" /></nuxt-link>

              </div>
              <div>
                <!-- <a href="#"><img src="@/assets/humo.png"></a> -->
                <nuxt-link to="#"><img src="../static/assets/images/humo.svg" alt="Humo" /></nuxt-link>
              </div>
            </div>
            <div class="social_btn0">
              <div>
                <!-- <a href="#"><img src="@/assets/payme.png"></a> -->
                <nuxt-link to="#"><img src="../static/assets/images/payme.svg" alt="Payme" /></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-5 col-lg-2 mx-2 p-0 mt-1 desplay_nonee">
          <div class="social">
            <div class="footer_text">
              <h2>Aloqa uchun</h2>
            </div>
            <div class="social_btn1">
              <div class="call">
                <a href="#"> <img src="../static/assets/images/phone.svg" alt="Icon" /><span> +99895
                    401-20-21</span></a>
              </div>
              <div>
                <a href="#"> <img src="../static/assets/images/location.svg" alt="Icon" /><span>Toshkent,
                    O'zbekiston</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-5 col-md-5 col-lg-3 mx-2 p-0 mt-1">
          <div class="social">
            <div class="footer_text">
              <h2>Ijtimoiy tarmoqlar</h2>
            </div>
            <div class="social_btn">
              <div>
                <a class="social_icon" href="#"><img src="../static/assets/images/telegram.svg" alt="Icon"></a>
                
              </div>
              <div>
                <a class="social_icon" href="#"><img src="../static/assets/images/instagram.svg" alt="Icon" /></a>
              </div>
              <div>
                <a class="social_icon" href="#"><img src="../static/assets/images/facebook.svg" alt="Icon" /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-12 col-md-10 col-lg-10 col-lg-8 footer_bottom">
          <div>
            <!-- <p>© Dona.uz 2022</p> -->
            <p>&copy;Dona.uz 2022</p>
          </div>
          <div>
            <!-- <p>Sayt GREATSOFT kompaniyasi tomonidan ishlab chiqildi</p> -->
            <p>
              Sayt <a href="https://greatsoft.uz">GREATSOFT</a> kompaniyasi
              tomonidan ishlab chiqildi
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>
<script>
export default {};
</script>