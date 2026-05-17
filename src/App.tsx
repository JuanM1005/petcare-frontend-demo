import ThemeProvider from './context/ThemeProvider';
import { DesignSystemShowcase } from './components/shared/DesignSystemShowcase';

function App() {
  return (
    <ThemeProvider>
      <DesignSystemShowcase />
    </ThemeProvider>
  );
}

export default App;
