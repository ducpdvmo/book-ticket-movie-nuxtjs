<template>
  <div class="w-full lg:w-[75%] flex flex-col rounded-3xl">
    <div class="font-bold">
      <nuxt-link class="text-lg" :to="{name: `index___${$i18n.locale}`}">{{$t('homeLayout.home')}}</nuxt-link>
      <nuxt-link class="text-lg" :to="{name: `user-profile___${$i18n.locale}`}"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        {{$t('profile.user')}}</nuxt-link
      >
      <nuxt-link class="text-lg" :to="{name: `user-profile___${$i18n.locale}`}"
        ><font-awesome-icon class="text-sm" icon="fa-solid fa-chevron-right" />
        {{$t('profile.profile')}}</nuxt-link
      >
    </div>
    <div class="mt-5 bg-white rounded-3xl p-5">
      <div class="flex items-center p-5 border-b border-gray-200">
        <h2 class="font-medium text-base mr-auto">{{$t('profile.displayInfor')}}</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center mt-5 md:p-5">
        <div
          class="
            md:w-1/3
            sm:w-1/2
            w-4/5
            border
            flex flex-col
            justify-center
            items-center
            lg:p-5
            p-3
            rounded-md
          "
        >
          <div
            class="
              lg:w-40
              lg:h-40
              w-4/5
              md:w-full
              h-auto
              relative
              image-fit
              cursor-pointer
              hover:scale-105
              transition-all
              duration-150
              mx-auto
            "
          >
            <img
              ref="avt"
              class="lg:w-40 lg:h-40 w-full h-full rounded-md"
              src="https://dashboard.imkit.io/dist/images/profile-9.jpg"
              alt=""
            />
            <div
              title="Remove this profile photo?"
              class="
                tooltip
                w-5
                h-5
                flex
                items-center
                justify-center
                absolute
                rounded-full
                text-white
                bg-theme-6
                right-0
                top-0
                -mr-2
                -mt-2
              "
              @click="removeAvt"
            >
              <font-awesome-icon
                class="w-5 h-5 text-red-500 bg-white rounded-full"
                icon="fa-solid fa-circle-xmark"
              />
            </div>
          </div>
          <div class="w-4/5 md:w-full lg:w-40 mx-auto cursor-pointer relative mt-5">
            <button
              class="
                text-white
                bg-red-700
                hover:bg-red-800
                font-medium
                rounded-lg
                text-sm
                px-3
                py-2.5
                w-full
              "
            >
              {{$t('profile.changeAvt')}}
            </button>
            <input
              ref="file"
              class="
                w-full
                h-full
                top-0
                left-0
                absolute
                cursor-pointer
                opacity-0
              "
              type="file"
              @change="handleChangeAvt"
            />
          </div>
        </div>
        <div class="flex flex-col w-full md:w-2/3 mt-5 md:mt-0 ml-5">
          <div>
            <label>Email</label>
            <input
              disabled
              class="
                input
                w-full
                border
                bg-gray-100
                py-2
                px-3
                rounded-md
                cursor-not-allowed
                mt-2
              "
              type="text"
              :value="currentUser.email"
            />
          </div>
          <div class="mt-2">
            <label>{{$t('profile.displayName')}}</label>
            <input
              disabled
              class="
                input
                w-full
                border
                bg-gray-100
                py-2
                px-3
                rounded-md
                cursor-not-allowed
                mt-2
              "
              type="text"
              :value="currentUser.userName ? currentUser.userName : 'N/A'"
            />
          </div>
          <div class="mt-2 flex w-full justify-between">
            <div class="flex flex-col w-[47%]">
              <label>{{$t('profile.age')}}</label>
              <input
                disabled
                class="
                  w-full
                  border
                  bg-gray-100
                  py-2
                  px-3
                  rounded-md
                  cursor-not-allowed
                  mt-2
                "
                type="text"
                :value="currentUser.age ? currentUser.age : 'N/A'"
              />
            </div>
            <div class="flex flex-col w-[47%]">
              <label>{{$t('profile.sex')}}</label>
              <input
                disabled
                class="
                  w-full
                  border
                  bg-gray-100
                  py-2
                  px-3
                  rounded-md
                  cursor-not-allowed
                  mt-2
                "
                type="text"
                :value="currentUser.sex ? $t('profile.'+ currentUser.sex) : 'N/A'"
              />
            </div>
          </div>
          <div class="mt-2">
            <label>{{$t('profile.address')}}</label>
            <input
              disabled
              class="
                input
                w-full
                border
                bg-gray-100
                py-2
                px-3
                rounded-md
                cursor-not-allowed
                mt-2
              "
              type="text"
              :value="currentUser.address ? currentUser.address : 'N/A'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 bg-white rounded-3xl p-5">
      <div class="flex items-center p-5 border-b border-gray-200">
        <h2 class="font-medium text-base mr-auto">{{$t('profile.personalInfor')}}</h2>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12 xl:col-span-6">
            <div>
              <label>{{$t('profile.name')}}</label>
              <input
                v-model="user.userName"
                class="
                  input
                  w-full
                  border
                  bg-gray-100
                  py-2
                  px-3
                  rounded-md
                  mt-2
                "
                type="text"
                :placeholder="
                  currentUser.userName ? currentUser.userName : 'N/A'
                "
              />
            </div>
            <div class="mt-3">
              <label>{{$t('profile.address')}}</label>
              <input
                v-model="user.address"
                class="
                  input
                  w-full
                  border
                  bg-gray-100
                  py-2
                  px-3
                  rounded-md
                  mt-2
                "
                type="text"
                :placeholder="currentUser.address ? currentUser.address : 'N/A'"
              />
            </div>
          </div>
          <div class="col-span-12 xl:col-span-6">
            <div>
              <label>{{$t('profile.phoneNumber')}}</label>
              <input
                v-model="user.phoneNumber"
                class="
                  input
                  w-full
                  border
                  bg-gray-100
                  py-2
                  px-3
                  rounded-md
                  mt-2
                "
                type="text"
                :placeholder="
                  currentUser.phoneNumber ? currentUser.phoneNumber : 'N/A'
                "
              />
            </div>
            <div class="mt-3">
              <div class="flex justify-between">
                <div class="flex flex-col w-[47%]">
                  <label>{{$t('profile.age')}}</label>
                  <input
                    v-model="user.age"
                    class="border bg-gray-100 py-2 px-3 rounded-md mt-2"
                    type="text"
                    :placeholder="currentUser.age ? currentUser.age : 'N/A'"
                  />
                </div>
                <div class="w-[47%]">
                  <label>{{$t('profile.sex')}}</label>
                  <div class="border bg-gray-100 py-2 px-3 rounded-md mt-2">
                    <select v-model="user.sex" class="w-full">
                      <option value="Male">{{$t('profile.Male')}}</option>
                      <option value="Female">{{$t('profile.Female')}}</option>
                      <option value="Other">{{$t('profile.other')}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <button class="text-theme-6 flex items-center text-red-500">
            <font-awesome-icon
              class="w-4 h-4 mr-1"
              icon="fa-solid fa-trash-can"
            />
            {{$t('profile.deleteAcc')}}
          </button>
          <button
            class="
              text-white
              bg-[#0077AD]
              hover:bg-[#005a84]
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              w-20
            "
            @click="saveProfile"
          >
            {{$t('profile.save')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import storage from '../../../firebase/config'
export default {
  data() {
    return {
      user: {
        userName: null,
        age: null,
        sex: null,
        phoneNumber: null,
        address: null,
        avatar: null,
      },
      avatar: null,
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['user/getUser']
    },
  },
  created() {
    this.user.sex = this.currentUser.sex
  },
  methods: {
    handleChangeAvt() {
      this.$refs.avt.src = URL.createObjectURL(this.$refs.file.files[0])
      if (!this.$refs.file.files[0]) return false
      const fileImg = this.$refs.file.files[0]

      const storageRef = ref(storage, `img/${fileImg.name}`)

      const uploadTask = uploadBytesResumable(storageRef, fileImg)
      uploadTask.on('state_changed', async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.avatar = `${downloadURL}`
        })
      })
    },
    saveProfile() {
      this.user.avatar = this.avatar ? this.avatar : this.currentUser.avatar
      this.user.userName = this.user.userName
        ? this.user.userName
        : this.currentUser.userName
        ? this.currentUser.userName
        : ''
      this.user.age = this.user.age
        ? this.user.age
        : this.currentUser.age
        ? this.currentUser.age
        : ''
      this.user.sex = this.user.sex
        ? this.user.sex
        : this.currentUser.sex
        ? this.currentUser.sex
        : ''
      this.user.phoneNumber = this.user.phoneNumber
        ? this.user.phoneNumber
        : this.currentUser.phoneNumber
        ? this.currentUser.phoneNumber
        : ''
      this.user.address = this.user.address
        ? this.user.address
        : this.currentUser.address
        ? this.currentUser.address
        : ''
      this.user.email = this.currentUser.email
      this.user.uid = this.currentUser.uid
      const payloadUpdateUser = {
        user: { ...this.user },
        id: this.currentUser.id,
      }
      this.$store.dispatch('user/updateUserById', payloadUpdateUser)
      window.location.reload(true)
    },
    removeAvt(){
      this.$refs.avt.src = 'https://dashboard.imkit.io/dist/images/profile-9.jpg'
      this.avatar = null
    }
  },
}
</script>

<style>
</style>