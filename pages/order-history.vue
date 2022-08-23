<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div v-else class="w-100 Order-history">
      <div class="categoriess">
        <div class="container">
          <div class="row row_categoriesss">
            <div class="col-12 col-sm-12 col-md-12">
              <div class="new_product_title hestory_title">
                <h4>
                  Buyurtmalar tarixi
                </h4>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6" v-for="(item,index) in OrderHestory.results" :key="index">
              <div class="w-100 main_boxx">
                <div class="row row_boxx">
                  <div class="col-12 number_zakas">
                    <h2>Zakaz №{{ item.id }}</h2>
                  </div>
                  <div class="col-sm-4 col-md-4 col-lg-4">
                    <div class="img_boxx w-100">
                      <div class="w-100 imgg">
                        <img :src="item.items[0].product.images[0]" alt="img" />
                      </div>
                    </div>
                    <div class="w-100 paragrf">
                      <p>{{ item.items[0].product.name }}</p>
                    </div>
                  </div>
                  <div class="col-sm-8 col-md-8 col-lg-8 p-1">
                    <div class="title_box w-100">
                      <div class="title_content">
                        <div>
                          <h3>Buyurtma raqami</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">__________</span>
                        </div>
                        <div>
                          <h4>{{ item.items[0].id }}</h4>
                        </div>
                      </div>
                      <div class="title_content">
                        <div>
                          <h3>Soni</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">___</span>
                        </div>
                        <div>
                          <h4>{{ item.overall_num_of_products }} dona</h4>
                        </div>
                      </div>
                      <div class="title_content">
                        <div>
                          <h3>Buyurtma vaqti</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">___</span>
                        </div>
                        <div>
                          <h4>{{ item.items[0].product.created_at.slice(0, 10) }}
                            {{ item.items[0].product.created_at.slice(11, 16) }}</h4>
                        </div>
                      </div>
                      <div class="title_content">
                        <div>
                          <h3>Telefon raqam</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">___</span>
                        </div>
                        <div>
                          <h4>{{ item.phone_number }}</h4>
                        </div>
                      </div>
                      <div class="title_content">
                        <div>
                          <h3>Manzil</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">___</span>
                        </div>
                        <div>
                          <h4>{{ item.address }}</h4>
                        </div>
                      </div>
                      <div class="title_content">
                        <div>
                          <h3>Umumiy narxi</h3>
                        </div>
                        <div class="line_bottom">
                          <span class="spann">___</span>
                        </div>
                        <div>
                          <h4>{{ item.overall_cost.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ') }} so'm
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 button_zakas">
                    <button class="back_btn"><img src="../static/assets/images/circil.svg"> Sotildi</button>
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
import {mapGetters} from "vuex"
import Loading from "../components/loading.vue"
export default {
  components:{
    Loading,
  },
   middleware: "auth",
   computed:{
     ...mapGetters(["OrderHestory"])
   },
   data(){
    return{
      loading:true,
    }
   },
   async created(){
     await this.$store.dispatch("getOrderHestory");
     this.loading =false;
   },
   methods:{
    
   }
}
</script>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
