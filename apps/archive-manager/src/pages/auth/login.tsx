import { useState } from 'react';
import { LoginBg, LoginDiv, LoginForm, StyledInput, Button } from '@/styles/components/Login';

export default function Document() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // 아이디와 비밀번호 체크
    if (!username || !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    /*try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || '로그인에 실패했습니다.');
        return;
      }

      // 로그인 성공 시 처리
      const data = await response.json();
      console.log('로그인 성공:', data);
      // 필요한 추가 작업 (예: 리다이렉트)

    } catch (error) {
      setError('서버와의 연결에 문제가 발생했습니다.');
      console.error('로그인 오류:', error);
    }*/
  };

  return (
    <LoginBg>
      <LoginDiv>
        <p>ARCHIVE</p>
        <p>관리자 화면 로그인</p>
        <LoginForm>
          <StyledInput
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>로그인</Button>
          {/* 에러 메시지 표시 */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </LoginForm>
      </LoginDiv>
    </LoginBg>
  );
}
