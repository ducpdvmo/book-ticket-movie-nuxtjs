<template>
  <div id="overview" class="">
    <div class="flex justify-between">
      <div class="w-2/3">
        <p>{{ movie.overView }}</p>
        <div class="media flex items-center justify-between my-[27px] pb-2">
          <h4 class="text-base text-white font-bold uppercase">
            {{ $t('movieDetail.media') }}
          </h4>
          <a class="text-[#4280bf] text-sm cursor-pointer"
            >All 5 Videos & 245 Photos
            <font-awesome-icon
              class="text-xs"
              icon="fa-solid fa-chevron-right"
            />
          </a>
        </div>
        <div class="media flex items-center justify-between my-[27px] pb-2">
          <h4 class="text-base text-white font-bold uppercase">
            {{ $t('movieDetail.cast') }}
          </h4>
          <a class="text-[#4280bf] text-sm cursor-pointer"
            >Full Cast & Crew
            <font-awesome-icon class="text-xs" icon="fa-solid fa-chevron-right"
          /></a>
        </div>
      </div>
      <div class="w-1/3 ml-[10px] xl:ml-[30px]">
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.director') }}:
          </h6>
          <p>
            <a>{{ movie.director }}</a>
          </p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.producer') }}:
          </h6>
          <p>
            <a>{{ movie.producer }}</a>
          </p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.genres') }}:
          </h6>
          <p>
            <a
              v-for="(tag, index) in movie.tags"
              :key="index"
              style="cursor: pointer"
              >{{ $t('home.types.' + tag) }}
            </a>
          </p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.releaseDate') }}:
          </h6>
          <p>May 1, 2015 (U.S.A)</p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.runTime') }}:
          </h6>
          <p>141 min</p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.MMPARating') }}:
          </h6>
          <p>PG-13</p>
        </div>
        <div class="mb-[30px]">
          <h6 class="text-base font-bold mb-[10px] text-[#abb7c4]">
            {{ $t('movieDetail.plotKey') }}:
          </h6>
          <p class="">
            <span class="text-xs bg-gray-400 rounded-md p-2 leading-10"
              ><a>{{ $t('movieDetail.superhero') }}</a></span
            >
            <span class="text-xs bg-gray-400 rounded-md p-2 leading-10"
              ><a>{{ $t('movieDetail.comic') }}</a></span
            >
            <span class="text-xs bg-gray-400 rounded-md p-2 leading-10"
              ><a>{{ $t('movieDetail.blockbuster') }}</a></span
            >
            <span class="text-xs bg-gray-400 rounded-md p-2 leading-10"
              ><a>{{ $t('movieDetail.finalBattle') }}</a></span
            >
          </p>
        </div>
        <div class="mb-14 ml-[30px]">
          <img
            class="w-full"
            src="https://fit.haui.edu.vn/media/76/t76930.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['movie']
}
</script>

<style>
</style>