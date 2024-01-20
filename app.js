// define a class for the temperature controller
class TemperatureController {
    // constructor takes the selector for the main element
    constructor(mainSelector) {
      // select the elements
      this.mainEl = document.querySelector(mainSelector);
      this.increaseBtnEl = this.mainEl.querySelector('.increase');
      this.decreaseBtnEl = this.mainEl.querySelector('.decrease');
      this.temperatureDisplayEl = this.mainEl.querySelector('.temp__display');
  
      // get the current temperature value
      this.temperature = parseInt(this.temperatureDisplayEl.textContent);
  
      // bind the handler functions to the instance
      this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
      this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
  
      // add the event listeners
      this.increaseBtnEl.addEventListener('click', this.handleIncreaseClick);
      this.decreaseBtnEl.addEventListener('click', this.handleDecreaseClick);
    }
  
    // define the handler functions
    handleIncreaseClick(event) {
      // increase the temperature by 1 degree
      this.temperature++;
      // update the display element
      this.temperatureDisplayEl.textContent = this.temperature + '°C';
      this.temperature >= 50 ? this.temperatureDisplayEl.classList.add('hot') : this.temperatureDisplayEl.classList.add('cold');
    }
  
    handleDecreaseClick(event) {
      // decrease the temperature by 1 degree
      this.temperature--;
      // update the display element
      this.temperatureDisplayEl.textContent = this.temperature + '°C';
      this.temperature >= 50 ? this.temperatureDisplayEl.classList.add('hot') : this.temperatureDisplayEl.classList.add('cold');
    }
  }
  
  // create an instance of the temperature controller
  const tempController = new TemperatureController('.main');
  