<template>
  <div>
    <!-- Header Start -->
    <div class="header">
      <div class=" container header-div">
        <div class="row row_headerr">
          <div class="col-8 col-sm-6 mobile_boxx">
            <div class="d-flex nav-mobile">
              <nuxt-link to="/contact" class="mr-3 location">
                <img src="../static/assets/images/location.svg" alt="Icon" />
                <span class="location_main">Tashkent, Uzbekistan</span>
              </nuxt-link>
              <div class="phone">
                <img src="../static/assets/images/phone.svg" alt="Icon" />
                <a href="tel:+998954012021">95 401-20-21</a>
              </div>
            </div>
          </div>
          <div class="col-3 menu-icon" @click="showModal_funck">
            <div class="menu_btn">
              <img src="../static/assets/images/menu_icon.svg" alt="Icon">
            </div>
          </div>
          <div class="col-6 col-sm-6 login_logout">
            <div class="auth Enter_box" v-if="!$store.state.auth.loggedIn">
              <nuxt-link to="/login">
                <span class="mr-3 fw-bold">Kirish</span>
              </nuxt-link>
              <nuxt-link to="/register">
                <span>Ro'yxatdan o'tish</span>
              </nuxt-link>
            </div>
            <div class="auth logout Logout_boxx" v-else @click="logout" style="cursor: pointer">
              <span class=" fw-bold">Chiqish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NavBar start -->
    <div class="navbar">
      <div class="container">
        <div class="row row_headerr_nav">
          <div class="col-6 col-sm-3 col-md-2 col-lg-2 logo_boxx">
            <div class="logo">
              <nuxt-link to="/">
                <img src="../static/assets/images/logo.svg" alt="Logo" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-5 col-lg-5 search_boxx">
            <div class="main search main_search_box">
              <div class="input-group main_input_group">
                <div class="main_input_w_85">
                  <input id="main_input" type="text" class="inputt" placeholder="Qidiruv" v-model="MainsearchQuary"
                    @input="MainfelterFunk" @blur="MainblurFunk" @focus="MainfocusInput" />
                </div>
                <label for="main_input" class="main_input_w_15">
                  <div class="input-group-append">
                    <div class="btn">
                      <img src="../static/assets/images/search.svg" alt="Search" />
                    </div>
                  </div>
                </label>
              </div>
              <div class="main_search_body" v-if="Main_showItem">
                <div v-for="item in MainsearchItem" :key="item && item.id" class="w-100">
                  <nuxt-link :to="'/' + item.id" class="w-100 text_deco">
                    <div class="row rows w-100">
                      <div class="col-md-4 col-lg-3 p-0 main_search_img">
                        <div class="w-100 img_box">
                          <img :src="item.images[0]">
                        </div>
                      </div>
                      <div class="col-8 col-sm-7 col-md-5 col-lg-5 p-0 main_search_title">
                        <div class="title_box">
                          <div>
                            <h4>{{ item.name }}</h4>
                          </div>
                          <div>
                            <h5>{{ item.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-4 col-sm-5 col-md-3 col-lg-4 p-0 main_search_stars">
                        <div class="star_box">
                          <div class="w-100 star_text"><span><img
                                src="../static/assets/images/star.svg"></span><span><img
                                src="../static/assets/images/star.svg"></span><span><img
                                src="../static/assets/images/star.svg"></span></div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 col-sm-3 col-md-3 col-lg-2 user_karzina">
            <div class="karzina_user_heart">
              <div class="karzina_box">
                <nuxt-link to="cart">
                  <img class="nav-icons" src="../static/assets/images/shopping.svg" alt="Icon" />
                </nuxt-link>
              </div>
              <div class="heart_box">
                <nuxt-link to="favorites">
                  <img class="nav-icons" src="../static/assets/images/heart.svg" alt="Icon" />
                </nuxt-link>
              </div>
              <div class="user_box" @click="show_hede1">
                <nuxt-link to="#">
                  <img src="../static/assets/images/user.svg" alt="Icon" />
                </nuxt-link>
                <div class="dropDownOne" v-if="!$store.state.auth.loggedIn">
                  <div class="sub_miny" v-if="show_hide1">
                    <div class="w-100 sub_box" v-for="(item,i) in dropdownOne" :key="i">
                      <div class="link" @click="pass_to_login(item.link)">
                        <h4>{{item.title}}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropDownTwo" v-else>
                  <div class="sub_miny dropdown1" v-if="show_hide1">
                    <div class="w-100 sub_box" v-for="(item,i) in dropdownTwo" :key="i">
                      <div class="link" @click="pass_to_login(item.link)">
                        <h4>{{item.title}}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div :class="{ mobile_modal: showModal }" v-if="showModal" class="close_icon">
      <div class="text-right modal-close">
        <img @click="showModal=false" src="../static/assets/images/close.svg" alt="Icon">
      </div>
      <div class="main mobile-search">
        <div class="input-group">
          <div class="search_w_85">
            <input id="menu_input" type="text" class="inputt" placeholder="Izlash..." v-model="searchQuary"
              @input="felterFunk" @blur="blurFunk" @focus="focusInput" />
          </div>
          <label for="menu_input" class="input-group-append search_w_15">
            <div class="btn btn-warning" type="button">
              <img src="../static/assets/images/search.svg" alt="Search" />
            </div>
          </label>
        </div>
        <div class="searchBody" v-if="showItem">
          <div v-for="item in searchItem" :key="item && item.id" class="w-100">
            <nuxt-link :to="'/' + item.id" class="w-100 text_deco">
              <div class="row rows w-100">
                <div class="col-8 col-sm-7 p-0">
                  <div class="title_box">
                    <div>
                      <h4>{{ item.name }}</h4>
                    </div>
                    <div>
                      <h5>{{ item.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }}</h5>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-sm-5 p-0">
                  <div class="star_box">
                    <div class="w-100 star_text">
                      <span><img src="../static/assets/images/star.svg"></span><span><img
                          src="../static/assets/images/star.svg"></span><span><img
                          src="../static/assets/images/star.svg"></span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="auth log_if" v-if="!$store.state.auth.loggedIn">
        <div class="link_box">
          <nuxt-link class="log_linlk" to="/login">
            <h2>Kirish</h2>
          </nuxt-link>
        </div>
        <div class="link_box">
          <nuxt-link class="log_linlk" to="/register">
            <h2>Ro'yxatdan o'tish</h2>
          </nuxt-link>
        </div>
        <div class="link_box">
          <nuxt-link class="log_linlk" to="/contact">
            <h2>Aloqa</h2>
          </nuxt-link>
        </div>
      </div>
      <div class="auth logout log_else" v-else style="cursor: pointer;">
        <div class="contact_box">
          <nuxt-link class="linkk" to="/contact">
            <h2>Aloqa</h2>
          </nuxt-link>
        </div>
        <div class="Log_out" @click="logout">
          <h2>Ciqish</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      showItem: false,
      Main_showItem: false,
      searchItem: [],
      searchQuary: "",
      MainsearchQuary: "",
      MainsearchItem: [],
      dropdownTwo: [
        {
          title: "Profil",
          link: "/profile"
        },
        {
          title: "Mening sevimlilarim",
          link: "/favorites"
        },
        {
          title: "Buyurtmalar tarixi",
          link: "/order-history"
        },
        {
          title: "Sozlanmalar",
          link: "/settings"
        },
        {
          title: "Chiqish",
          link: "/login"
        }
      ],
      dropdownOne: [
        {
          title: "Profil",
          link: "/login"
        },
        {
          title: "Mening sevimlilarim",
          link: "/login"
        },
        {
          title: "Buyurtmalar tarixi",
          link: "/login"
        },
        {
          title: "Sozlanmalar",
          link: "/login"
        },
      ],
      show_hide1:false,
      num:0,
      num2:0,
    }
  },
  mounted() {
    this.felterFunk();
    this.MainfelterFunk();

  },
  methods: {
    pass_to_login(e){
      console.log("Jamshid",e)
      if(e == "/login"){
        this.logout()
      }
      else{
        this.$router.push(e)
      }
      
    },
    show_hede1(){
      this.show_hide1 = !this.show_hide1;
      this.num=0;
      document.addEventListener("click", this.add_fun)
    },
    add_fun(e) {
      if (this.num != 0) {
        if (e.target.closest(".dropDownOne")) return
        this.show_hide1 = false;
        document.removeEventListener("click", this.add_fun)
      }
      this.num++
    },

//Mobail search and Nav menu
    showModal_funck(){
      this.showModal=!this.showModal;
      this.num2=0;
      document.addEventListener("click", this.add_fun2)
    },
    add_fun2(e){
      if(this.num2 !=0){
        if(e.target.closest(".close_icon")) return
        this.showModal=false,
        document.removeEventListener("click", this.add_fun2)
      }
      this.num2++
    },

    async logout() {
      console.log("function is working")
      await this.$auth.logout();
      this.$router.push("/login");
    },
    async felterFunk() {
      await this.$axios
        .get(`https://api.dona.uz/api/v1/products/?search=${this.searchQuary}&limit=100&offset=0`)
        .then((res) => {
          this.searchItem = res.data.results;
          console.log("http://api.dona.uz/api/v1/products/?limit=100&offset=1", res);
        });
    },
    async MainfelterFunk() {
      await this.$axios
        .get(`https://api.dona.uz/api/v1/products/?search=${this.MainsearchQuary}&limit=100&offset=0`)
        .then((res) => {
          this.MainsearchItem = res.data.results;
        });
    },
    focusInput() {
      this.showItem = !this.showItem;
    },
    blurFunk() {
      setTimeout(() => {
        this.showItem = !this.showItem;
      }, 200)
    },
    MainblurFunk() {
      setTimeout(() => {
        this.Main_showItem = !this.Main_showItem;
        console.log("Salom Blur", this.Main_showItem)

      }, 200)
    },
    MainfocusInput() {
      this.Main_showItem = !this.Main_showItem;
      console.log("Salom Fokus", this.Main_showItem)
    },

  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>