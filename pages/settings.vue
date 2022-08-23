<template>
    <div class="w-100">
        <div class="loading_box" v-if="loading">
            <loading></loading>
        </div>
        <div v-else class="settings">
            <div class="container">
                <div class="row row_settings ">
                    <div class="col-11 col-sm-12">
                        <div class="head_title">
                            <h4>Sozlanmalar</h4>
                        </div>
                    </div>
                </div>
                <div class="row row_settings row_content">
                    <div class="col-12">
                        <div class="hero_content">
                            <div class="row row_settings">
                                <div class="col-4 col-sm-4 col-md-3 col-lg-2">
                                    <div class="main_img">
                                        <div class="img_box">
                                            <div class="img_bak">
                                                <div>
                                                    <img :src="src" v-if="src" class="min_img rounded-circle mr-3"
                                                        width="126" height="126" />
                                                </div>
                                                <div @click="browse()" class="box_front">
                                                    <img src="../static/assets/images/+ .svg" alt="svg">
                                                </div>
                                            </div>
                                            <input id="update_picture" type="file" accept="image/*" hidden ref="file"
                                                @change="upload">

                                        </div>
                                    </div>

                                </div>
                                <div class="col-7 col-sm-8 col-md-9 col-lg-10">
                                    <div class="hero_btns">
                                        <div class="chamge_box">
                                            <button @click="browse()" class="btn_one">Rasmingizni
                                                tahrirlang</button>
                                        </div>
                                        <div class="add_box">
                                            <button @click=" UpDateImage()" class="btn_two">Fotosurat yuklash</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="w-100" @submit.prevent="sendData">
                    <div class="row row_settings row_inputs">
                        <div class="col-12 col-md-12 col-lg-6">
                            <div class="main_input_box">
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label for="tel">Telifon</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <input type="text" v-mask="'+998 ## ### ## ##'" v-model="phone"
                                                    class="input_in" id="tel" placeholder="+9989* *** ** **" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label for="isim">Isim</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <input type="text" v-model="name" class="input_in" id="isim"
                                                    placeholder="Isim..." required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label for="last_name">Familiya</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <input type="text" v-model="last_name" class="input_in" id="last_name"
                                                    placeholder="Familiya..." required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 padding_left">
                            <div class="main_input_box">
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label>Viloyat</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <select @change="getDestricts" class="input_in "
                                                    aria-label="Default select example" v-model="region" required>
                                                    <option v-for="region in Rigeons" :key="region.id"
                                                        :value="{ id: region.id, name: region.name}">
                                                        {{region.name}}</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label>Tuman/Shahar</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <select class="input_in " aria-label="Default select example"
                                                    v-model="districts" required>
                                                    <option v-for="item in Destricts" :key="item.id"
                                                        :value="{id:item.id, name:item.name}">
                                                        {{item.name}}</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input_box">
                                    <div class="row row_inputts">
                                        <div class="col-11 col-sm-3">
                                            <div class="input_titlee">
                                                <label for="address">Manzilingiz</label>
                                            </div>
                                        </div>
                                        <div class="col-11 col-sm-9">
                                            <div class="input_input">
                                                <input type="text" v-model="address" class="input_in" id="address"
                                                    placeholder="Manzil..." required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-11 col-sm-12">
                            <div class="send_box">
                                <button type="submit" class="send_btn">O'zgartirish</button>
                                <button class="btnn_clear" @click="clear_funk">Tozalash</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from "../components/loading.vue"
export default {
middleware: 'auth',
components:{
    Loading,
},
computed: {
    ...mapGetters(["User"]),
},
async created() {
    await this.$store.dispatch("getUser");
    console.log("$auth.user.avatar ===", this.$auth.user.avatar)
    if (this.$auth.user.avatar != null) {
        this.src = `https://api.dona.uz${this.User.avatar}`
        // this.src = `https://api.dona.uz${this.$auth.user.avatar}`
        console.log("after  created is working", this.src)
    }
    await this.getRigion();
    await this.setData();
    await this.getDestricts();
    this.loading=false;
},
data(){
    return{
        loading:true,
        file:null,
        url:"https://api.dona.uz",
        src:null,
        phone:"",
        name:"",
        last_name:"",
        address:"",
        full_number:"",
        selectedFile:null,
        Rigeons:{},
        Destricts:{},
        districts: {
            id: "",
            name: '',
        },
        region: {
            id: "",
            name: '',
        }

    }
},
methods:{
    ...mapActions(['getUser']),

    // Set Data 
    setData(){
        this.phone = this.$auth.user.phone_number;
        this.name = this.$auth.user.firstname;
        this.last_name = this.$auth.user.lastname;
        this.selectedFile=this.$auth.user.avatar;

    },
    // Click buttons
    browse(){
        this.$refs.file.click();
        console.log("Jamshid qara", `https://api.dona.uz${this.$auth.user.avatar}`)
    },

    // upload function
    upload(event){
        this.selectedFile=event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event)=>{
            this.src = event.target.result
        }
    },
    // Get Regions funktion
    async getRigion(){
        await this.$axios.get('regions/')
            .then(res => {
                this.Rigeons =res.data
            })
            .catch(err => {
            this.$toast.error('Xatolik yuz berdi')
        })
        this.region.id = this.$auth.user.region;
        this.region.name = this.$auth.user.region_name;
    },

    // Get Destrects funktion
    async getDestricts(){
        await this.$axios.get(`districts/?region=${this.region.id}`)
            .then(res => {
                this.Destricts = res.data.results;
            })
            .catch(err => {
                this.$toast.error('Xatolik yuz berdi')
        })
        this.districts.id = this.$auth.user.district;
        this.districts.name = this.$auth.user.district_name;
    },

    // Clear funktion
    clear_funk() {
        this.region={};
        this.districts={};
        this.phone = "";
        this.last_name = null;
        this.name = "";
        this.address = "";
        this.full_number = "";
    },

    // UpDateImage function
    async UpDateImage() {
        console.log("update image is working")
        this.full_number = `${this.phone.slice(1, 4)}${this.phone.slice(5, 7)}${this.phone.slice(8, 11)}${this.phone.slice(12, 14)}${this.phone.slice(15, 17)}`
        const form = new FormData();
        if (this.selectedFile != this.$auth.user.avatar) {
            form.append('avatar', this.selectedFile);
            // form.append('avatar', "");

        }
        await this.$axios.patch('user-profile/', form)
            .then(res => {
                this.$toast.success('Muvaffaqiyatli yuborildi!');
            })
        .catch(err => {
            console.log("Error ", err)
            this.$toast.error('Xatolik yuz berdi')
        })

    },
    
    // Send All Data for Update
    async sendData() {
        this.full_number = `${this.phone.slice(1, 4)}${this.phone.slice(5, 7)}${this.phone.slice(8, 11)}${this.phone.slice(12, 14)}${this.phone.slice(15, 17)}`
        const form = new FormData();
        if (this.selectedFile != this.$auth.user.avatar) {
            form.append('avatar', this.selectedFile);
        }
        form.append('bonus', "0");
        form.append('district', this.districts.id);
        form.append('district_name', this.districts.name);
        form.append('firstname', this.name);
        form.append('lastname', this.last_name);
        form.append('phone_number', this.full_number);
        form.append('region', this.region.id);
        form.append('region_name', this.region.name);
        await this.$axios.patch('user-profile/', form)
            .then(res => {
                this.$toast.success('Muvaffaqiyatli yuborildi!');
            })
            .catch(err => {
                console.log("Error ", err)
                this.$toast.error('Xatolik yuz berdi')
            })
    }
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