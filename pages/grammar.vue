<template>
  <div class="grammar_page container">
    <section class="book_intro">
      <div class="row align-items-center">
        <div class="col-sm-6 book_img">
          <img src="../static/assets/images/grammar.png" alt="Grammar img" />
        </div>
        <div class="col-sm-6 book_txt">
          <h3 class="mb-3">Soddalashtirilgan Ingliz tili kursi.</h3>
          <p class="mb-3">
            Diqqat! 20-maydan 20-avgustga qadar! Atiga
            <span> 99 000 </span> so'm evaziga Soddalashtirilgan Ingliz tili
            grammatikasi kitobi hamda undagi jami 99ta grammatik mavzular
            bo'yicha C1 sertifikatiga ega, tajribali ingliz tili o'qituvchisi
            tomonidan <span> 3 OYLIK ONLAYN KURSga </span> qatnashish
            imkoniyatiga ega bo'lasiz.
          </p>
          <p class="book_price">
            Respublikamiz bo'ylab yetkazib berish xizmati bepul!
          </p>
          <a href="#order">
            <div class="order_button">Buyurtma berish</div>
          </a>
        </div>
      </div>
    </section>
    <section class="book_info">
      <h2 class="text-center">Bu qanday kitob</h2>
      <div>
        <p>
          <img src="../static/assets/images/correct.png" alt="" /> Kitob o'zida
          nafaqat grammatik qoidalarning nazariy jihatlari, balki ularni
          tushuntirishning 12 yil davomida sinovdan o'tgan samarali metodik
          usullarini ham jamlagan
        </p>
        <p>
          <img src="../static/assets/images/correct.png" alt="" />
          Ma'lumotlar qisqa, lo'nda va tushunarli tilda taqdim etilgan bo'lib,
          ularni hatto ustozsiz ham o'qib o'zlashtirish mumkin
        </p>
        <p>
          <img src="../static/assets/images/correct.png" alt="" />
          Kitob o'quvchini 0 dan boshlab B2 (IELTS 6.5) darajasigacha kerakli
          bo'lgan grammatik bilimlarni taqdim etadi
        </p>
        <p>
          <img src="../static/assets/images/correct.png" alt="" />
          Garchi har bir grammatik hodisaning qamrovi aslida ancha keng
          bo'lsada, kitobda ularning faqatgina eng ko'p qo'llaniladigan va eng
          kerakli jihatlari jamlangan bo'lib o'quvchi hozircha o'ziga zarur
          bo'lmagan ma'lumotlarni o'zlashtirish zaruratidan ozod qilingan
        </p>
      </div>
    </section>
    <section class="book_video">
      <h2 class="text-center mb-3">
        Kitob haqida batafsil muallifning o'zidan
      </h2>
      <div class="responsive-iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yqx8v9Js_oA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="about_teacher">
      <h3 class="text-center">Ustoz haqida</h3>
      <div class="row align-items-center">
        <div class="col-sm-6 teacher_img">
          <img src="../static/assets/images/teacher.png" alt="Teacher" />
        </div>
        <div class="col-sm-6">
          <p>
            <img src="../static/assets/images/correct.png" alt="" /> Iskandar
            Sattiboev xorijda ikkita universitetni tamomlagan.
          </p>
          <p>
            <img src="../static/assets/images/correct.png" alt="" /> Ta'lim
            olgan Edinburg universiteti Jahon reytingida top-20 talikka kiradi.
          </p>
          <p>
            <img src="../static/assets/images/correct.png" alt="" /> 8 ballik
            IELTS va C1 darajadagi CEFR sertifikatiga ega.
          </p>
          <p>
            <img src="../static/assets/images/correct.png" alt="" />
            U o'z ona tilidan tashqari jami 7ta tilda bemalol muloqat qila
            oladi.
          </p>
          <p>
            <img src="../static/assets/images/correct.png" alt="" />
            U 1983 yilda Andijon shahrida tug'ilgan. Andijon davlat tillar
            pedogogika universitetining ingliz tili fakultetida, Daniyaning
            Odens shahridagi Texnologiya kolleji va Buyuk Biritaniyaning
            Edinburg universitetida tahsil olgan.
          </p>
          <p>
            <img src="../static/assets/images/correct.png" alt="" />
            U tayyorlagan 100 dan ziyod yoshlar bugun xalqaro TOEFL, IELTS, CEFR
            sertifakatlari sohiblari...
          </p>
        </div>
      </div>
    </section>
    <section class="book_video">
      <div class="responsive-iframe text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VoSCPouQ1uw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="order_form" id="order">
      <h3 class="text-center">Buyurtma berish</h3>
      <form class="order" @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Ism, Familya</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="form.name"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="form-group">
          <label for="region">Viloyat</label>
          <select
            class="form-control"
            id="region"
            v-model="form.region"
            required
          >
            <option value="Andijon">Andijon</option>
            <option value="Toshkent">Toshkent</option>
            <option value="Buxoro">Buxoro</option>
            <option value="Fargʻona">Fargʻona</option>
            <option value="Jizzax">Jizzax</option>
            <option value="Xorazm">Xorazm</option>
            <option value="Namangan">Namangan</option>
            <option value="Navoiy">Navoiy</option>
            <option value="Qashqadaryo">Qashqadaryo</option>
            <option value="Qoraqalpogʻiston">Qoraqalpogʻiston</option>
            <option value="Samarqand">Samarqand</option>
            <option value="Sirdaryo">Sirdaryo</option>
            <option value="Surxondaryo">Surxondaryo</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone" class="control-label">Telefon raqam</label>
          <input
            type="text"
            v-mask="'+998 ## ### ## ##'"
            v-model="form.phone"
            class="form-control"
            id="phone"
            placeholder="+9989* *** ** **"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn submit_button">Yuborish</button>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  // middleware: "guest",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        region: "Andijon",
      },
    };
  },
  methods: {
    async sendEmail() {
      this.$toast.show("Yuborilmoqda ...");
      await this.$axios
        .post("call-back-requests/", this.form)
        .then((res) => {
          console.log("Res", res);
          this.$toast.success("Muvaffaqiyatli buyurtma qilindi!");
          this.$router.push("/order-success");
          this.form = {
            name: "",
            phone: "",
            region: "Andijon",
          };
        })
        .catch((err) => {
          console.log("Error", err);
          this.$toast.error(
            "Xatolik yuz berdi, iltimos qaytdan urinib ko'ring"
          );
        });
    },
  },
  mounted(){
    window.location.href = "https://soddaingliztili.uz/";
  }
};
</script>