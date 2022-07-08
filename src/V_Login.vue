<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const account = ref('admin')
const password = ref('admin')


const onSubmit = async () => {
  const form = {
    "username": account.value,
    "passwd": btoa(password.value),
  }
  console.log(form)
  const result = await fetching('web_login=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  document.cookie = "SessionId=" + result.session
  router.push('/')
};
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="MOBI Login Page" />
    <br />

    <van-cell-group inset>
      <van-field v-model="account" type="text" placeholder="Current Account" />
      <van-field v-model="password" type="password" placeholder="Current Password" />
    </van-cell-group>

    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Login
    </van-button>

  </div>
</template>

<style lang="less">
:root {
  --van-field-placeholder-text-color: rgba(255, 255, 255, 0.3);
}
</style>
