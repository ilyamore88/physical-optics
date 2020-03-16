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
    <div class="task">
      <h3 class="task__header">Задание 3</h3>
      <p class="task__content">
        Электромагнитное излучение длиной волны λ ангстрем используется для просвечивания изделия из драгоценного металла, концентрация свободных электронов в котором составляет <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=N= 5.86*10^{22} (cm^{-3})">.
        На сколько километров в секунду фазовая скорость излучения в таком металле превосходит скорость света в вакуума, а групповая скорость оказывается меньшей, чем с?
        Ответ введите с точностью до двух значащих цифр.
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
        Эффект Фарадея изучается в лабораторной низкотемпературной плазме (плазменная частота <img class="task__formula" src="https://chart.googleapis.com/chart?cht=tx&amp;chl=\omega_p (c^{-1})">), в трубке длиной L (см), на стенки которой намотано N витков провода, по которому пропускается постоянный ток I (А).
        Через трубку пропускается линейно поляризованное радиоизлучение с частотой в M раз превышающей плазменную частоту.
        На какой угол (в радианах) изменит направление поляризация радиоизлучения после прохождения трубки?
        Округлить до трех знаков после запятой.
      </p>
      <form class="task__form" @submit.prevent="task4">
        <ul class="input__list">
          <li class="input__item">
            <label for="task4.1" class="task__label">
              Введите кол-во витков N:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.1" required ref="task4_1">
          </li>
          <li class="input__item">
            <label for="task4.2" class="task__label">
              Введите силу тока I:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.2" required ref="task4_2">
          </li>
          <li class="input__item">
            <label for="task4.3" class="task__label">
              Введите коэф. M:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.3" required ref="task4_3" step="0.1">
          </li>
          <li class="input__item">
            <label for="task4.4" class="task__label">
              Введите длину трубки L:
            </label>
            <br>
            <input type="number" class="task__input" id="task4.4" required ref="task4_4" step="0.1">
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
        Образец из кварца представляет собой прямоугольный параллелепипед с ребрами, параллельными кристаллическим осям.
        Значения показателей преломления для кварца приведены в таблице, тензор диэлектрической проницаемости анизотропной кристаллической среды имеет вид:
        <br>
        <img src="https://cdn.openedu.ru/6a058c/courseware/v1/a7e113c97ab01e54b72526c294f7e71f/asset-v1:ITMOUniversity+PHYOPT+spring_2020+type@asset+block/opros_T-4-5-0.PNG"><br>
        <img src="https://courses.openedu.ru/assets/courseware/v1/0cda1f58652f24c4571f30a6a0846113/asset-v1:ITMOUniversity+PHYOPT+spring_2020+type@asset+block/opros_T-4-5-1.PNG"><br>
        Какова минимальная толщина слоя, который следует сточить с поверхности кристалла, для того, чтобы падающее на него вдоль оси y линейно поляризованное излучение с длиной волны λ нм после прохождения через кристалл могло превратиться в излучение круговой поляризации?
        Размеры кристалла (указаны в мм): L<sub>x</sub>, L<sub>y</sub>, L<sub>z</sub>.
      </p>
      <form class="task__form" @submit.prevent="task5">
        <ul class="input__list">
          <li class="input__item">
            <label for="task5.1" class="task__label">
              Введите длину волны λ:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.1" required ref="task5_1" step="0.1">
          </li>
          <li class="input__item">
            <label for="task5.2" class="task__label">
              Введите размер кристалла L<sub>x</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.2" required ref="task5_2" step="0.1">
          </li>
          <li class="input__item">
            <label for="task5.3" class="task__label">
              Введите размер кристалла L<sub>y</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.3" required ref="task5_3" step="0.1">
          </li>
          <li class="input__item">
            <label for="task5.4" class="task__label">
              Введите размер кристалла L<sub>z</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.4" required ref="task5_4" step="0.1">
          </li>
          <li class="input__item">
            <label for="task5.5" class="task__label">
              Введите показатель преломления n<sub>0</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.5" required ref="task5_5" step="0.00001">
          </li>
          <li class="input__item">
            <label for="task5.6" class="task__label">
              Введите показатель преломления n<sub>e</sub>:
            </label>
            <br>
            <input type="number" class="task__input" id="task5.6" required ref="task5_6" step="0.00001">
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
export default class Week4 extends Vue {
  private task1Answer: number | null = null;
  private task2Answer: number | null = null;
  private task3Answer: number | null = null;
  private task4Answer: number | null = null;
  private task5Answer: number | null = null;

  /**
   * Get answer for task 1
   */
  private task1(): void {
    const m: number = +(this.$refs.task1_1 as HTMLInputElement).value;

    this.task1Answer = 91.36 * (Math.pow(m + 1, 2) / (m * (m + 2)));
  }

  /**
   * Get answer for task 2
   */
  private task2(): void {
    const n: number = +(this.$refs.task2_1 as HTMLInputElement).value;
    const N: number = +(this.$refs.task2_2 as HTMLInputElement).value;

    this.task2Answer = Math.trunc(Math.pow((n - Math.pow(2.32 / 2.4, 2 * N)) / (n + Math.pow(2.32 / 2.4, 2 * N)), 2) * 100);
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

    this.task3Answer = this.precision(3 * Math.pow(10, 5) * (1 - Math.sqrt(1 - (0.548 * Math.pow(l, 2) * Math.pow(10, -6)))), 2);
  }

  /**
   * Get answer for task 4
   */
  private task4(): void {
    const N: number = +(this.$refs.task4_1 as HTMLInputElement).value;
    const I: number = +(this.$refs.task4_2 as HTMLInputElement).value;
    const M: number = +(this.$refs.task4_3 as HTMLInputElement).value;
    const L: number = +(this.$refs.task4_4 as HTMLInputElement).value;

    this.task4Answer = this.precision(0.368 / 1000 * N * I / M / Math.sqrt(Math.pow(M, 2) - 1) / L, 2);
  }

  /**
   * Get answer for task 5
   */
  private task5(): void {
    const l: number = +(this.$refs.task5_1 as HTMLInputElement).value;
    const x: number = +(this.$refs.task5_2 as HTMLInputElement).value;
    const y: number = +(this.$refs.task5_3 as HTMLInputElement).value;
    const z: number = +(this.$refs.task5_4 as HTMLInputElement).value;
    const n0: number = +(this.$refs.task5_5 as HTMLInputElement).value;
    const ne: number = +(this.$refs.task5_6 as HTMLInputElement).value;

    const R = 2 * Math.pow(10, 6) * (ne - n0) * y / l;

    if (R - Math.trunc(R) > 0.5) {
      this.task5Answer = (R - Math.trunc(R) - 0.5) * l / 2 / Math.pow(10, 6) / (ne - n0);
    } else {
      this.task5Answer = (R - Math.trunc(R) + 0.5) * l / 2 / Math.pow(10, 6) / (ne - n0);
    }
  }
}
</script>

<style src="@/styles/week-content.css"></style>
