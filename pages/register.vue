<template>
  <div class="w-100">
    <div class="login_bg">
      <h5>Ro'yxatdan o'tish</h5>
      <form class="text-left" @submit.prevent="register">
        <div class="form-group">
          <label class="control-label">Parol va Telefon raqamingizni kiriting</label>
          <input type="text" v-mask="'+998 ## ### ## ##'" v-model="phone" class="form-control inputss"
            placeholder="+998 9* *** ** **" required />
        </div>
        <div class="form-group">
          <!-- <label for="password" class="control-label">Parol</label> -->
          <input type="password" v-model="password" class="form-control inputss" placeholder="Parol" required />
        </div>
        <div class="form-group">
          <!-- <label for="password" class="control-label">Parolni tasdiqlang</label> -->
          <input type="password" v-model="password_confirm" @change="checkMatch" class="form-control inputss"
            placeholder="Parolni qayta kiriting" required />
          <small v-show="!match">Parol qayta tering</small>
        </div>
        <div class="login_btn text-center send_btnn">
          <button type="submit">Yuborish</button>
        </div>
      </form>

      <!-- <div class="login_links">
        <nuxt-link to="/login">Ro'yxatdan o'tganmisiz? Kirish</nuxt-link>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  // middleware: 'auth',
  layout: "loginLayout",
  data() {
    return {
      phone: "",
      password: "",
      password_confirm: "",
      match: true,
    };
  },
  methods: {
    checkMatch() {
      if (this.password !== this.password_confirm) {
        this.match = false;
      } else {
        this.match = true;

      }
    },

    async register() {
      //check confirm password
      this.checkMatch();

      if (this.match) {
        try {
          await this.$axios
            .post("send-code/", {
              phone_number: this.phone,
            })
            .then((res) => {
              console.log("Sending Code in Regester",res)
              
              //User register
              this.$axios
                .post("user-register/", {
                  phone_number: this.phone,
                  password: this.password,
                  code: res.data.code,
                })
                .then((res) => {
                  console.log("user info Code in Regester", res)
                  this.$auth.loginWith("local", {
                    data: {
                      phone_number: this.phone,
                      password: this.password,
                    },
                  });
                  this.$router.push("/");
                  this.phone = "";
                  this.password = "";
                  this.password_confirm = "";
                })
                

                .catch((e) => console.log(e));

            });
        } catch (e) {
          this.error = e.response.data.message;
          console.log("Error: ", e);
        }
      } else {
        alert("Parollar mos kelmadi");
      }
    },
  },
};
</script>