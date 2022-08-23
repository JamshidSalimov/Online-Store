<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="w-100">
      <div class="categoriess">
        <div class="container">
          <div class="margee w-100">
            <div class="row row_Catigory">
              <div class="col-10 col-sm-10 col-md-12 col-lg-11">
                <div class="category_boxx">
                  <VueSlickCarousel v-bind="settings" v-if="Categories.length">
                    <div class="box main_box" @click="Barchasi">Barchasi</div>
                    <div class="slider_box" v-for="category in Categories" :key="category && category.id">
                      <div class="box" @click="Pass_category(category.name)">{{ category.name }}</div>
                    </div>
                  </VueSlickCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="categoriess padding_bottom">
        <div class="container">
          <div class="row row_categories">
            <div v-for="product in selectedCategory" :key="product && product.id"
              class="col-6 col-sm-6  col-md-4 col-lg-3 category_box">
              <div class="card">
                <div class="img2">
                  <nuxt-link class="img22" :to="'/' + product.id">
                    <img :src="product && product.images[0]" alt="Image" />
                  </nuxt-link>
                </div>
                <div class="title1">
                  <div class="star_savat">
                    <div class="w-65">
                      <nuxt-link :to="'/' + product.id">
                        <p>{{ product && product.name }}</p>
                      </nuxt-link>
                    </div>
                    <div class="star_icon">
                      <div class="star_class">
                        <img class="shopping" src="../static/assets/images/star.svg" alt="Icon" />
                      </div>
                      <div class="star_reting">
                        <h5>{{ product && product.ratings }}</h5>
                      </div>
                    </div>
                  </div>
                  <div class="star_savat bottom_savat">
                    <div class="w-65">
                      <h3>{{ product && product.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }}
                        so'm</h3>
                    </div>
                    <div class="karzina_icon">
                      <div class="w-100 d-flex align-items-center justify-content-end savatt">
                        <span style="cursor: pointer" @click.prevent="$store.dispatch('addToCart', product.id)">
                          <img src="../static/assets/images/shopping.svg" alt="Icon" />
                        </span>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-end">
                        <span style="cursor: pointer" @click.prevent="$store.dispatch('addToFavorits', product.id)">
                          <img src="../static/assets/images/heart.svg" alt="Icon" />
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
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Loading from "../components/loading.vue"

export default {
  components: {
    VueSlickCarousel,
    Vue,
    Loading,
  },
  data() {
    return {
      loading : true,
      // settings: {
      //   arrows: false,
      //   slidesToShow: 5,
      //   autoplay: true,
      // },
      settings: {
        arrows: true,
        slidesToShow: 5,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      selectedCategory:[],
    };
  },
  async created() {
    await this.$store.dispatch("getCategories");
    await this.$store.dispatch("getProducts");
    await this.$store.dispatch("getAllProducts");
    await this.AllProductss();
    this.loading = false;
  },
  computed: {
    ...mapGetters(["Categories", "Products","AllProducts"]),
    
  },
  methods:{
    AllProductss(){
      this.selectedCategory = this.AllProducts

    },
    Barchasi(){
      this.selectedCategory = this.AllProducts

    },
    Pass_category(name){
      this.selectedCategory=[]
      var Category_product=[]
      for (let i = 0; i < this.AllProducts.length; i++){
        if (this.AllProducts[i].category.name == name){
          Category_product.push(this.AllProducts[i])
        }
      }
      console.log("name",this.AllProducts)
      console.log("Category_product", Category_product)

      this.selectedCategory=Category_product
    }
  }
};
</script>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .padding_bottom{
      padding-bottom: 100px;
    }
    
</style>