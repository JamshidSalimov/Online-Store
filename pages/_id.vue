<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="detail">
      <div class="container">
        <div class="w-100 head_detail">
          <div class="row row_detail">

            <div class="col-md-12 col-lg-6">
              <div class="slayder_main_img">
                <div class="main_img">
                  <div class="img_back">
                    <img class="imgg" :src="src" alt="Watch" />
                  </div>
                </div>
                <div class="slayder">
                  <div class="slayder_box">
                    <VueSlickCarousel v-bind="settings1"
                      v-if="ProductsId && ProductsId.images && ProductsId.images.length>=2">
                      <div class="slider_box" v-for="image in ProductsId.images" :key="image.id">
                        <img @click="show_img(image,image.id)" :src="image" alt="Image" />
                      </div>
                    </VueSlickCarousel>
                  </div>
                  <div class="worli_wide">
                    <div class="brand_box">
                      <img class="brand_imgg" src="@/static/assets/images/brand.svg" alt="Product brand" />
                    </div>
                    <div class="world_wide_title">
                      <div class="w-100">
                        <h4>Sotuvchi: <span>{{ ProductsId.brand && ProductsId.brand.name }}</span></h4>
                      </div>
                      <div class="w-100">
                        <h5>Mahsulotlar: <span>1200</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-6">
              <div class="Advansed_box">

                <div class="name_price">
                  <div class="name">
                    <h2>{{ ProductsId.name }}</h2>
                  </div>
                  <div class="price">
                    <h3>{{ ProductsId.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ')}} so'm</h3>
                  </div>
                </div>

                <div class="name_price_star">
                  <div class="price">
                    <h3>{{ ProductsId.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ')}} so'm</h3>
                  </div>
                  <div class="stars">
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                  </div>
                </div>

                <div v-if="$store.state.auth.loggedIn" class="display_none"
                  @click="$store.dispatch('addToCart', ProductsId.id )">
                  <button class="buttonnn">Savatchaga qo'shish</button>
                </div>
                <div v-else  class="display_none" @click="PassToLogin">
                  <button class="buttonnn">Savatchaga qo'shish</button>
                </div>


                <div class="title_stars">
                  <div class="title">
                    <h2>
                      Batafsil ma'lumot
                    </h2>
                  </div>
                  <div class="stars">
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                    <div class="boxcha"><img src="@/static/assets/images/star.svg" alt="svg"></div>
                  </div>
                </div>

                <div class="description">
                  <div class="row row_deskrip">
                    <div class="borderr" v-for="(deskp,index) in Descriptions" :key="index">
                      <div class="col-12">
                        <div class="titlee">
                          <p>{{deskp}} <span><img src="@/static/assets/images/cheak.png"></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="$store.state.auth.loggedIn" class="button_box"
                  @click="$store.dispatch('addToCart', ProductsId.id )">
                  <button class="buttonnn">Savatchaga qo'shish</button>
                </div>
                <div v-else class="button_box" @click="PassToLogin">
                  <button class="buttonnn">Savatchaga qo'shish</button>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="commints">
                <h2>Xaridorlar firklari</h2>
              </div>
            </div>

          </div>
          <div class="row row_detail user_comment_row">
            <div class="col-md-12 col-lg-6">
              <div class="scroll_bar">

                <div class="row user_comments" v-for="comment in UserComments" :key="comment.id">
                  <div class="col-12 col-sm-12  col-lg-12">
                    <h3>{{ comment.commentor }}</h3>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12">
                    <p>{{ comment.comment }}</p>
                  </div>
                  <div class="col-3 col-md-2">
                    <h5>{{ ChangeFormateDate(comment.created_at.slice(0, 10)) }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <form class="w-100" @submit.prevent="postComment">
                <div class="comment_box">
                  <div class="row user_comments_area">
                    <div class="col-12">
                      <div class="textarea">
                        <textarea class="form-control form_area" placeholder="Izoh yozish..." id="feedback" rows="5"
                          v-model="comment"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-12 btn_area">
                    <div class="w-100">
                      <button type="submit" class="buttonn">Fkir qoldirish</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Loading from "@/components/loading.vue"
import { mapGetters } from "vuex";
export default {
  components: {
    Loading,
  },
  // middleware: 'auth',

  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      UserComments:[],
      loading:true,
      src:"",
      settings: {
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
      },

      comment: "",

      settings1: {
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1200,
            settings1: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings1: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 768,
            settings1: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 576,
            settings1: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      Descriptions:[]
    };
  },
  methods: {
    show_img(e,id){
      this.src=e
    },
    PassToLogin(){
      this.$router.push("/login")
    },
    // setImaesLength(){
    //   this.settings1.slidesToShow = this.ProductsId.images.length-1;
    // },

    ChangeFormateDate(oldDate) {
      return oldDate.toString().split("-").reverse().join(".");
    },

    // Post Comments
    async postComment(){
      await this.$axios.post('product-comments/',{product:this.$route.params.id, comment: this.comment})
      .then(res => {
        this.$toast.success('Muvaffaqiyatli yuborildi!');
        this.comment = "";
        this.getProductsIdComment();
      })
      .catch(err => {
        console.log("Error ", err)
        this.$toast.error('Xatolik yuz berdi')
      })
    },
    async getProductsIdComment() {
      await this.$axios.get("products/" + this.$route.params.id)
        .then(res => {
          this.UserComments = res.data.comments
        })
        .catch(e => console.log(e))
    },
  },
  async created() {
    await this.$store.dispatch("getProductsId", this.$route.params.id);
    this.src = this.ProductsId.images[0]
    this.Descriptions = this.ProductsId.description
    this.settings1.slidesToShow = this.ProductsId.images.length-1;
    this.UserComments=this.ProductsId.comments;
    this.loading = false;
  },
  
  computed: {
    ...mapGetters(["ProductsId"]),
  },

};
</script>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>