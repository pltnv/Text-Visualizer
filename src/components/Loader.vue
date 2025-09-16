<template>
  <div :class="$style.loadingOverlay">
    <div :class="$style.loadingContent">
      <div :class="$style.spinner">
        <div :class="$style.spinnerRing"></div>
        <div :class="[$style.spinnerRing, $style.spinnerRingSecond]"></div>
        <div :class="[$style.spinnerRing, $style.spinnerRingThird]"></div>
      </div>
      <h2 :class="$style.loadingText">Анализируем текст...</h2>
      <div :class="$style.loadingDots">
        <span :class="[$style.dot, $style.dotFirst]"></span>
        <span :class="[$style.dot, $style.dotSecond]"></span>
        <span :class="[$style.dot, $style.dotThird]"></span>
      </div>
    </div>
  </div>
</template>
  
  <style lang="css" module>
.loadingOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loadingContent {
  text-align: center;
  color: white;
}

.spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
}

.spinnerRing {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spinnerRingSecond {
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
  border-top-color: #b91c1c;
  animation-duration: 1.2s;
  animation-direction: reverse;
}

.spinnerRingThird {
  width: 40px;
  height: 40px;
  top: 20px;
  left: 20px;
  border-top-color: #10b981;
  animation-duration: 0.9s;
}

.loadingText {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.loadingDots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite both;
}

.dotFirst {
  animation-delay: -0.32s;
}

.dotSecond {
  animation-delay: -0.16s;
}

.dotThird {
  animation-delay: 0s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>