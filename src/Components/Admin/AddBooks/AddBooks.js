import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../../Navigation/Navigation";
import AdminNav from "../AdminNav/AdminNav";

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      auth: data.auth,
      price: data.price,
      imageURL: imageURL,
    };

    const url = `https://newrite.herokuapp.com/addbook`;
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
    imageData.set("key", "b9010925924e5e07e42ac1b63ddf746f");
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
    <div className="container">
      <Navigation></Navigation>
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <AdminNav></AdminNav>
        </div>
        <div className="col-md-9 addbooks">
          <div className="container">
            <div className="row">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    defaultValue=""
                    ref={register}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Auth"
                    name="auth"
                    defaultValue=""
                    ref={register}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    defaultValue=""
                    ref={register}
                  />
                  <br />
                  <input
                    name="exampleRequired"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <br />
                  <br />
                  <input className="btn btn-primary" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
