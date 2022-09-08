<template>
  <div class="p-6 space-y-6">
    <div class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="movie-name"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Movie Name</label
        >
        <input
          id="movie-name"
          v-model="data.name"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            block
            w-full
            p-2.5
          "
          placeholder="Movie's Name..."
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label
          for="year-publish"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Year</label
        >
        <input
          id="year-publish"
          v-model="data.year"
          type="date"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            block
            w-full
            p-2.5
          "
          placeholder="2022"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label
          for="director"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Director</label
        >
        <input
          id="director"
          v-model="data.director"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            block
            w-full
            p-2.5
          "
          placeholder="Director"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label
          for="producer"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Producer</label
        >
        <input
          id="producer"
          v-model="data.producer"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            block
            w-full
            p-2.5
          "
          placeholder="vmo dev"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label
          for="over-view"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Over View</label
        >
        <textarea
          id="over-view"
          v-model="data.overView"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          placeholder="Over view..."
        ></textarea>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="tags" class="block mb-2 text-sm font-medium text-gray-900"
          >Tags</label
        >
        <select
          id="tags"
          v-model="data.tags"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          multiple
        >
          <option value="superhero">superhero</option>
          <option value="action">action</option>
          <option value="drama">drama</option>
          <option value="family">family</option>
          <option value="fiction">fiction</option>
          <option value="fantasy">fantasy</option>
          <option value="adventure">adventure</option>
          <option value="horror">horror</option>
          <option value="animation">animation</option>
          <option value="comedy">comedy</option>
          <option value="LGBT">LGBT</option>
        </select>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="photo" class="block mb-2 text-sm font-medium text-gray-900"
          >Photo</label
        >
        <input
          id="photo"
          ref="photo"
          type="file"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          @change="getUrlPhoto()"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label
          for="background"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Background</label
        >
        <input
          id="background"
          ref="background"
          type="file"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          @change="getUrlBackground()"
        />
      </div>
      <div v-show="!showMore" class="col-start-6 col-end-6 ml-auto">
        <button
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
          @click="showMore = true"
        >
          More
          <font-awesome-icon icon="fa-solid fa-angles-right" />
        </button>
      </div>
    </div>
    <div v-show="showMore" class="grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label
          for="trailerID"
          class="block mb-2 text-sm font-medium text-gray-900"
          >TrailerID</label
        >
        <input
          id="trailerID"
          v-model="data.trailerID"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          placeholder="6DxjJzmYsXo"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="cast" class="block mb-2 text-sm font-medium text-gray-900"
          >Cast</label
        >
        <input
          id="cast"
          v-model="data.cast"
          type="text"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900
            sm:text-sm
            rounded-lg
            focus:ring-blue-600 focus:border-blue-600
            block
            w-full
            p-2.5
          "
          placeholder="Yuamikami"
        />
      </div>
      <div class="col-start-1 col-end-1">
        <button
          class="py-1 px-2 hover:bg-gray-200 rounded-md"
          @click="showMore = false"
        >
          <font-awesome-icon
            class="rotate-180"
            icon="fa-solid fa-angles-right"
          />
          Less
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage'
import { uuidv4 } from '@firebase/util'
import storage from '@/firebase/config'
export default {
  data() {
    return {
      showMore: false,
      data: {
        name: null,
        year: null,
        director: null,
        producer: null,
        overView: null,
        tags: [],
        photo: null,
        background: null,
        cast: null,
        trailerID: null,
      },
    }
  },
  computed: {},
  watch: {
    data: {
      handler() {
        this.$emit('update:data', this.data)
      },
      deep: true,
    },
  },
  methods: {
    setBackground(url) {
      this.data.background = url
    },
    setPhoto(url) {
      this.data.photo = url
    },
    async getUrlPhoto() {
      if (!this.$refs.photo.files[0]) return false
      const fileImg = this.$refs.photo.files[0]
      const storageRef = ref(storage, `img/${uuidv4()}-${fileImg.name}`)
      await uploadBytes(storageRef, fileImg)
      getDownloadURL(storageRef).then((url) => {
        this.setPhoto(url)
      })
    },
    async getUrlBackground() {
      if (!this.$refs.background.files[0]) return false
      const fileImg = this.$refs.background.files[0]
      const storageRef = ref(storage, `img/${uuidv4()}-${fileImg.name}`)
      await uploadBytes(storageRef, fileImg)
      getDownloadURL(storageRef).then((url) => {
        this.setBackground(url)
      })
    },
  },
}
</script>

<style>
</style>