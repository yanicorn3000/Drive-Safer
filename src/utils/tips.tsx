export type Tip = {
  title: string;
  img: string;
  alt: string;
  description: string;
  id: number;
};

export const tips = [
  {
    title:
      "Eco-Driving – Jak prowadzić samochód w sposób oszczędny i ekologiczny?",
    description:
      "Eco-driving, czyli technika jazdy ekonomicznej, to styl prowadzenia pojazdu, który ma na celu zmniejszenie zużycia paliwa, obniżenie emisji spalin oraz wydłużenie żywotności samochodu. Wprowadzenie tych zasad do codziennej jazdy nie tylko przekłada się na oszczędności, ale także pozytywnie wpływa na środowisko.",
    img: "src/assets/tip.jpg",
    alt: "Kobieta za kierownicą samochodu",
    id: 1,
  },
  {
    title: "Dostosowanie prędkości do warunków drogowych",
    description:
      "Dostosowanie prędkości do panujących warunków drogowych jest kluczowym elementem zapewniającym bezpieczeństwo podczas jazdy. Wiele wypadków na drodze ma miejsce, ponieważ kierowcy nie uwzględniają zmieniających się warunków atmosferycznych, takich jak deszcz, śnieg, mgła...",
    img: "src/assets/tip-1.jpg",
    alt: "Szybka jazda samochodem",
    id: 2,
  },

  {
    title: "Jak się zachować, gdy samochód wpadł w poślizg?",
    description:
      "Poślizg to jedno z najniebezpieczniejszych zjawisk, które może wystąpić podczas jazdy, zwłaszcza w trudnych warunkach atmosferycznych, takich jak deszcz, śnieg, lód czy silny wiatr. W momencie, gdy Twój samochód zaczyna się ślizgać, ważne jest, by nie panikować i podjąć odpowiednie kroki, które pozwolą Ci odzyskać kontrolę..",
    img: "src/assets/tip-2.jpg",
    alt: "Kierowanie samochdem na slizkiej drodze",
    id: 3,
  },

  {
    title: "Jak bezpiecznie prowadzić samochód w deszczu?",
    description:
      "Prowadzenie samochodu w deszczu wymaga szczególnej ostrożności i uwagi. Mokra nawierzchnia drastycznie zmienia warunki jazdy, wpływając na przyczepność opon, widoczność oraz czas reakcji. Aby zapewnić sobie bezpieczeństwo i uniknąć niebezpiecznych sytuacji, należy dostosować styl jazdy do warunków pogodowych...",
    img: "src/assets/tip-3.jpg",
    alt: "Kierowaie autem w deszczu",
    id: 4,
  },
];

const tipOfDayId = 1;

export const getTipOfDay = async () => {
  return tips.find((tip) => {
    return tip.id === tipOfDayId;
  });
};

export const getTips = async (withoutTipOfDay = false, limit = 4) => {
  if (withoutTipOfDay) {
    return tips.filter((t) => t.id !== tipOfDayId).slice(0, limit);
  }

  return tips.slice(0, limit);
};
