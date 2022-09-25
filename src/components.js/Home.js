import React from "react";

const Home = () => {
  return (
    <>
      <div className="container my-2">

        {/* Add a Note */}
        <div className="container my-3">
          <h2>Add a Note</h2>

         {/* Form for entry */}
          <form className="my-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Your Notes */}
        <div className="container my-3">
        <h1>Your Notes</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
