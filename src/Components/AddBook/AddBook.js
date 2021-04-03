import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
    };
    const url = `https://newrite.herokuapp.com/addEvent`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "4295ac4d47b569312bea67b440cdbdbb");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="New exciting Event" ref={register} />
        <br />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBook;
