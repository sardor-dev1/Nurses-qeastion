import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Input, Button, Card } from "antd";
import "./index.scss";

import Nurses from "../../assets/nurses.png";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="grid grid-cols-2 max-[800px]:grid-cols-1">
      <div className="flex max-[800px]:hidden justify-center items-center bg-[#f0f2f5]">
        <img className="w-full max-w-[500px]" src={Nurses} alt="" />
      </div>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: 400, border: "none" }}>
          <h2 className="text-[30px] font-semibold">Kirish</h2>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not valid E-mail!" },
              ]}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Kirish
              </Button>
            </Form.Item>
            <div className="flex justify-end">
              <a onClick={()=>navigate("/sign-up")} className="text-blue-500">Ro'yxatdan o'tish</a>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
