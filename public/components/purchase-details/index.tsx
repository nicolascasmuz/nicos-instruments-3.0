import styles from "./details.module.css";
import { Body, SecondaryTitle } from "ui/texts";
import { format, parseISO } from "date-fns";
import { createOrder } from "lib/api";
import { useRouter } from "next/navigation";
import { RoundedButton } from "ui/buttons";

export function PurchaseDetails(props) {
  const router = useRouter();

  const HandleClick = async (e) => {
    e.preventDefault();

    const data: any = await createOrder(props.id);
    if (data.init_point) {
      router.push(data.init_point);
    }
  };

  return (
    <div className={styles["details-container"]}>
      <img
        src={props?.pic}
        alt={
          props?.title
            ? props?.title.toLowerCase().replaceAll(" ", "-")
            : "card-img"
        }
        className={styles["card-img"]}
      />
      <div className={styles["details__details-container"]}>
        <SecondaryTitle size="35px">Detalle de la compra</SecondaryTitle>
        <Body>
          Comprado el:{" "}
          {props?.date ? format(parseISO(props.date), "dd-MM-yyyy") : ""}
        </Body>
        <Body>Producto: {props?.title}</Body>
        <Body>Descripción: {props?.description}</Body>
        <Body>Cantidad: {props?.quantity}</Body>
        <Body>Total: ${props?.price}</Body>
        <RoundedButton
          className={styles["purchase-details__button"]}
          color="#ac1a22"
          width="130px"
          onClick={HandleClick}
        >
          Volver a comprar
        </RoundedButton>
      </div>
    </div>
  );
}
