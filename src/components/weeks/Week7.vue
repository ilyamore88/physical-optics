<template>
  <div class="week-content">
    <h1>
      Неделя 7
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        В эксперименте по дифракции света небольшое отверстие (характерный размер 0.1 мм)
        освещается монохроматическим излучением перестраиваемого лазера на красителе (длина волны <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda_1">).
        Дифракционная картина наблюдалась на экране, удаленном от отверстия на расстояние <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=z_1">.
        В следующем эксперименте использовался экран с аналогичным отверстием, размеры которого по обоим координатам (Х и Y) были изменены (увеличены) в одинаковое число раз n,
        освещаемый монохроматическим излучением с длиной волны (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda_2">).
        На каком расстоянии  от отверстия следует разместить экран, чтобы на нем наблюдалась подобная исходной дифракционная картина?
        (максимумы и минимумы интенсивности излучения должны остаться на тех же местах, но яркость во всех точках может измениться в одинаковое число раз).
        Ответ введите в сантиметрах с точностью до 1 см
      </p>
      <form class="task__form" @submit.prevent="task1">
        <ul class="input__list">
          <li class="input__item">
            <label for="task1.1" class="task__label">
              Введите длину волны λ<sub>1</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.1" required ref="task1_1">
          </li>
          <li class="input__item">
            <label for="task1.2" class="task__label">
              Введите длину волны λ<sub>2</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.2" required ref="task1_2">
          </li>
          <li class="input__item">
            <label for="task1.3" class="task__label">
              Введите расстояние z<sub>1</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.3" required ref="task1_3">
          </li>
          <li class="input__item">
            <label for="task1.4" class="task__label">
              Введите n:
            </label>
            <br>
            <input type="number" class="task__input" id="task1.4" required ref="task1_4">
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
        <img width="15%" src="https://courses.openedu.ru/assets/courseware/v1/4e5225b04ffe66d75c370737fe3bc9a9/asset-v1:ITMOUniversity+PHYOPT+spring_2020+type@asset+block/upr_5-2-1.PNG"><br>
        Поглощающий экран с отверстием в виде квадрата со стороной A
        освещается нормально падающей плоской монохроматической волной <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda">.
        На экране, удаленном от отверстия на расстояние D наблюдается дифракционная картина, примерный вид которой изображен на рисунке.
        Чему равно расстояние от центральной точки дифракционной картины (соответствующей максимуму интенсивности)
        до точки локального максимума, положение которой указано стрелкой? Ответ ведите в мм с точностью до трех значащих цифр.
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите сторону квадрата A:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.1" required ref="task2_1" step="0.01">
          </li>
          <li class="input__item">
            <label for="task2.2" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.2" required ref="task2_2">
          </li>
          <li class="input__item">
            <label for="task2.3" class="task__label">
              Введите расстояние D:
            </label>
            <br>
            <input type="number" class="task__input" id="task2.3" required ref="task2_3">
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
        Простейшая дифракционная решетка, представляющая собой поглощающий экран с периодически расположенными (шаг Λ)
        прозрачными щелями шириной D, освещается нормально падающей плоской монохроматической волной
        (длина волны излучения <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda">).
        Во сколько раз различаются интенсивности света, дифрагируемого решеткой в главные максимумы с номерами M<sub>1</sub> и M<sub>2</sub>?<br>
        <strong>Мы так и не поняли, как решать это задание, но условие у всех одинаковое (M<sub>1</sub> = 8; M<sub>2</sub> = -7)</strong>
      </p>
      <form class="task__form">
        <ul class="input__list">
          <li class="input__item">
            <span class="task__answer">
              Ответ: 3.
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 4</h3>
      <p class="task__content">
        Астроном-любитель пытается изучать космический объект, излучающий свет в оптическом диапазоне с помощью изготовленной им самим Фурье-линзы из органического стекла,
        диаметр которой составляет D. Для устранения хроматических аберраций астроном пропустил излучение через светофильтр,
        выделив квазимонохроматическую составляющую на длине волны <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda">.
        Межгалактическим Комитетом Поддержки Молодых Талантов создается очень яркий квазизвездный источник,
        представляющий собой в виде 10 одинаковых некогерентных супер-светильников, равномерно распределенных по неподвижной окружности,
        центр которой расположен на расстоянии S световых лет от Солнца и, следовательно, от Земли.
        Каков радиус обруча R для крепления источников света следует использовать Комитету для того, чтобы дать исследователю шанс догадаться,
        что наблюдаемый им объект не рядовая одиночная звезда или галактика, а нечто совсем необычное, дающее шанс получения гранта на конкурсе молодых исследователей?
        Ответ введите в километрах, ограничившись тремя значащими цифрами.
      </p>
      <form class="task__form" @submit.prevent="task4">
        <ul class="input__list">
          <li class="input__item">
            <label for="task4.1" class="task__label">
              Введите диаметр D:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.1" required ref="task4_1">
          </li>
          <li class="input__item">
            <label for="task4.2" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.2" required ref="task4_2">
          </li>
          <li class="input__item">
            <label for="task4.3" class="task__label">
              Введите расстояние S:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.3" required ref="task4_3">
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
        Плоская монохроматическая волна (<img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\lambda">) нормально падает на «синусоидальную решетку», представляющую собой слайд с функцией пропускания,
        <img src="https://courses.openedu.ru/assets/courseware/v1/64acbe319cdc19524dd74b9c3fbe195d/asset-v1:ITMOUniversity+PHYOPT+spring_2020+type@asset+block/upr_6-5-1.PNG"><br>
        Сколько незатухающих (однородных) плоских монохроматических волн будет содержать электромагнитное поле после решетки?
      </p>
      <form class="task__form" @submit.prevent="task5">
        <ul class="input__list">
          <li class="input__item">
            <label for="task5.1" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.1" required ref="task5_1">
          </li>
          <li class="input__item">
            <label for="task5.2" class="task__label">
              Введите Λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.2" required ref="task5_2">
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
 * Class represents component for fourth week
 */
export default class Week7 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;
  private task3Answer: number | null = null;
  private task4Answer: number | null = null;
  private task5Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const l1: number = +(this.$refs.task1_1 as HTMLInputElement).value;
    const l2: number = +(this.$refs.task1_2 as HTMLInputElement).value;
    const z1: number = +(this.$refs.task1_3 as HTMLInputElement).value;
    const n: number = +(this.$refs.task1_4 as HTMLInputElement).value;

    this.task1Answer = Math.round((l1 / l2) * z1 * n);
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const A: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const l: number = +(this.$refs.task2_2 as HTMLInputElement).value;
    const D: number = +(this.$refs.task2_3 as HTMLInputElement).value;

    this.task2Answer = this.precision(2.023 * (l * D) / A / 100, 3);
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
    const L: number = +(this.$refs.task3_1 as HTMLInputElement).value;
    const D: number = +(this.$refs.task3_2 as HTMLInputElement).value;
    const l: number = +(this.$refs.task3_3 as HTMLInputElement).value;
    const m1: number = +(this.$refs.task3_4 as HTMLInputElement).value;
    const m2: number = +(this.$refs.task3_5 as HTMLInputElement).value;

    this.task3Answer = (Math.pow(Math.sin(Math.PI * (D / L) * m1), 2) / Math.pow(Math.sin(Math.PI * (D / L) * m2), 2)) * Math.pow(m2 / m1, 2);
  }

  /**
   * Get answer for task 4
   */
  private task4(): void {
    const D: number = +(this.$refs.task4_1 as HTMLInputElement).value;
    const l: number = +(this.$refs.task4_2 as HTMLInputElement).value;
    const S: number = +(this.$refs.task4_3 as HTMLInputElement).value;

    this.task4Answer = this.precision(l / D * S * 578000, 3);
  }

  /**
   * Get answer for task 5
   */
  private task5(): void {
    const l: number = +(this.$refs.task5_1 as HTMLInputElement).value;
    const L: number = +(this.$refs.task5_2 as HTMLInputElement).value;

    this.task5Answer = L > l ? 3 : 1;
  }
}
</script>

<style src="@/styles/week-content.css"></style>
