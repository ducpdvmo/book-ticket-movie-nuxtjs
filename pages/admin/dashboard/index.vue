<template>
  <div class="bg-[#F1F5F8] p-5 rounded-2xl h-screen">
    <GeneralReport class="mb-20"></GeneralReport>
    <ChartSales :ticket-count="data1" :in-come="data2"></ChartSales>
  </div>
</template>

<script>
// import { collection, query, onSnapshot, getDocs } from 'firebase/firestore'
import GeneralReport from '../../../components/GeneralReport.vue'
import ChartSales from '../../../components/ChartSales.vue'
// import { db } from '@/firebase/config'
export default {
  components: { GeneralReport, ChartSales },
  data() {
    return {
      data1: [40, 39, 10, 40, 39, 80, 40],
      data2: [60, 55, 32, 10, 2, 12, 53],
      billChart: [],
    }
  },
  // computed: {
  //   allBill() {
  //     return this.$store.getters['bill/getBill']
  //   },
  //   movieSchedule() {
  //     return this.$store.getters['movie-schedule/movieSchedules']
  //   },
  //   billForAdmin() {
  //     return this.billChart
  //   },
  // },
  // async created() {
  //   await this.fetchAllMovieSchedule()
  //   await this.getDoc()
  // },
  // methods: {
  //   async fetchAllMovieSchedule() {
  //     await this.$store.dispatch('movie-schedule/getAllMovieSchedules')
  //   },
  //   async getDoc() {
  //     const q = query(collection(db, 'TicketForAdmin'))
  //     const querySnapshot = await getDocs(q)
  //     querySnapshot.forEach((doc) => {
  //       this.billChart.push(doc.data())
  //     })
  //   },
  //   testRealtimeDB() {
  //     const q = query(collection(db, 'TicketForAdmin'))
  //     onSnapshot(q, (snapshot) => {
  //       const result = []
  //       snapshot.docChanges().forEach((change) => {
  //         if (change.type === 'added') {
  //           result.push(change.doc.data())
  //         }
  //         if (change.type === 'modified') {
  //           console.log('Modified TicketForAdmin: ', change.doc.data())
  //         }
  //         if (change.type === 'removed') {
  //           console.log('Removed TicketForAdmin: ', change.doc.data())
  //         }
  //       })
  //       console.log(result)
  //       this.billChart = [...this.billChart, ...result]
  //     })
  //   },
  // },
}
</script>

<style scoped>
</style>