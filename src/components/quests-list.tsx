import { QuestCard } from './quest-card';
import { TypeQuest } from '../type-data/type';

type QuestListProps = {
  quests: TypeQuest[];
};

function QuestList({ quests }: QuestListProps): JSX.Element {
  return (
    <>
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </>
  );
}

export { QuestList };
