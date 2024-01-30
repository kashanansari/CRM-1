import React, { useState } from 'react'
import bg from "../Assets/back.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTty } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [ErrorPopup, setErrorPopup] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleClosePopup = () => {
    setErrorPopup(false);
  };

  const [user, setUser] = useState({
    login_Id: "",
    password: "",
  });
  let value, name;

  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { login_Id, password } = user;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        em_loginid: login_Id,
        password: password,
      }),
    };

    let data;
    if (login_Id && password) {
      const response = await fetch(
        "http://127.0.0.1:8000/api/empLogin",
        options
      );
      data = await response.json();
      console.log(data)
      if (response.status === 200) {
        console.log(data.message);
        if (data.role === "Technical") {
          setTimeout(() => {
            navigate("/tech");
          }, 1000);
        } else if (data.role === "Super visor") {
          setTimeout(() => {
            navigate("/sv");
          }, 1000);
        }
        else if (data.role === "Customer services") {
          setTimeout(() => {
            navigate("/cs");
          }, 1000);
        }
        else if (data.role === "CRO") {
          setTimeout(() => {
            navigate("/cro");
          }, 1000);
        } else if (data.role === "Head") {
          setTimeout(() => {
            navigate("/superAdmin");
          }, 1000);
        }
        else {
          setMsg("Opps it looks Like You are not Eligble");
          setErrorPopup(true);
        }

      } else if (response.status === 401) {
        setMsg(data.message);
        setErrorPopup(true);
        console.log(data.message);
      } else {
        setMsg("Please  Try again Later");
        setErrorPopup(true);
        console.log("Please Try Again Later .");
      }
    } else {
      setErrorPopup(true);
      setMsg("Please Fill the All Feilds ");
    }
  };

  return (
    <div>
      {ErrorPopup && (
        <div className="overlay">
          <div className="popup d-flex flex-col justify-content-center items-center space-y-3">
            <div className="flex">
              <div class=" flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl  mx-3 mb-3">
                  An Error Occurred
                </h1>
                <h1 className="fs-4 ww-bold mx-3">{msg}</h1>
              </div>
            </div>
            <div className=" custum-end">
              <button
                className="p-3 text-white    btn bg-red-600"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <section class="bg-gray-100" style={{ backgroundImage: bg, backgroundSize: "cover" }}>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <h1 className='text-5xl font-bold text-center'>MAGMA CONSULTING CORPORATION</h1>
              <div class="mt-8">
                <p href="" class="text-2xl font-bold text-pink-600 text-center"><FontAwesomeIcon icon={faTty} /> 021 3453 5573 </p>
                <address class="mt-2 not-italic text-center">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4 text-center">
                <h1 className='text-3xl font-bold'>Welcome</h1>
                <div>
                  <label class="sr-only" for="name">Login Id </label>
                  <input
                    class="w-full rounded-lg border p-3 text-sm"
                    placeholder="Login Id"
                    onChange={getUserdata}
                    name='login_Id'
                    type="text"
                    id="login_id"
                    password="login_id"
                  />
                </div>
                <div>
                  <label class="sr-only" for="name">Password</label>
                  <input
                    class="w-full rounded-lg border p-3 text-sm"
                    placeholder="Password"
                    onChange={getUserdata}
                    name='password'
                    type="text"
                    id="password"
                  />
                </div>
                <div class="mt-4">
                  <button
                    type="button"
                    onClick={sendData}
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white "
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
