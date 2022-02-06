//styles
import styles from "./Home.module.css";
import useFirestore from "../../hooks/useFirestore";

function TransactionList({ transactions }) {
  const { deleteData, response } = useFirestore("transactions");
  console.log(response.success);
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{transaction.amount}</p>
          <button onClick={() => deleteData(transaction.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
