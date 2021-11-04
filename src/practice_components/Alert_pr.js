import React from 'react'

function Alert_pr(props) {

  const handleAlert = () => {
    console.log("HandleAlert clicked")
    props.showAlert("Are you sure you want to submit", "success")
  }



  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button onClick={handleAlert} type="submit" class="btn btn-success">Submit</button>
    </form>
  )
}

export default Alert_pr


// code to be written in App.js : 

// const [alert , setAlert] = useState(null);
// function for setting the alert : 
// const showAlert = () => { 
    // setAlert ({
        //    msg : message
        //   type : type
    // }) 
    // setTimeout(() => {
        // setAlert(null); }
        // , 2000 )
    // )
// }
