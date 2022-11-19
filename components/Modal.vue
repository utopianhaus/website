<template>
  <div
    v-shortkey="['esc']"
    class="modal-overlay"
    @shortkey="
      $emit('close-modal'),
        $toast
          .show('ESC', {
            action: {
              text: '╳',
              class: 'wlToastAction',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          })
          .goAway(2000)
    "
    @click="$emit('close-modal')"
  >
    <div
      class="modal bg-near-black br3 flex flex-column items-center justify-start pa4"
      @click.stop
    >
      <ul
        class="commandsList tc list f6 pl0 mv0 flex flex-wrap justify-between"
      >
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">META + K</span>
          <span class="db dark-gray">{{ $t("shortkey_one") }}</span>
        </li>
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">ESC</span>
          <span class="db dark-gray">{{ $t("shortkey_two") }}</span>
        </li>
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">META + T</span>
          <span class="db dark-gray">{{ $t("shortkey_three") }}</span>
        </li>
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">META + G</span>
          <span class="db dark-gray">{{ $t("shortkey_four") }}</span>
        </li>
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">META + P</span>
          <span class="db dark-gray">{{ $t("shortkey_five") }}</span>
        </li>
        <li class="commandItem pv2 mv2 br3 ba gray">
          <span class="fw7 underline-hover">META + B</span>
          <span class="db dark-gray">{{ $t("shortkey_six") }}</span>
        </li>
      </ul>
    </div>
    <div class="modalBottom absolute bottom-0 left-0 w-100 center">
      <p class="tc w-100 gray">
        {{ $t("modal_action_one") }}
        <span class="br-pill ph2 dib dark-gray bg-gray cmdButton">ESC</span>
        {{ $t("modal_action_two") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.962745098);
  z-index: 5;
  transition: all 0.5s ease;
}

.modal {
  text-align: center;
  max-width: 600px;
  transition: all 0.5s ease;
}

.modalBottom {
  font-size: 9px;
  text-transform: uppercase;

  span {
    padding-left: 3px;
    padding-right: 3px;
  }
}

.commandsList {
  gap: 1px;
  .commandItem {
    width: 48%;
  }
}
</style>
