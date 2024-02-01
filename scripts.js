document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.content-block');
    let currentIndex = 0;
  
    function updateContent() {
      contentBlocks.forEach((block, index) => {
        const transformValue = `translateY(${100 * (index - currentIndex)}vh)`;
        block.style.transform = transformValue;
      });
    }
  
    function scrollToNext() {
      if (currentIndex < contentBlocks.length - 1) {
        currentIndex++;
        updateContent();
      }
    }
  
    function handleScroll() {
      const scrollThreshold = window.innerHeight / 2;
      const currentBlock = contentBlocks[currentIndex];
      const blockTop = currentBlock.getBoundingClientRect().top;
  
      if (blockTop < scrollThreshold) {
        scrollToNext();
      }
    }
  
    document.addEventListener('scroll', handleScroll);
  });
  