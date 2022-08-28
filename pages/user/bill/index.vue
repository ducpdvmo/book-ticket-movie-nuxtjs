<template>
  <div class="min-h-full w-[75%] rounded-3xl">
    <div class="font-bold">
      <nuxt-link class="text-lg" to="/">Home</nuxt-link>
      <nuxt-link class="text-lg" to="/user/profile"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        User</nuxt-link
      >
      <nuxt-link class="text-lg" to="/user/profile"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        Bills</nuxt-link
      >
    </div>
    <div class="my-5 w-full">
      <table class="w-full">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 w-full">
          <tr>
            <th scope="col" class="p-4">STT</th>
            <th scope="col" class="py-3 px-6">Tên Phim</th>
            <th scope="col" class="py-3 px-6">Suất Chiếu</th>
            <th scope="col" class="py-3 px-6">Số lượng</th>
            <th scope="col" class="py-3 px-6">Giá dịch vụ</th>
            <th scope="col" class="py-3 px-6">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <BillTicket
            v-for="(bill, index) in tempBills.bills.slice().reverse()"
            :key="index"
            :bill="bill"
            @handle:deleteBill="deleteBill(bill.id)"
            >{{ index + 1 }}</BillTicket
          >
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BillTicket from '../../../components/BillTicket.vue'
export default {
  components: { BillTicket },
  data() {
    return {
      tempBills: null,
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
    console.log(this.tempBills)
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
      } else
        this.tempBills.bills = [...Object.values(this.billsOfUser[0].bills)]
    },
    async deleteBill(id) {
      const API = `https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com/Bills/-NAZF9qfTz0djc4YQ597/bills/${id}.json`
      await this.$axios.$delete(API)
      await this.fetchAllBills()
      window.location.reload(true)
    },
    async fetchAllBills() {
      await this.$store.dispatch('bill/getAllBills').then(() => {
        this.bills = this.$store.getters['bill/getBill']
      })
    },
    deleteBIll(index) {
      this.tempBills.splice(this.tempBills.length - 1 - index, 1)
    },
  },
}
</script>

<style>
</style>