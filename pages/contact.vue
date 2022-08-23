<template>
  <div class="contact_page">
    <div class="container">
      <div class="row row_contact">
        <!-- Contact Title -->
        <div class="col-12">
          <div class="w-100 title_contact">
            <h1>Aloqa uchun</h1>
          </div>
        </div>

        <!-- Only showed Mobail version -->
        <div class="col-12 display_none">
          <div class="y-mapp">
            <yandex-maps :coords="coords" :placemarks="items" :zoom="zoom" @set-coords="coords = $event">
            </yandex-maps>
          </div>
        </div>

        <!-- Address and Map box -->
        <div class="col-lg-6 box_address_map">
          <div class="address">
            <div class="img_box">
              <img src="../static/assets/images/location1.svg" alt="Location" />
            </div>
            <div>
              <p>Тошкент, O'zbekiston <br> Latitude: 41.372478, Longitude: 69.277471</p>
            </div>
          </div>
          <div class="y-map">
            <yandex-maps :coords="coords" :placemarks="items" :zoom="zoom" @set-coords="coords = $event">
            </yandex-maps>
          </div>
        </div>

        <!-- Contact and Message Box -->
        <div class="col-lg-6 contact_box_message">
          <div class="contacts">
            <div class="row roww">
              <div class="col-12 col-md-6 col-lg-12">
                <div class="boxx box1">
                  <a href="tel:+998555005511">
                    <div class="contact_item">
                      <img src="../static/assets/images/phone1.svg" alt="Icon" />
                      <p>+998 55 500 55-11</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="boxx box2">
                  <a href="mailto:info@dona.uz">
                    <div class="contact_item">
                      <img src="../static/assets/images/gmail.svg" alt="Icon" />
                      <p>info@dona.uz</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="boxx ">
                  <a target="_blank" href="https://t.me/mmmuslim">
                    <div class="contact_item last_box">
                      <img src="../static/assets/images/telegram2.svg" alt="Icon" />
                      <p>@dona</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <form @submit.prevent="sendMessage" class="w-100 message">
            <div class="send_message">
              <div class="title">
                <h3>Sms yuborish</h3>
              </div>
              <div class="inputt">
                <input type="text" v-model="name" placeholder="Ismingiz..." required />
              </div>
              <div class="inputt">
                <input type="text" v-mask="'+998 ## ### ## ##'" v-model="phone_number" placeholder="+9989* *** ** **"
                  required />
              </div>
              <div class="btnn">
                <button type="submit">Yuborish</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import YandexMaps from "../components/YandexMaps";
export default {
  components: {
    YandexMaps,
  },
  data() {
    return {
      zoom: 10,
      items: [[55.771996, 37.622262]],
      coords: [41.372478, 69.277471],
      phone_number:"",
      user_number:"",
      full_number:"",
      name:"",
    };
  },
  methods:{
    async sendMessage({ }) {
      this.full_number = `${this.phone_number.slice(0, 4)}${this.phone_number.slice(5, 7)}${this.phone_number.slice(8, 11)}${this.phone_number.slice(12, 14)}${this.phone_number.slice(15, 17)}`;
       
        await this.$axios.post('send-code/', { phone_number: this.full_number})
        .then(res => {

            this.$toast.success("Xabaringiz yo'borildi")
            this.full_number="";
        })
        .catch(e => {
            this.$toast.error("Xatolik yuz berdi")
            console.log(e)
        })
    },
  }
};
</script>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>