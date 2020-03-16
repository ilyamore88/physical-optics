<template>
  <div class="week-content">
    <h1>
      Неделя 4
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        В первом варианте квантовой  механики, развитом Нильсом Бором на базе планетарной модели атома Резерфорда , было показано, что энергии уровней атома водорода удовлетворяют соотношению
        <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=W_n= -\frac{W_0}{n^2}">, где  n=1,2,3,4,5... , а
        <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=W_0= 13.6\quad eV"> (1эВ – энергия  приобретаемая электроном при прохождении им разности  потенциалов в 1 Вольт).
        Рассчитайте длину волны линии с номером M в спектре поглощения холодного газа из атомарного водорода (подобные экзотические объекты природы может создавать современная атомно-молекулярная физика).
        Нумерацию линий спектра поглощения производить в направлении возрастания их частот, начиная с самой длинноволновой. Найденную длину волны введите в нм.
      </p>
      <form class="task__form" @submit.prevent="task1">
        <ul class="input__list">
          <li class="input__item">
            <label for="task1.1" class="task__label">
              Введите номер волны линии M:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.1" required ref="task1_1">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task1Answer">
              Ответ: {{ task1Answer }}
            </span>
          </li>
        </ul>
      </form>

    </div>
    <div class="task">
      <h3 class="task__header">Задание 2</h3>
      <p class="task__content">
        На стеклянную подложку с показателем преломления n нанесено интерференционное покрытие, состоящее из N пар чередующихся слоев сульфида цинка (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=n_1=2.32">), и двуокиси титана (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=n_2=2.4">).
        При напылении слоев толщина каждого из них делалась точно равной <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\frac{\lambda_j}{4}">.
        Рассчитайте энергетический коэффициент отражения такого зеркала (в %), сохранив две значащие цифры.
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите показатель преломления n:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.1" required ref="task2_1" step="0.01">
          </li>
          <li class="input__item">
            <label for="task2.2" class="task__label">
              Введите кол-во пар чередующихся слоёв N:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.2" required ref="task2_2">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task2Answer">
              Ответ: {{ task2Answer }}
            </span>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for fourth week
 */
export default class Week4 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const m: number = +this.$refs.task1_1.value;

    this.task1Answer = 91.36 * (Math.pow(m + 1, 2) / (m * (m + 2)));
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const n: number = +this.$refs.task2_1.value;
    const N: number = +this.$refs.task2_2.value;

    this.task2Answer = Math.trunc(Math.pow((n - Math.pow(2.32 / 2.4, 2 * N)) / (n + Math.pow(2.32 / 2.4, 2 * N)), 2) * 100);
  }
}
</script>

<style src="@/styles/week-content.css"></style>
