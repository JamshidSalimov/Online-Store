<template>
    <div class="w-100">
        <div class="loading_box" v-if="loading">
            <loading></loading>
        </div>
        <div v-else class="w-100 order_successs">
            <div class="categoriess">
                <div class="container">
                    <div class="w_box">
                        <div class="row main_box">
                            <div class="col-12">
                                <div class="coll_box">
                                    <img src="../static/assets/images/success.svg" alt="Success" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="coll_box">
                                    <h2>
                                        Arizangiz qabul qilindi!
                                    </h2>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="coll_box">
                                    <h4>
                                        Batafsil ma'lumot uchun operator yaqin vaqt ichida siz bilan aloqaga chiqadi
                                        Iltimos, telefoningiz yoqilgan holda bo'lsin
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="w-100 form_head">
                                    <div class="w-50">
                                        <h3>Maxsulot </h3>
                                    </div>
                                    <div class="w-50 Summa">
                                        <h3>Summa</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12"
                                v-for="(item,index) in OrderHestory.results[this.OrderHestory.results.length - 1].items"
                                :key="index">
                                <div class="w-100 form_bottom">
                                    <div class="cost_box1">
                                        <h3>{{ item.product.name }}</h3>
                                    </div>
                                    <div class="cost_box2">
                                        <h3>{{ item.product.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                                            '$1 ')
                                            }} so'm</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="w-100 All_summ row">
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div class="w-100">
                                            <h5></h5>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div class="w-100">
                                            <h3>Jami summa :
                                                <span> {{  OrderHestory.results[this.OrderHestory.results.length -
                                                    1].overall_cost.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g,
                                                    '$1 ')
                                                    }} so'm</span>
                                            </h3>
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
import {mapGetters,mapActions} from "vuex"
import Loading from "../components/loading.vue"
export default {
    components:{
        Loading,
    },
   middleware: "auth",
   data(){
       return{ 
           loading: true,
       }
   },
  async created(){
       await this.getOrderHestory();
       this.loading = false;
   },
   computed:{
     ...mapGetters(["OrderHestory"])
   },
   methods:{
       ...mapActions(['getOrderHestory']),
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