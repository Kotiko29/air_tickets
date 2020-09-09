import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import currencyUI from './views/currency';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    onFormSubmit();
  });

  //Events
  

// Handlers
  async function initApp() {
   await locations.init();
   formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // собрать данные из инпутов
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    // code, code, 2019-09, 2019-10
    console.log(origin, destination, depart_date, return_date, currency);
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency
    });
  }
});
