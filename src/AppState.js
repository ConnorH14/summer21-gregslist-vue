import { reactive } from 'vue'
import { Car } from './Models/Car'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  cars: [
    new Car(1, 'beedlye', 'volkwagon', '9999', 5400, '//placehold.it/200x200.png', '1', '1'),
    new Car(2, 'beedlye', 'volkwagon', '9999', 5400, '//placehold.it/200x200.png', '1', '1')
  ],
  activeCar: null,
  houses: ['house 1', 'house 2']
})
