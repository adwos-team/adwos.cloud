<template>
  <main class="flex min-h-full">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <div class="grow px-5">
      <div class="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
        <transition name="fade" mode="out-in">
          <component :is="currentComponent" @toggleResetPassword="toggleResetPassword" @toggleRegistration="toggleRegistration" @verifyEmail="verifyEmail" @continue="continueToVerification" />
        </transition>
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';
import Registration from '@/components/auth/Registration.vue';
import VerifyEmail from '@/components/auth/VerifyEmail.vue';
import SignIn from '@/components/auth/SignIn.vue';
import TwoStepVerification from '@/components/auth/TwoStepVerification.vue';

const isResetPassword = ref(false);
const isRegistration = ref(false);
const isVerifyEmail = ref(false);
const isTwoStepVerification = ref(false);

const currentComponent = computed(() => {
  if (isTwoStepVerification.value) return TwoStepVerification;
  if (isVerifyEmail.value) return VerifyEmail;
  if (isResetPassword.value) return ResetPassword;
  if (isRegistration.value) return Registration;
  return SignIn;
});

const toggleResetPassword = () => {
  isResetPassword.value = !isResetPassword.value;
  isRegistration.value = false;
  isVerifyEmail.value = false;
  isTwoStepVerification.value = false;
};

const toggleRegistration = () => {
  isRegistration.value = !isRegistration.value;
  isResetPassword.value = false;
  isVerifyEmail.value = false;
  isTwoStepVerification.value = false;
};

const verifyEmail = () => {
  isVerifyEmail.value = true;
  isResetPassword.value = false;
  isTwoStepVerification.value = false;
};

const continueToVerification = () => {
  isTwoStepVerification.value = true;
  isVerifyEmail.value = false;
};
</script>

<style scoped>
/* ваши стили */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
