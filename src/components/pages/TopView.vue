<template>
  <profile-template>
    <template #profile-content>
      <profile-content 
        :user="user"
      />
    </template>
  </profile-template>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import ProfileTemplate from '@/components/templates/ProfileTemplate.vue';
import ProfileContent from '@/components/organisms/ProfileContent.vue';
import { User } from '@/models/user';

@Component({
  components: {
    ProfileTemplate,
    ProfileContent,
  }
})
export default class ProfileView extends mixins(UtilMixin) {
  user: User = {
    id: 'rikkyrice',
    firstName: '陸',
    lastName: '橋木',
    profilePicUrl: require('@/assets/icon.jpg'),
    introduction: '25歳の駆け出しエンジニアです！',
    email: 'rikkyrice@gmail.com',
    linkedIn: null,
    twitter: null,
    facebook: null,
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>
