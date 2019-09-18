<template>
    <div class="index">
        <input type="text" name="username" title="username" v-model="username">
        <input name="password" type="password" title="password" v-model="password">
        <input type="button" value="login" @click="login">
    </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        // const result = await this.$post('/api/login', {
        //   username: this.username,
        //   password: this.password,
        // });
        // if (result.code !== 0) {
        //   console.log(result.message);
        // } else {
        //   window.location.replace('/');
        // }
        window.location.replace('/network');
      },
    },
  };
</script>
