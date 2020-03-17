<template>
  <div class="week-content">
    <h1>
      Неделя 2
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        Изображенную на графике периодическую функцию можно представить в виде ряда Фурье<br>
        <img src="https://courses.openedu.ru/assets/courseware/v1/dae0a75d89c691143ce6315f9a91ef58/asset-v1:ITMOUniversity+PHYOPT+spring_2020+type@asset+block/opros_T-5-1-0.PNG"><br>
        Чему равна амплитуда m – гармоники спектра периодического сигнала <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=f_m"> в случае, если
        <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\tau = kT">.
        Не забудьте ввести знак Фурье-амплитуды, если она окажется отрицательной.
      </p>
      <form class="task__form" @submit.prevent="task1">
        <ul class="input__list">
          <li class="input__item">
            <label for="task1.1" class="task__label">
              Введите гармонику спектра m:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.1" required ref="task1_1">
          </li>
          <li class="input__item">
            <label for="task1.2" class="task__label">
              Введите коэф. k:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.2" required ref="task1_2" step="0.1">
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
        Ротатором называется электрический диполь,
        равномерно вращающийся вокруг неподвижной оси,
        проходящей через его центр и перпендикулярной вектору его дипольного момента.
        Во сколько раз отличается интенсивность излучения ротатора на заданном расстоянии от него при регистрации излучения в направлении,
        составляющем угол <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\theta"> с осью вращения (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=I1(\theta)">) от интенсивности, регистрируемой вдоль оси вращения (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=I2(\theta=0)">) на в N раз меньшем расстоянии?
        Округлить до 2-х значащих цифр.
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите угол θ:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.1" required ref="task2_1" step="0.01">
          </li>
          <li class="input__item">
            <label for="task2.2" class="task__label">
              Введите коэф. N:
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
        Оцените температуру очень популярного в современной квантовой оптике объекта ¬ сверх- охлажденной цезиевой плазмы (слабо ионизированного газа из высоковозбужденных атомов цезия),
        при которой доплеровское уширение в регистрируемом на длине волны λ нм излученияи не будет маскировать эффекты естественного уширения спектральной линии.
        Для определенности расчетов потребуйте, чтобы соответствующее искомой температуре доплеровское уширение (полуширина) составляло 10% от полуширины лоренцевского контура спектральной линии.
        Учитывая приближенный характер оценок, оставьте в ответе одну значащую цифру, но постарайтесь правильно рассчитать порядок искомой температуры.
        Ответ запишите в формате 5.39e-06
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
        Рассчитайте полуширину спектральной линии одиночного оптического импульса, представляющего собой гауссов пакет <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=E(t)=E_0e^{-\gamma t^2} cos(\omega_0 t)">.
      </p>
      <form class="task__form" @submit.prevent="task4">
        <ul class="input__list">
          <li class="input__item">
            <label for="task4.1" class="task__label">
              Введите gamma (без 10^17):
            </label>
            <br>
            <input type="number" class="task__input" id="task4.1" required ref="task4_1" step="0.0001">
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
        При экспериментальном изучении нормального эффекта Зеемана были выполнены измерения интенсивности света, излучаемого смещенной в область больших частот компонентой, в зависимости от угла между направлением регистрации света и линиями поля В.
        Чему равно отношение так измеренной интенсивности под углом α к ее максимальной величине.
        Округлите до двух знаков после запятой.
      </p>
      <form class="task__form" @submit.prevent="task5">
        <ul class="input__list">
          <li class="input__item">
            <label for="task5.1" class="task__label">
              Введите угол α:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.1" required ref="task5_1" step="0.01">
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
 * Class represents component for second week
 */
export default class Week2 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;
  private task3Answer: string | null = null;
  private task4Answer: number | null = null;
  private task5Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const m: number = +(this.$refs.task1_1 as HTMLInputElement).value;
    const k: number = +(this.$refs.task1_2 as HTMLInputElement).value;

    this.task1Answer = k * (Math.sin(Math.PI * k * m)) / (Math.PI * k * m);
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const t: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const N: number = +(this.$refs.task2_2 as HTMLInputElement).value;

    this.task2Answer = this.precision((1 + Math.pow(Math.cos(t), 2)) / (2 * Math.pow(N, 2)), 2);
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

    this.task3Answer = (363 / Math.pow(l, 2)).toExponential(2);
  }

  /**
   * Get answer for task 4
   */
  private task4(): void {
    const g: number = +(this.$refs.task4_1 as HTMLInputElement).value;

    this.task4Answer = 2.355 * Math.sqrt(g * Math.pow(10, 17));
  }

  /**
   * Get answer for task 5
   */
  private task5(): void {
    const a: number = +(this.$refs.task5_1 as HTMLInputElement).value;

    this.task5Answer = +((1 + Math.pow(Math.cos(a), 2)) / 2).toFixed(2);
  }
}
</script>

<style src="@/styles/week-content.css"></style>
