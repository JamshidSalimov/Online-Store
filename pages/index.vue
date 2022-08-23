<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="w-100 indexx">
      <div class="categoriess">
        <div class="container">
          <!-- Categories start -->
          <div class="row row_categories categoryy">
            <div v-for="(category, index) in eghitCategories" :key="index"
              class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 category_box">
              <div class="card">
                <div class="img1">
                  <nuxt-link :to="'/all-products'" class="w-100">
                    <img :src="category.image">
                  </nuxt-link>
                </div>
                <div class="title">
                  <h4>
                    {{category.name}}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <!-- New products start-->
          <div class="row row_categories">
            <div class="col-12 col-sm-12 col-md-12 new_product">
              <div class="new_product_title">
                <h4>
                  Yangi maxsulotlar
                </h4>
              </div>
            </div>

            <div v-for="product in eghitProduct" :key="product && product.id"
              class="col-6 col-sm-6  col-md-4 col-lg-3 category_box">
              <div class="card">
                <div class="img2">
                  <nuxt-link class="img22" :to="'/' + product.id">
                    <img class="img-fluid" :src="product && product.images[0]" alt="Image" />
                  </nuxt-link>
                </div>
                <div class="title1">
                  <div class="star_savat">
                    <div class="w-65">
                      <nuxt-link class="links" :to="'/' + product.id">
                        <p>{{product && product.name}}</p>
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
                      <h3>{{ product.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ')}} so'm</h3>
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

            <div class="col-12 col-sm-12 col-md-12 new_product">
              <div class="big_btn">
                <nuxt-link to="all-products">
                  <button>Barchasini ko'rish</button>
                </nuxt-link>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12 new_product">
              <div class="new_product_title">
                <h4>
                  Mashhur brendlar
                </h4>
              </div>
            </div>

          </div>

          <!-- Favorit Brands -->
          <div class="row row_categories">
            <div class="col-12 margenn">
              <div class="slayder_box">
                <VueSlickCarousel v-bind="settings" v-if="Brands.length">
                  <div class="slider_box" v-for="brand in Brands" :key="brand && brand.id">
                    <img class="imgg" :src="brand && brand.image" alt="Image" />
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </div>

          <!-- Ommabop Tovarlar -->
          <div class="row row_categories">
            <div class="col-12 new_product">
              <div class="new_product_title brandd">
                <h4>
                  Ommabop Mahsulotlar
                </h4>
              </div>
            </div>
            <div v-for="fproducts in eghitFProducts" :key="fproducts && fproducts.id"
              class="col-6 col-sm-6  col-md-4 col-lg-3 category_box">
              <div class="card">
                <div class="img2">
                  <nuxt-link class="img22" :to="'/' + fproducts.id">
                    <img class="img-fluid" :src="fproducts && fproducts.images[0]" alt="Image" />
                  </nuxt-link>
                </div>
                <div class="title1">
                  <div class="star_savat">
                    <div class="w-65">
                      <nuxt-link class="links" :to="'/' + fproducts.id">
                        <p>{{fproducts && fproducts.name}}</p>
                      </nuxt-link>
                    </div>
                    <div class="star_icon">
                      <div class="star_class">
                        <img class="shopping" src="../static/assets/images/star.svg" alt="Icon" />
                      </div>
                      <div class="star_reting">
                        <h5>{{ fproducts && fproducts.ratings }}</h5>
                      </div>
                    </div>
                  </div>
                  <div class="star_savat bottom_savat">
                    <div class="w-65">
                      <h3>{{ fproducts.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ')}} so'm</h3>
                    </div>
                    <div class="karzina_icon">
                      <div class="w-100 d-flex align-items-center justify-content-end savatt">
                        <span style="cursor: pointer" @click.prevent="$store.dispatch('addToCart', fproducts.id)">
                          <img src="../static/assets/images/shopping.svg" alt="Icon" />
                        </span>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-end">
                        <span style="cursor: pointer" @click.prevent="$store.dispatch('addToFavorits', fproducts.id)">
                          <img src="../static/assets/images/heart.svg" alt="Icon" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12">
              <div class="big_btn">
                <nuxt-link to="all-products">
                  <button>Barchasini ko'rish</button>
                </nuxt-link>
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
export default Vue.extend({
  name: "IndexPage",
  components: {
    VueSlickCarousel,
    Loading,
  },

  data() {
    return {
      loading:true,
      settings: {
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
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
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  async created() {
    await this.$store.dispatch("getCategories");
    await this.$store.dispatch("getProducts");
    await this.$store.dispatch("getBrands");
    await this.$store.dispatch("getFProducts");
    this.loading = false;
  },
  computed: {
    ...mapGetters(["Categories", "Products", "FProducts", "Brands"]),

    eghitProduct(){
      return this.eghit_lenght()
    },
    eghitCategories(){
      return this.eghit_lenght1()
    },
    eghitFProducts(){
      return this.eghit_lenght2()
    },
  },
  methods:{
    eghit_lenght(){
      const arrays=[]
      for(let i=0; i<this.Products.length; i++){
        if(i<14){
          arrays.push(this.Products[i])
        }
      }
      // console.log("Jamshid Qara arrays", arrays)
      return arrays
    },
    eghit_lenght1(){
      const arrays1=[]
      for(let i=0; i<this.Categories.length; i++){
        if(i<12){
          arrays1.push(this.Categories[i])
        }

      }
      return arrays1
    },
    eghit_lenght2(){
      const arrays2=[]
      for(let i=0; i<this.FProducts.length; i++){
        if(i<12){
          arrays2.push(this.FProducts[i])
        }
      }
      return arrays2
    },
    getImgUrl(pic) {
      return require(pic)
    },
  }
});
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
