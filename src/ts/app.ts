const app = (text: string): HTMLHeadingElement => {
  const h1 = document.createElement('h1');
  h1.innerText = text;
  return h1;
};

export default app;
