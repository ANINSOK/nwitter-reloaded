import { styled } from "styled-components"
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  padding: 50px 0px;
`;

const Form = styled.form`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	padding: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 25px;
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #64b5f6; /* Highlight border color on focus */
  }

  &[type="submit"] {
    cursor: pointer;
    background-color: #1976d2;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Title = styled.h1`
  font-size: 42px;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
const Error = styled.span`
	font-weight: 600;
	color: tomato;
`;

export default function CreateAccount() {
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value }
		} = e;
		if (name === "name") {
			setName(value)
		} else if (name === "email") {
			setemail(value)
		} else if (name === "password") {
			setPassword(value)
		}
	};
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLoading || name === "" || email === "" || password === "") return;
		try {
			setLoading(true);
			const credentials = await createUserWithEmailAndPassword(
				auth, 
				email, 
				password
			);
			console.log(credentials.user);
			await updateProfile(credentials.user, {
				displayName: name,
			});
			navigate("/");
		} catch (error) {
			// setError(error.message || "An error occurred");
		} finally {
			setLoading(false);
		}
	};
	return (
		<Wrapper>
			<Title>Join 𝕏</Title>
			<Form onSubmit={onSubmit}>
				<Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
				<Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
				<Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
				<Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
			</Form>
			{error !== "" ? <Error> {error} </Error> : null}
		</Wrapper>
	)
}