interface AppProps {
  formulas: string[];
  dice: object[];
  stats: object;
  onChange?(event: any): void;
  onSubmit?(event: any): void;
}

interface AppState {
  formulas: string[];
  dice: object[];
  stats: object;
}

interface Die {
  id: number;
  title: string;
  dieValue: number;
}
