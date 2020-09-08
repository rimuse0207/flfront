import axios from "axios";

export const getData = () =>
  // axios.get(`http://${process.env.REACT_APP_SERVER_ADDRESS}/users`);
  axios.get(`http://18.221.28.100:4000/users`);

export const sendFlowerDataDetail = (number) =>
  // axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/qwe`, {
  //   number,
  // });
  axios.post(`http://18.221.28.100:4000/users/qwe`, {
    number,
  });
export const getFlowerDataDetail = () =>
  // axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/users/qwe/`);
  axios.get(`http://18.221.28.100:4000/users/qwe/`);

export const postLogin = (email, password) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/login`, {
    email,
    password,
  });

export const postSignUp = (email, password) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/signUp`, {
    email,
    password,
  });

export const postDiary = (form, file, name, date, flowername, title, desc) => {
  const diaryForm = new FormData();
  for (const key of Object.keys(file)) {
    diaryForm.append("img", file[key]);
  }

  diaryForm.append("useredName", name);
  diaryForm.append("date", date);
  diaryForm.append("flowerName", flowername);
  diaryForm.append("title", title);
  diaryForm.append("desc", desc);

  axios.post(
    `${process.env.REACT_APP_SERVER_ADDRESS}/diary/newDiary`,
    diaryForm
  );
};
