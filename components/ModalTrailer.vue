<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="w-screen h-screen flex justify-center items-center bg-[#43424298]" @click="$emit('closeTrailer')">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header">
              <h3 style="display: inline">Trailer Official</h3>
            </slot>
            <button
              class="modal-default-button buttonX"
              @click="$emit('closeTrailer')"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="row">
                <youtube :video-id="videoId"></youtube>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <button
              class="
                focus:outline-none
                text-white
                bg-red-700
                hover:bg-red-800
                focus:ring-4 focus:ring-red-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                mr-2
                mb-2
                dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
              "
              @click="$emit('closeTrailer')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  props: {
    videoId: {
      type: String,
      default: () => 'lb3FCMpMN4s',
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  color: white;
  width: 669px;
  position: fixed-top;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 7px rgba(223, 211, 211, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-footer {
  text-align: center;
}
.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
