<template>
  <user-template>
    <template #profile-content>
      <profile-content 
        :user="user"
      />
    </template>
    <template #biography-content>
      <div style="height: 500px" />
    </template>
    <template #photos-content>
      <div style="height: 500px" />
    </template>
  </user-template>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import UserTemplate from '@/components/templates/UserTemplate.vue';
import ProfileContent from '@/components/organisms/ProfileContent.vue';
import UserApi from '@/api/user';
import { User } from '@/models/user';

@Component({
  components: {
    UserTemplate,
    ProfileContent,
  }
})
export default class UserView extends mixins(UtilMixin) {
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    profilePicUrl: null,
    introduction: '',
    email: null,
    linkedIn: null,
    twitter: null,
    facebook: null,
  }

  get getUser() {
    return this.user;
  }

  created() {
    this.fetchGetUser();
  }

  fetchGetUser() {
    UserApi.getUser(this.$route.params.userId)
        .then((data) => {
          this.user = data;
        })
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>
