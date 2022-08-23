<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="profile">
      <div class="container">
        <div class="row row_profile">
          <div class="col-12 col-sm-12 diplay_none">
            <div class="head_title">
              <h4>Profile</h4>
            </div>
          </div>
          <div class="col-4 col-sm-4 col-md-5 col-lg-5">

            <div class="main_img_box">

              <div class="avatar_box">
                <div v-if="boxx">
                  <img :src="src" v-if="src" class="min_img rounded-circle mr-3" width="126" height="126" />
                </div>
                <div v-else class="avatar_back" @click="Pass_to">
                  <img src="../static/assets/images/+ .svg" alt="svg">
                </div>
              </div>

            </div>

          </div>
          <div class="col-8 col-sm-8 col-md-7 col-lg-7">
            <div class="main_title_box">
              <div class="name_box">
                <h2>{{name}} {{lastName}}</h2>
              </div>
              <div class="bonus_box">
                <span>Bonus: {{bonus}}</span>
              </div>
              <div class="pass_to">
                <nuxt-link class="link" to="/settings">
                  <div class="main_btn">
                    <span>Sozlamalarga o'tish</span>
                  </div>
                  <div class="under">
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="col-4 diplay_none1">

          </div>
          <div class="col-8 col-sm-12 col-md-12">
            <div class="social_box">
              <div class="contact_box">
                <a href="#">
                  <img src="../static/assets/images/phone1.svg" alt="Icon" />
                  <span>+{{ $auth.user.phone_number }}</span>
                </a>
              </div>
              <div class="contact_box box_1">
                <a href="#">
                  <div class="loc_img">
                    <div>
                      <img src="../static/assets/images/location1.svg" alt="Icon" />
                    </div>
                    <div>
                      <span>{{ $auth.user.district_name }}, {{ $auth.user.region_name }}</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="contact_box">
                <a href="https://t.me/mmmuslim">
                  <img src="../static/assets/images/telegram1.svg" alt="Icon" />
                  <span>@dona.uz</span>
                </a>
              </div>
            </div>
          </div>


          <div class="col-12">
            <nuxt-link to="order-history" class="profile_menu">
              <div class="p-menu_item">
                <img class="mr-1" src="../static/assets/images/order-icon.svg" alt="Icon" />
                <p class="paragrf">Mening buyurtmalarim</p>
                <img class="next-icon" src="../static/assets/images/next.svg" alt="Icon" />
              </div>
            </nuxt-link>
          </div>
          <div class="col-12">
            <nuxt-link to="/favorites" class="profile_menu">
              <div class="p-menu_item">
                <img class="mr-1" src="../static/assets/images/heart.svg" alt="Icon" />
                <p class="paragrf">Mening sevimlilarim</p>
                <img class="next-icon" src="../static/assets/images/next.svg" alt="Icon" />
              </div>
            </nuxt-link>
          </div>
          <div class="col-12">
            <span @click="logout" to="#" class="profile_menu">
              <div class="p-menu_item">
                <img class="mr-1" src="../static/assets/images/logout.svg" alt="Icon" />
                <p class="paragrf">Chiqish</p>
                <img class="next-icon" src="../static/assets/images/next.svg" alt="Icon" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from "../components/loading.vue"
export default {
  middleware: "auth",
  comments:{
    Loading,
  },
  computed: {
    ...mapGetters(["User"]),
  },
  async created() {
    await this.$store.dispatch("getUser");
    this.src=`https://api.dona.uz${this.User.avatar}`
    this.name = this.User.firstname;
    this.lastName = this.User.lastname;
    this.bonus=this.User.bonus;
    if(this.User.avatar !=null){
      this.boxx=true
    }
    else{
      this.boxx=false
    }
    this.loading=false;
  },
  data(){
    return{
      loading:true,
      url: "https://api.dona.uz",
      src: null,
      boxx:false,
      urlBasiImg : "https://api.dona.uz",
      lastName:"",
      name:"",
      bonus:null,
    }
  },
  
  methods: {
    ...mapActions(['getUser']),
    // if there are no image function
    Pass_to(){
      this.$router.push("/settings")
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
  
};
</script>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
</style>