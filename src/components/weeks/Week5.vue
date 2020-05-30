<template>
  <div class="week-content">
    <h1>
      Промежуточная аттестация
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        Свет круговой поляризации интенсивностью I<sub>0</sub> падает на систему из двух скрещенных поляризаторов,
        между которыми поставлен третий, ось которого (направление пропускания) составляет угол <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\alpha"> (в радианах) по отношению к пропусканию входного устройства.
        Чему равна интенсивность света, вышедшего из системы?
        Все три поляризатора абсолютно одинаковы и имеют толщину D cм каждый.
        Они полностью непрозрачны для линейно поляризованного излучения «чужой» поляризации,
        а по отношению к излучению «своей» поляризации ведут себя совершенно аналогично обыкновенным стеклянным пластинкам,
        изготовленным из материала с вещественным коэффициентом преломления n' и коэффициентом поглощения K.
        (Введите отношение в виде десятичной дроби с тремя значащими цифрами).
      </p>
      <form class="task__form" @submit.prevent="task1">
        <ul class="input__list">
          <li class="input__item">
            <label for="task1.1" class="task__label">
              Введите угол a:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.1" required ref="task1_1" step="0.01">
          </li>
          <li class="input__item">
            <label for="task1.2" class="task__label">
              Введите толщину D:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.2" required ref="task1_2" step="0.1">
          </li>
          <li class="input__item">
            <label for="task1.3" class="task__label">
              Введите коэффициент K:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.3" required ref="task1_3" step="0.01">
          </li>
          <li class="input__item">
            <label for="task1.4" class="task__label">
              Введите коэффициент n':
            </label>
            <br>
            <input type="number" class="task__input" id="task1.4" required ref="task1_4" step="0.1">
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
        Приближающийся со скоростью v=a*c космический корабль инопланетян в качестве приветствия и знака дружелюбия посылает на Землю мощный импульс излучения боевого CO<sub>2</sub> лазера,
        настроенного на длину волны <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda"> мкм.
        Обрадованные перспективой контакта земляне в качестве ответного приветствия шлют гостям световой зайчик,
        получающийся в результате отражения дошедшего до Земли лазерного излучения от ориентированного под углом 90 к падающему пучку идеального металлического зеркальца,
        нанесенного на слой толщиной D мм не поглощающего излучение диэлектрика с диэлектрической проницаемостью e.
        Какова будет длина волны (в нм) вернувшегося с Земли света, зарегистрированного инопланетянами?
        Сколько узлов стоячей волны (учитывая узел на поверхности зеркала), возникающей при сложении падающей и отраженной волн, поместится на толщине диэлектрика?
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите длину волны:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.1" required ref="task2_1" step="0.1">
          </li>
          <li class="input__item">
            <label for="task2.2" class="task__label">
              Введите толщину диэлектрика D:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.2" required ref="task2_2" step="0.1">
          </li>
          <li class="input__item">
            <label for="task2.3" class="task__label">
              Введите проницаемость диэлектрика эпсилон:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.3" required ref="task2_3" step="0.01">
          </li>
          <li class="input__item">
            <label for="task2.4" class="task__label">
              Введите a:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.4" required ref="task2_4" step="0.1">
          </li>
          <li class="input__item">
            <button class="task__button" type="submit">Посчитать</button>
            <span class="task__answer" v-if="task2Answer">
              Ответ: N = {{ task2Answer }}; lambda<sub>2</sub> = {{ task2Answer2 }}
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 3</h3>
      <p class="task__content">
        В цилиндрическую кювету длиной L [см] залит раствор сахара, при распространении в котором света с правой и левой круговыми поляризациями соответствующие показатели преломления различаются на <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\delta n=2 \cdot 10^{-7}">.
        На какой угол (в радианах) изменит свое направление линейно поляризованное излучение лазера на красителе с длиной волны <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda"> [нм].
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
              Введите длину кюветы L:
            </label>
            <br>
            <input type="number" class="task__input" id="task3.2" required ref="task3_2">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for fifth week
 */
export default class Week5 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;
  private task2Answer2: number | null = null;
  private task3Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const a: number = +(this.$refs.task1_1 as HTMLInputElement).value;
    const D: number = +(this.$refs.task1_2 as HTMLInputElement).value;
    const K: number = +(this.$refs.task1_3 as HTMLInputElement).value;
    const n: number = +(this.$refs.task1_4 as HTMLInputElement).value;

    this.task1Answer = this.precision(1 / 8 * Math.pow(Math.sin(2 * a), 2) * Math.exp(-3 * K * D) * Math.pow((4 * n) / Math.pow(1 + n, 2), 6), 3);
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const l: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const D: number = +(this.$refs.task2_2 as HTMLInputElement).value;
    const e: number = +(this.$refs.task2_3 as HTMLInputElement).value;
    const a: number = +(this.$refs.task2_4 as HTMLInputElement).value;

    this.task2Answer = Math.trunc((2 * Math.sqrt(e) * D * Math.pow(10, -3)) / (l * Math.pow(10, -6) * Math.sqrt((1 - a) / (1 + a))));
    this.task2Answer2 = l * Math.pow(10, 3) * (1 - a) / (1 + a);
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
    const L: number = +(this.$refs.task3_2 as HTMLInputElement).value;

    this.task3Answer = Math.PI / (l * Math.pow(10, -9)) * 2 * Math.pow(10, -7) * L * Math.pow(10, -2);
  }
}
</script>

<style src="@/styles/week-content.css"></style>
