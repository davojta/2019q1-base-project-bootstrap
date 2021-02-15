const clickHandler = (el) => {
    return () => {
      el.style.backgroundColor = '#ff8000';
    }
  }

module.exports.clickHandler = clickHandler;
  