function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const speed = distance / duration; // Calculate speed
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = startPosition + speed * timeElapsed;
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition); // Ensure it ends exactly at the target position
    }
  }
  requestAnimationFrame(animation);
}

export { smoothScrollTo };
