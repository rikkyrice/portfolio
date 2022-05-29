<template>
  <div id="playground">
    <block-button
      label="Add new"
      :primary="true"
      :rounded="false"
    />
    <block-button
      label="ボタン"
      :primary="true"
      :textOnly="true"
      :outlined="false"
      style="width: 100px;"
    />
    <plain-content bg="inherit">
      <label-button
        label="films"
        :primary="true"
        :focused="true"
      />
      <label-button
        label="blog"
        :primary="true"
      />
    </plain-content>
    <v-btn
      text
      color="primary"
    >
      Primary
    </v-btn>
    <user-info-mini-section
      width="300px"
      size="small"
      createdAt="2日前"
    />
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import UtilMixin from "@/mixins/utilMixin";
import BlockButton from "@/components/atoms/BlockButton.vue";
import LabelButton from "@/components/atoms/LabelButton.vue";
import PlainContent from "@/components/atoms/PlainContent.vue";
import UserInfoMiniSection from '@/components/molecules/UserInfoMiniSection.vue';
import Card from '@/components/molecules/Card.vue';

@Component({
  components: {
    BlockButton,
    LabelButton,
    PlainContent,
    UserInfoMiniSection,
    Card,
  },
})
export default class PlaygroundView extends mixins(UtilMixin) {
}
</script>

<style scoped lang="scss">
@import "@/style.scss";
</style>
