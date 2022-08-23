<template>
  <div class="w-100">
    <div class="login_main">
      <div class="container">
        <div class="row row_login">
          <div class="col-11 col-sm-12">
            <div class="logo">
              <nuxt-link to="/">
                <img src="../static/assets/images/logo.svg" alt="Logo" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="row row_content">
          <div class="col-11 col-sm-10 col-md-9 col-lg-7">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .login_main{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    .container{
      height: 100vh;
      .row_login{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 10vh;
        .logo {
            width: 100%;
            margin-top: 30px;
        }
      }
      .row_content{
        widows: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>