<template>
  <div class="w-100">
    <div class="login_bg">
      <h5>Ro'yhatdan o'tish</h5>
      <form class="text-left" @submit.prevent="cheackMessage">
        <div class="form-group">
          <label for="password" class="control-label inputsss"
            >Raqamingizga yuborilgan sms kodni kiriting</label
          >
          <input
            type="password"
            v-model="password"
            class="form-control inputss"
            id="password"
            placeholder="******"
            required
          />
        </div>
        <div class="login_btn text-center">
          <button type="submit">Yuborish</button>
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
      password: "",
    };
  },
  methods: {
    async cheackMessage() {
      if (localStorage.code == this.password) {
        try {
          await this.$axios
            .post("user-register/", {
              phone_number: localStorage.phone,
              password: localStorage.password,
              code: localStorage.code,
            })
            .then((res) => {
              this.$auth.loginWith("local", {
                data: {
                  phone_number: localStorage.phone,
                  password: localStorage.password,
                },
              });
              console.log("user yaratildi va routergacha keldi");
              this.$router.push("/login");
            })

            .catch((e) => console.log(e));
        } catch {
          this.error = e.response.data.message;
          console.log("Error: ", e);
        }
      } else {
        this.$toast.error("Cod mos kelmadi iltimos tekshirib kiriting");
      }
    },
  },
};
</script>
