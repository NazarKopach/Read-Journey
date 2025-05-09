import { useDispatch, useSelector } from "react-redux";
import styles from "./StartReading.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaStartFinishReading } from "../../utils/schema";
import {
  finishReadingBooks,
  startReadingBooks,
} from "../../redux/userReading/operations";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectUserReadingBooks } from "../../redux/userReading/selectors";

const StartReading = ({ isReading }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector(selectUserReadingBooks);
  const [status, setStatus] = useState(isReading ? "active" : "inactive");

  useEffect(() => {
    if (items?.progress?.length > 0) {
      const lastProgress = items.progress[items.progress.length - 1];
      setStatus(lastProgress.status);
    }
  }, [items, status]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaStartFinishReading),
  });

  const onSubmit = (data) => {
    if (status === "inactive") {
      dispatch(startReadingBooks({ id, ...data }));
      setStatus("stop");
    } else {
      dispatch(finishReadingBooks({ id, ...data }));
      setStatus("start");
    }
    reset();
  };

  return (
    <div>
      <span className={styles.start_reading_span}>Start page:</span>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          {...register("page")}
          type="text"
          className={styles.start_reading_input}
          placeholder="Page number:"
        />
        {errors.page && (
          <p className={styles.start_readin_error}>{errors.page.message}</p>
        )}
        <button className={styles.start_readin_btn} type="submit">
          {status === "inactive" ? "To start" : "To stop"}
        </button>
      </form>
    </div>
  );
};

export default StartReading;
