import Notiflix from "notiflix";

export const ErrorMessage = (msg) => {

    return Notiflix.Notify.failure(msg);
}