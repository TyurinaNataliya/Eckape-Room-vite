import { BigQuestCard } from '../../components/big-quest-cart';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

function QuestContainer(): JSX.Element {
  return (
    <>
      <Header />
      <BigQuestCard />
      <Footer />
    </>
  );
}
export { QuestContainer };
