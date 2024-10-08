import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="vocab-page"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
