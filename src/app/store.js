import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  Intl: { locale: 'zh'},
  reducer: { 
    
  },
  informations: {
    perso: { age: "24 ans", mail: "nicolasmarmot@gmail.com" }
  }
});
