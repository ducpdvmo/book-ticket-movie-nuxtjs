<template>
  <div class="min-h-full w-full lg:w-[75%] rounded-3xl">
    <div class="font-bold">
      <nuxt-link class="md:text-lg text-sm" :to="{ name: `index___${$i18n.locale}` }">{{
        $t('homeLayout.home')
      }}</nuxt-link>
      <nuxt-link
        class="md:text-lg text-sm"
        :to="{ name: `user-profile___${$i18n.locale}` }"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        {{ $t('profile.user') }}</nuxt-link
      >
      <nuxt-link class="md:text-lg text-sm" :to="{ name: `user-bill___${$i18n.locale}` }"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        {{ $t('profile.bills') }}</nuxt-link
      >
    </div>
    <div class="my-5 w-full">
      <table class="w-full">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 w-full">
          <tr>
            <th scope="col" class="p-4">STT</th>
            <th scope="col" class="py-3 md:px-3">{{ $t('bills.movieName') }}</th>
            <th scope="col" class="py-3 md:px-3">{{ $t('bills.showTime') }}</th>
            <th scope="col" class="py-3 md:px-3">{{ $t('bills.quatity') }}</th>
            <th scope="col" class="py-3 md:px-3">{{ $t('bills.cost') }}</th>
            <th scope="col" class="py-3 md:px-3">{{ $t('bills.action') }}</th>
          </tr>
        </thead>
        <tbody>
          <BillTicket
            v-for="(bill, index) in tempBills.bills.slice().reverse()"
            v-show="pageSize * page <= index && index < pageSize * (page + 1)"
            :key="index"
            :bill="bill"
            @handle:deleteBill="deleteBill(bill.id)"
            >{{ index + 1 }}</BillTicket
          >
        </tbody>
      </table>
    </div>
    <Pagination
      class="text-right mr-10"
      :current-page="page"
      :page-size="pageSize"
      :data="tempBills.bills"
      @page:update="pageUpdate"
    ></Pagination>
  </div>
</template>

<script>
import BillTicket from '../../../components/BillTicket.vue'
import Pagination from '../../../components/Pagination.vue'
export default {
  components: { BillTicket, Pagination },
  data() {
    return {
      tempBills: null,
      pageSize: 7,
      page: 0,
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['user/getUser']
    },
    billsOfUser() {
      return this.$store.getters['bill/getBillOfUser'](this.currentUser.uid)
    },
  },
  created() {
    this.handelDataBill()
  },
  methods: {
    handelDataBill() {
      this.tempBills = JSON.parse(JSON.stringify(this.billsOfUser[0]))
      if (Array.isArray(this.billsOfUser[0].bills)) {
        const bills = []
        this.tempBills.bills.forEach((item, key) => {
          const bill = { ...item, id: key }
          bills.push(bill)
        })
        this.tempBills.bills = bills.filter(
          (bill) => Object.keys(bill).length > 1
        )
      } else {
        const bills = []
        for (const key in this.tempBills.bills) {
          bills.push({ ...this.tempBills.bills[key], id: key })
        }
        this.tempBills.bills = bills.filter(
          (bill) => Object.keys(bill).length > 1
        )
      }
    },
    async deleteBill(id) {
      const API = `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills/${this.tempBills.id}/bills/${id}.json`
      await this.$axios.$delete(API)
      await this.fetchAllBills()
      window.location.reload(true)
    },
    async fetchAllBills() {
      await this.$store.dispatch('bill/getAllBills').then(() => {
        this.bills = this.$store.getters['bill/getBill']
      })
    },
    pageUpdate(pageNum) {
      this.page = pageNum
    },
  },
}
</script>

<style>
</style>