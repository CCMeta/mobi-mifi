<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const password = ref('')
const newPassword = ref('')
const newPassword2 = ref('')


const onSubmit = async () => {
  const form = {
    "password": btoa(password.value),
    "newPassword": btoa(newPassword.value),
  }
  console.log(form)
  const result = await fetching('login_password=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
};
const onClickLeft = () => router.push('/')
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="Password Setting"
      left-arrow @click-left="onClickLeft" />
    <br />

    <van-cell-group inset>
      <van-field v-model="password" type="password" placeholder="Current Password" />
      <van-field v-model="newPassword" type="password" placeholder="New Password" />
      <van-field v-model="newPassword2" type="password" placeholder="Confirm Password" />
    </van-cell-group>
    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Save
    </van-button>

  </div>
</template>

<style lang="less">
:root {
  --van-field-placeholder-text-color: rgba(255, 255, 255, 0.3);
}
</style>
