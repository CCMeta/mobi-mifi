<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { Dialog } from 'vant';
import { fetching } from './utils'


const router = useRouter()

const beforeSubmit = (resovle) => {
  Dialog.confirm({
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    title: 'Comfirm Do this',
  }).then(resovle).catch(() => { })
}

const onSubmitReboot = async () => {
  const form = {
    "restart": 1,
  }
  console.log(form)
  const result = await fetching('restart=1&')
  if (result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
}

const onSubmitReset = async () => {
  const form = {
    "reset_factory": 1,
  }
  console.log(form)
  const result = await fetching('reset_factory=1&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  Dialog({ message: 'Save Success' });
}
const onClickLeft = () => router.go(-1)
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="Device Manage"
      left-arrow @click-left="onClickLeft" />

    <van-divider />
    <van-cell-group inset>
      <van-cell :border="false" title="Click the button below to restore device to its factory setting" />
      <van-button block type="danger" text="Reset" @click="beforeSubmit(onSubmitReset)" />
    </van-cell-group>

    <van-divider />
    <van-cell-group inset>
      <van-cell :border="false" title="Click the button below to restart the device" />
      <van-button block type="danger" text="Reboot" @click="beforeSubmit(onSubmitReboot)" />
    </van-cell-group>

  </div>
</template>

<style lang="less">
div.van-dialog {
  background-color: #383850;
  color: #FFF;

  button {
    color: #FFF;
    background-color: transparent;
  }
}
</style>
