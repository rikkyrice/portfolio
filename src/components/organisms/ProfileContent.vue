<template>
  <div
    id="profileContent"
    class="primary-bg primary-color"
    style="height: 100%; width: 100%;"
  >
    <div class="px-12 py-6">
      <div 
        class="bold text-left mb-4 mx-2"
        :style="fontSizeUtil(32, 16, 12)"
      >
        <span>Profile</span>
      </div>
      <v-container>
        <v-row>
          <v-col>
            <div>
              <span> {{ user.lastName }} {{ user.firstName }} </span>
            </div>
            <div>
              <span> {{ user.introduction }} </span>
            </div>
            <div>
              <span> {{ user.email }} </span>
            </div>
          </v-col>
          <v-col>
            <v-img :src="user.profilePicUrl" max-width="500px" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import Card from '@/components/molecules/Card.vue';
import { User } from '@/models/user';
import { DeviceType, deviceType } from '@/models/types/deviceType';

@Component({
  components: {
    Card,
  }
})
export default class ProfileContent extends mixins(UtilMixin) {
  @Prop() user!: User;

  get width() {
    return deviceType === DeviceType.DESKTOP
      ? '450px'
      : '300px';
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>