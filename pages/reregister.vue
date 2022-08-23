<template>
  <div class="w-100">
    <div class="login_bg">
      <h5>Parolni tiklash</h5>
      <form class="text-left" @submit.prevent="register">
        <div class="form-group ">
          <label for="password" class="control-label inputsss">Yangi parolingizni kiriting</label>
          <input
            type="password"
            v-model="password"
            class="form-control inputss"
            id="password"
            placeholder="******"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="control-label inputsss">Yangi parolingizni qayta kiriting</label>
          <input
            type="password"
            v-model="password_confirm"
            @change="checkMatch"
            class="form-control inputss"
            id="password"
            placeholder="******"
            required
          />
          <small v-show="!match">Parollar mos kelmadi</small>
        </div>
        <div class="login_btn text-center">
          <button type="submit">Tasdiqlash</button>
        </div>
      </form>
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

              //User register
              this.$axios
                .post("user-register/", {
                  phone_number: this.phone,
                  password: this.password,
                  code: res.data.code,
                })
                .then((res) => {

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