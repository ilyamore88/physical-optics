<template>
  <ul class="nav">
    <li class="nav__item">
      <span class="nav__link nav__link--disabled">
        Неделя 1
      </span>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week2' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 2
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week3' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 3
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week4' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 4
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week5' }" :active-class="'nav__link--active'" class="nav__link">
        Промежуточная аттестация
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week6' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 6
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week7' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 7
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week8' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 8
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week9' }" :active-class="'nav__link--active'" class="nav__link">
        Неделя 9
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Week10' }" :active-class="'nav__link--active'" class="nav__link">
        Экзамен
      </router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'Hello' }" class="nav__link">
        На главную
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/**
 * Class represents component for navigation
 */
export default class Navigation extends Vue {
}
</script>

<style>
.nav {
  list-style: none;
  padding: 5px;
  width: 100%;
  flex: 1;
  margin: 0;

  &__item {
    margin-bottom: 3px;
  }

  &__link {
    display: block;
    text-decoration: none;
    color: #000000;
    font-size: 20px;
    height: 35px;
    line-height: 35px;
    padding: 0px 0px 0px 5px;

    &:hover {
      background: #c8c8c8;
    }

    &:active {
      position: relative;
      top: 1px;
    }

    &--disabled {
      color: #cccccc;

      &:hover {
        background: #ffffff;
      }

      &:active {
        top: 0px;
      }
    }

    &--active {
      background-color: #c8c8c8;
      cursor: default;

      &:active {
        top: 0px;
      }
    }
  }
}
</style>
