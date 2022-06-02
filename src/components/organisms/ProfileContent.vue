<template>
  <div
    id="profileContent"
    class="primary-bg primary-color"
    style="height: 100%; width: 100%;"
  >
    <div class="px-12 py-6">
      <v-container>
        <v-row>
          <v-col
            class="mr-6"
            style="display: flex;flex-direction: column;"
          >
            <div
              class="text-left my-4 mx-2"
              :style="fontSizeUtil(32, 16, 12)"
            >
              <span> {{ user.lastName }} {{ user.firstName }} </span>
            </div>
            <div
              class="text-left my-4 mx-2"
              :style="fontSizeUtil(16, 12, 12)"
              style="line-height: 32px;"
            >
              <span> {{ user.introduction }} </span>
            </div>
            <div
              class="mt-auto ml-2 mr-16 mb-8"
              style="display: flex;justify-content: space-between;"
            >
              <icon-button
                v-if="user.email"
                icon="email"
                color="red"
                iconHeight="42px"
                target="_blank"
                :href="user.email"
              />
              <icon-button
                v-if="user.linkedIn"
                icon="linkedin"
                color="#0A66C2"
                iconHeight="42px"
                target="_blank"
                :href="user.linkedIn"
              />
              <icon-button
                v-if="user.twitter"
                icon="twitter"
                color="#1DA1F2"
                iconHeight="42px"
                target="_blank"
                :href="user.twitter"
              />
              <icon-button
                v-if="user.facebook"
                icon="facebook"
                color="#4267B2"
                iconHeight="42px"
                target="_blank"
                :href="user.facebook"
              />
            </div>
          </v-col>
          <v-col>
            <v-img 
              :src="profilePicUrl" 
              max-width="500px"
              class="rounded-xl"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
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
import IconButton from '@/components/atoms/IconButton.vue';
import { User } from '@/models/user';
import { DeviceType, deviceType } from '@/models/types/deviceType';

@Component({
  components: {
    Card,
    IconButton,
  }
})
export default class ProfileContent extends mixins(UtilMixin) {
  @Prop() user!: User;

  get width() {
    return deviceType === DeviceType.DESKTOP
      ? '450px'
      : '300px';
  }

  get profilePicUrl() {
    return this.user.profilePicUrl === null
      ? require('@/assets/default-user.png')
      : require(`@/assets/${this.user.profilePicUrl}`);
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>