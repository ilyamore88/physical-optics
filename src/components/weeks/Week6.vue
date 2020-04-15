<template>
  <div class="week-content">
    <h1>
      Неделя 6
    </h1>
    <div class="task">
      <h3 class="task__header">Задание 1</h3>
      <p class="task__content">
        Из приведенных ниже высказываний выберите утверждения, представляющие собой физические приближения, используемые при обосновании принципа Гюйгенса-Френеля.
      </p>
      <form class="task__form">
        <ul class="input__list">
          <li class="input__item">
            <span class="task__answer">
              Ответ: 1, 3, 6, 7.
            </span>
          </li>
        </ul>
      </form>
    </div>
    <div class="task">
      <h3 class="task__header">Задание 2</h3>
      <p class="task__content">
        Экран с раздвигаемой круговой диафрагмой освещается нормально падающей на него
        плоской монохроматической волной с λ [нм]. Медленно раскрывая диафрагму, студентка
        наблюдала за изменением интенсивности света в точке, расположенной на оси диафрагмы
        на расстоянии Z [см] от нее и считала максимумы изменяемой ею интенсивности.
        Добравшись до максимума с некоторым номером M, студентка, сообщив преподавателю о
        том, что достаточно нагляделась на дифракционные картины, решила развеяться после
        нелегкой работы в области экспериментальной оптики и посетить картинную галерею.
        Она выключила источник света и покинул свой учебно-научный пост, не изменив
        состояния диафрагмы, радиус которой оказался равным R = r [мм]. Оцените трудолюбие
        студентки числом максимумов интенсивности излучения, которые она насчитала в
        описанном эксперименте.
      </p>
      <form class="task__form" @submit.prevent="task2">
        <ul class="input__list">
          <li class="input__item">
            <label for="task2.1" class="task__label">
              Введите радиус R:
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
              Введите расстояние Z:
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
        Световой пучок, допускающий описание с помощью плоской монохроматической волны
        (длина волны излучения λ = Λ [нм] ) нормально падает на полностью поглощающий свет
        диск, расположенный на расстоянии Z = z [см] от экрана, на котором регистрируется
        дифракционная картина. Рассчитайте относительное изменение интенсивности света в
        расположенной в центре пятна Пуассона точке, возникающее после удаления диска из
        светового пучка. Размер поглощающего свет диска был подобран таким образом, чтобы
        он перекрывал ровно М зон Френеля.
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
              Введите M:
            </label>
            <br>
            <input type="number" class="task__input" id="task3.2" required ref="task3_2">
          </li>
          <li class="input__item">
            <label for="task3.3" class="task__label">
              Введите расстояние Z:
            </label>
            <br>
            <input type="number" class="task__input" id="task3.3" required ref="task3_3">
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
        Точечный источник монохроматического излучения с длиной волны λ=300 нм
        расположен на расстоянии L0= 1.00 м от зонной пластинки, радиусы открытых колец
        которой определяются соотношением Rm = 0.5[мм]·m<sup>2</sup>
        (m = 1, 2, 3, …). На каком
        расстоянии L0’ от пластинки следует поместить точечный источник излучения длиной
        волны λ’ [нм] для того, чтобы самая удаленная от пластинки точка фокусировки его
        излучения совпадала с самой удаленной точкой фокусировки излучения первого
        источника? Ответ введите в метрах, с точностью до третьей значащей цифры.

      </p>
      <form class="task__form" @submit.prevent="task4">
        <ul class="input__list">
          <li class="input__item">
            <label for="task4.1" class="task__label">
              Введите L0:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.1" required ref="task4_1">
          </li>
          <li class="input__item">
            <label for="task4.2" class="task__label">
              Введите λ<sub>1</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.2" required ref="task4_2">
          </li>
          <li class="input__item">
            <label for="task4.3" class="task__label">
              Введите λ<sub>2</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.3" required ref="task4_3" step="0.1">
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
        Полностью поглощающий экран с прямой бесконечной щелью освещается нормально
        падающей плоской монохроматической волной λ [нм]. Интенсивность прошедшего
        света измеряется на расстоянии h [см] от экрана точно под средней линией щели. При
        какой ширине щели (в мм) интенсивность света будет максимальной?
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
              Введите h:
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
export default class Week6 extends Vue {
  private task2Answer: number | null = null;
  private task3Answer: number | null = null;
  private task4Answer: number | null = null;
  private task5Answer: number | null = null;

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const R: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const l: number = +(this.$refs.task2_2 as HTMLInputElement).value;
    const Z: number = +(this.$refs.task2_3 as HTMLInputElement).value;

    this.task2Answer = Math.trunc(1 / 2 * (Math.trunc(Math.pow(R, 2) / (Z * l) * 100000) + 1));
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
    const M: number = +(this.$refs.task3_2 as HTMLInputElement).value;
    const z: number = +(this.$refs.task3_3 as HTMLInputElement).value;

    this.task3Answer = ((M * l) / (2 * z) * Math.pow(10, -7));
  }

  /**
   * Get answer for task 4
   */
  private task4(): void {
    const L: number = +(this.$refs.task4_1 as HTMLInputElement).value;
    const l1: number = +(this.$refs.task4_2 as HTMLInputElement).value;
    const l2: number = +(this.$refs.task4_3 as HTMLInputElement).value;

    this.task4Answer = this.precision(L / (1 + (2 * (l2 - l1) * L * Math.pow(10, -9)) / (Math.pow(0.5, 2) * Math.pow(10, -6))), 3);
  }

  /**
   * Get answer for task 5
   */
  private task5(): void {
    const l: number = +(this.$refs.task5_1 as HTMLInputElement).value;
    const h: number = +(this.$refs.task5_2 as HTMLInputElement).value;

    this.task5Answer = 0.002 * Math.sqrt(10 * l * h);
  }
}
</script>

<style src="@/styles/week-content.css"></style>
