import Accordion from "./components/Accordian";
import { faqs } from "./faqs";

export default function App() {
  return <Accordion faqs={faqs} />;
}
