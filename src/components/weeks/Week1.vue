<template>
  <div class="week-content">
    <h1>
      Неделя 1
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        В оптике и в атомно-молекулярной физике энергии переходов и волновые числа (модуль вектора k) нередко измеряют в обратных сантиметрах (см-1). Чему равно волновое число для плоской монохроматической волны, период колебаний в которой составляет T=ς*10<sup>-16</sup> (c)?
      </p>
      <form class="task__form" @submit.prevent="task1">
        <label for="task1.1" class="task__label">
          Введите ς:
        </label>
        <input type="number" class="task__input" id="task1.1" required ref="task1_1">
        <button class="task__button" type="submit">Посчитать</button>
      </form>
      <p class="task__answer" v-if="task1Answer">
        Ответ: {{ task1Answer }}
      </p>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 2</h3>
      <p class="task__content">
        В оптике и в атомно-молекулярной физике энергии переходов и волновые числа (модуль вектора k) нередко измеряют в обратных сантиметрах (см-1). Чему равно волновое число для плоской монохроматической волны, период колебаний в которой составляет T=ς*10<sup>-16</sup> (c)?
      </p>
      <p class="task__answer" v-if="task1Answer">
        Ответ: {{ task1Answer }}
      </p>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 3</h3>
      <p class="task__content">
        В оптике и в атомно-молекулярной физике энергии переходов и волновые числа (модуль вектора k) нередко измеряют в обратных сантиметрах (см-1). Чему равно волновое число для плоской монохроматической волны, период колебаний в которой составляет T=ς*10<sup>-16</sup> (c)?
      </p>
      <p class="task__answer" v-if="task1Answer">
        Ответ: {{ task1Answer }}
      </p>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 4</h3>
      <p class="task__content">
        В оптике и в атомно-молекулярной физике энергии переходов и волновые числа (модуль вектора k) нередко измеряют в обратных сантиметрах (см-1). Чему равно волновое число для плоской монохроматической волны, период колебаний в которой составляет T=ς*10<sup>-16</sup> (c)?
      </p>
      <p class="task__answer" v-if="task1Answer">
        Ответ: {{ task1Answer }}
      </p>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 5</h3>
      <p class="task__content">
        В оптике и в атомно-молекулярной физике энергии переходов и волновые числа (модуль вектора k) нередко измеряют в обратных сантиметрах (см-1). Чему равно волновое число для плоской монохроматической волны, период колебаний в которой составляет T=ς*10<sup>-16</sup> (c)?
      </p>
      <p class="task__answer" v-if="task1Answer">
        Ответ: {{ task1Answer }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for first week
 */
export default class Week1 extends Vue {
  private task1Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    this.task1Answer = (2.1 * Math.pow(10, 6)) / this.$refs.task1_1.value;
  }
}
</script>

<style src="@/styles/week-content.css"></style>
