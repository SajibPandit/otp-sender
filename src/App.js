import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import cogoToast from "cogo-toast";
import firebase from "./firebaseConfig";

function App() {
  const [state, setState] = useState({
    Number: "",
    Status: "",
  });
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    const todoRef = firebase.database().ref("/Send_OTP");
    todoRef.on("value", (snapshot) => {
      const { Number, Status } = snapshot.val();
      if (isSent === true && Status === "1") {
        cogoToast.success(
          <div>
            <b>Success!</b>
            <div>OTP has been sent</div>
          </div>,
          { position: "top-right" }
        );
        setIsSent(false);
      }

      setState({ ...state, Number, Status });
    });
  }, [state, isSent]);

  const handleClick = (e) => {
    e.preventDefault();
    const OTP = `Your Spider OTP is ${Math.floor(Math.random() * 1000000 + 1)}`;
    const todoRef = firebase.database().ref("/Send_OTP");
    todoRef.update({
      Number: state.Number,
      Status: state.Status,
      OTP,
    });
    setIsSent(true);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mx-auto">
              <h2 className="text-center">OTP Sender</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    value={state.Number}
                    onChange={(e) =>
                      setState({ ...state, Number: e.target.value })
                    }
                    type="text"
                    placeholder="Enter phone number"
                  />
                  <Form.Text className="text-muted">
                    Enter the number where you want to send OTP
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    value={state.Status}
                    type="number"
                    onChange={(e) =>
                      setState({ ...state, Status: e.target.value })
                    }
                    placeholder="Enter status"
                  />
                  <Form.Text className="text-muted">
                    Enter 0 if you want to send OTP
                  </Form.Text>
                </Form.Group>

                <Button
                  variant="primary"
                  className="btn-block w-100"
                  type="submit"
                  onClick={handleClick}
                >
                  {state.isSend && state.isSend === true
                    ? "Sending"
                    : "Send OTP"}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
