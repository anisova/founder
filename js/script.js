// Функция работы модального окна
function toggleModal(modalWindow, openButton, closeButton) {
    const openBtns = document.querySelectorAll(openButton);    
    const modal = document.querySelector(modalWindow);    
    const closeBtn = modal.querySelector(closeButton);
      openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
        let paddingoffset=window.innerWidth- document.body.offsetWidth + 'px';        
        e.preventDefault();
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = paddingoffset;        
      });
      });   
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
  
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeBtn.click();
        }
      });
    
  }
  toggleModal(".modal", ".btn-open", ".btn-close");
  