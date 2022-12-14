import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import { PageLayout, FormInner, FormLayout } from '../styles';

import { useState } from 'react';
import useValid from '../hooks/useValid';
import { loginApi } from '../apis/userApi';
import { token } from '../apis';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
  });
  const { validText, isValid } = useValid(form);

  const login = async () => {
    return await loginApi({ email: form.email, password: form.password })
      .then((res): any => localStorage.setItem('access_token', res))
      .then(() => navigate('/todo'));
  };

  const handleSubmit = (e: any) => {
    if (isValid.isEmail && isValid.isPassword && e.key === 'Enter') {
      login();
    }
  };

  return (
    <PageLayout>
      <FormLayout>
        <FormInner>
          <Container>
            <div>{validText}</div>
            <Input
              place="이메일을 입력하세요"
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              valid={!isValid.isEmail}
              handleSubmit={handleSubmit}
            />
            <Input
              place="비밀번호를 입력하세요"
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              valid={!isValid.isPassword}
              handleSubmit={handleSubmit}
            />
            <div>
              <span>계정이 없으신가요?</span>
              <Link to={'/signup'}>회원가입</Link>
            </div>
            <Button
              buttonText="로그인"
              clickEvent={login}
              isActive={isValid.isEmail && isValid.isPassword ? false : true}
            />
          </Container>
        </FormInner>
      </FormLayout>
    </PageLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  & > div:first-child {
    position: absolute;
    top: 3rem;
    font-size: 1.5rem;
  }
  & > div:nth-child(2) {
    margin-bottom: 1rem;
  }
  & > div:nth-child(4) {
    font-size: 1.5rem;
    position: absolute;
    bottom: 8rem;
  }
  & > div:last-child {
    position: absolute;
    bottom: 3rem;
  }
`;
