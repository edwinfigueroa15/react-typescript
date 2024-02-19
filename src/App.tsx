import { Card } from "./components";
import { PublicLayout } from "./layout";

function App() {
  return <PublicLayout>
    {Array(5).fill('').map(() => <Card color="red">Hola</Card>)}
  </PublicLayout>
}

export default App;
