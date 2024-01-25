import React from 'react'

type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<React.SetStateAction<{
    prompt: string;
    tag: string;
  }>>;
  submitting: boolean;
  handleSubmit: () => void;
}

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <div>Form</div>
  )
}

export default Form