export const state = () => ({
    categories: [],
    products: [],
    Allproducts:[],
    brands: [],
    fproducts: [],
    productId: {},
    cart: {},
    Favorits:[],
    Order:{},
    user:{},

})

export const getters = {
    Categories(state) {
        return state.categories
    },
    Products(state) {
        return state.products
    },
    AllProducts(state) {
        return state.Allproducts
    },
    FProducts(state) {
        return state.fproducts
    },
    Brands(state) {
        return state.brands
    },
    ProductsId(state) {
        return state.productId
    },
    Cart(state) {
        return state.cart
    },
    User(state) {
        return state.user
    },
    OrderHestory(state){
        console.log('state.Order')
        console.log(state.Order)
        return state.Order
    },
    Favorits(state){
        return state.Favorits
    },
}

export const mutations = {
    setCategories(state, Categories) {
        state.categories = Categories
    },
    setProducts(state, Products) {
        state.products = Products
    },
    setAllProducts(state, AllProducts) {
        state.Allproducts = AllProducts
    },
    setFProducts(state, FProducts) {
        state.fproducts = FProducts
    },
    setBrands(state, Brands) {
        state.brands = Brands
    },
    setProductsId(state, ProductsId) {
        state.productId = ProductsId
    },
    setCart(state, Cart) {
        state.cart = Cart
    },
    setUser(state, User) {
        state.user = User
    },
    setFavorits(state,Favorits){
        state.Favorits=Favorits
    },
    setOrder(state,orderHistory){
        state.Order=orderHistory
        console.log('state.Order mounted')
        console.log(state.Order)
    },
}

export const actions = {
    async getCategories({ commit }) {
        await this.$axios.get('categories/')
            .then(res => {
                commit("setCategories", res.data)
            })
            .catch(e => console.log(e))
    },

    async getProducts({ commit }) {
        await this.$axios.get('products/')
            .then(res => {
                // console.log("Pro ", res)
                commit("setProducts", res.data.results)
            })
            .catch(e => console.log(e))
    },
    async getAllProducts({ commit }) {
        await this.$axios.get('products/?limit=100&offset=1')
            .then(res => {
                console.log("Jamshid qar AllProducts", res)
                commit("setAllProducts", res.data.results)
            })
            .catch(e => console.log(e))
    },
    async getFProducts({ commit }) {
        await this.$axios.get('products/?search=&is_famous=true')
            .then(res => {
                // console.log("FFFFPro ", res.data.results)
                commit("setFProducts", res.data.results)
            })
            .catch(e => console.log(e))
    },

    async getBrands({ commit }) {
        await this.$axios.get('brands/')
            .then(res => {
                // console.log("Brands ", res)
                commit("setBrands", res.data)
            })
            .catch(e => console.log(e))
    },

    async getProductsId({ commit }, id) {
        await this.$axios.get("products/" + id)
            .then(res => {
                commit("setProductsId", res.data)
            })
            .catch(e => console.log(e))
    },
    


    async addToCart({ }, id) {
        await this.$axios.post('basket-items/', { product: id, count: 1 })
            .then(res => {
                console.log("salomm",id)
                this.$toast.success("Muvaffaqiyatili qo'shildi")
                // console.log("Add to Cart: ", res)
            })
            .catch(e => {
                this.$toast.error("Xatolik yuz berdi")
                console.log(e)
            })
    },
   

    // Add To Fovorits 
    async addToFavorits({ }, id) {
        await this.$axios.patch(`liked-products/`, { productId: id })
            .then(res => { 
                console.log(res)
                if(res.data.message=="product was added to likeds"){
                    this.$toast.success(" Sevimlilarga qo'shildi")
                }
                else{
                    this.$toast.error("Sevimlilardan olib tashlandi")
                }
            })
            .catch(e => {
                this.$toast.error("Xatolik yuz berdi")
                console.log(e)
            })
    },
    async getOrderHestory({commit}){
        await this.$axios.get('orders/?limit=100&offset=0')
        .then(res =>{
            console.log("Order hestory in store",res)
            commit("setOrder",res.data)
        })
        .catch(err => {
            console.log("Error", err)
        })
    },
    // async getUserAvatar({commit}){
    //     await this.$axios.get('user-profile/')
    //     .then(res =>{
    //         commit("setAvatar",res.data)
    //     })
    //     .catch(err => {
    //         console.log("Error", err)
    //     })
    // },
    async getCart({ commit }) {
        await this.$axios.get('basket/')
            .then(res => {
                console.log("Cart Salom", res)
                commit("setCart", res.data && res.data.basket && res.data.basket)
            })
            .catch(err => {
                console.log("Error ", err)
            })
    },
    async getUser({ commit }) {
        await this.$axios.get('user-profile/')
            .then(res => {
                console.log("User profile info", res.data)
                commit("setUser", res.data)
            })
            .catch(err => {
                console.log("Error ", err)
            })
    },
    async getFavorits({ commit }) {
        await this.$axios.get('liked-products/')
            .then(res => {
                console.log("setFavorits", res.data)
                commit("setFavorits", res.data)
            })
            .catch(err => {
                console.log("Error ", err)
            })
    },

    async increaseCartItem({dispatch}, data) {
        await this.$axios.patch(`/basket-items/${data.id}/`, { product: data.product, count: data.count })
            .then(res => {
                // console.log("Updated", res)
                dispatch('getCart');
            })
            .catch(err => {
                console.log(err)
            })
    },
    async decreaseCartItem({dispatch}, data) {
        await this.$axios.patch(`/basket-items/${data.id}/`, { product: data.product, count: data.count })
            .then(res => {
                // console.log("Updated", res)
                dispatch('getCart');
            })
            .catch(err => {
                console.log(err)
            })
    },
    async deleteCartItem({dispatch}, data) {
        await this.$axios.delete(`/basket-items/${data.id}/`)
            .then(res => {
                // console.log("Updated", res)
                dispatch('getCart');
            })
            .catch(err => {
                console.log(err)
            })
    },
    async deleteFavoretsItem({dispatch}, id) {
        console.log("Salom dunyo",id)
        await this.$axios.patch(`liked-products/`, { productId: id })
            .then(res => {
                dispatch('getFavorits');
                console.log(res)
                this.$toast.success("Product was removed from Lileds")
            })
            .catch(err => {
                this.$toast.error("Xatolik yuz berdi")
                console.log(err)
        })
    }
}