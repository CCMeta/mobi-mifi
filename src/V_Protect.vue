<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const get_protection_setting = await fetching('get_protection_setting=1&')
const firewallChecked = ref(get_protection_setting.firewall === 1 ? true : false);
const pingChecked = ref(get_protection_setting.pingDeactivation === 1 ? true : false);
const filterChecked = ref(get_protection_setting.IPFilterSwitch === 1 ? true : false);

const onSubmit = async () => {
  const form = {
    "firewall": boolToInt(firewallChecked),
    "pingDeactivation": boolToInt(pingChecked),
    "IPFilterSwitch": boolToInt(filterChecked),
  }
  console.log(form)
  const result = await fetching('save_protection_setting=' + JSON.stringify(form) + '&')
  result && Dialog({ message: 'Save Success' });
}

const onClickLeft = () => router.push('/')


function boolToInt(v) {
  if (v.value === true)
    return 1
  return 0
}

</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="Protection Setting" left-arrow @click-left="onClickLeft" />
    <br />

    <van-cell-group inset>
      <van-cell center title="Firewall">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="firewallChecked" size="24" />
        </template>
      </van-cell>
      <van-cell center title="Ping Allow">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="pingChecked" size="24" />
        </template>
      </van-cell>
      <van-cell center title="IP Filter">
        <template #right-icon>
          <van-switch inactive-color="#EEE" v-model="filterChecked" size="24" />
        </template>
      </van-cell>
    </van-cell-group>
    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Save
    </van-button>

  </div>
</template>

<style lang="less">
</style>
