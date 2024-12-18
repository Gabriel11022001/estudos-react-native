import { registerRootComponent } from 'expo';

import App from './App';

/**
 * quando o app é iniciado, esse é o primeiro arquivo invocado,
 * é nele que a gente configura o componente root do app, ou seja, seria basicamente
 * a primeira tela do app
 */
registerRootComponent(App); // registrar o root(primeiro componente)
