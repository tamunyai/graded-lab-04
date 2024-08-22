import { Slot } from 'expo-router';
import { CartProvider } from '../contexts/CartContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { FormProvider } from '../contexts/FormContext';

export default function Layout() {
  return (
    <ThemeProvider>
      <CartProvider>
        <FormProvider>
          <Slot />
        </FormProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
