import { useReducer, FC } from "react";
import Button from "../button/Button";
import { useAppContext } from "../../utils/appContext";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type State = {
  currentQuestion: number;
  score: number;
  finished: boolean;
};

type Action = { type: "ANSWER"; payload: string } | { type: "RESTART" };

type QuizProps = { onClose: () => void };

const initialState: State = {
  currentQuestion: 0,
  score: 0,
  finished: false,
};

const questions: Question[] = [
  {
    question:
      "Jak powinieneś dostosować prędkość jazdy w przypadku obfitych opadów deszczu?",
    options: [
      "Utrzymać prędkość maksymalną dozwoloną na danej drodze",
      "Zmniejszyć prędkość i zwiększyć odstęp od pojazdu przed Tobą",
      "Przyspieszyć, aby szybciej opuścić obszar z opadami",
      "Poruszać się tylko lewym pasem, aby omijać kałuże",
    ],
    correctAnswer:
      "Zmniejszyć prędkość i zwiększyć odstęp od pojazdu przed Tobą",
  },
  {
    question:
      "Jakie czynniki powinieneś wziąć pod uwagę, dostosowując prędkość na oblodzonej drodze?",
    options: [
      "Rodzaj opon i ich stan",
      "Widoczność oraz stan nawierzchni",
      "Obecność innych pojazdów i pieszych",
      "Wszystkie powyższe",
    ],
    correctAnswer: "Wszystkie powyższe",
  },
  {
    question: "Co należy zrobić, gdy droga jest mokra lub oblodzona?",
    options: [
      "Zachować tę samą prędkość co na suchej nawierzchni, ale zwiększyć koncentrację",
      "Zwiększyć prędkość, aby szybciej pokonać niebezpieczny odcinek",
      "Zmniejszyć prędkość i zachować większy odstęp od poprzedzającego pojazdu",
      "Jazda w takich warunkach jest zabroniona",
    ],
    correctAnswer:
      "Zmniejszyć prędkość i zachować większy odstęp od poprzedzającego pojazdu",
  },
];

const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ANSWER": {
      const isCorrect =
        questions[state.currentQuestion].correctAnswer === action.payload;
      return state.currentQuestion + 1 < questions.length
        ? {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            score: state.score + (isCorrect ? 1 : 0),
          }
        : {
            ...state,
            finished: true,
            score: state.score + (isCorrect ? 1 : 0),
          };
    }
    case "RESTART":
      return initialState;

    default:
      return state;
  }
};

const Quiz: FC<QuizProps> = ({ onClose }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { user, updatePoints } = useAppContext();

  const handleAddPoints = async () => {
    if (!user) {
      alert("Zaloguj się aby zapisać punkty!");
      return;
    }

    try {
      const success = await updatePoints(state.score);
      if (!success) {
        alert("Nie udało się zaktualizować punktów. Spróbuj ponownie.");
        return;
      }
      onClose();
    } catch (error) {
      console.error("Błąd podczas aktualizacji punktów:", error);
      alert("Wystąpił błąd. Spróbuj ponownie później.");
    }
  };

  const handleAnswer = (answer: string) => {
    dispatch({ type: "ANSWER", payload: answer });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  if (state.finished) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-5 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Twój wynik: {state.score} / {questions.length}
        </h1>
        {state.score === questions.length ? (
          <Button variant="secondary" onClick={handleAddPoints}>
            Zapisz punkty
          </Button>
        ) : (
          <div className="flex gap-5 w-full justify-center items-center">
            <Button
              variant="primary"
              onClick={handleRestart}
              className="w-36 border-none"
            >
              Zagraj ponownie
            </Button>
            <Button
              variant="secondary"
              onClick={handleAddPoints}
              className="w-36"
            >
              Zapisz punkty
            </Button>
          </div>
        )}
      </div>
    );
  }

  const currentQuestion = questions[state.currentQuestion];

  return (
    <div className="w-full max-w-md p-6">
      <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
      <div className="flex flex-col space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-violet-500 hover:text-white"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
