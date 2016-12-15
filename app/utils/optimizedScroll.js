const throttle = (type, name, obj) => {
  const node = obj || window;
  let running = false;
  const func = () => {
    if (running) { return; }
    running = true;
    requestAnimationFrame(() => {
      node.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  node.addEventListener(type, func);
};

export default () => {
  throttle('scroll', 'optimizedScroll');
};
