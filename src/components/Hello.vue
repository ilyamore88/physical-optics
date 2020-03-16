<template>
  <div class="hello-content">
    <h1>
      Добро пожаловать на сайт!
    </h1>
    <h3>
      Выберите необходимую Вам неделю в меню слева.
    </h3>
    <p>
      Если у Вас возникли вопросы, Вы можете обратиться ко мне в <a href="https://vk.com/ilyamore88" target="_blank">ВК</a>.
    </p>
    <p>
      Также у нас существует <a href="https://vk.me/join/AJQ1d4V2zxZ7n7DOlF1aOvbv" target="_blank">чат</a> для этого курса. Все материалы, по которым создавался этот сайт, находятся в этом чате или на <a href="https://drive.google.com/open?id=1V0RiD7KOmuI9wSA5zipNH4GvnU23ogsJ" target="_blank">Google Drive</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for first page
 */
export default class Hello extends Vue {
}
</script>

<style>
.hello-content {
  flex: 4;

  a {
    color: #000;
  }
}
</style>
