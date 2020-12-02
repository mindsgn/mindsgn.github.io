import { POST, NEXT, ISAUTH, BOOK } from './constant';

let name = null;
let address = null;
let time = null;
let date = null;

// login user
export const post = (name) => (dispatch) => {
  try{
    let data = {
      name: name,
      address: address,
      time: time,
    };
    dispatch(setPost(data));
  }catch(e){
    console.log('post reducer error', e)
  }
};

//book
export const book = (state) => (dispatch) => {
  try{
    let data = {
      isBooking: state
    };
    dispatch(setBook(data));
  }catch(e){
    console.log('book reducer error', e)
  }
};

//dispatchers
export const setPost = (data) => {
  return {
    type: POST,
    payload: data,
  };
};

export const setBook = (data) => {
  return {
    type: BOOK,
    payload: data,
  };
};
