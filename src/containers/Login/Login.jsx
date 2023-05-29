import React, { useState } from "react";
import styled from "styled-components";
import facebook from "assets/img/Facebook.svg";
import github from "assets/img/Github.svg";
import google from "assets/img/Google.svg";
import eyeHide from "assets/img/eye-hide.svg";
import eyeOpen from "assets/img/eye-openn.svg";
import bannerLogin from "assets/img/welcome-astronaut.svg";
import { Logo } from "components/Logo";
import bubble from "assets/img/bubble.png";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { render } from "react-dom";

const StyledWrapperLogin = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, #ffffff 0%, #4169da 66.67%);
  .container {
    margin: 0 auto;
    width: 1280px;
  }

  .content-right {
    margin-top: 100px;
    animation: float 2s infinite;
  }

  .content-top {
    width: 212px;
    height: 47px;
    background-color: #d9d9d9;
  }
  .content-left {
    margin-top: 150px;
    margin-left: 100px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 66px;
  }

  .content-right img {
    max-width: 100%;
  }
  .content-heading {
    font-size: 56px;
    line-height: 84px;
    font-weight: 600;
    font-family: "Poppins";
  }

  .column {
    display: flex;
    flex-direction: column;
  }
  .form-login {
    width: 478px;
  }

  input {
    height: 48px;
    z-index: 2;
    background-color: #bbaaff;
    border-radius: 4px;
    padding-left: 10px;
    border: none;
    outline: none;
  }
  .label-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
  }

  .content-password {
    /* margin-bottom: 40px; */
    position: relative;
  }

  .content-username {
    margin-top: 20px;
  }

  .content-username label {
    margin-bottom: 7px;
  }

  .btn-login {
    width: 126px;
    height: 37px;
    color: #fff;
    background-color: #5429ff;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    text-align: center;
    display: inline-block;
    font-feature-settings: "salt" on;
    border-radius: 23px;
    z-index: 100000;
  }
  .reset {
    background-color: #d9d9d9;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  /* .btn-login::before {
    content: "";
    background-image: url("../images/arrLogin.svg");
    position: absolute;
    width: 17.25px;
    height: 6.38px;
    right: 32.37px;
    top: 50%;
    transform: translateY(-50%);
  } */

  .content-bottom {
    width: 478px;
    margin-top: 32px;
    margin-bottom: 103px;
    text-align: center;
  }

  .content-bottom-social {
    margin-top: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
    margin-bottom: 31px;
  }
  .content-social-item {
    width: 125px;
    height: 50px;
    border: 1px solid #6096b4;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-sign-up {
    color: #5429ff;
  }

  .content-bottom-footer {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .banner {
    position: absolute;
    right: 10px;
    top: 0;
    display: flex;
  }

  .forgotpassword {
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: #5429ff;

    opacity: 0.5;
  }

  .content-bottom-top {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #5429ff;
  }

  .input-icons img {
    width: 20px;
    height: 20px;
  }
  .input-icons {
    position: absolute;
    right: 15.87px;
    top: 55%;
    z-index: 99999;
  }

  .bubbles img {
    width: 50px;
    animation: bubble 7s linear infinite;
  }
  .bubbles {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    z-index: -10000;
  }

  @keyframes back {
    100% {
      background-position: 200rem 0;
    }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }

  .bubbles img:nth-child(1) {
    animation-delay: 2s;
  }
  .bubbles img:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles img:nth-child(3) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles img:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles img:nth-child(6) {
    animation-delay: 6s;
  }
  .bubbles img:nth-child(7) {
    animation-delay: 7s;
  }

  @media screen and (max-width: 1023px) {
    .banner {
      display: none;
    }
    .content-right {
      display: none;
    }

    .container {
      width: 600px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 300px;
    }
    .content {
      width: 200px;
      margin-left: 3px;
    }

    input {
      width: 200px;
    }
    .content-top {
      margin-left: 7px;
    }
    .btn-login {
      margin-left: 2px;
    }

    .content-bottom-social {
      flex-direction: column;
    }
    .content-bottom {
      width: 200px;
      margin-top: 10px;
    }
    .content-top {
      height: 46px;
      margin-top: 50px;
    }
  }
  .p {
    position: relative;
  }
  .visible {
    visibility: visible;
    opacity: 1;
  }

  .hitden {
    visibility: hidden;
    opacity: 0;
  }

  .c {
    height: 20px;
  }
`;

const StyledLoginErrorPassword = styled.div`
  height: 10px;
  visibility: ${(props) => (props.error ? "visible" : "hidden")};
  opacity: ${(props) => (props.error ? 1 : 0)};
  position: absolute;
  color: red;
  top: 100px;
  left: 150px;
`;

const Login = () => {
  const [show, setShow] = useState(false);
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleClickEye = () => {
    setShow(!show);
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    if (values.username !== "khuong") {
      return { username: "KHÔNG ĐÚNG TÀI KHOẢN" };
    }
    if (values.password !== "123") {
      return { [FORM_ERROR]: "SAI MẬT KHẨU ROI" };
    }
    navigate("/dashboard");
  };

  return (
    <StyledWrapperLogin>
      <div className="container">
        <div className="content">
          <div className="content-left">
            <Logo mb={16.5} />
            <div className="content-heading">Log in</div>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "không được bỏ trống";
                }
                if (!values.password) {
                  errors.password = "không được bỏ trống";
                }
                return errors;
              }}
              render={({
                submitError,
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} className="p">
                  <Field name="username">
                    {({ input, meta }) => (
                      <div>
                        <div className="content-username column">
                          <label htmlFor="username">Username</label>
                          <input
                            {...input}
                            type="text"
                            // value={username}
                            placeholder="username"
                            // onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                        {/* {(meta.error || meta.submitError) && meta.touched && ( */}

                        <div
                          className={
                            (meta.error || meta.submitError) && meta.touched
                              ? "visible c"
                              : "hitden c"
                          }
                        >
                          {meta.error || meta.submitError}
                        </div>
                        {/* )} */}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <div className="content-password column">
                          <div className="label-password">
                            <label htmlFor="password">Password</label>
                            <label
                              htmlFor="forgotpassword"
                              className="forgotpassword"
                            >
                              Forgot Password?
                            </label>
                          </div>
                          <input
                            type={show ? "text" : "password"}
                            {...input}
                            placeholder="enter your password"
                          />
                          {/* {meta.error && meta.touched && ( */}
                          {/* )} */}
                          <div className="input-icons">
                            {show ? (
                              <img
                                src={eyeOpen}
                                alt="fsafafa"
                                id="eye-hide"
                                onClick={handleClickEye}
                              />
                            ) : (
                              <img
                                src={eyeHide}
                                alt="dsadad"
                                id="eye-hide"
                                onClick={handleClickEye}
                              />
                            )}
                          </div>
                        </div>

                        <div
                          className={
                            meta.error && meta.touched
                              ? "visible c"
                              : "hitden c"
                          }
                        >
                          {meta.error}
                        </div>
                      </div>
                    )}
                  </Field>
                  {submitError && (
                    <StyledLoginErrorPassword
                      error={submitError}
                      className="error"
                    >
                      {submitError}
                    </StyledLoginErrorPassword>
                  )}
                  <div className="buttons">
                    <input
                      className="btn btn-login"
                      type="submit"
                      value="Login"
                      disabled={submitting}
                    />
                    <input
                      className="btn btn-login reset"
                      type="submit"
                      value="Reset"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    />
                  </div>
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              )}
            />

            <div className="content-bottom">
              <div className="content-bottom-top">or continues with</div>
              <div className="content-bottom-social">
                <div className="content-social-item">
                  <img src={google} alt="" />
                </div>
                <div className="content-social-item">
                  <img src={github} alt="" />
                </div>
                <div className="content-social-item">
                  <img src={facebook} alt="" />
                </div>
              </div>
              <div className="content-bottom-footer">
                <div>Don't have an account yet ?</div>
                <span className="content-sign-up">Sign up for free</span>
              </div>
            </div>
          </div>
          <div className="content-right">
            <img src={bannerLogin} />
          </div>
        </div>
      </div>
      <div className="bubbles">
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
        <img src={bubble} alt="bubble" />
      </div>
    </StyledWrapperLogin>
  );
};

export default Login;
