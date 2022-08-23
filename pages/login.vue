<template>
  <div class="w-100">
    <div class="login_bg">
      <h5>Tizimga kirish</h5>
      <form class="text-left" @submit.prevent="login">
        <div class="form-group">
          <label  class="control-label">Parol va Telefon raqamingizni kiriting</label>
          <input type="text" v-mask="'+998 ## ### ## ##'" v-model="phone" class="form-control inputss " 
            placeholder="+9989* *** ** **" required />
        </div>
        <div class="form-group">
         
          <input type="password" v-model="password" class="form-control inputss" placeholder="******"
            required />
        </div>
        <div class="login_btn text-center">
          <button type="submit">Kirish</button>
        </div>
      </form>

      <div class="login_links">
        <nuxt-link class="sds" to="/register">Ro'yxatdan o'tmaganmisiz?</nuxt-link>
        <nuxt-link class="second_past" to="/reregister">Parolingizni unutdingizmi?</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: "loginLayout",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            phone_number: this.phone,
            password: this.password,
          },
        });
        this.$router.push("/");
        this.phone = "";
        this.password = "";
      } catch (e) {
        console.log("Error: ", e)
      }
    },
  },
};
</script>