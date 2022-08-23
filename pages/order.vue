<template>
  <div class="w-100">
    <div class="loading_box" v-if="loading">
      <loading></loading>
    </div>
    <div class="w-100 orders">
      <div class="categoriess">
        <div class="container">
          <div class="row_orderss row headerr">
            <div class="col-12 col-sm-12 col-md-6 col-lg-5">
              <div class="new_product_titlee">
                <h4>
                  Buyurtma berish
                </h4>
              </div>
            </div>
            <div class="col-8 col-sm-6 col-md-5 col-lg-5">
              <div class="w-100 boxx">
                <button class="w-100 buttonn">Chegirma turi <span> 1 + 1 = 3</span></button>
              </div>
            </div>
          </div>
          <form class="w-100" @submit.prevent="sendOrder">
            <div class="form_boxx1">
              <div class="row input_box">
                <div class="col-lg-6">
                  <div class="form_box">
                    <div class="boxcha">
                      <input type="text" v-model="name" class="inputt" placeholder="Ismingiz..." required />
                    </div>
                    <div class="boxcha">
                      <input type="text" v-mask="'+998 ## ### ## ##'" v-model="phone_number" class="inputt"
                        placeholder="+9989* *** ** **" required />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form_box">
                    <div class="boxcha">
                      <select class="inputt " aria-label="Default select example" v-model="region" required>
                        <option v-for="region in Rigeons" :key="region.id"
                          :value="{ id: region.id, name: region.name }">
                          {{ region.name }}</option>
                      </select>

                    </div>
                    <div class="boxcha">
                      <input class="inputt" ype="text" placeholder="1 dona" v-model="count">

                    </div>
                    <div class="button_heart">
                      <div class="main_btn">
                        <button class="btnn" type="submit">Buyurtma berish</button>
                      </div>
                      <div class="heart_img">
                        <!-- <img src="../static/assets/images/heart.png"> -->
                        <button class="btnn_clear" @click="clear_funk">Tozalash</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { required } from "vuelidate/lib/validators";
import Loading from "../components/loading.vue"
export default {
  components:{
    Loading,
  },
middleware: 'auth',

    data(){
      return{
        loading:true,
        Rigeons: {},
        region: {
          id: "",
          name: '',
        },
        name:"",
        phone_number:"",
        full_number:"",
        address:"",
        count:null,
        user_number:"",
        
      }
    },
    async created() {
      await this.GetUserProfile();
      await this.getRigion();
      this.loading=false;
    },
    methods:{
      // get Regions
      async getRigion() {
        await this.$axios.get('regions/')
          .then(res => {
            this.Rigeons = res.data
          })
          .catch(err => {
            this.$toast.error('Xatolik yuz berdi')
            console.log("error",err)
          })
          this.region.id = this.$auth.user.region;
          this.region.name = this.$auth.user.region_name;
      },
      // get User Information
      async GetUserProfile() {
        await this.$axios.get('user-profile/')
          .then(res => {
            this.name = res.data.firstname
            this.phone_number = res.data.phone_number
          })
          .catch(err => {
            console.log("Error ", err)
            this.$toast.error('Xatolik yuz berdi')
          })
      },
      clear_funk(){
        this.phone_number="";
        this.count=null;
        this.name="";
        this.region.name="";
        this.full_number="";

      },
      async sendOrder({ }) {
        this.full_number = `${this.phone_number.slice(0, 4)}${this.phone_number.slice(5, 7)}${this.phone_number.slice(8, 11)}${this.phone_number.slice(12, 14)}${this.phone_number.slice(15, 17)}`

            await this.$axios.post('orders/',
            {
              name: this.name,
              phone_number: this.full_number,
              address: this.region.name
            })
              .then(res => {
                this.$toast.success("Bo'yurtmangiz qabul qilindi")
                this.full_number = "";
                console.log("res",res)
                this.$router.push("/order-success");
              })
                .catch(e => {
                  this.$toast.error("Xatolik yuz berdi")
                  console.log(e)
              })
      },
    }
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