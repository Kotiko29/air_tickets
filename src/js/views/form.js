import {
  getAutocompleteInstance,
  getDatePickerInstance,  
} from '../plugins/materialize';

class FormUI {
  constructor(autocompleteInstance, datePickerInstance) {
    this.$form = document.forms['locationControls'];
    this.origin = document.getElementById('autocomplete-origin');
    this.originAutocomplete = autocompleteInstance(this.origin);
    this.destination = document.getElementById('autocomplete-destination');
    this.destinationAutocomplete = autocompleteInstance(this.destination);

    this.depart = document.getElementById('datepicker-depart');
    this.departDatePicker = datePickerInstance(this.depart);
    this.return = document.getElementById('datepicker-return');
    this.returnDatePicker = datePickerInstance(this.return);
  }

  get form() {
    return this.$form;
  }

  get originValue() {
    return this.origin.value;
  }

  get destinationValue() {
    return this.destination.value;
  }

  get departDateValue() {
    return this.departDatePicker.toString();
  }

  get returnDateValue() {
    return this.returnDatePicker.toString();
  }

  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data);
    this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUI;