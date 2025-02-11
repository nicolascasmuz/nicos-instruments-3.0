import { useRouter } from "next/navigation";
import { RoundedButton } from "ui/buttons";
import { deleteOrder } from "lib/api";
import styles from "./pending-card.module.css";

export function PendingCard(props) {
  const router = useRouter();

  function HandleInitPointClick(e) {
    e.preventDefault();
    router.push(props.init_point);
  }

  async function HandleExternalReferenceClick(e) {
    e.preventDefault();
    const res = await deleteOrder(props.id);

    if (res.message) {
      router.refresh();
    }
  }

  return (
    <div className={styles["card-container"]}>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <h2 className={styles["card__title"]}>
        {props.name.length <= 18
          ? props.name
          : props.name.substring(0, 18) + "..."}
      </h2>
      <RoundedButton
        className={styles["card__button-buy"]}
        onClick={HandleInitPointClick}
        color="#ac1a22"
        width="75px"
      >
        comprar
      </RoundedButton>
      <RoundedButton
        className={styles["card__button-delete"]}
        onClick={HandleExternalReferenceClick}
        color="#ac1a22"
        width="75px"
      >
        eliminar
      </RoundedButton>
    </div>
  );
}
