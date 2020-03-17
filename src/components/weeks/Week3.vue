<template>
  <div class="week-content">
    <h1>
      Неделя 3
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        Излучение гелий-неонового лазера (длина волны генерации в вакууме λ=633 нм) распространяется в среде с комплексной диэлектрической проницаемостью ε= ε’+i ε” (например 2.21+0.6i).
        Сколько полных длин волн распространяющегося в среде излучения уложится на участке, соответствующему затуханию интенсивности света в е раз?
      </p>
      <form class="task__form" @submit.prevent="task1">
        <ul class="input__list">
          <li class="input__item">
            <label for="task1.1" class="task__label">
              Введите ε’:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.1" required ref="task1_1" step="0.01">
          </li>
          <li class="input__item">
            <label for="task1.2" class="task__label">
              Введите ε”:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.2" required ref="task1_2" step="0.01">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task1Answer != null">
              Ответ: {{ task1Answer }}
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 2</h3>
      <p class="task__content">
        Исходя из классической теории оцените концентрацию атомов газа, для которой интенсивность излучения на частоте, соответствующей резонансному поглощению света атомами газа (соответствующая длина волны в вакууме - λ нм),
        убывает в 2 раза на участке распространения длиной в L см. Ответ приводить в <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=(cm^{-3})">
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите длину участка L:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.1" required ref="task2_1">
          </li>
          <li class="input__item">
            <label for="task2.2" class="task__label">
              Введите длину волны λ:
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
    <div class="task">
      <h3 class="task__header">Задание 3</h3>
      <p class="task__content">
        Оцените концентрацию атомов Томсона в газе, при которой групповая скорость распространения излучения на длине волны <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda">(нм) будет отличаться от скорости света в вакууме на k %.
        Считать, что резонансная частота атомов Томсона сушественно ( более, чем на порядок ) ниже частоты распространяющегося в газе излучения. Ответ приводить в <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=(cm^{-3})">
      </p>
      <form class="task__form" @submit.prevent="task3">
        <ul class="input__list">
          <li class="input__item">
            <label for="task3.1" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task3.1" required ref="task3_1">
          </li>
          <li class="input__item">
            <label for="task3.2" class="task__label">
              Введите k:
            </label>
            <br>
            <input type="number" class="task__input" id="task3.2" required ref="task3_2" step="0.01">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task3Answer">
              Ответ: {{ task3Answer }}
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 4</h3>
      <p class="task__content">
        Неполяризованный световой пучок интенсивностью I<sub>0</sub> падает из вакуума на поверхность прозрачного материала с показателем преломления n под углом α к нормали, опущенной в точку падения.
        Найдите отношение интенсивности света в отраженном пучке к интесивности света в падающем.
        Округлить до 3-х знаков после запятой.
      </p>
      <form class="task__form" @submit.prevent="task4">
        <ul class="input__list">
          <li class="input__item">
            <label for="task4.1" class="task__label">
              Введите показатель преломления n:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.1" required ref="task4_1" step="0.1">
          </li>
          <li class="input__item">
            <label for="task4.2" class="task__label">
              Введите угол α:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.2" required ref="task4_2" step="0.01">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task4Answer">
              Ответ: {{ task4Answer }}
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 5</h3>
      <p class="task__content">
        На границу раздела стекла и вакуума со стороны оптически более плотной среды с показателем преломления n падает плоская монохроматическая волна электромагнитного излучения с длиной волны в вакууме λ (нм).
        Угол падения равен α.
        На каком расстоянии от поверхности стекла напряженность электрического поля уменьшится в m раз по сравнению с напряженностью на границе раздела?
        Округлите до 2-х знаков после запятой.
        Ответ приводить в нм.
      </p>
      <form class="task__form" @submit.prevent="task5">
        <ul class="input__list">
          <li class="input__item">
            <label for="task5.1" class="task__label">
              Введите показатель преломления n:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.1" required ref="task5_1" step="0.1">
          </li>
          <li class="input__item">
            <label for="task5.2" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.2" required ref="task5_2">
          </li>
          <li class="input__item">
            <label for="task5.3" class="task__label">
              Введите угол падения α:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.3" required ref="task5_3" step="0.0001">
          </li>
          <li class="input__item">
            <label for="task5.4" class="task__label">
              Введите m:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.4" required ref="task5_4">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task5Answer">
              Ответ: {{ task5Answer }}
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
 * Class represents component for third week
 */
export default class Week3 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;
  private task3Answer: number | null = null;
  private task4Answer: number | null = null;
  private task5Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const e1: number = +(this.$refs.task1_1 as HTMLInputElement).value;
    const e2: number = +(this.$refs.task1_2 as HTMLInputElement).value;

    this.task1Answer = Math.trunc(1 / (4 * Math.PI) * (1 / Math.tan(0.5 * Math.atan(e2 / e1)))) | 0;
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const L: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const lambda: number = +(this.$refs.task2_2 as HTMLInputElement).value;

    this.task2Answer = 1.452 / (L * Math.pow(lambda, 2)) * Math.pow(10, 14);
  }

  /**
   * Function return rounded number
   */
  private precision(value: number, precision: number): number {
    if (value < 10) {
      value = Number(parseFloat(value.toString()).toPrecision(precision));
    } else {
      value = Number(parseInt(value.toString()));
      let significantValue = value;

      for (let i = value.toString().length; i > precision; i--) {
        significantValue = Math.round(significantValue / 10);
      }
      for (let i = 0; significantValue.toString().length < value.toString().length; i++) {
        significantValue = significantValue * 10;
      }
      value = significantValue;
    }
    return value;
  }

  /**
   * Get answer for task 3
   */
  private task3(): void {
    const l: number = +(this.$refs.task3_1 as HTMLInputElement).value;
    const k: number = +(this.$refs.task3_2 as HTMLInputElement).value;

    this.task3Answer = 22.33 * Math.pow(10, 24) * k / Math.pow(l, 2);
  }

  /**
   * Get answer for task 4
   */
  private task4(): void {
    const n: number = +(this.$refs.task4_1 as HTMLInputElement).value;
    const a: number = +(this.$refs.task4_2 as HTMLInputElement).value;
    const nsqr: number = Math.pow(n, 2);
    const sina: number = Math.sin(a);
    const cosa: number = Math.cos(a);

    this.task4Answer = (0.5 * (Math.pow((nsqr * cosa - Math.sqrt(nsqr - Math.pow(sina, 2))) / (nsqr * cosa + Math.sqrt(nsqr - Math.pow(sina, 2))), 2) +
        Math.pow((Math.sqrt(nsqr - Math.pow(sina, 2)) - cosa) / (Math.sqrt(nsqr - Math.pow(sina, 2)) + cosa), 2))).toFixed(3);
  }

  /**
   * Get answer for task 5
   */
  private task5(): void {
    const n: number = +(this.$refs.task5_1 as HTMLInputElement).value;
    const l: number = +(this.$refs.task5_2 as HTMLInputElement).value;
    const a: number = +(this.$refs.task5_3 as HTMLInputElement).value;
    const m: number = +(this.$refs.task5_4 as HTMLInputElement).value;

    this.task5Answer = (l * Math.log(m) * Math.pow(2 * Math.PI * Math.sqrt(Math.pow(n * Math.sin(a), 2) - 1), -1)).toFixed(2);
  }
}
</script>

<style src="@/styles/week-content.css"></style>
