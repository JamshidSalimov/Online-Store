<template>
  <div>
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="favorits">

      <div class="container">

        <!-- Header Title -->
        <div class="row row_faworits">
          <div class="col-11 col-sm-12">
            <div class="head_title">
              <h2>Sevimlilar</h2>
            </div>
          </div>
        </div>

        <!-- Favorit Products -->
        <div class="row row_faworits">
          <div v-for="fovoret in Favorits.likeds" :key="fovoret && fovoret.id"
            class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 fav_main_box">
            <div class="main_box">
              <div class="box_img">
                <img class="image-flued" :src="fovoret.images[0]">
                <div class="close_btn" @click="$store.dispatch('deleteFavoretsItem', fovoret.id)">
                  <img src="../static/assets/images/delete.svg">
                </div>
              </div>
              <div class="box_title">
                <div class="name_grade">
                  <div class=" w_70">
                    <div class=" w-100">
                      <h3>{{ fovoret.name }}</h3>
                    </div>
                  </div>
                  <div class="w_30">
                    <div class="star_icon">
                      <img src="../static/assets/images/star.svg">
                    </div>
                    <div class="grade">
                      <h4>
                        {{ fovoret.ratings }}
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="sum_karzina">
                  <div class="w_80">
                    <h3>{{ fovoret.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }} so'm</h3>
                  </div>
                  <div class="w_20">
                    <div class="karzina_icon" @click.prevent="$store.dispatch('addToCart', fovoret.id)">
                      <img src="../static/assets/images/shopping.svg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- only show Mobail version -->
        <div class="row row_faworits showed_mobail">
          <div class="col-11 col-sm-12">
            <div class="head_title">
              <h2>Tavsiya qilinadiganlar</h2>
            </div>
          </div>
          <div v-for="fproducts in sixFProducts" :key="fproducts.id" class="col-6 col-sm-6  col-md-4 card_boxx">
            <div class="cardd">
              <div class="img2">
                <nuxt-link class="img22" :to="'/' + fproducts.id">
                  <img :src="fproducts.images[0]" alt="Image" />
                </nuxt-link>
              </div>
              <div class="title11">
                <div class="star_savat">
                  <div class="w_65">
                    <nuxt-link :to="'/' + fproducts.id">
                      <p>{{ fproducts.name }}</p>
                    </nuxt-link>
                  </div>
                  <div class="star_icon">
                    <div class="centerr">
                      <img class="shopping" src="../static/assets/images/star.svg" alt="Icon" />
                    </div>
                    <div>
                      <h5>{{ fproducts.ratings }}</h5>
                    </div>
                  </div>
                </div>
                <div class="bottom_savat">
                  <div class="w_80">
                    <h3>{{ fproducts.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }} so'm</h3>
                  </div>
                  <div class="karzina_icon">
                    <div class="w-100 d-flex align-items-center justify-content-end">
                      <span style="cursor: pointer" @click.prevent="$store.dispatch('addToCart', fproducts.id)">
                        <img src="../static/assets/images/shopping.svg" alt="Icon" />
                      </span>
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
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "../components/loading.vue"
export default {
  components:{
    Loading,
  },
 middleware: "auth",
  computed: {
    ...mapGetters(["Cart", "Favorits","FProducts"]),
    sixFProducts() {
      return this.six_lenght2()
    },
  },
  async created() {
    await this.$store.dispatch("getCart");
    await this.$store.dispatch("getFavorits");
    await this.$store.dispatch("getFProducts");
    this.loading = false;

  },
  data(){
    return{
      loading:true,
    }
  },
  methods:{
    ...mapActions(['getCart']),
    six_lenght2() {
      const arrays2 = []
      for (let i = 0; i < this.FProducts.length; i++) {
        if (i < 6) {
          arrays2.push(this.FProducts[i])
        }
      }
      return arrays2
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