<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="categoriess savattt">
      <div class="container">
        <div class="row row_categories ">
          <div class="col-12 col-sm-12 col-md-12">
            <div class="new_savat_title">
              <h4>
                Savatcha
              </h4>
            </div>
          </div>
        </div>

        <div class="row row_categories savat_body">
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 p-0">
            <div class="row_start w-100">
              <div class="boxx">
                <div class="row contents" v-for="item in Cart.items" :key="item.id">

                  <div class="col-12 col-sm-12 col-md-7">


                    <div class="row box_row">
                      <div class="col-4 col-sm-4 col-md-5 sinov">
                        <div class="w-100 imgg_boxx">
                          <img class="box_row_img" :src="item.product && item.product.images[0]" alt="Watch" />
                        </div>
                      </div>
                      <div class="col-7 col-sm-6 col-md-7 box_content">
                        <div class="sht_product">
                          <div class="title1 w-100">
                            <h4>{{ item.product && item.product.name }}</h4>
                          </div>
                          <div class="sht_btn">
                            <div class="left"
                              @click=" $store.dispatch('increaseCartItem', { product: item.product.id, count: item.count - 1, id: item.id, })">
                              <button><img src="../static/assets/images/minus.svg" alt="minus" /></button>
                            </div>
                            <div class="white">
                              <button>{{ item.count }} шт</button>
                            </div>
                            <div class="right" @click="
                              $store.dispatch('increaseCartItem', {
                                product: item.product.id,
                                count: item.count + 1,
                                id: item.id,
                              })
                            ">
                              <button><img src="../static/assets/images/plus.svg" alt="plus" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>

                  <div class="col-12 col-sm-12 col-md-5">
                    <div class="w-100 price">
                      <div class="price_box">
                        <h3>{{ item.product.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }} so'm
                        </h3>
                      </div>
                      <div class="w-100">
                        <h4>Ishlab chiqaruvchi: <span>{{
                            item.product &&
                            item.product.brand &&
                            item.product.brand.name
                            }}</span></h4>
                        <h5>Mahsulotlar: <span>1200</span></h5>
                      </div>
                    </div>
                  </div>

                  <div class="cansel_box" @click="
                    $store.dispatch('deleteCartItem', {
                      id: item.id,
                    })
                  ">
                    <button class="cansel_btn"><img src="../static/assets/images/remove.svg" alt="X" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-5">
            <div class="row_startt">
              <div class="AllSumm_box">
                <div class="row allPrice">
                  <div class="col-lg-12">
                    <div class="boxch">
                      <div>
                        <h2>Umumiy</h2>
                      </div>
                      <div>
                        <h3 v-if="Cart.overall_cost">{{
                          Cart.overall_cost.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="products_box" v-for="item in Cart.items" :key="item.id">
                    <div class="col-7 col-sm-7 col-lg-7">
                      <h4>{{ item.product && item.product.name }}</h4>
                    </div>
                    <div class="col-5 col-sm-5 col-lg-5">
                      <h5>{{ item.product.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }} so'm
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="row Main_btn">
                  <div class="col-12 co-sm-12 col-md-6 col-lg-12">
                    <div class="w-100 main_btn">
                      <button @click="passToOrder" class="buttonn">Buyurtma berish</button>
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
import { mapGetters } from "vuex";
import Loading from "../components/loading.vue"

export default {
  components:{
    Loading,
  },
  middleware: "auth",
  data(){
    return{
      loading:true,
    }
  },
  computed: {
    ...mapGetters(["Cart"]),
  },
  async created() {
    await this.$store.dispatch("getCart");
    this.loading=false;
  },
  methods:{
    passToOrder(){
      if(this.Cart.items.length!=0){
        this.$router.push("/order")
      }
      else{
        this.$toast.error("Zakas uchun maxsulot yuq")
      }
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
</style>