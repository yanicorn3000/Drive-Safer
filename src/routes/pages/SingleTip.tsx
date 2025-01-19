import { useState } from "react";
import { FC } from "react";
import Button from "../../components/button/Button";
import Comments from "../../components/comments/Comments";
import CommentsList from "../../components/comments/CommentsList";
import QuizModal from "./modal/QuizModal";
import Quiz from "../../components/quiz/Quiz";

const SingleTip: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="mx-auto mt-10 max-w-5xl flex flex-col justify-center gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300">
        Dostosowanie prędkości do warunków
      </h2>
      <div className="flex flex-col justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src="../src/assets/tip-1.jpg"
          className="w-full h-60 object-cover"
        />
        <div className="p-6 flex flex-col gap-3 items-start justify-between">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Zasada ograniczonego zaufania
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem
            corporis dolores, saepe deleniti qui ullam. Reprehenderit dolorum
            alias suscipit. Illo quas maiores cum, error molestiae voluptate
            iure iusto veniam deleniti tempore dicta nisi soluta similique
            incidunt nam tenetur. Quis obcaecati ex sequi quasi asperiores,
            aliquam animi corrupti nam repellat pariatur ad eveniet dolorem
            repellendus, ipsa non recusandae. Unde possimus quidem qui a. Illo
            repellendus officiis animi, magni voluptatum at veritatis? Quae
            consectetur tempore aperiam quisquam tempora possimus tenetur sed
            impedit iure corporis libero dolorum facere fugit id alias rerum
            fuga eveniet, autem quas deleniti a explicabo. Doloremque, nulla sit
            deleniti soluta delectus eaque, expedita perspiciatis consequatur
            officia sint est in voluptatem quae quasi pariatur vitae rerum
            inventore tenetur voluptates voluptatum beatae, ipsam eos quis
            iusto. Quod in consequuntur recusandae ab, possimus explicabo
            repellat, inventore perferendis quidem praesentium et eos culpa ea
            doloremque beatae veniam. Eveniet quos, ab, commodi nisi possimus
            enim adipisci iure, delectus dolore sint culpa tenetur optio
            recusandae? Suscipit voluptates eius voluptatem consequuntur, quo
            incidunt odio blanditiis a ea ad recusandae doloremque corrupti fuga
            enim architecto tempora explicabo illo eligendi nisi sequi
            accusantium? Qui quos saepe magnam accusamus incidunt mollitia quod
            quasi provident. Quis cum nostrum minima nisi. Corporis aut sed
            voluptatibus at veritatis quasi cupiditate laudantium, magnam
            distinctio. Molestias molestiae veniam, facere earum aliquid
            blanditiis unde non, impedit rerum, quibusdam ea quae iste veritatis
            in commodi rem itaque! Tempora iste sint aperiam odit? Odio
            necessitatibus saepe alias omnis labore quia itaque sit laudantium
            rerum minima laborum iusto veritatis molestias vitae repellendus
            aperiam, architecto suscipit obcaecati totam pariatur accusamus!
            Porro ea, animi nisi excepturi maiores earum dolore qui vero fugit
            autem unde, quia quasi cumque tenetur veritatis quisquam
            voluptatibus saepe dolores. Minima molestiae repudiandae rerum
            voluptatibus at, esse dolor iste ullam? Dolore veniam beatae
            quibusdam rem harum iste expedita, enim repellat, excepturi voluptas
            culpa pariatur maiores, quaerat perferendis vero provident? Sequi in
            aperiam quod possimus tempora, veniam fugit laborum illo natus autem
          </p>
          <div className="flex justify-end gap-10 w-full items-center">
            <span>Like</span>
            <span>Share</span>
            <span>Tagi</span>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>
              Trening
            </Button>
          </div>
        </div>
      </div>
      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Trening"
      >
        <Quiz onClose={() => setModalOpen(false)} />
      </QuizModal>
      <Comments />
      <CommentsList />
    </section>
  );
};

export default SingleTip;
