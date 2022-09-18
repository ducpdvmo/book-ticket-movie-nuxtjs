<template>
  <div>
    <div class="flex justify-between items-center">
      <p class="text-lg font-medium">{{$t('dashboard.generalReport')}}</p>
      <p>
        <font-awesome-icon
          class="mr-2 font-light"
          icon="fa-solid fa-arrows-rotate"
        />{{$t('dashboard.reloadData')}}
      </p>
    </div>
    <div>
      <div class="flex justify-evenly mt-10">
        <div class="report-box zoom-in w-[30%]">
          <div class="box p-5">
            <div class="flex">
              <font-awesome-icon
                class="w-8 h-8 text-[#3160D8]"
                icon="fa-solid fa-cart-shopping"
              />
              <div
                class="
                  ml-auto
                  cursor-pointer
                  flex
                  items-center
                  bg-[#91C714]
                  px-2
                  rounded-full
                "
              >
                12%<font-awesome-icon
                  class="w-3 h-3 ml-1"
                  icon="fa-solid fa-chevron-up"
                />
              </div>
            </div>
            <div class="text-3xl font-bold leading-8 mt-6">4.510</div>
            <div class="text-base text-gray-600 mt-1">{{$t('dashboard.ticketSale')}}</div>
          </div>
        </div>
        <div class="report-box zoom-in w-[30%]">
          <div class="box p-5">
            <div class="flex">
              <font-awesome-icon
                class="text-[#F78B00] w-8 h-8"
                icon="fa-solid fa-display"
              />
              <div
                class="
                  ml-auto
                  cursor-pointer
                  flex
                  items-center
                  bg-[#91C714]
                  px-2
                  rounded-full
                "
              >
                19%<font-awesome-icon
                  class="w-3 h-3 ml-1"
                  icon="fa-solid fa-chevron-up"
                />
              </div>
            </div>
            <div class="text-3xl font-bold leading-8 mt-6">52</div>
            <div class="text-base text-gray-600 mt-1">{{$t('dashboard.totalMovie')}}</div>
          </div>
        </div>
        <div class="report-box zoom-in w-[30%]">
          <div class="box p-5">
            <div class="flex">
              <font-awesome-icon
                class="w-8 h-8 text-[#FFC533]"
                icon="fa-solid fa-wallet"
              />
              <div
                class="
                  ml-auto
                  cursor-pointer
                  flex
                  items-center
                  bg-[#D32929]
                  px-2
                  rounded-full
                "
              >
                3%<font-awesome-icon
                  class="w-3 h-3 ml-1 rotate-180"
                  icon="fa-solid fa-chevron-up"
                />
              </div>
            </div>
            <div class="text-3xl font-bold leading-8 mt-6">12.050 $</div>
            <div class="text-base text-gray-600 mt-1">{{$t('dashboard.totalIncome')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.report-box {
  position: relative;
}
.report-box:before {
  content: '';
  width: 85%;
  background: #f9fafc;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  height: 100%;
  margin-top: 0.75rem;
  position: absolute;
  border-radius: 0.375rem;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
}
.box {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.043137254901960784);
  --bg-opacity: 1;
  background-color: #fff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
  border-radius: 0.375rem;
  position: relative;
}
</style>